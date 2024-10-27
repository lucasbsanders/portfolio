import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { FuseSplashScreenService } from '@fuse/services/splash-screen';

@Component({
    selector     : 'home',
    templateUrl  : './home.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports      : [MatButtonModule, RouterLink, MatIconModule],
})
export class HomeComponent implements OnInit
{
    private readonly SPLASH_SCREEN_TIME_MS = 500;

    /**
     * Constructor
     */
    constructor(
        private _splashScreenService: FuseSplashScreenService
    )
    {
    }

    ngOnInit(): void {
        console.log('home component')
        this._splashScreenService.show();
        setTimeout(() => this._splashScreenService.hide(), this.SPLASH_SCREEN_TIME_MS);
    }
}
