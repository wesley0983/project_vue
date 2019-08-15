import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Master from './views/Master.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'login',
            component: Login
        },
        {
            path: '/master',
            name: 'master',
            redirect: '/users',
            component: Master,
            children: [
                {
                    path: '/users',
                    name: 'users',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import(/* webpackChunkName: "employee" */ './views/users/Users.vue')
                },
                ,
                {
                    path: '/manager',
                    name: 'manager',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import(/* webpackChunkName: "history" */ './views/manager/Manager.vue')
                }
            ]
        }
    ]
})
