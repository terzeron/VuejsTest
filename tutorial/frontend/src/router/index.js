import Vue from 'vue';
import Router from 'vue-router';
import Book from '../components/Book.vue';
import Result from '../components/Result.vue';
import Management from '../components/Management.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Book
        },
        {
            path: '/result',
            name: 'Result',
            component: Result
        },
        {
            path: '/management',
            name: 'Management',
            component: Management,
            children: [
                {
                    path: ':group/:feed',
                    component: Management
                }
            ]
        }
    ]
})