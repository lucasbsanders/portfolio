import { Component, ViewEncapsulation } from '@angular/core';
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
export class HomeComponent
{
    /**
     * Constructor
     */
    constructor(
        private _splashScreenService: FuseSplashScreenService
    )
    {
    }

}
