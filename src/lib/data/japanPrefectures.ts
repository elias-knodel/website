import data from './japanPrefectures.json';

export interface RegionColor {
    hueMin: number;
    hueMax: number;
}

export interface Prefecture {
    name: string;
    nameJa: string;
    capital: string;
    region: string;
}

export type RegionDatabase    = Record<string, RegionColor>;
export type PrefectureDatabase = Record<string, Prefecture>;

const regions    = data.regions    as RegionDatabase;
const prefectures = data.prefectures as PrefectureDatabase;

export function getPrefecture(id: string): Prefecture | undefined {
    return prefectures[id];
}

export function getRegionColor(id: string): RegionColor | undefined {
    const prefecture = prefectures[id];
    if (!prefecture) return undefined;
    return regions[prefecture.region];
}

export function colorForPrefecture(id: string): string {
    const range = getRegionColor(id);
    const hueMin = range?.hueMin ?? 0;
    const hueMax = range?.hueMax ?? 360;

    const hue        = Math.floor(Math.random() * (hueMax - hueMin + 1)) + hueMin;
    const saturation = Math.floor(Math.random() * 20) + 65; // 65–85%
    const lightness  = Math.floor(Math.random() * 15) + 62; // 62–77%

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

export { prefectures, regions };
