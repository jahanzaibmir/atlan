import type { Body, Site } from '../data/types';
import { SITES, SITE_BY_ID, sitesOn, resolveTwins, DIMENSIONS, categoryLabel } from '../data';
import { BODY_LABEL, PLANETS } from '../data/planets';
import { climateFor } from '../data/climate';

export const HAS_AI = true;

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function* streamChat(
  messages: ChatMessage[],
  body: Body,
  site: Site | null,
  signal?: AbortSignal,
): AsyncGenerator<string> {
  const q = messages[messages.length - 1]?.content ?? '';
  const prev = messages.slice(0, -1);
  const answer = respond(q, body, site, prev);
  const words = answer.split(' ');
  for (let i = 0; i < words.length; i++) {
    if (signal?.aborted) return;
    yield (i === 0 ? '' : ' ') + words[i];
    await delay(15 + Math.random() * 20);
  }
}

// ─── helpers ───

function has(q: string, ...terms: string[]): boolean {
  return terms.some((t) => q.includes(t));
}

function regionSites(region: string): Site[] {
  const r = region.toLowerCase();
  return SITES.filter(
    (s) =>
      s.region?.toLowerCase().includes(r) ||
      s.country?.toLowerCase() === r ||
      s.subtitle?.toLowerCase().includes(r),
  );
}

function siteList(sites: Site[], max = 8): string {
  const shown = sites.slice(0, max);
  const lines = shown.map((s) => `• **${s.name}** — ${s.subtitle}`);
  if (sites.length > max) lines.push(`…and ${sites.length - max} more.`);
  return lines.join('\n');
}

function twinSummary(site: Site): string {
  const twins = resolveTwins(site);
  if (!twins.length) return '';
  return twins
    .slice(0, 3)
    .map((t) => `**${t.site.name}** on ${BODY_LABEL[t.site.body]} (${t.match}% match)`)
    .join(', ');
}

