import { Routes } from '@angular/router';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogPostComponent } from './blog-post/blog-post.component';

export default [
    {
        path: '',
        component: BlogHomeComponent,
    },
    {
        path: '*',
        component: BlogPostComponent,
    },
] as Routes;
