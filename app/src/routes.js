import ClientPage from './components/ClientPage.vue'
import PizzaList from './components/client_page-components/PizzaList.vue'
import ShoppingCart from './components/client_page-components/ShoppingCart.vue'
import ThankyouPage from './components/client_page-components/ThankyouPage.vue'
import OrderHistory from './components/client_page-components/OrderHistory.vue'

const routes = [
    { 
        path:'/', 
        component: ClientPage, 
        children: [
            { path: 'pizza/', component: PizzaList },
            { path: 'cart/', component: ShoppingCart },
            { path: 'thankyou/', component: ThankyouPage},
            { path: '/orders/', component: OrderHistory },
        ]
    },
]

export default routes