/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'home',
        title: '',
        type : 'basic',
        icon : 'heroicons_outline:home',
        link : '/'
    },
    {
        id   : 'checkers',
        title: 'Checkers',
        type : 'basic',
        icon : 'heroicons_outline:circle-stack',
        link : '/checkers',
        subtitle: 'Checkers game simulator'
    },
];

export const compactNavigation: FuseNavigationItem[] = defaultNavigation;
export const futuristicNavigation: FuseNavigationItem[] = defaultNavigation;
export const horizontalNavigation: FuseNavigationItem[] = defaultNavigation;
