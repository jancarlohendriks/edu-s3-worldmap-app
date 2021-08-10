import Vue from 'vue'
import VueRouter from 'vue-router'
import Token from '../views/Token.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/token',
    name: 'Token',
    component: Token
	},
  {
    path: '/',
    name: 'Home',
    component: Home
	},
	{
    path: '/login',
    name: 'Login',
    component: Login
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
