import { Routes } from '@angular/router';
import { CheckersComponent } from 'app/modules/portfolio/checkers/checkers.component';
import { HomeComponent } from 'app/modules/portfolio/home/home.component';

export default [
    {
        path      : '',
        component : HomeComponent,
    },
    {
        path      : 'checkers',
        component : CheckersComponent,
    },
] as Routes;
