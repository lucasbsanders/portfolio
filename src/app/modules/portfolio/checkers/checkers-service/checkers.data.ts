import { GameState } from "./checkers.types";

export const InitialCheckerBoardState: GameState = {
    p2Pieces: [
        [0, 0],
        [0, 2],
        [0, 4],
        [0, 6],
        [1, 1],
        [1, 3],
        [1, 5],
        [1, 7],
        [2, 0],
        [2, 2],
        [2, 4],
        [2, 6],
    ],
    p1Pieces: [
        [5, 1],
        [5, 3],
        [5, 5],
        [5, 7],
        [6, 0],
        [6, 2],
        [6, 4],
        [6, 6],
        [7, 1],
        [7, 3],
        [7, 5],
        [7, 7],
    ],
};

export const KingRows = new Map([
    ['p1', 0],
    ['p2', 7],
]);

export const TestCheckerBoardState: GameState = {
    p2Pieces: [
        [0, 6],
        [1, 1],
        [1, 3],
        [1, 5],
        [1, 7],
        [2, 0],
        [3, 3],
        [3, 5],
        [5, 3],
    ],
    p1Pieces: [
        [5, 1],
        [4, 4],
        [5, 5],
        [5, 7],
        [6, 0],
        [6, 2],
        [6, 4],
        [6, 6],
        [7, 1],
        [7, 3],
        [7, 5],
        [7, 7],
    ],
};

export const boardRowNames = new Map<number, string>([
    [0, '8'],
    [1, '7'],
    [2, '6'],
    [3, '5'],
    [4, '4'],
    [5, '3'],
    [6, '2'],
    [7, '1'],
]);

export const boardColumnNames = new Map<number, string>([
    [0, 'a'],
    [1, 'b'],
    [2, 'c'],
    [3, 'd'],
    [4, 'e'],
    [5, 'f'],
    [6, 'g'],
    [7, 'h'],
]);
