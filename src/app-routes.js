import { withNavigationWatcher } from './contexts/navigation';
import { HomePage, TasksPage, ProfilePage, ProductsPage } from './pages';

const routes = [
  {
    path: '/tasks',
    component: TasksPage
  },
  {
    path: '/profile',
    component: ProfilePage
  },
  {
    path: '/home',
    component: HomePage
  }, 
  {
    path: '/products',
    component: ProductsPage
  }
];

export default routes.map(route => {
  return {
    ...route,
    component: withNavigationWatcher(route.component)
  };
});
