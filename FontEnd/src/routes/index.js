import routesConfig from '~/config/routes';

// Layouts

// Pages
import Home from '~/pages/Home';
import NewFeatured from '~/pages/NewFeatured';
import Products from '~/pages/Products';
import Sale from '~/pages/Sale';
import Customise from '~/pages/Customise';

// Public routes
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: NewFeatured },
    { path: routesConfig.profile, component: Products },
    { path: routesConfig.upload, component: Sale },
    { path: routesConfig.search, component: Customise },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
