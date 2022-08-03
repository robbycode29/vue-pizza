import ClientPage from './components/ClientPage.vue'
import PizzaList from './components/client_page-components/PizzaList.vue'
import ShoppingCart from './components/client_page-components/ShoppingCart.vue'

const routes = [
    { 
        path:'/', 
        component: ClientPage, 
        children: [
            { path: 'pizza/', component: PizzaList },
            { path: 'cart/', component: ShoppingCart },
        ]
    },
]

export default routes