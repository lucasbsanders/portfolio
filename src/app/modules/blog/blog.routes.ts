import { Routes } from '@angular/router';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { CheckersBlogComponent } from './checkers-blog/checkers-blog.component';

export default [
    {
        path: '',
        component: BlogHomeComponent,
    },
    {
        path: 'checkers',
        component: CheckersBlogComponent,
    },
    {
        path: '*',
        component: BlogPostComponent,
    },
] as Routes;
