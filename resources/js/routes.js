import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HomePage from './components/pages/HomePage'
import ContactPage from './components/pages/ContactPage'
import NotFound from './components/pages/NotFound'
import DetailPage from './components/pages/DetailPage'

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        { path: '/', component: HomePage, name: 'home' },
        { path: '/contacts', component: ContactPage, name: 'contacts' },
        { path: '/posts/post', component: DetailPage, name: 'detail-post' },
        { path: '*', component: NotFound, name: 'not-found' }
    ]
});

export default router;