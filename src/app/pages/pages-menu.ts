import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Projects',
    icon: 'nb-compose',
    children: [
      {
        title: 'Android',
        link: '/pages/forms/inputs',
      },
      {
        title: 'FS Nanodegree',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Angular 2',
        link: '/pages/forms/layouts2',
      },
    ],
  },
  {
    title: 'About',
    icon: 'nb-gear',
    link: '/pages/dashboard',
    home: true,
  },
];
