import { Routes } from '@angular/router';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
import { CheckersComponent } from '../checkers/checkers.component';

export default [
    // {
    //     path     : '',
    //     component: ExampleComponent,
    // },
    {
        path      : '',
        redirectTo: 'checkers',
        pathMatch : 'full'
    },
    {
        path      : 'checkers',
        component : CheckersComponent,
    },
] as Routes;
