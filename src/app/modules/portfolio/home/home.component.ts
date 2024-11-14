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

    public set pageTitleHover(value: boolean) {
        this._pageTitleHover = value;
        this._triggerPageTitleAnimation(value);
    }
    public get pageTitleHover(): boolean {
        return this._pageTitleHover;
    }
    private _pageTitleHover = false;

    public openSubSection?: 'about' | 'projects' | 'blogs';

    private _pageTitleAnimationInterval?: any;
    private _pageTitleStyles = {
        fontWeight: 100,
    };

    /**
     * Constructor
     */
    constructor(private _renderer: Renderer2) {}

    ngAfterViewInit(): void {
        this._updatePageTitleStyle();
    }

    public clickSubSection(boxName: 'about' | 'projects' | 'blogs') {
        if (this.openSubSection === boxName) this.openSubSection = undefined;
        else this.openSubSection = boxName;
    }

    private _updatePageTitleStyle() {
        this._renderer.setStyle(
            this.pageTitle.nativeElement,
            'font-weight',
            this._pageTitleStyles.fontWeight
        );
    }

    private _triggerPageTitleAnimation(forward: boolean) {
        clearInterval(this._pageTitleAnimationInterval);

        this._pageTitleAnimationInterval = setInterval(() => {
            this._updatePageTitleStyle();

            if (forward) {
                if (this._pageTitleStyles.fontWeight >= 900) clearInterval(this._pageTitleAnimationInterval);
                else this._pageTitleStyles.fontWeight += 100;
            } else {
                if (this._pageTitleStyles.fontWeight <= 100) clearInterval(this._pageTitleAnimationInterval);
                else this._pageTitleStyles.fontWeight -= 100;
            }
        }, 40);
    }
}
