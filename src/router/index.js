import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import HomePage from '../views/HomePage.vue'
import EditPage from '../views/EditPage.vue'
import First from '../vuex/First.vue'
import Mapstate from '../views/Mapstate.vue'
import Child from '../vuex/Child.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/child',
    name: 'Child',
    component: Child
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component:About
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/homepage',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/editpage/:id',
    name: 'EditPage',
    component: EditPage
  },
  {
    path: '/first',
    name: 'First',
    component: First
  },
  {
    path:'/mapstate',
    name:'Mapstate',
    component:Mapstate
  }



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
