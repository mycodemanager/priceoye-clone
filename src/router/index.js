import Vue from 'vue'
import VueRouter from 'vue-router'
import MobilesPage from '../views/MobilesPage.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Payment from '../views/paymenting.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/mobiles'
  },
  {
    path: '/mobiles',
    name: 'mobiles',
    component: MobilesPage
  },
  {
    path: '/mobiles/:id',
    name: 'product-detail',
    component: ProductDetail,
    props: true
  },
  {
    path: '/order/:id',
    name: 'payment',
    component: Payment,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes
})

export default router
