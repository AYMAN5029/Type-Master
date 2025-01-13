import { words } from '../data/words';

export function generateWordSet(count: number): string[] {
  return [...words]
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
}