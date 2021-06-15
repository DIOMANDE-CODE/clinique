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
import editdepartement from '../views/bureautique/departement/editdepartement.vue'

// route des specialités
import specialite from '../views/bureautique/specialite/specialite.vue'
import addspecialite from '../views/bureautique/specialite/addspecialite.vue'
import editspecialite from "../views/bureautique/specialite/editspecialite.vue"
// route des clinique
import clinique from '../views/bureautique/clinique/clinique.vue'
import permission from '../views/bureautique/clinique/permission.vue'
import code from '../views/bureautique/clinique/code.vue'
import modifierclinique from '../views/bureautique/clinique/modifierclinique.vue'
import ajoutclinique from '../views/bureautique/clinique/ajoutclinique.vue'
import vclinique from '../views/bureautique/clinique/vclinique.vue'
import vservice from '../views/bureautique/clinique/vservice.vue'

// route de creer profil
import creer from '../views/bureautique/specialite/creer.vue'

// route des differentes attributions
import attribution from '../views/bureautique/attribution/attribution.vue'
import dclinique from '../views/bureautique/attribution/dclinique.vue'
import sdepartement from '../views/bureautique/attribution/sdepartement.vue'

// route du module analyse
import analyse from '../views/bureautique/analyse/analyse.vue'
import addanalyse from '../views/bureautique/analyse/addanalyse.vue'
import editanalyse from '../views/bureautique/analyse/editanalyse.vue'

// route du module assurance 
import assurance from '../views/bureautique/assurance/assurance.vue'
import addassurance from '../views/bureautique/assurance/addassurance.vue'
import editassurance from '../views/bureautique/assurance/editassurance.vue'
// route de dossier medical
import dossier from '../views/dossier_medical/dossier.vue'

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
  {
    path:'/departement/modifier/:id',
    name:'editdepartement',
    component:editdepartement
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
  {
    path:'/specialite/modifier/:id',
    name:'modifierspecialite',
    component:editspecialite
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
    path:'/admin/modifier/:id',
    name:'editclinique',
    component:modifierclinique
  },
  {
    path:'/clinique/ajouter',
    name:'ajoutclinique',
    component:ajoutclinique
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
  },
  // route du module analyse
  {
    path:'/admin/analyse',
    name:'analyse',
    component:analyse
  },
  {
    path:'/add/analyse',
    name:'addanalyse',
    component:addanalyse
  },
  {
    path:'/edit/analyse/:id',
    name:'editanalyse',
    component:editanalyse
  },
  // route du module analyse
  {
    path:'/admin/assurance',
    name:'assurance',
    component:assurance
  },
  {
    path:'/add/assurance',
    name:'addassurance',
    component:addassurance
  },
  {
    path:'/edit/assurance/:id',
    name:'editassurance',
    component:editassurance
  },
  // route de dossier médical
  {
    path:'/dossier',
    name:'dossier',
    component:dossier
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
