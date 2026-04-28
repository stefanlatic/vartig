import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import Services from '@/pages/Services.vue'
import ServiceDetail from '@/pages/ServiceDetail.vue' 
import MachinesPark from '@/pages/MachinesPark.vue'
import About from '@/pages/About.vue'
import Contact from '@/pages/Contact.vue'

const routes = [
  { path: '/',                  name: 'Home',          component: Home,          meta: { title: 'Vartig – Home' } },
  { path: '/services',          name: 'Services',      component: Services,      meta: { title: 'Vartig – Our Services' } },
  { path: '/services/:slug',    name: 'ServiceDetail', component: ServiceDetail, meta: { title: 'Vartig – Service' } },  // ← new
  { path: '/machines-park',     name: 'MachinesPark',  component: MachinesPark,  meta: { title: 'Vartig – Machines Park' } },
  { path: '/about',             name: 'About',         component: About,         meta: { title: 'Vartig – About Us' } },
  { path: '/contact',           name: 'Contact',       component: Contact,       meta: { title: 'Vartig – Contact' } },
  { path: '/:pathMatch(.*)*',   redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

router.afterEach((to) => {
  document.title = to.meta.title || 'Vartig'
})

export default router