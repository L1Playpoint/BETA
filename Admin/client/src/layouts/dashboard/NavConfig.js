// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-outline'),
  },
  {
    title: 'marketplaces',
    path: '/dashboard/blog',
    icon: getIcon('eva:shopping-bag-outline'),
  },
  {
    title: 'questionaires',
    path: '/dashboard/products',
    icon: getIcon('eva:question-mark-circle-outline'),
  },
  {
    title: 'users',
    path: '/dashboard/user',
    icon: getIcon('eva:people-outline'),
  },
  {
    title: 'history',
    path: '/dashboard',
    icon: getIcon('eva:clock-outline'),
  },
  {
    title: 'notifications',
    path: '/dashboard',
    icon: getIcon('eva:bell-outline'),
  },
  {
    title: 'tasks kanban',
    path: '/404',
    icon: getIcon('eva:briefcase-outline'),
  },
  {
    title: 'settings',
    path: '/dashboard/login',
    icon: getIcon('eva:settings-outline'),
  },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: getIcon('eva:lock-fill'),
  // },
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: getIcon('eva:person-add-fill'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: getIcon('eva:alert-triangle-fill'),
  // },
];

export default navConfig;
