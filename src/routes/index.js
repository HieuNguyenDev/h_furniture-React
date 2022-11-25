import Blog from '../pages/Blog';
import BlogDetail from '../pages/BlogDetail';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import ProductDetail from '../pages/ProductDetail';
import Register from '../pages/Register';
import Shop from '../pages/Shop';

// Public Routes
export const publicRoutes = [
    { path: '*', component: NotFound },
    { path: '/', component: Home },
    { path: '/shop', component: Shop },
    { path: '/contact', component: Contact },
    { path: '/blog', component: Blog },
    { path: '/contact', component: Contact },
    { path: '/cart', component: Cart },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/checkout', component: Checkout },
    { path: '/detail-product/:id', component: ProductDetail },
    { path: '/blog/:id', component: BlogDetail },
    { path: '/test', component: Test },
]
