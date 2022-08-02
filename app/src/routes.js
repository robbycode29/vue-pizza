import ClientPage from './components/ClientPage.vue'
import PizzaList from './components/client_page-components/PizzaList.vue'

const routes = [
    { 
        path:'/', 
        component: ClientPage, 
        children: [
            { path: 'pizza/', component: PizzaList },
        ]
    },
]

export default routes