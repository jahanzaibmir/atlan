import {
  CircleDot,
  Mountain,
  Flame,
  Snowflake,
  Wind,
  Droplets,
  Gem,
  Layers,
  Sunrise,
  Tent,
  Orbit,
  type LucideIcon,
} from 'lucide-react';
import type { Category } from '../data/types';

const ICONS: Record<Category, LucideIcon> = {
  impact: CircleDot,
  volcanic: Flame,
  'lava-tube': Orbit,
  ice: Snowflake,
  aeolian: Wind,
  hydrothermal: Droplets,
  evaporite: Gem,
  sedimentary: Layers,
  highland: Mountain,
  polar: Sunrise,
  habitat: Tent,
};

export function CategoryIcon({ category, size = 16 }: { category: Category | undefined; size?: number }) {
  const Icon = (category && ICONS[category]) || CircleDot;
  return <Icon size={size} strokeWidth={1.9} />;
}
