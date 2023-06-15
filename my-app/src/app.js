import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import Login from './components/Login.vue';
import Note from './components/Note.vue';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Login
        },
        {
            path: '/notes',
            component: Note
        }
    ]
});

new Vue({
    router,
    el: '#app',
    components: {
        App,
        Login,
        Note
    }
});