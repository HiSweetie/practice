import {
    createRouter,
    createWebHashHistory,
    RouteRecordRaw
} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        meta: {
            isPrimary: false,
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../pages/HomeView.vue')
    }, {
        path: '/about',
        name: 'About',
        meta: {
            isPrimary: false,
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../pages/AboutView.vue')
    }, 
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import(/* webpackChunkName: "about" */ '../pages/404View.vue') },
    {
        path: '/login',
        name: 'Login',
        meta: {
            isPrimary: false,
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../pages/LoginView.vue')
    }, 
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// const router = new VueRouter({
//     mode: 'history',
//     routes
//   })

export default router;