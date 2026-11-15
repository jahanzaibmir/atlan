import raw from './climate.json';

export interface Climate {
  monthly: Record<string, number[]>;
  annual: Record<string, number>;
  grid: { lat: number; lon: number };
}

const data = raw as unknown as Record<string, Climate>;

export function climateFor(id: string): Climate | undefined {
  return data[id];
}

export const MONTHS = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
export const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
