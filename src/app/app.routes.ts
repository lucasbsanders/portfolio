import { Route } from '@angular/router';
import { initialDataResolver } from 'app/app.resolvers';
import { LayoutComponent } from 'app/layout/layout.component';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [
    // Portfolio routes
    {
        path: '',
        component: LayoutComponent,
        resolve: {
            initialData: initialDataResolver,
        },
        children: [
            {
                path: 'blog',
                loadChildren: () => import('app/modules/blog/blog.routes'),
            },
            {
                path: '',
                loadChildren: () => import('app/modules/portfolio/portfolio.routes'),
            },
        ],
    },
];
