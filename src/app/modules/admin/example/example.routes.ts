import { Routes } from '@angular/router';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
import { CheckersComponent } from '../../portfolio/checkers/checkers.component';
import { HomeComponent } from 'app/modules/portfolio/home/home.component';

export default [
    // {
    //     path     : '',
    //     component: ExampleComponent,
    // },
    {
        path      : '',
        component : HomeComponent,
    },
    {
        path      : 'checkers',
        component : CheckersComponent,
    },
] as Routes;
