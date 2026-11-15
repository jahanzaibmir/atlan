import { useState } from 'react';
import { MONTHS, MONTH_NAMES } from '../data/climate';

export function Ring({ value, size = 92, stroke = 8, label = 'MATCH' }: { value: number; size?: number; stroke?: number; label?: string }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div className="ring-wrap" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(17,20,24,0.08)" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--ink)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${(c * value) / 100} ${c}`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ transition: 'stroke-dasharray 0.8s var(--ease)' }}
        />
      </svg>
      <div className="ring-val">
        <div>
          {Math.round(value)}
          <small>{label}</small>
        </div>
      </div>
    </div>
  );
}

export interface RadarAxis {
  label: string;
  value: number;
  hint?: string;
}

export function Radar({ axes, size = 320 }: { axes: RadarAxis[]; size?: number }) {
  const [hover, setHover] = useState<number | null>(null);
  const cx = size / 2;
  const cy = size / 2;
  const R = size / 2 - 54;
  const n = axes.length;
  const pt = (i: number, v: number): [number, number] => {
    const a = -Math.PI / 2 + (i / n) * Math.PI * 2;
    return [cx + Math.cos(a) * R * (v / 100), cy + Math.sin(a) * R * (v / 100)];
  };
  const poly = (v: (i: number) => number) => axes.map((_, i) => pt(i, v(i)).join(',')).join(' ');
  return (
    <svg width="100%" viewBox={`0 0 ${size} ${size}`} role="img" aria-label="Analog match by dimension">
      {[25, 50, 75, 100].map((lv) => (
        <polygon key={lv} points={poly(() => lv)} fill={lv === 100 ? 'rgba(17,20,24,0.025)' : 'none'} stroke="rgba(17,20,24,0.09)" strokeWidth={1} />
      ))}
      {axes.map((_, i) => {
        const [x, y] = pt(i, 100);
        return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="rgba(17,20,24,0.07)" />;
      })}
      <polygon points={poly((i) => axes[i].value)} fill="rgba(37,82,232,0.14)" stroke="var(--accent)" strokeWidth={1.8} strokeLinejoin="round" />
      {axes.map((a, i) => {
        const [x, y] = pt(i, a.value);
        return <circle key={i} cx={x} cy={y} r={hover === i ? 5 : 3.2} fill="#fff" stroke="var(--accent)" strokeWidth={1.8} />;
      })}
      {axes.map((a, i) => {
        const [x, y] = pt(i, 122);
        const anchor = Math.abs(x - cx) < 8 ? 'middle' : x > cx ? 'start' : 'end';
        return (
          <g key={a.label} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)} style={{ cursor: 'default' }}>
            <text x={x} y={y - 2} textAnchor={anchor} fontSize={11} fontWeight={600} fill="#4a4f57">
              {a.label}
            </text>
            <text x={x} y={y + 11} textAnchor={anchor} fontSize={11} fontWeight={650} fill={hover === i ? 'var(--accent)' : '#111317'}>
              {Math.round(a.value)}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/** Monthly 2 m air temperature: extremes band + mean line (NASA POWER climatology). */
export function ClimateChart({ mean, max, min, width = 400, height = 170 }: { mean: number[]; max: number[]; min: number[]; width?: number; height?: number }) {
  const [hover, setHover] = useState<number | null>(null);
  const pad = { l: 34, r: 10, t: 12, b: 22 };
  const lo = Math.floor(Math.min(...min, 0) / 10) * 10;
  const hi = Math.ceil(Math.max(...max, 10) / 10) * 10;
  const x = (i: number) => pad.l + (i / 11) * (width - pad.l - pad.r);
  const y = (v: number) => pad.t + (1 - (v - lo) / (hi - lo)) * (height - pad.t - pad.b);
  const band = max.map((v, i) => `${x(i)},${y(v)}`).join(' ') + ' ' + min.map((_, i) => `${x(11 - i)},${y(min[11 - i])}`).join(' ');
  const line = mean.map((v, i) => `${i ? 'L' : 'M'}${x(i)},${y(v)}`).join(' ');
  const ticks: number[] = [];
  const step = hi - lo > 60 ? 20 : 10;
  for (let v = lo; v <= hi; v += step) ticks.push(v);
  return (
    <svg width="100%" viewBox={`0 0 ${width} ${height}`} onMouseLeave={() => setHover(null)}>
      {ticks.map((t) => (
        <g key={t}>
          <line x1={pad.l} x2={width - pad.r} y1={y(t)} y2={y(t)} stroke={t === 0 ? 'rgba(17,20,24,0.25)' : 'rgba(17,20,24,0.07)'} strokeDasharray={t === 0 ? '3 3' : undefined} />
          <text x={pad.l - 6} y={y(t) + 3.5} textAnchor="end" fontSize={10} fill="#868b93">
            {t}°
          </text>
        </g>
      ))}
      <polygon points={band} fill="rgba(37,82,232,0.12)" />
      <path d={line} fill="none" stroke="var(--ink)" strokeWidth={2} strokeLinejoin="round" />
      {MONTHS.map((m, i) => (
        <text key={i} x={x(i)} y={height - 6} textAnchor="middle" fontSize={10} fill={hover === i ? '#111317' : '#868b93'} fontWeight={hover === i ? 650 : 400}>
          {m}
        </text>
      ))}
      {MONTHS.map((_, i) => (
        <rect key={i} x={x(i) - (width - pad.l - pad.r) / 22} y={pad.t} width={(width - pad.l - pad.r) / 11} height={height - pad.t - pad.b} fill="transparent" onMouseEnter={() => setHover(i)} />
      ))}
      {hover != null && (
        <g pointerEvents="none">
          <line x1={x(hover)} x2={x(hover)} y1={pad.t} y2={height - pad.b} stroke="rgba(17,20,24,0.2)" />
          <circle cx={x(hover)} cy={y(mean[hover])} r={4} fill="var(--ink)" stroke="#fff" strokeWidth={1.5} />
          <g transform={`translate(${Math.min(width - 128, Math.max(pad.l, x(hover) + 8))}, ${pad.t + 2})`}>
            <rect width={120} height={52} rx={8} fill="rgba(255,255,255,0.96)" stroke="rgba(17,20,24,0.08)" />
            <text x={10} y={16} fontSize={11} fontWeight={650} fill="#111317">
              {MONTH_NAMES[hover]}
            </text>
            <text x={10} y={31} fontSize={10.5} fill="#4a4f57">
              mean {mean[hover].toFixed(1)}°C
            </text>
            <text x={10} y={44} fontSize={10.5} fill="#4a4f57">
              {min[hover].toFixed(0)}° to {max[hover].toFixed(0)}°C
            </text>
          </g>
        </g>
      )}
    </svg>
  );
}

export function MonthlyBars({ values, unit, width = 400, height = 110, color = 'var(--ink)' }: { values: number[]; unit: string; width?: number; height?: number; color?: string }) {
  const [hover, setHover] = useState<number | null>(null);
  const pad = { l: 34, r: 10, t: 14, b: 20 };
  const max = Math.max(...values, 1e-6);
  const bw = (width - pad.l - pad.r) / 12;
  return (
    <svg width="100%" viewBox={`0 0 ${width} ${height}`} onMouseLeave={() => setHover(null)}>
      <line x1={pad.l} x2={width - pad.r} y1={height - pad.b} y2={height - pad.b} stroke="rgba(17,20,24,0.12)" />
      <text x={pad.l - 6} y={pad.t + 3} textAnchor="end" fontSize={10} fill="#868b93">
        {max >= 10 ? Math.round(max) : max.toFixed(1)}
      </text>
      {values.map((v, i) => {
        const h = (v / max) * (height - pad.t - pad.b);
        return (
          <g key={i} onMouseEnter={() => setHover(i)}>
            <rect x={pad.l + i * bw} y={pad.t} width={bw} height={height - pad.t - pad.b} fill="transparent" />
            <rect x={pad.l + i * bw + bw * 0.2} y={height - pad.b - h} width={bw * 0.6} height={Math.max(h, 1)} rx={2.5} fill={color} opacity={hover == null || hover === i ? 0.88 : 0.35} />
            <text x={pad.l + i * bw + bw / 2} y={height - 5} textAnchor="middle" fontSize={10} fill="#868b93">
              {MONTHS[i]}
            </text>
          </g>
        );
      })}
      {hover != null && (
        <text x={width - pad.r} y={pad.t - 2} textAnchor="end" fontSize={11} fontWeight={650} fill="#111317">
          {MONTH_NAMES[hover]} · {values[hover] >= 10 ? Math.round(values[hover]) : values[hover].toFixed(1)} {unit}
        </text>
      )}
    </svg>
  );
}

export interface EnvelopeRow {
  label: string;
  min: number;
  max: number;
  color: string;
  note?: string;
}

/** Shared-axis temperature ranges: shows where a planetary environment leaves Earth's envelope. */
export function ThermalEnvelope({ rows, width = 400 }: { rows: EnvelopeRow[]; width?: number }) {
  const lo = -250;
  const hi = 130;
  const pad = { l: 110, r: 12 };
  const rowH = 30;
  const height = rows.length * rowH + 26;
  const x = (v: number) => pad.l + ((v - lo) / (hi - lo)) * (width - pad.l - pad.r);
  return (
    <svg width="100%" viewBox={`0 0 ${width} ${height}`}>
      {[-250, -200, -150, -100, -50, 0, 50, 100].map((t) => (
        <g key={t}>
          <line x1={x(t)} x2={x(t)} y1={4} y2={height - 18} stroke={t === 0 ? 'rgba(17,20,24,0.22)' : 'rgba(17,20,24,0.06)'} strokeDasharray={t === 0 ? '3 3' : undefined} />
          <text x={x(t)} y={height - 5} textAnchor="middle" fontSize={9.5} fill="#868b93">
            {t}°
          </text>
        </g>
      ))}
      {rows.map((r, i) => {
        const yy = 8 + i * rowH;
        return (
          <g key={r.label}>
            <text x={0} y={yy + 11} fontSize={11} fontWeight={600} fill="#111317">
              {r.label}
            </text>
            {r.note && (
              <text x={0} y={yy + 23} fontSize={9.5} fill="#868b93">
                {r.note}
              </text>
            )}
            <rect x={x(r.min)} y={yy + 3} width={Math.max(3, x(r.max) - x(r.min))} height={12} rx={6} fill={r.color} opacity={0.88} />
          </g>
        );
      })}
    </svg>
  );
}
