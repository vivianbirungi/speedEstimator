import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
    {
        text: '',
        items: ['dashboard'],
    },

    {
        text: '',
        items: ['charts', 'tables'],
    },
    {
        text: '',
        items: ['layouts', 'pages'],
    },
];

export const sideNavItems: SideNavItems = {
    dashboard: {
        icon: 'tachometer-alt',
        text: 'Dashboard',
        link: '/dashboard',
    },
    layouts: {
        icon: 'columns',
        text: 'About',
        link: '/dashboard',
    },
    charts: {
        icon: 'chart-area',
        text: 'Speed Statistics',
        link: '/charts',
    },
    tables: {
        icon: 'car',
        text: 'Car Plates',
        link: '/tables',
    },
    pages: {
        icon: 'book-open',
        text: 'Notifications',
        // submenu: [
        //     {
        //         text: 'Authentication',
        //         submenu: [
        //             {
        //                 text: 'Login',
        //                 link: '/auth/login',
        //             },
        //             {
        //                 text: 'Register',
        //                 link: '/auth/register',
        //             },
        //             {
        //                 text: 'Forgot Password',
        //                 link: '/auth/forgot-password',
        //             },
        //         ],
        //     },
        //     {
        //         text: 'Error',
        //         submenu: [
        //             {
        //                 text: '401 Page',
        //                 link: '/error/401',
        //             },
        //             {
        //                 text: '404 Page',
        //                 link: '/error/404',
        //             },
        //             {
        //                 text: '500 Page',
        //                 link: '/error/500',
        //             },
        //         ],
        //     },
        // ],
    },
  
};
