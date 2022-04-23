import Furnitur from '../components/Furnitur.vue'
import Bengkel from '../components/Bengkel.vue'
import Media from '../components/Media.vue'
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