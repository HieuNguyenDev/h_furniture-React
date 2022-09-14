import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Cart from '../pages/Cart';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Checkout from '../pages/Checkout';
import ProductDetail from '../pages/ProductDetail';
import BlogDetail from '../pages/BlogDetail';
import NotFound from '../pages/NotFound';

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
]

export const privateRoutes = [

]