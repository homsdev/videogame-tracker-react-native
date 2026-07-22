import {Game} from "../types/Game";

export const GAME_PLATFORM_OPTIONS = [
    {label: 'PC', value: 'PC'},
    {label: 'Play Station 5', value: 'Play Station 5'},
    {label: 'Xbox One', value: 'Xbox One'},
    {label: 'Switch', value: 'Switch'},
    {label: 'Mobile', value: 'Mobile'}
];

export const GAME_GENRE_OPTIONS = [
    {label: 'Action', value: 'Action'},
    {label: 'Adventure', value: 'Adventure'},
    {label: 'RPG', value: 'RPG'},
    {label: 'Strategy', value: 'Strategy'},
    {label: 'Sports', value: 'Sports'},
    {label: 'Puzzle', value: 'Puzzle'},
    {label: 'Simulation', value: 'Simulation'},
    {label: 'Racing', value: 'Racing'},
    {label: 'Fighting', value: 'Fighting'},
    {label: 'MMO', value: 'MMO'},
    {label: 'MMORPG', value: 'MMORPG'},
    {label: 'Horror', value: 'Horror'},
    {label: 'Sci-Fi', value: 'Sci-Fi'},
    {label: 'Fantasy', value: 'Fantasy'},
];

export const GamesData: Game[] = [
    {
        id: 1,
        title: 'Horizon Zero Dawn',
        platform: 'PC',
        genre: 'Action',
        hours: 42,
        cost: 640,
        rating: 3.5,
    },
    {
        id: 2,
        title: 'Dark Souls III',
        platform: 'PC',
        genre: 'Action',
        hours: 105,
        cost: 640,
        rating: 5,
    },
    {
        id: 3,
        title: 'Bloodborne',
        platform: 'Play Station 5',
        genre: 'Action',
        hours: 105,
        cost: 640,
        rating: 5,
    },
    {
        id: 4,
        title: 'Elden Ring',
        platform: 'PS5',
        genre: 'Action',
        hours: 105,
        cost: 640,
    }
]