import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Branchourscontacts from '../view_components/About_Branchourscontacts.vue'
import FAQs from '../view_components/About_FAQs.vue'
import Booksmuchmore from '../views/Booksmuchmore.vue'
import Chromebooklending from '../view_components/Booksmuchmore_Chromebooklending.vue'
import Digitallibrary from '../views/Digitallibrary.vue'
import Newtitles from '../view_components/Digitallibrary_Newtitles.vue'
import Whatshot from '../views/Whatshot.vue'
import Programservices from '../views/Programservices.vue'
import Atozservices from '../view_components/Programservices_Atozservices.vue'
import Test from '../views/Test.vue'
import Signin from '../views/Signin.vue'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about/',
    name: 'About',
    component: About,
    children: [
      {path: 'branchourscontacts', component: Branchourscontacts},
      {path: 'howdoi', component: FAQs}
    ]
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import([> webpackChunkName: "about" <] '../views/About.vue')
  },
  {
    path: '/booksmuchmore/',
    name: 'Booksmuchmore',
    component: Booksmuchmore,
    children: [
      {path: 'chromebooklending', component: Chromebooklending}
    ]
  },
  {
    path: '/digitalibrary/',
    name: 'Digitallibrary',
    component: Digitallibrary,
    children: [
      {path: 'newtitles', component: Newtitles}
    ]
  },
  {
    path: '/whatshot',
    name: 'Whatshot',
    component: Whatshot
  },
  {
    path: '/programservices/',
    name: 'Programservices',
    component: Programservices,
    children: [
      {path: 'atozservices', component: Atozservices}
    ]
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin 
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
