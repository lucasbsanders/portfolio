import { CommonModule } from '@angular/common';
import {
    AfterViewChecked,
    Component,
    ElementRef,
    HostListener,
    OnInit,
    ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { fuseAnimations } from '@fuse/animations';
import { FuseHighlightComponent } from '@fuse/components/highlight';
import { BoardSpaceNamePipe } from './checkers-service/board-space-name.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    boardColumnNames,
    boardRowNames,
    InitialCheckerBoardState,
    KingRows,
} from './checkers-service/checkers.data';
import {
    CheckerBoard,
    Checker,
    CheckerPlayer,
    EligibleSpace,
    RequiredMove,
    CheckersTurn,
} from './checkers-service/checkers.types';
import { CheckersBlogComponent } from '../../blog/checkers-blog/checkers-blog.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-checkers',
    standalone: true,
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        FuseHighlightComponent,
        MatDividerModule,
        BoardSpaceNamePipe,
        MatTooltipModule,
        RouterLink,
        CheckersBlogComponent,
    ],
    templateUrl: './checkers.component.html',
    styleUrl: './checkers.component.scss',
    animations: [fuseAnimations],
})
export class CheckersComponent implements AfterViewChecked, OnInit {
    public readonly BOARD_SIZE = 8;
    public readonly BOARD_SIZE_ARR = new Array(this.BOARD_SIZE);
    public readonly CHECKER_TOP_OFFSET = 0.1;
    public readonly CHECKER_BOTTOM_OFFSET = 0.18;
    public readonly CHECKER_RATIO = 0.8;
    public readonly BOARD_COL_NAMES = Array.from(boardColumnNames.values());
    public readonly BOARD_ROW_NAMES = Array.from(boardRowNames.values());

    @ViewChild('contentContainer') contentContainerRef: ElementRef;
    @ViewChild('checkersBoard') checkersBoardRef: ElementRef;

    @HostListener('document:keydown.escape', ['$event'])
    onKeydownHandler(event: KeyboardEvent) {
        if (this.selectedChecker) this._dropSelectedChecker();
    }

    public board: CheckerBoard;
    public boardSizePx = 0;

    public offsetLeft = 0;
    public offsetTop = 0;

    public selectedCheckerX = 0;
    public selectedCheckerY = 0;

    public selectedChecker?: Checker;
    public hoverSpace: number[] = [];
    public outlineSpace: number[] | null = null;

    public showAllTurnHistory = false;

    private _elementWidth = 0;

    public get currentPlayerId(): CheckerPlayer {
        return this.board.currentPlayerId;
    }

    public get spaceSize(): number {
        return this.boardSizePx / 8;
    }

    public get checkerSize(): number {
        return this.spaceSize * this.CHECKER_RATIO;
    }

    constructor() {
        this._initializeCheckersBoard();
    }

