export interface Game {
    id: number;
    title: string;
    platform: string;
    genre: string;
    hours: number;
    cost: number;
    rating?: number;
}
