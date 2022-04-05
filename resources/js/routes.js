import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HomePage from './components/pages/HomePage'
import ContactPage from './components/pages/ContactPage'
import NotFound from './components/pages/NotFound'

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: HomePage, name: 'home' },
        { path: '/contacts', component: ContactPage, name: 'contacts' },
        { path: '*', component: NotFound, name: 'not-found' }
    ]
});

export default router;