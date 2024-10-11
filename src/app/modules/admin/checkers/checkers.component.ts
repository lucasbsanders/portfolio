import { CommonModule } from '@angular/common';
import {
    AfterViewChecked,
    Component,
    ElementRef,
    OnInit,
    ViewChild,
} from '@angular/core';

export type CheckersColor = 'b' | 'r';

export interface CheckersTurn {
    color: CheckersColor;
    startRow: number;
    startCol: number;
    endRow: number;
    endCol: number;
}

@Component({
    selector: 'app-checkers',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './checkers.component.html',
    styleUrl: './checkers.component.scss',
})
export class CheckersComponent implements AfterViewChecked, OnInit {
    public readonly BOARD_SIZE = 8;

    @ViewChild('content') contentRef: ElementRef;
    @ViewChild('checkersBoard') checkersBoardRef: ElementRef;

    public board: (CheckersColor | '')[][];
    public moves: CheckersTurn[] = [];
    public firstMove: CheckersColor = 'r';
    public boardSizePx = 700;
    public elementClicked = '';

    private elementWidth = 0;

    public get currentTurnColor(): CheckersColor {
        return this.moves.length === 0
            ? this.firstMove
            : this.moves[this.moves.length - 1].color === 'r'
            ? 'b'
            : 'r';
    }

    public get checkerSize(): number {
        return this.boardSizePx / 8 - 15;
    }

    constructor() {
        this.board = new Array(this.BOARD_SIZE).fill(null).map(() => {
            return new Array(this.BOARD_SIZE).fill(null).map(() => '');
        });
    }

    ngOnInit(): void {
        this.resetGame();
    }

    ngAfterViewChecked(): void {
        if (
            this.contentRef &&
            this.elementWidth !== this.contentRef?.nativeElement.offsetWidth
        ) {
            this.elementWidth = this.contentRef?.nativeElement.offsetWidth;
            // setTimeout(() => this.boardSizePx = Math.min(this.contentRef?.nativeElement.offsetHeight, this.contentRef?.nativeElement.offsetWidth));
            setTimeout(() => (this.boardSizePx = this.elementWidth / 2));
        }

        // console.log(this.contentRef?.nativeElement.offsetWidth);
    }

    public clickChecker(event: any, row: number, col: number) {
        event.preventDefault();

        const piece = this.board[row][col];

        if (this.currentTurnColor !== piece || !this.checkersBoardRef) {
            return;
        }

        this.elementClicked = row + ',' + col;
        console.log(this.elementClicked);

        const element = event.target;

        function elementDrag(event, offsetLeft, offsetTop, boardSizePx) {
            event = event || window.event;
            event.preventDefault();

            // calculate the new cursor position:
            const mouseX =
                event.clientX - offsetLeft - (boardSizePx / 8 - 10) / 2;
            const mouseY =
                event.clientY - offsetTop - (boardSizePx / 8 - 10) / 2;
            // console.log('drag offsets');
            // console.log(offsetLeft);
            // console.log(offsetTop);
            // console.log('drag positions');
            // console.log(event.clientX);
            // console.log(event.clientY);
            // console.log('drag calculated');
            // console.log(mouseX);
            // console.log(mouseY);

            return [mouseX, mouseY];
        }

        // get the mouse cursor position at startup:
        console.log(this.checkersBoardRef.nativeElement);
        this.offsetTop =
            this.checkersBoardRef.nativeElement.getBoundingClientRect().top +
            document.documentElement.scrollTop;
        this.offsetLeft =
            this.checkersBoardRef.nativeElement.getBoundingClientRect().left +
            document.documentElement.scrollLeft;

        this.mouseX =
            event.clientX - this.offsetLeft - (this.boardSizePx / 8 - 10) / 2;
        this.mouseY =
            event.clientY - this.offsetTop - (this.boardSizePx / 8 - 10) / 2;

        // console.log('offsets');
        // console.log(this.offsetLeft);
        // console.log(this.offsetTop);
        // console.log('positions');
        // console.log(event.clientX);
        // console.log(event.clientY);
        // console.log('calculated');
        // console.log(this.mouseX);
        // console.log(this.mouseY);

        document.onmouseup = (event) => {
            document.onmouseup = null;
            document.onmousemove = null;
            console.log('dropped');
            this.elementClicked = '';
        };

        // call a function whenever the cursor moves:
        document.onmousemove = (event) => {
            [this.mouseX, this.mouseY] = elementDrag(
                event,
                this.offsetLeft,
                this.offsetTop,
                this.boardSizePx
            );
        };
    }

    public offsetLeft = 0;
    public offsetTop = 0;

    public mouseX = 0;
    public mouseY = 0;

    public dropChecker(row: number, col: number) {
        // const [origRow, origCol] = this.clickedElement
        //     .split(',')
        //     .map((num) => parseInt(num));
        // const piece = this.board[origRow][origCol];
        // if (piece !== '') {
        //     this.board[origRow][origCol] = '';
        //     this.board[row][col] = piece;
        //     this.moves.push({
        //         color: piece,
        //         startRow: origRow,
        //         startCol: origCol,
        //         endRow: row,
        //         endCol: col,
        //     });
        // }
    }

    private resetGame() {
        this.board = this.board.map((rowList, row) => {
            return rowList.map((space, col) => {
                if ((row - col) % 2 === 0) {
                    if (row <= 2) return 'r';
                    else if (row < this.BOARD_SIZE - 1 - 2) return '';
                    else return 'b';
                } else return '';
            });
        });
        this.moves = [];
    }
}
