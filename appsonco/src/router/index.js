import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Order from '@/components/Order'
import Locations from '@/components/Locations'
import Checkout from '@/components/Checkout'
import CheckoutSuccess from '@/components/Checkout/CheckoutSuccess'
import Quote from '@/components/Quote'
import QuoteSuccess from '@/components/Checkout/QuoteSuccess'
import Cart from '@/components/Cart'
import Register from '@/components/Register'
import Category from '@/components/Category'
import Subcategory from '@/components/Subcategory'
import Promotion from '@/components/Promotion'
import Search from '@/components/Search'
import Product from '@/components/Product'
import NotFound from '@/components/NotFound'
import Dashboard from '@/components/Dashboard'
import EditAccount from '@/components/Customer/Edit'
import EditAddress from '@/components/Customer/EditAddress'
import NewAddress from '@/components/Customer/NewAddress'
import ChangePassword from '@/components/Customer/Password'
import AddressBook from '@/components/Customer/AddressBook'
import MyOrders from '@/components/Customer/OrdersHistory'
import OrderView from '@/components/Customer/OrderView'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/order',
            name: 'Order',
            component: Order
        },
        {
            path: '/category/:caturl',
            name: 'Category',
            component: Category,
            props: true
        },
        {
            path: '/subcategory/:caturl',
            name: 'Subcategory',
            component: Subcategory,
            props: true
        },
        {
            path: '/promotion/:promourl',
            name: 'Promotion',
            component: Promotion,
            props: true
        },
        {
            path: '/search/:searchterm',
            name: 'Search',
            component: Search,
            props: true
        },
        {
            path: '/product/:prodsku',
            name: 'Product',
            component: Product,
            props: true
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/cart',
            name: 'Cart',
            component: Cart
        },
        {
            path: '/checkout',
            name: 'Checkout',
            component: Checkout
        },
        {
            path: '/checkout/success',
            name: 'CheckoutSuccess',
            component: CheckoutSuccess
        },
        {
            path: '/quote',
            name: 'Quote',
            component: Quote
        },
        {
            path: '/quote/success',
            name: 'QuoteSuccess',
            component: QuoteSuccess
        },
        {
            path: '/stores',
            name: 'Stores',
            component: NotFound
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard
        },
        {
            path: '/edit-account',
            name: 'EditAccount',
            component: EditAccount
        },
        {
            path: '/edit-address/:addressid',
            name: 'EditAddress',
            component: EditAddress,
            props: true
        },
        {
            path: '/new-address/:inCheckout',
            name: 'NewAddress',
            component: NewAddress,
            props: true
        },
        {
            path: '/change-password',
            name: 'ChangePassword',
            component: ChangePassword
        },
        {
            path: '/address-book',
            name: 'AddressBook',
            component: AddressBook
        },
        {
            path: '/my-orders',
            name: 'MyOrders',
            component: MyOrders
        },
        {
            path: '/order-view/:order_id',
            name: 'OrderView',
            component: OrderView,
            props: true
        },
        {
            path: '/locations',
            name: 'Locations',
            component: Locations,
            props: true
        }
    ]
})
