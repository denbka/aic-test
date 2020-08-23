import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/Home')
const EditNote = () => import('@/views/EditNote')

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:id/edit',
    name: 'EditNote',
    component: EditNote
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
