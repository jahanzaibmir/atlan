import { useCallback, useEffect, useRef, useState } from 'react';
import { X, Send, Maximize2, Minimize2, GripVertical } from 'lucide-react';
import type { Body, Site } from '../data/types';
import { streamChat, type ChatMessage } from '../ai/shastra';

interface Props {
  open: boolean;
  onClose: () => void;
  body: Body;
  site: Site | null;
}

const GREETING = "Hi, I'm **Shastra** — ask me about any site, planet, or analog you see on the map.";

export default function ShastraChat({ open, onClose, body, site }: Props) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [streaming, setStreaming] = useState(false);
  const [full, setFull] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  const send = useCallback(async () => {
    const text = input.trim();
    if (!text || streaming) return;
    setInput('');
    const userMsg: ChatMessage = { role: 'user', content: text };
    const history = [...messages, userMsg];
    setMessages([...history, { role: 'assistant', content: '' }]);
    setStreaming(true);

    const ctrl = new AbortController();
    abortRef.current = ctrl;

    let buf = '';
    try {
      for await (const chunk of streamChat(history, body, site, ctrl.signal)) {
        buf += chunk;
        setMessages([...history, { role: 'assistant', content: buf }]);
      }
    } catch (e: any) {
      if (e.name !== 'AbortError') {
        buf += buf ? '\n\n(Response interrupted)' : 'Something went wrong. Try again.';
        setMessages([...history, { role: 'assistant', content: buf }]);
      }
    }
    setStreaming(false);
    abortRef.current = null;
  }, [input, streaming, messages, body, site]);

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const onResizeStart = (e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const panel = panelRef.current;
    if (!panel || full) return;
    const startX = e.clientX;
    const startW = panel.offsetWidth;
    panel.style.transition = 'none';
    document.body.style.cursor = 'ew-resize';
    document.body.style.userSelect = 'none';
    const onMove = (ev: PointerEvent) => {
      ev.preventDefault();
      const dx = startX - ev.clientX;
      const next = Math.min(Math.max(startW + dx, 320), 700);
      panel.style.width = `${next}px`;
    };
    const onUp = () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      panel.style.transition = '';
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
  };

  if (!open) return null;

  return (
    <div ref={panelRef} className={`shastra-panel${full ? ' shastra-full' : ''}`}>
      <div className="shastra-resize" onPointerDown={onResizeStart}>
        <GripVertical size={14} />
      </div>
      <div className="shastra-header">
        <span className="shastra-name">Shastra</span>
        <div className="shastra-header-actions">
          <button className="icon-btn sm" onClick={() => setFull((f) => !f)} title={full ? 'Exit fullscreen' : 'Fullscreen'}>
            {full ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
          </button>
          <button className="icon-btn sm" onClick={onClose} title="Close">
            <X size={16} />
          </button>
        </div>
      </div>

      <div className="shastra-messages" ref={scrollRef}>
        <div className="shastra-msg assistant">
          <div className="shastra-bubble" dangerouslySetInnerHTML={{ __html: formatMsg(GREETING) }} />
        </div>
        {messages.map((m, i) => (
          <div key={i} className={`shastra-msg ${m.role}`}>
            <div className="shastra-bubble">
              {m.role === 'assistant' && !m.content && streaming ? (
                <span className="shastra-typing"><i /><i /><i /></span>
              ) : (
                <span dangerouslySetInnerHTML={{ __html: formatMsg(m.content) }} />
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="shastra-input-row">
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Type a message..."
        />
        <button
          className="shastra-send"
          onClick={send}
          disabled={!input.trim() || streaming}
          title="Send"
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  );
}

function formatMsg(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>');
}
