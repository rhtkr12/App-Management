import Home from '../../src/views/Home';
import Users from '../../src/views/Users';
import Products from '../../src/views/Products';

export const AppContent = [
  {
    title: 'Home',
    component: <Home />,
    navelink: '/'
  },
  {
    title: 'Users',
    component: <Users />,
    navelink: '/apps/users'

  },
  {
    title: 'Products',
    component: <Products />,
    navelink: '/apps/products'
  }
];
