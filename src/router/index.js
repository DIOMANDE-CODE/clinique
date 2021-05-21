import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

// Import bureautique views
import bureautique from '../views/bureautique/bureautique.vue'
import bemploye from '../views/bureautique/employe/employe.vue'
import editemploye from '../views/bureautique/employe/editemploye.vue'
import addemploye from '../views/bureautique/employe/addemploye.vue'
import profilemploye from '../views/bureautique/employe/profilemploye.vue'

// route des departements
import departement from '../views/bureautique/departement/departement.vue'
import adddepartement from '../views/bureautique/departement/adddepartement.vue'

// route des specialités
import specialite from '../views/bureautique/specialite/specialite.vue'
import addspecialite from '../views/bureautique/specialite/addspecialite.vue'

// route des clinique
import clinique from '../views/bureautique/clinique/clinique.vue'
import permission from '../views/bureautique/clinique/permission.vue'
import code from '../views/bureautique/clinique/code.vue'
import editclinique from '../views/bureautique/clinique/editclinique.vue'
import addclinique from '../views/bureautique/clinique/addclinique.vue'
import vclinique from '../views/bureautique/clinique/vclinique.vue'
import vservice from '../views/bureautique/clinique/vservice.vue'

// route de creer profil
import creer from '../views/bureautique/specialite/creer.vue'

// route des differentes attributions
import attribution from '../views/bureautique/attribution/attribution.vue'
import dclinique from '../views/bureautique/attribution/dclinique.vue'
import sdepartement from '../views/bureautique/attribution/sdepartement.vue'


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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // routes  admin système (bureautique)
  {
    path:'/bureautique',
    name:'bureautique',
    component:bureautique,
  },
  {
    path:'/admin/employe',
    name:'bemploye',
    component:bemploye
  },
  {
    path:'/employe/modifier/:id',
    name:'editemploye',
    component:editemploye,
    props:true
  },
  {
    path:'/employe/ajouter',
    name:'addemploye',
    component:addemploye
  },
  {
    path:'/employe/profil/:id',
    name:'profilemploye',
    component:profilemploye
  },
  {
    path:'/employe/edit',
    name:'editprofile',
    component:editemploye
  },
  // departement routes
  {
    path:'/admin/departement',
    name:'departement',
    component:departement
  },
  {
    path:'/departement/add',
    name:'ajoutdepartement',
    component:adddepartement
  },
  // specialite route
  {
    path:'/admin/specialite',
    name:'specialite',
    component:specialite
  },
  {
    path:'/specialite/add',
    name:'ajoutspecialite',
    component:addspecialite
  },
  // route des cliniques
  {
    path:'/admin/clinique',
    name:'clinique',
    component:clinique
  },
  {
    path:'/admin/permission',
    name:'permission',
    component:permission

  },
  {
    path:'/admin/code',
    name:'code',
    component:code
  },
  {
    path:'/admin/edit',
    name:'editclinique',
    component:editclinique
  },
  {
    path:'/clinique/ajouter',
    name:'ajoutclinique',
    component:addclinique
  },
  {
    path:'/departement/service/:id',
    name:'voirservice',
    component:vservice
  },
  {
    path:'/clinique/voir/:id',
    name:'voirclinique',
    component:vclinique
  },
  // route de creer profil
  {
    path:'/creer/profil',
    name:'creer',
    component:creer
  },
  // route des attributions
  {
    path:'/attribution',
    name:'attribution',
    component:attribution
  },
  {
    path:'/clinique/departement',
    name:'attribuerDepart',
    component:dclinique
  },
  {
    path:'/service/departement',
    name:'attribuerService',
    component:sdepartement
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
