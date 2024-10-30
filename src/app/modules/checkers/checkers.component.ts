import { CommonModule } from '@angular/common';
import {
    AfterViewChecked,
    Component,
    ElementRef,
    OnInit,
    ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { fuseAnimations } from '@fuse/animations';
import { FuseHighlightComponent } from '@fuse/components/highlight';

export type CheckerPlayer = 1 | 2;

export interface CheckersTurn {
    playerNumber: CheckerPlayer;
    startRow: number;
    startCol: number;
    endRow: number;
    endCol: number;
    captured?: Checker;
}

export interface Checker {
    id: number;
    playerNumber: CheckerPlayer;
    row: number;
    col: number;
}

export interface CheckerBoard {
    currentPlayerNumber: CheckerPlayer;
    p2Pieces: Checker[];
    p1Pieces: Checker[];
    p2PiecesCaptured: Checker[];
    p1PiecesCaptured: Checker[];
    turns: CheckersTurn[];
}

export interface EligibleSpace {
    row: number;
    col: number;
    captured?: Checker;
}

const CheckerBoardInitialState = {
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

@Component({
    selector: 'app-checkers',
    standalone: true,
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        FuseHighlightComponent,
    ],
    templateUrl: './checkers.component.html',
    styleUrl: './checkers.component.scss',
    animations: [fuseAnimations],
})
export class CheckersComponent implements AfterViewChecked, OnInit {
    public readonly BOARD_SIZE = 8;
    public readonly BOARD_SIZE_ARR = new Array(this.BOARD_SIZE);
    public readonly CHECKER_TOP_OFFSET = 0.18;
    public readonly CHECKER_RATIO = 0.8;

    @ViewChild('contentContainer') contentContainerRef: ElementRef;
    @ViewChild('checkersBoard') checkersBoardRef: ElementRef;

    public board: CheckerBoard;
    public boardSizePx = 0;

    public offsetLeft = 0;
    public offsetTop = 0;

    public selectedCheckerX = 0;
    public selectedCheckerY = 0;

    public selectedChecker?: Checker;
    public hoverSpace: number[] = [];
    public eligibleSpaces: EligibleSpace[] = [];

    public showAllTurnHistory = false;

    private _elementWidth = 0;

    public get currentPlayerNumber(): CheckerPlayer {
        return this.board.currentPlayerNumber;
    }

    public get checkerSize(): number {
        return (this.boardSizePx / 8) * this.CHECKER_RATIO;
    }

    constructor() {
        this._resetBoard();
    }

    ngOnInit(): void {
        this._startNewGame();
    }

    ngAfterViewChecked(): void {
        if (
            this.contentContainerRef &&
            this._elementWidth !==
                this.contentContainerRef?.nativeElement.offsetWidth
        ) {
            this._elementWidth =
                this.contentContainerRef?.nativeElement.offsetWidth;

            setTimeout(() => {
                this.boardSizePx =
                    this._elementWidth < 700
                        ? this._elementWidth
                        : this._elementWidth / 2;
            });
        }
    }

    public clickChecker(event: any, row: number, col: number) {
        event.preventDefault();

        const piece = this._getChecker(row, col);
        if (
            !piece ||
            this.currentPlayerNumber !== piece.playerNumber ||
            !this.checkersBoardRef
        )
            return;

        this.eligibleSpaces = this._getEligibleSpaces(piece);
        if (!this.eligibleSpaces?.length) return;

        this.selectedChecker = piece;

        // get the mouse cursor position at startup:
        this.offsetTop =
            this.checkersBoardRef.nativeElement.getBoundingClientRect().top;
        this.offsetLeft =
            this.checkersBoardRef.nativeElement.getBoundingClientRect().left;

        this.selectedCheckerX = Math.min(
            Math.max(
                (event.clientX ?? event.touches[0].clientX) -
                    this.offsetLeft -
                    this.checkerSize / 2,
                4
            ),
            this.boardSizePx - this.checkerSize - 4
        );

        this.selectedCheckerY = Math.min(
            Math.max(
                (event.clientY ?? event.touches[0].clientY) -
                    this.offsetTop -
                    this.checkerSize / 2,
                4
            ),
            this.boardSizePx - this.checkerSize - 4
        );

        const dropX = Math.floor(
            ((this.selectedCheckerX + this.checkerSize / 2) /
                this.boardSizePx) *
                this.BOARD_SIZE
        );
        const dropY = Math.floor(
            ((this.selectedCheckerY + this.checkerSize / 2) /
                this.boardSizePx) *
                this.BOARD_SIZE
        );
        this.hoverSpace = [dropX, dropY];

        const endFn = (event) => {
            const eligibleSpace: EligibleSpace | undefined =
                this.eligibleSpaces.find(
                    (space: EligibleSpace) =>
                        space.col === this.hoverSpace[0] &&
                        space.row === this.hoverSpace[1]
                );

            if (eligibleSpace) {
                const captured = eligibleSpace.captured;

                this.board.turns.push({
                    playerNumber: this.selectedChecker.playerNumber,
                    startCol: this.selectedChecker.col,
                    startRow: this.selectedChecker.row,
                    endCol: eligibleSpace.col,
                    endRow: eligibleSpace.row,
                    captured: captured,
                });

                if (captured) {
                    if (captured.playerNumber === 1) {
                        this.board.p1Pieces = this.board.p1Pieces.filter(
                            (check: Checker) => check.id !== captured.id
                        );
                        this.board.p2PiecesCaptured.push(captured);
                    } else {
                        this.board.p2Pieces = this.board.p2Pieces.filter(
                            (check: Checker) => check.id !== captured.id
                        );
                        this.board.p1PiecesCaptured.push(captured);
                    }
                }

                this.selectedChecker.col = eligibleSpace.col;
                this.selectedChecker.row = eligibleSpace.row;

                this.board.currentPlayerNumber =
                    this.selectedChecker.playerNumber === 2 ? 1 : 2;
            }

            this.hoverSpace = [];
            this.eligibleSpaces = [];
            this.selectedChecker = undefined;

            this.offsetLeft = 0;
            this.offsetTop = 0;

            document.onmouseup = null;
            document.onmousemove = null;
        };

        document.ontouchend = endFn;
        document.onmouseup = endFn;

        // call a function whenever the cursor moves:
        const moveFn = (event) => {
            event.preventDefault();

            this.selectedCheckerX = Math.min(
                Math.max(
                    (event.clientX ?? event.touches[0].clientX) -
                        this.offsetLeft -
                        this.checkerSize / 2,
                    4
                ),
                this.boardSizePx - this.checkerSize - 4
            );

            this.selectedCheckerY = Math.min(
                Math.max(
                    (event.clientY ?? event.touches[0].clientY) -
                        this.offsetTop -
                        this.checkerSize / 2,
                    4
                ),
                this.boardSizePx - this.checkerSize - 4
            );

            const dropX = Math.floor(
                ((this.selectedCheckerX + this.checkerSize / 2) /
                    this.boardSizePx) *
                    this.BOARD_SIZE
            );
            const dropY = Math.floor(
                ((this.selectedCheckerY + this.checkerSize / 2) /
                    this.boardSizePx) *
                    this.BOARD_SIZE
            );
            this.hoverSpace = [dropX, dropY];
        };

        document.ontouchmove = moveFn;
        document.onmousemove = moveFn;
    }

    private _getEligibleSpaces(checker: Checker): EligibleSpace[] {
        const [playerNumber, r, c] = [
            checker.playerNumber,
            checker.row,
            checker.col,
        ];
        const newSpaces: EligibleSpace[] = [];
        const redDirections: number[][] = [
            [1, -1],
            [1, 1],
        ];
        const blackDirections: number[][] = [
            [-1, -1],
            [-1, 1],
        ];

        (playerNumber === 2 ? redDirections : blackDirections).forEach(
            (direction: number[]) => {
                const [rowMod, colMod] = direction;
                if (
                    r + rowMod < this.BOARD_SIZE &&
                    r + rowMod >= 0 &&
                    c + colMod < this.BOARD_SIZE &&
                    c + colMod >= 0
                ) {
                    const jumpChecker = this._getChecker(
                        r + rowMod,
                        c + colMod
                    );
                    if (!jumpChecker)
                        newSpaces.push({ row: r + rowMod, col: c + colMod });
                    else if (
                        jumpChecker.playerNumber !== playerNumber &&
                        r + rowMod * 2 < this.BOARD_SIZE &&
                        r + rowMod * 2 >= 0 &&
                        c + colMod * 2 < this.BOARD_SIZE &&
                        c + colMod * 2 >= 0 &&
                        !this._getChecker(r + rowMod * 2, c + colMod * 2)
                    )
                        newSpaces.push({
                            row: r + rowMod * 2,
                            col: c + colMod * 2,
                            captured: jumpChecker,
                        });
                }
            }
        );

        return newSpaces;
    }

    private _resetBoard() {
        this.board = {
            currentPlayerNumber: 1,
            p2Pieces: [],
            p1Pieces: [],
            turns: [],
            p2PiecesCaptured: [],
            p1PiecesCaptured: [],
        };
    }

    private _startNewGame() {
        this._resetBoard();

        let id = 1;

        CheckerBoardInitialState.p2Pieces.forEach(([r, c]) => {
            this.board.p2Pieces.push({
                playerNumber: 2,
                id: id++,
                row: r,
                col: c,
            });
        });

        CheckerBoardInitialState.p1Pieces.forEach(([r, c]) => {
            this.board.p1Pieces.push({
                playerNumber: 1,
                id: id++,
                row: r,
                col: c,
            });
        });
    }

    private _getChecker(row: number, col: number): Checker | undefined {
        return (
            this.board.p2Pieces.find(
                (checker: Checker) => checker.row === row && checker.col === col
            ) ??
            this.board.p1Pieces.find(
                (checker: Checker) => checker.row === row && checker.col === col
            )
        );
    }
}
