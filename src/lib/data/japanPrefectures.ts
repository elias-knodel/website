import data from './japanPrefectures.json';

export interface Prefecture {
    name: string;
    nameJa: string;
    capital: string;
    region: string;
}

export type PrefectureDatabase = Record<string, Prefecture>;

const prefectures = data as PrefectureDatabase;

export function getPrefecture(id: string): Prefecture | undefined {
    return prefectures[id];
}

export { prefectures };
