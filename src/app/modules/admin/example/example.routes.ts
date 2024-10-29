import { Routes } from '@angular/router';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
import { CheckersComponent } from 'app/modules/checkers/checkers.component';
import { HomeComponent } from 'app/modules/landing/home/home.component';

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
