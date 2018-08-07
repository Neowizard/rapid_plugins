import {NbMenuItem} from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'ראשי',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'תזכורות SMS',
    icon: 'nb-phone',
    children: [{
      title: 'הגדרות',
      link: '/pages/sms/config',
    },
      {
        title: 'היסטוריה',
        link: '/pages/sms/logs'
      }
    ]
  },
  {
    title: 'ניהל',
    group: true,
  },
  {
    title: 'משתמשים',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
