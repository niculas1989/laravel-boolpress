import App from './components/App.vue';
import router from './routes.js'

require('./bootstrap');

window.Vue = require('vue');

const root = new Vue({
    el: '#root',
    router,
    render: h => h(App)
})