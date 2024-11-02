import { NgClass, NgIf } from '@angular/common';
import {
    AfterViewInit,
    Component,
    ElementRef,
    Renderer2,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [
        NgClass,
        MatButtonModule,
        RouterLink,
        MatDividerModule,
        MatIconModule,
        NgIf,
    ],
    animations: fuseAnimations,
})
export class HomeComponent implements AfterViewInit {
    @ViewChild('pageTitle') pageTitle: ElementRef;

    public set titleHover(value: boolean) {
        this._titleHover = value;
        this._titleAnimation(value);
    }
    public get titleHover(): boolean {
        return this._titleHover;
    }
    private _titleHover = false;

    public hoverBox?: 'about' | 'projects' | 'blogs';

    private _titleInterval?: any;
    private _fontWeight = 100;

    /**
     * Constructor
     */
    constructor(private _renderer: Renderer2) {}

    ngAfterViewInit(): void {
        this._updateFontWeight();
    }

    public triggerHoverBox(boxName: 'about' | 'projects' | 'blogs') {
        console.log('trigger hover ' + boxName)
        if (this.hoverBox === boxName) this.hoverBox = undefined;
        else this.hoverBox = boxName;
    }

    private _updateFontWeight() {
        this._renderer.setStyle(
            this.pageTitle.nativeElement,
            'font-weight',
            this._fontWeight
        );
    }

    private _titleAnimation(forward: boolean) {
        clearInterval(this._titleInterval);

        this._titleInterval = setInterval(() => {
            this._updateFontWeight();

            if (forward) {
                if (this._fontWeight >= 900) clearInterval(this._titleInterval);
                else this._fontWeight += 100;
            } else {
                if (this._fontWeight <= 100) clearInterval(this._titleInterval);
                else this._fontWeight -= 100;
            }
        }, 40);
    }
}
