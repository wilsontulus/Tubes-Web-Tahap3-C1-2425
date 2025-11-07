import { createRouter, createWebHistory } from "vue-router";

import AccountLoginView from "@/views/AccountLoginView.vue";
import AccountRegisterView from "@/views/AccountRegisterView.vue";

import HomeView from "@/views/HomeView.vue";

import AboutView from "@/views/AboutView.vue";
import CheckoutView from "@/views/CheckoutView.vue";
import ForumView from "@/views/ForumView.vue";
import ShopView from "@/views/ShopView.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView,
        },
        {
            path: '/forum',
            name: 'forum',
            component: ForumView,
        },
        {
            path: '/shop',
            name: 'shop',
            component: ShopView,
        },
        {
            path: '/checkout',
            name: 'checkout',
            component: CheckoutView,
        },

        {
            path: '/login',
            name: 'account-login',
            component: AccountLoginView,
        },
        {
            path: '/register',
            name: 'account-register',
            component: AccountRegisterView,
        },
    ],
})

export default router