function findSiteByName(q: string): Site | undefined {
  const ql = q.toLowerCase().replace(/[?.,!'"]/g, '');
  // exact name match first
  let found = SITES.find((s) => ql.includes(s.name.toLowerCase()));
  if (found) return found;
  // id slug match
  found = SITES.find((s) => {
    const slug = s.id.replace(/^(gl|in|us|moon|mars)-/, '');
    return slug.length > 3 && ql.includes(slug);
  });
  if (found) return found;
  // fuzzy: 2+ words from name appear in query
  found = SITES.find((s) => {
    const words = s.name.toLowerCase().split(/\s+/).filter((w) => w.length > 3);
    return words.length >= 2 && words.filter((w) => ql.includes(w)).length >= 2;
  });
  return found;
}

// ─── main response ───

function respond(q: string, _body: Body, site: Site | null, _prev: ChatMessage[]): string {
  const ql = q.toLowerCase().trim();

  // ── greetings ──
  if (/^(hi|hello|hey|howdy|sup|yo|namaste|hola|good morning|good evening|wassup)\b/.test(ql)) {
    if (site) return `Hey! You're looking at **${site.name}**. Feel free to ask me anything about it — geology, climate, why it's an analog, or anything else.`;
    return `Hey! Ask me about any site on the map, a region, or anything about Moon and Mars.`;
  }

  // ── thanks ──
  if (/^(thanks|thank you|thx|cheers|great|nice|cool|awesome|perfect)\b/.test(ql)) {
    return `Glad I could help! Let me know if you want to know anything else.`;
  }

  // ── who are you ──
  if (has(ql, 'who are you', 'what are you', 'your name', 'introduce yourself', 'about you')) {
    return `I'm **Shastra**, the assistant for this atlas. I can answer questions about the sites you see, how they connect to the Moon and Mars, and general planetary science. Just ask!`;
  }

  // ── what is atlan ──
  if (has(ql, 'what is atlan', 'what does atlan', 'this app', 'this tool', 'what can you do', 'this platform', 'how does this work')) {
    return `Atlan is a 3D atlas that maps places on Earth that resemble locations on the Moon and Mars. Scientists use these "analog" sites to test rovers, train astronauts, and prepare instruments before sending them to space. We have **${sitesOn('earth').length}** Earth sites, **${sitesOn('moon').length}** Moon sites, and **${sitesOn('mars').length}** Mars sites — **${SITES.length}** in total.`;
  }

  // ── help ──
  if (has(ql, 'help', 'what can i ask', 'what do you know', 'how to use')) {
    return `You can ask things like:\n• "Tell me about this site"\n• "What's the geology here?"\n• "Sites in Andhra Pradesh"\n• "What is Mars like?"\n• "Why is this an analog?"\n• "What's the climate?"\n• "Compare this to its twin"\n• "Best analog sites"\n• "Tell me about ISRO"`;
  }

  // ── how many / stats ──
  if (has(ql, 'how many', 'total sites', 'count', 'number of', 'statistics', 'stats')) {
    const india = SITES.filter((s) => s.country === 'India').length;
    return `**${SITES.length}** sites total — **${sitesOn('earth').length}** on Earth (${india} in India), **${sitesOn('moon').length}** on the Moon, **${sitesOn('mars').length}** on Mars.`;
  }

  // ── region queries ──
  const regionMatch = ql.match(/(?:sites?\s+(?:in|at|from|near|around)\s+|places?\s+(?:in|at|from)\s+|show\s+me\s+|list\s+)(.+)/);
  if (regionMatch) {
    const rName = regionMatch[1].replace(/[?.,!]/g, '').trim();
    const found = regionSites(rName);
    if (found.length > 0) {
      return `**${found.length} site${found.length > 1 ? 's' : ''}** in ${rName}:\n\n${siteList(found)}\n\nWant to know more about any of them?`;
    }
  }

  // named regions without "sites in" prefix
  const regions: [RegExp, string][] = [
    [/andhra\s*pradesh|andhra/i, 'Andhra Pradesh'],
    [/tamil\s*nadu/i, 'Tamil Nadu'],
    [/telangana/i, 'Telangana'],
    [/karnataka/i, 'Karnataka'],
    [/maharashtra/i, 'Maharashtra'],
    [/rajasthan/i, 'Rajasthan'],
    [/ladakh/i, 'Ladakh'],
    [/kerala/i, 'Kerala'],
    [/gujarat/i, 'Gujarat'],
    [/uttarakhand/i, 'Uttarakhand'],
    [/arizona/i, 'Arizona'],
    [/hawaii/i, 'Hawaii'],
    [/iceland/i, 'Iceland'],
    [/australia/i, 'Australia'],
    [/chile|atacama/i, 'Chile'],
    [/africa/i, 'Africa'],
  ];
  for (const [re, name] of regions) {
    if (re.test(q)) {
      const found = regionSites(name);
      if (found.length > 0)
        return `**${found.length} site${found.length > 1 ? 's' : ''}** in ${name}:\n\n${siteList(found)}\n\nAsk about any of them for details.`;
      return `I don't have specific sites in ${name} yet, but you can explore the globe to find nearby pins.`;
    }
  }

  // india general
  if (has(ql, 'india', 'indian') && has(ql, 'site', 'place', 'location', 'analog', 'list', 'show')) {
    const india = SITES.filter((s) => s.country === 'India');
    return `**${india.length} Indian sites** across Andhra Pradesh, Tamil Nadu, Telangana, Maharashtra, Rajasthan, Ladakh and more:\n\n${siteList(india, 8)}\n\nAsk about a specific state for the full list.`;
  }

  // ── site-specific: use current site context ──
  if (site) {
    // tell me about / what is / describe / summary / overview
    if (has(ql, 'tell me about', 'what is this', 'describe', 'summary', 'overview', 'about this', 'this place', 'this site', 'explain this', 'what are we looking at')) {
      const tw = twinSummary(site);
      return `**${site.name}** — ${site.region}${site.country ? `, ${site.country}` : ''}.\n\n${site.summary}${tw ? `\n\nAnalog twins: ${tw}.` : ''}`;
    }

    // geology
    if (has(ql, 'geolog', 'rock', 'mineral', 'formation', 'litholog', 'composition', 'what kind of rock', 'made of')) {
      const g = site.geology;
      let out = `**${site.name} — Geology**\n\n${g.setting}. The main rocks are ${g.rocks.toLowerCase()}.`;
      if (g.minerals) out += ` Key minerals: ${g.minerals.toLowerCase()}.`;
      if (g.age) out += ` Age: ${g.age}.`;
      if (g.features) out += `\n\nNotable features: ${g.features}.`;
      return out;
    }

    // why analog / significance / important
    if (has(ql, 'why', 'analog', 'important', 'significance', 'relevant', 'purpose', 'what makes it special', 'unique')) {
      let out = `**Why ${site.name} matters:**\n\n${site.analogous.map((a) => `• ${a}`).join('\n')}`;
      if (site.breaks.length) out += `\n\n**Where the analogy breaks down:**\n${site.breaks.map((b) => `• ${b}`).join('\n')}`;
      return out;
    }

    // rehearse / test / what can we learn
    if (has(ql, 'rehearse', 'test', 'learn', 'train', 'practice', 'experiment', 'field work')) {
      return `**What to test at ${site.name}:**\n\n${site.rehearse.map((r) => `• ${r}`).join('\n')}`;
    }

    // missions / studies / research
    if (has(ql, 'mission', 'stud', 'research', 'campaign', 'explored', 'who studied', 'investigation')) {
      if (!site.missions.length) return `No specific missions or studies recorded for ${site.name} yet.`;
      return `**Missions and studies at ${site.name}:**\n\n${site.missions.map((m) => `• ${m}`).join('\n')}`;
    }

    // compare / twin / match / linked
    if (has(ql, 'compare', 'twin', 'match', 'linked', 'counterpart', 'pair', 'connection', 'related')) {
      const twins = resolveTwins(site);
      if (!twins.length) return `${site.name} doesn't have any linked twin sites right now.`;
      return `**${site.name} is linked to:**\n\n${twins.map((t) => `• **${t.site.name}** (${BODY_LABEL[t.site.body]}) — **${t.match}%** match. ${t.why}`).join('\n')}`;
    }

    // scores / dimensions / rating
    if (has(ql, 'score', 'dimension', 'rating', 'strength', 'weak', 'breakdown', 'how good')) {
      if (!site.scores) return `Dimension scores are only available for Earth sites compared against their primary twin.`;
      const sorted = DIMENSIONS.map((d) => ({ ...d, v: site.scores![d.key] })).sort((a, b) => b.v - a.v);
      return `**${site.name} — Analog scores:**\n\n${sorted.map((d) => `• **${d.label}:** ${d.v}/100`).join('\n')}\n\nBest: **${sorted[0].label}** (${sorted[0].v}). Weakest: **${sorted[sorted.length - 1].label}** (${sorted[sorted.length - 1].v}).`;
    }

    // climate / weather / temperature
    if (has(ql, 'climate', 'weather', 'temperature', 'temp', 'rain', 'humid', 'wind', 'hot', 'cold', 'pressure', 'radiation')) {
      if (site.body !== 'earth') {
        const p = PLANETS[site.body];
        return `**${BODY_LABEL[site.body]} conditions at ${site.name}:**\n\n• Temperature: ${p.tempRange}\n• Pressure: ${p.pressure}\n• Atmosphere: ${p.atmosphere}\n• Gravity: ${p.gravityRel}\n• Day: ${p.dayLength}`;
      }
      const c = climateFor(site.id);
      if (!c) return `Climate data isn't loaded for ${site.name} yet. It's in ${site.region} — typically a ${site.categories.includes('ice') || site.categories.includes('polar') ? 'cold' : site.categories.includes('hydrothermal') ? 'warm and geothermally active' : 'moderate'} environment.`;
      return `**${site.name} climate** (NASA POWER):\n\n• Temperature: **${c.annual.T2M_MIN?.toFixed(0)}** to **${c.annual.T2M_MAX?.toFixed(0)}°C** (avg ${c.annual.T2M?.toFixed(1)}°C)\n• Rainfall: ${c.annual.PRECTOTCORR?.toFixed(1)} mm/day\n• Humidity: ${c.annual.RH2M?.toFixed(0)}%\n• Wind: ${c.annual.WS2M?.toFixed(1)} m/s\n• Pressure: ${c.annual.PS?.toFixed(1)} kPa\n• Solar: ${c.annual.ALLSKY_SFC_SW_DWN?.toFixed(1)} kWh/m²/day`;
    }

    // access / visit / travel
    if (has(ql, 'access', 'visit', 'travel', 'go there', 'get there', 'reach', 'season', 'when to', 'how to reach', 'trip')) {
      if (!site.access) {
        if (site.body !== 'earth') return `${site.name} is on ${BODY_LABEL[site.body]} — not exactly day-trip distance yet!`;
        return `I don't have access details for ${site.name}.`;
      }
      return `**Getting to ${site.name}:**\n\n• Nearest: ${site.access.nearest}\n• Best time: ${site.access.season}${site.access.notes ? `\n• ${site.access.notes}` : ''}`;
    }

    // coordinates / where / location
    if (has(ql, 'coordinate', 'where', 'location', 'lat', 'lon', 'gps', 'position')) {
      return `**${site.name}** is at **${site.lat.toFixed(4)}°${site.lat >= 0 ? 'N' : 'S'}, ${Math.abs(site.lon).toFixed(4)}°${site.lon >= 0 ? 'E' : 'W'}**${site.elevation_m != null ? ` at ${site.elevation_m.toLocaleString()} m elevation` : ''} in ${site.region}${site.country ? `, ${site.country}` : ''}.`;
    }

    // category / type / kind
    if (has(ql, 'category', 'type', 'kind', 'class', 'what type')) {
      return `${site.name} is classified as: ${site.categories.map(categoryLabel).join(', ')}.${site.tier ? ` Tier: **${site.tier}** (${site.tier === 'anchor' ? 'well-established analog with published research' : 'proposed/under-recognized analog'}).` : ''}`;
    }

    // highlights / key facts / interesting
    if (has(ql, 'highlight', 'fact', 'interest', 'notable', 'key point', 'quick', 'brief')) {
      return `**${site.name} — Key facts:**\n\n${site.highlights.map((h) => `• ${h}`).join('\n')}`;
    }

    // environment / physical
    if (has(ql, 'environment', 'physical', 'size', 'depth', 'area', 'diameter')) {
      if (!site.environment.length) return `I don't have detailed environment measurements for ${site.name}.`;
      return `**${site.name} — Physical setting:**\n\n${site.environment.map((f) => `• **${f.label}:** ${f.value}${f.note ? ` (${f.note})` : ''}`).join('\n')}`;
    }

    // sources
    if (has(ql, 'source', 'reference', 'citation', 'paper', 'data from', 'where did you get')) {
      if (!site.sources.length) return `No specific references listed for ${site.name}.`;
      return `**Sources for ${site.name}:**\n\n${site.sources.map((s) => `• ${s.name} — ${s.agency}${s.kind ? ` (${s.kind})` : ''}`).join('\n')}`;
    }
  }

  // ── try to find a site by name in the question ──
  const named = findSiteByName(q);
  if (named) {
    const tw = twinSummary(named);
    return `**${named.name}** — ${named.subtitle}\n\n${named.summary}${tw ? `\n\nLinked to: ${tw}.` : ''}`;
  }

  // ── moon ──
  if (has(ql, 'moon', 'lunar') && !has(ql, 'mars')) {
    if (has(ql, 'site', 'place', 'crater', 'location', 'list', 'show')) {
      const ms = sitesOn('moon');
      return `**${ms.length} Moon sites** in the atlas:\n\n${siteList(ms, 6)}\n\nSwitch to the Moon view to explore them.`;
    }
    const p = PLANETS.moon;
    return `The **Moon** — Earth's only natural satellite.\n\n• Gravity: ${p.gravityRel}\n• Temperature: ${p.tempRange}\n• Atmosphere: ${p.atmosphere}\n• Day: ${p.dayLength}\n\nWe have **${sitesOn('moon').length}** lunar sites mapped, including Apollo landing sites, permanently shadowed craters, and lava tubes.`;
  }

  // ── mars ──
  if (has(ql, 'mars', 'martian')) {
    if (has(ql, 'site', 'place', 'crater', 'location', 'list', 'show')) {
      const ms = sitesOn('mars');
      return `**${ms.length} Mars sites** in the atlas:\n\n${siteList(ms, 6)}\n\nSwitch to Mars view to explore.`;
    }
    const p = PLANETS.mars;
    return `**Mars** — the Red Planet.\n\n• Gravity: ${p.gravityRel}\n• Temperature: ${p.tempRange}\n• Pressure: ${p.pressure}\n• Atmosphere: ${p.atmosphere}\n• Day: ${p.dayLength}\n\nWe have **${sitesOn('mars').length}** Mars sites — from Jezero Crater to Olympus Mons.`;
  }

  // ── earth ──
  if (has(ql, 'earth') && has(ql, 'site', 'place', 'analog', 'list')) {
    const es = sitesOn('earth');
    return `**${es.length} Earth analog sites** across India, USA, Australia, Iceland and more:\n\n${siteList(es, 6)}\n\nAsk about a specific region or country to narrow it down.`;
  }

  // ── what is an analog ──
  if (has(ql, 'analog', 'analogue') && has(ql, 'what', 'mean', 'define', 'explain')) {
    return `A **planetary analog** is a place on Earth where conditions resemble the Moon or Mars — similar rocks, terrain, temperature, or chemistry. Scientists use them to test rovers, train crews, and prepare instruments before space missions. For example, India's **Lonar Crater** is an analog for Jezero Crater on Mars because both are impact craters that once held lakes.`;
  }

  // ── ISRO / chandrayaan ──
  if (has(ql, 'isro', 'chandrayaan', 'gaganyaan', 'vikram', 'india') && has(ql, 'space', 'mission', 'lunar', 'moon', 'rocket', 'launch')) {
    return `**ISRO** has strong links to analog research. Chandrayaan-3's Vikram lander touched down at **Shiv Shakti Point** near the lunar south pole. The **Sittampundi anorthosite** from Tamil Nadu was crushed into ISRO's lunar soil simulant (LSS-ISAC-1) and used to test the Chandrayaan-2 rover. We have **${SITES.filter((s) => s.country === 'India').length}** Indian sites in Atlan connected to these programs.`;
  }

  // ── rovers ──
  if (has(ql, 'perseverance', 'curiosity', 'rover', 'opportunity', 'spirit', 'zhurong')) {
    return `Mars rovers and their sites in our atlas:\n\n• **Perseverance** → Jezero Crater — hunting for biosignatures in an ancient lake delta\n• **Curiosity** → Gale Crater — studying layered rocks since 2012\n• **Opportunity** → Meridiani Planum — found sulfates and hematite over 15 years\n• **Zhurong** → Utopia Planitia — investigating ground ice and soil\n\nEarth analogs help scientists interpret what these rovers find.`;
  }

  // ── best / top analogs ──
  if (has(ql, 'best', 'top', 'strongest', 'highest match', 'most similar', 'closest analog')) {
    const earth = sitesOn('earth').filter((s) => s.twins.length > 0);
    const sorted = [...earth].sort((a, b) => Math.max(...b.twins.map((t) => t.match)) - Math.max(...a.twins.map((t) => t.match)));
    const top = sorted.slice(0, 5);
    return `**Top analog matches:**\n\n${top.map((s) => {
      const best = s.twins.reduce((a, b) => (a.match > b.match ? a : b));
      return `• **${s.name}** → ${SITE_BY_ID[best.id]?.name ?? best.id} — **${best.match}%**`;
    }).join('\n')}`;
  }

  // ── crater / volcanic / specific category ──
  const catMap: [RegExp, string][] = [
    [/crater|impact/, 'impact'],
    [/volcano|volcanic|lava|basalt/, 'volcanic'],
    [/cave|tube|lava tube|underground/, 'lava-tube'],
    [/ice|glacier|permafrost|frozen/, 'ice'],
    [/dune|sand|aeolian|dust|desert/, 'aeolian'],
    [/hot spring|hydrothermal|geyser|thermal/, 'hydrothermal'],
    [/salt|evaporite|brine|saline|playa/, 'evaporite'],
    [/sediment|delta|lake bed|layered/, 'sedimentary'],
    [/highland|anorthosite|ancient|archean/, 'highland'],
    [/polar|south pole|north pole|arctic/, 'polar'],
  ];
  for (const [re, cat] of catMap) {
    if (re.test(ql) && has(ql, 'site', 'place', 'example', 'show', 'list', 'where', 'which', 'any')) {
      const found = SITES.filter((s) => s.categories.includes(cat as any));
      if (found.length > 0) {
        return `**${categoryLabel(cat as any)} sites** (${found.length} total):\n\n${siteList(found, 6)}\n\nThese span Earth, Moon, and Mars.`;
      }
    }
  }

  // ── yes / follow-up / more ──
  if (/^(yes|yeah|yep|sure|ok|go ahead|tell me more|more|continue)\b/.test(ql)) {
    if (site) return `What would you like to know about **${site.name}**? I can cover geology, climate, analog connections, missions, or how to visit.`;
    return `What would you like to explore? Ask about a site, region, planet, or anything related to the atlas.`;
  }

  // ── no / bye ──
  if (/^(no|nah|bye|goodbye|that's all|nothing|nevermind)\b/.test(ql)) {
    return `No worries! I'm here whenever you need me. Happy exploring!`;
  }

  // ── fallback: try harder with keywords ──
  const words = ql.split(/\s+/).filter((w) => w.length > 3);
  for (const w of words) {
    const found = SITES.find((s) => s.name.toLowerCase().includes(w) || s.id.includes(w));
    if (found) {
      const tw = twinSummary(found);
      return `I think you might be asking about **${found.name}** — ${found.subtitle}.\n\n${found.summary}${tw ? `\n\nLinked to: ${tw}.` : ''}`;
    }
  }

  // ── final fallback ──
  if (site) {
    return `I didn't quite catch that. You're viewing **${site.name}** — try asking about its geology, climate, analog connections, or missions. Or ask about any region or planet!`;
  }
  return `I'm not sure what you mean. Try asking about a specific site, region (like "Andhra Pradesh"), planet ("tell me about Mars"), or type "help" to see what I can do.`;
}
