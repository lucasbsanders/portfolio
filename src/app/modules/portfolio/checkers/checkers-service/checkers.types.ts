export type CheckerPlayer = 'p1' | 'p2';

export interface GameState {
    p1Pieces: [number, number][];
    p2Pieces: [number, number][];
}

export interface Space {
    row: number;
    col: number
}

export interface CheckersTurn {
    playerId: CheckerPlayer;
    spaces: Space[];
    capturedCheckers?: Checker[];
}

export interface Checker extends Space {
    id: number;
    playerId: CheckerPlayer;
    isKing: boolean;
    eligibleSpaces: EligibleSpace[];
}

export interface CheckerBoard {
    currentPlayerId: CheckerPlayer;
    winningPlayer?: CheckerPlayer;
    checkers: Checker[];
    p2PiecesCaptured: Checker[];
    p1PiecesCaptured: Checker[];
    turns: CheckersTurn[];
    requiredMoves: RequiredMove[];
    initialGameState: GameState;
}

export interface EligibleSpace extends Space {
    capturedChecker?: Checker;
}

export interface RequiredMove extends EligibleSpace {
    checker: Checker;
}
