import { CommonModule } from '@angular/common';
import {
    AfterViewChecked,
    Component,
    ElementRef,
    OnInit,
    ViewChild,
} from '@angular/core';

export type CheckerColor = 'b' | 'r';

export interface CheckersTurn {
    color: CheckerColor;
    startRow: number;
    startCol: number;
    endRow: number;
    endCol: number;
}

export interface Checker {
    id: number;
    color: CheckerColor;
    row: number;
    col: number;
}

export interface CheckerBoard {
    currentTurn: CheckerColor;
    reds: Checker[];
    blacks: Checker[];
    turns: CheckersTurn[];
}

const CheckerBoardInitialState = {
    reds: [
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
    blacks: [
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
    imports: [CommonModule],
    templateUrl: './checkers.component.html',
    styleUrl: './checkers.component.scss',
})
export class CheckersComponent implements AfterViewChecked, OnInit {
    public readonly BOARD_SIZE = 8;
    public readonly BOARD_SIZE_ARR = new Array(this.BOARD_SIZE);

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
    public eligibleSpaces: number[][] = [];

    private _elementWidth = 0;

    public get currentTurnColor(): CheckerColor {
        return this.board.currentTurn;
    }

    public get checkerSize(): number {
        return (this.boardSizePx / 8) * 0.9;
    }

    constructor() {
        this.board = {
            currentTurn: 'r',
            reds: [],
            blacks: [],
            turns: [],
        };
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
                console.log(this._elementWidth);
                console.log(this.boardSizePx);
                console.log(this.checkerSize);
                console.log(' ');
            });
        }
    }

    public clickChecker(event: any, row: number, col: number) {
        event.preventDefault();

        const piece = this._getChecker(row, col);
        if (
            !piece ||
            this.currentTurnColor !== piece.color ||
            !this.checkersBoardRef
        )
            return;

        this.eligibleSpaces = this._getEligibleSpaces(piece);
        if (!this.eligibleSpaces?.length) return;

        this.selectedChecker = piece;

        // get the mouse cursor position at startup:
        this.offsetTop =
            this.checkersBoardRef.nativeElement.getBoundingClientRect().top +
            document.documentElement.scrollTop;
        this.offsetLeft =
            this.checkersBoardRef.nativeElement.getBoundingClientRect().left +
            document.documentElement.scrollLeft;

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
        // console.log('offsets');
        // console.log(this.offsetLeft);
        // console.log(this.offsetTop);
        // console.log('positions');
        // console.log(event.clientX);
        // console.log(event.clientY);
        // console.log('calculated');
        // console.log(this.selectedCheckerX);
        // console.log(this.selectedCheckerY);

        const endFn = (event) => {
            if (
                this.eligibleSpaces.find(
                    ([r, c]) =>
                        c === this.hoverSpace[0] && r === this.hoverSpace[1]
                )
            ) {
                console.log(
                    'dropped at ' +
                        this.hoverSpace[0] +
                        ', ' +
                        this.hoverSpace[1]
                );

                this.board.turns.push({
                    color: this.selectedChecker.color,
                    startCol: this.selectedChecker.col,
                    startRow: this.selectedChecker.row,
                    endCol: this.hoverSpace[0],
                    endRow: this.hoverSpace[1],
                });

                if (
                    Math.abs(this.hoverSpace[0] - this.selectedChecker.col) ===
                    2
                ) {
                    const jumpChecker = this._getChecker(
                        this.selectedChecker.row +
                            (this.hoverSpace[1] - this.selectedChecker.row) / 2,
                        this.selectedChecker.col +
                            (this.hoverSpace[0] - this.selectedChecker.col) / 2
                    );
                    console.log('jump checker');
                    console.log(jumpChecker);
                    if (jumpChecker.color === 'b')
                        this.board.blacks = this.board.blacks.filter(
                            (check: Checker) => check.id !== jumpChecker.id
                        );
                    else
                        this.board.reds = this.board.reds.filter(
                            (check: Checker) => check.id !== jumpChecker.id
                        );
                }

                this.selectedChecker.col = this.hoverSpace[0];
                this.selectedChecker.row = this.hoverSpace[1];

                this.board.currentTurn =
                    this.selectedChecker.color === 'r' ? 'b' : 'r';

                console.log(this.board);
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
            console.log(event.clientX ?? event.touches[0].clientX);
            console.log(event.clientY ?? event.touches[0].clientY);

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

    private _getEligibleSpaces(checker: Checker): number[][] {
        const [color, r, c] = [checker.color, checker.row, checker.col];
        const newSpaces: number[][] = [];

        if (color === 'r') {
            // left move
            if (r + 1 < this.BOARD_SIZE && c - 1 >= 0) {
                const jumpChecker = this._getChecker(r + 1, c - 1);
                if (!jumpChecker) newSpaces.push([r + 1, c - 1]);
                else if (
                    jumpChecker.color !== color &&
                    r + 2 < this.BOARD_SIZE &&
                    c - 2 >= 0 &&
                    !this._getChecker(r + 2, c - 2)
                )
                    newSpaces.push([r + 2, c - 2]);
            }

            // right move
            if (r + 1 < this.BOARD_SIZE && c + 1 < this.BOARD_SIZE) {
                const jumpChecker = this._getChecker(r + 1, c + 1);
                if (!jumpChecker) newSpaces.push([r + 1, c + 1]);
                else if (
                    jumpChecker.color !== color &&
                    r + 2 < this.BOARD_SIZE &&
                    c + 2 < this.BOARD_SIZE &&
                    !this._getChecker(r + 2, c + 2)
                )
                    newSpaces.push([r + 2, c + 2]);
            }
        }

        if (color === 'b') {
            // left move
            if (r - 1 >= 0 && c - 1 >= 0) {
                const jumpChecker = this._getChecker(r - 1, c - 1);
                if (!jumpChecker) newSpaces.push([r - 1, c - 1]);
                else if (
                    jumpChecker.color !== color &&
                    r - 2 >= 0 &&
                    c - 2 >= 0 &&
                    !this._getChecker(r - 2, c - 2)
                )
                    newSpaces.push([r - 2, c - 2]);
            }

            // right move
            if (r - 1 >= 0 && c + 1 < this.BOARD_SIZE) {
                const jumpChecker = this._getChecker(r - 1, c + 1);
                if (!jumpChecker) newSpaces.push([r - 1, c + 1]);
                else if (
                    jumpChecker.color !== color &&
                    r - 2 >= 0 &&
                    c + 2 < this.BOARD_SIZE &&
                    !this._getChecker(r - 2, c + 2)
                )
                    newSpaces.push([r - 2, c + 2]);
            }
        }

        return newSpaces;
    }

    private _startNewGame() {
        let id = 1;

        CheckerBoardInitialState.reds.forEach(([r, c]) => {
            this.board.reds.push({
                color: 'r',
                id: id++,
                row: r,
                col: c,
            });
        });

        CheckerBoardInitialState.blacks.forEach(([r, c]) => {
            this.board.blacks.push({
                color: 'b',
                id: id++,
                row: r,
                col: c,
            });
        });
    }

    private _getChecker(row: number, col: number): Checker | undefined {
        return (
            this.board.reds.find(
                (checker: Checker) => checker.row === row && checker.col === col
            ) ??
            this.board.blacks.find(
                (checker: Checker) => checker.row === row && checker.col === col
            )
        );
    }
}
