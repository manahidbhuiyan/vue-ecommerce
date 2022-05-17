import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Account.vue')
  },
  {
    path: '/header',
    name: 'Header',
    component: () => import('../components/Header.vue')
  },
  {
    path: '/navbar',
    name: 'Navbar',
    component: () => import('../components/Navbar.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../components/Search')
  },
  {
    path: '/footer',
    name: 'Footer',
    component: () => import('../components/Footer')
  },
  {
    path: '/card-item',
    name: 'CardItem',
    component: () => import('../components/CardItem')
  },
  {
    path: '/specification',
    name: 'ProductSpecification',
    component: () => import('../components/ProductSpecification')
  },
  {
    path: '/policy',
    name: 'SpecificationWebsite',
    component: () => import('../components/SpecificationWebsite')
  },
  {
    path: '/product-reviews',
    name: 'Reviews',
    component: () => import('../components/Reviews')
  },
  {
    path: '/same-category',
    name: 'SameCategoryProduct',
    component: () => import('../components/SameCategoryProduct')
  },
  {
    path: '/shopLeftOption',
    name: 'ShopLeftOption',
    component: () => import('../components/ShopLeftOption')
  },
  {
    path: '/range-slider',
    name: 'RangeSlider',
    component: () => import('../components/RangeSlider')
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('../views/Account')
  },
  {
    path: '/product_details',
    name: 'ProductDetails',
    component: () => import('../views/ProductDetails')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('../views/Shop')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