    ngOnInit(): void {
        this._initializeCheckersBoard();
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

    /**
     * Enable the checker lift, move, and drop actions
     * @param event - mouse event
     * @param row
     * @param col
     * @returns
     */
    public clickChecker(event: any, row: number, col: number) {
        event.preventDefault();

        const checker = this._getChecker(row, col);
        if (
            !this.checkersBoardRef ||
            checker === 'EMPTY_SPACE' ||
            this.currentPlayerId !== checker.playerId ||
            this.board.winningPlayer
        )
            return;

        this.selectedChecker = checker;

        // get the mouse cursor position at startup:
        this.offsetTop =
            this.checkersBoardRef.nativeElement.getBoundingClientRect().top;
        this.offsetLeft =
            this.checkersBoardRef.nativeElement.getBoundingClientRect().left;

        // calculate the current checker hover space
        [this.selectedCheckerX, this.selectedCheckerY] =
            this._calculateCheckerCoords(
                event.clientX ?? event.touches[0]?.clientX,
                event.clientY ?? event.touches[0]?.clientY
            );
        this.hoverSpace = this._calculateSelectedCheckerHoverSpace();

        // function for each time the checker is moved over the board
        const checkerMoveFn = (event) => {
            [this.selectedCheckerX, this.selectedCheckerY] =
                this._calculateCheckerCoords(
                    event.clientX ?? event.touches[0]?.clientX,
                    event.clientY ?? event.touches[0]?.clientY
                );

            this.hoverSpace = this._calculateSelectedCheckerHoverSpace();
        };

        document.ontouchmove = checkerMoveFn;
        document.onmousemove = checkerMoveFn;

        // function called when the checker is dropped on a space
        const checkerDropFn = (event) => {
            const eligibleSpace: EligibleSpace | undefined =
                this.board.requiredMoves.length > 0
                    ? this.board.requiredMoves.find(
                          (requiredMove: RequiredMove) =>
                              requiredMove.checker.id === checker.id &&
                              requiredMove.col === this.hoverSpace[0] &&
                              requiredMove.row === this.hoverSpace[1]
                      )
                    : checker.eligibleSpaces.find(
                          (space: EligibleSpace) =>
                              space.col === this.hoverSpace[0] &&
                              space.row === this.hoverSpace[1]
                      );

            if (eligibleSpace) {
                const capturedChecker = eligibleSpace.capturedChecker;

                const existingTurn: CheckersTurn | undefined =
                    this.board.turns.length > 0 &&
                    this.board.turns[this.board.turns.length - 1].playerId ===
                        this.selectedChecker.playerId
                        ? this.board.turns[this.board.turns.length - 1]
                        : undefined;

                if (existingTurn) {
                    existingTurn.spaces.push({
                        row: eligibleSpace.row,
                        col: eligibleSpace.col,
                    });
                    if (capturedChecker)
                        existingTurn.capturedCheckers.push(capturedChecker);
                } else
                    this.board.turns.push({
                        playerId: this.selectedChecker.playerId,
                        spaces: [
                            {
                                row: this.selectedChecker.row,
                                col: this.selectedChecker.col,
                            },
                            {
                                row: eligibleSpace.row,
                                col: eligibleSpace.col,
                            },
                        ],
                        capturedCheckers: capturedChecker
                            ? [capturedChecker]
                            : undefined,
                    });

                // move the checker to the drop position
                this.selectedChecker.col = eligibleSpace.col;
                this.selectedChecker.row = eligibleSpace.row;

                if (capturedChecker) {
                    this.board.checkers = this.board.checkers.filter(
                        (boardChecker: Checker) =>
                            capturedChecker.id !== boardChecker.id
                    );

                    if (capturedChecker.playerId === 'p1')
                        this.board.p2PiecesCaptured.push(capturedChecker);
                    else this.board.p1PiecesCaptured.push(capturedChecker);
                }

                if (
                    KingRows.get(this.selectedChecker.playerId) ===
                        this.selectedChecker.row &&
                    !this.selectedChecker.isKing
                ) {
                    // create a king checker
                    this.selectedChecker.isKing = true;

                    // end turn
                    this.board.currentPlayerId =
                        this.selectedChecker.playerId === 'p2' ? 'p1' : 'p2';

                    this._scanBoard();
                } else if (capturedChecker) {
                    this._scanBoard(this.selectedChecker);

                    if (!this.board.requiredMoves?.length) {
                        // end turn
                        this.board.currentPlayerId =
                            this.selectedChecker.playerId === 'p2'
                                ? 'p1'
                                : 'p2';

                        this._scanBoard();
                    }
                } else {
                    // end turn
                    this.board.currentPlayerId =
                        this.selectedChecker.playerId === 'p2' ? 'p1' : 'p2';
                    this._scanBoard();
                }
            }

            this._dropSelectedChecker();
        };

        document.ontouchend = checkerDropFn;
        document.onmouseup = checkerDropFn;
    }

    public saveGameState() {
        // console.log(this.board);
    }

    private _dropSelectedChecker() {
        this.hoverSpace = [];
        this.selectedChecker = undefined;

        this.offsetLeft = 0;
        this.offsetTop = 0;

        document.ontouchmove = null;
        document.onmousemove = null;

        document.ontouchend = null;
        document.onmouseup = null;
    }

    private _downDirections: number[][] = [
        [1, -1],
        [1, 1],
    ];
    private _upDirections: number[][] = [
        [-1, -1],
        [-1, 1],
    ];
    private _allDirections = [...this._upDirections, ...this._downDirections];

    /**
     * Calculates a list of spaces where the checker could move or jump
     * @param checker
     * @returns A list of possible moves for the checker, and for jump moves, the captured piece
     */
    private _getEligibleSpaces(checker: Checker): EligibleSpace[] {
        const [player, r, c] = [checker.playerId, checker.row, checker.col];
        const eligibleSpaces: EligibleSpace[] = [];

        (checker.isKing
            ? this._allDirections
            : player === 'p1'
            ? this._upDirections
            : this._downDirections
        ).forEach((direction: number[]) => {
            const [rowMod, colMod] = direction;
            const jumpChecker: Checker | 'EMPTY_SPACE' | undefined =
                this._getChecker(r + rowMod, c + colMod);

            if (jumpChecker) {
                if (jumpChecker === 'EMPTY_SPACE')
                    eligibleSpaces.push({
                        row: r + rowMod,
                        col: c + colMod,
                    });
                else if (
                    jumpChecker.playerId !== player &&
                    this._getChecker(r + rowMod * 2, c + colMod * 2) ===
                        'EMPTY_SPACE'
                ) {
                    // it's possible to jump the checker to a new space
                    eligibleSpaces.push({
                        row: r + rowMod * 2,
                        col: c + colMod * 2,
                        capturedChecker: jumpChecker,
                    });
                }
            }
        });

        return eligibleSpaces;
    }

    private _initializeCheckersBoard() {
        this.board = {
            currentPlayerId: 'p1',
            checkers: [],
            turns: [],
            p2PiecesCaptured: [],
            p1PiecesCaptured: [],
            requiredMoves: [],
            initialGameState: InitialCheckerBoardState,
        };
    }

    /**
     * Resets the checkers game board to its initial state
     */
    private _startNewGame() {
        let id = 1;

        this.board.initialGameState.p1Pieces.forEach(([r, c]) => {
            this.board.checkers.push({
                playerId: 'p1',
                id: id++,
                row: r,
                col: c,
                eligibleSpaces: [],
                isKing: false,
            });
        });

        this.board.initialGameState.p2Pieces.forEach(([r, c]) => {
            this.board.checkers.push({
                playerId: 'p2',
                id: id++,
                row: r,
                col: c,
                eligibleSpaces: [],
                isKing: false,
            });
        });

        this._scanBoard();
    }

    /**
     * Gets the checker at the [row, col] space if it exists
     * @param row
     * @param col
     * @returns the Checker object or EMPTY_SPACE or undefined if the [row, col] combination is invalid
     */
    private _getChecker(
        row: number,
        col: number
    ): Checker | 'EMPTY_SPACE' | undefined {
        if (
            row < this.BOARD_SIZE &&
            row >= 0 &&
            col < this.BOARD_SIZE &&
            col >= 0
        ) {
            const checker: Checker | undefined = this.board.checkers.find(
                (checker: Checker) => checker.row === row && checker.col === col
            );
            return checker ?? 'EMPTY_SPACE';
        } else return undefined;
    }

    /**
     * 1. Calculate eligible move spaces for the current player checker for the playing turn
     * 2. Calculate the jump moves for the current player, marking them as required if they exist
     */
    private _scanBoard(jumpingChecker?: Checker) {
        this.board.checkers.forEach(
            (checker: Checker) =>
                (checker.eligibleSpaces =
                    this.board.currentPlayerId === checker.playerId
                        ? this._getEligibleSpaces(checker)
                        : [])
        );

        this.board.requiredMoves = this.board.checkers
            .filter(
                (checker: Checker) =>
                    this.board.currentPlayerId === checker.playerId &&
                    checker.eligibleSpaces.some(
                        (space: EligibleSpace) => space.capturedChecker
                    ) &&
                    (!jumpingChecker || jumpingChecker.id === checker.id)
            )
            .flatMap((checker: Checker) =>
                checker.eligibleSpaces
                    .filter((space: EligibleSpace) => space.capturedChecker)
                    .map((space: EligibleSpace) => ({
                        ...space,
                        checker: checker,
                    }))
            );

        const availableMoves = this.board.requiredMoves.length
            ? this.board.requiredMoves.length
            : this.board.checkers
                  .map((checker) => checker.eligibleSpaces.length)
                  .reduce(
                      (previousValue, currentValue) =>
                          previousValue + currentValue
                  );

        if (!jumpingChecker && !availableMoves) {
            this.board.winningPlayer =
                this.board.currentPlayerId === 'p1' ? 'p2' : 'p1';
            this.board.requiredMoves = [];
            this.board.checkers.forEach(
                (checker) => (checker.eligibleSpaces = [])
            );
        }
    }

    /**
     * Calculates the hover position of the checker, keeping the checker within the board
     * @param offsetX
     * @param offsetY
     * @returns [x coordinate px, y coordinate px]
     */
    _calculateCheckerCoords(offsetX: number, offsetY: number): number[] {
        const selectedCheckerX = Math.min(
            Math.max(offsetX - this.offsetLeft - this.checkerSize / 2, 4),
            this.boardSizePx - this.checkerSize - 4
        );

        const selectedCheckerY = Math.min(
            Math.max(offsetY - this.offsetTop - this.checkerSize / 2, 4),
            this.boardSizePx - this.checkerSize - 4
        );

        return [selectedCheckerX, selectedCheckerY];
    }

    /**
     * Calculates the space over which the selected checker is hovering
     * @returns [row, col] of the space that the selected checker is hovering over
     */
    _calculateSelectedCheckerHoverSpace(): number[] {
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

        return [dropX, dropY];
    }
}
