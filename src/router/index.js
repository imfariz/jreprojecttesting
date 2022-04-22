import Media from '../components/media/MainContent.vue'
import Furnitur from '../components/furniture/CatalogueContent.vue'
import Bengkel from '../components/bengkel/BengkelContent.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component:Media
    },
    {
        path: '/furnitur',
        component:Furnitur
    },
    {
        path: '/bengkel',
        component:Bengkel
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router