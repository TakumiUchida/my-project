import Vue from 'vue'
import VueRouter from 'vue-router'
import inputform from './components/inputform.vue'
import step2 from './components/step2'
import step3 from './components/step3'
import step4 from './components/step4'
import todolist from './components/todolist/todolist'
import userregistration from './components/money/userregistration'
import dashboard from './components/money/dashboard'
import login from './components/money/login'

Vue.use(VueRouter)

const routes = [
    { 
        path: '/inputform', 
        component: inputform, 
        name: 'inputform',
    },
    {
        path: '/step2', 
        component: step2, 
        name: 'step2',  
    },
    {
        path: '/step3', 
        component: step3, 
        name: 'step3',  
    },
    {
        path: '/step4', 
        component: step4, 
        name: 'step4',  
    },
    {
        path: '/todolist/todolist', 
        component: todolist, 
        name: 'todolist',  
    },
    {
        path: '/userregistration', 
        component: userregistration, 
        name: 'userregistration',  
    },
    {
        path: '/login', 
        component: login, 
        name: 'login',  
    },
    {
        path: '/dashboard', 
        component: dashboard, 
        name: 'dashboard',  
    }
]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router