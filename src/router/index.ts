import {
    createRouter,
    createWebHashHistory,
    RouteRecordRaw
} from 'vue-router'

const routes: Array<RouteRecordRaw>  = [];

const router=createRouter({
    history:createWebHashHistory(),
    routes
})

// const router = new VueRouter({
//     mode: 'history',
//     routes
//   })

  export default router;