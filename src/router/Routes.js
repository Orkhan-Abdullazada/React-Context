import Basket from "../pages/site/Basket/Basket";
import Detail from "../pages/site/Detail/Detail";
import Home from '../pages/site/Home/Home';
import SiteRoot from "../pages/site/SiteRoot";
import Wishlist from "../pages/site/Wishlist/Wishlist";
const Routes = [
  {
    path: '/',
    element: <SiteRoot />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: ':id',
        element: <Detail />,
      },
      {
        path: 'basket',
        element: <Basket />,
      },
      {
        path: 'wishlist',
        element: <Wishlist />,
      },
    ],
  },
];

export default Routes;
