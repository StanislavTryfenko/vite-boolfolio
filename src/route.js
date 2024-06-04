import { createWebHistory, createRouter } from 'vue-router';

import NotFound from './components/views/NotFound.vue'
import AppProjects from './components/views/AppProjects.vue'
import ProjectShow from './components/views/ProjectShow.vue'
import ShowcaseProjects from './components/views/ShowcaseProjects.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: ShowcaseProjects,
    },
    {
        path: '/projects',
        name: 'projects',
        component: AppProjects,
    },
    {
        path: '/project/:slug',
        name: 'project',
        component: ProjectShow,
    },
     {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: NotFound,
    }, 
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;