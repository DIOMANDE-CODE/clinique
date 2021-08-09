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

// route workflow
import profil from '../views/bureautique/profil/profil.vue'
import addprofil from '../views/bureautique/profil/addprofil.vue'
import editprofil from '../views/bureautique/profil/editprofil.vue'

// route des droits d'accès
import droit from '../views/bureautique/droit/droit.vue'

// route de entite acceuil
import acceuil from '../views/entite/acceuil/acceuil.vue'
import addpatient from '../views/entite/acceuil/addpatient.vue'
import editpatient from '../views/entite/acceuil/editpatient.vue'
import profilepatient from '../views/entite/acceuil/profilpatient.vue'
import adddossier from '../views/entite/acceuil/adddossier.vue'

// route de la pharmacie
import pharmacie from '../views/bureautique/pharmacie/pharmacie.vue'
import categorie from '../views/bureautique/pharmacie/categorie_medicament/categorie.vue'
import addcategorie from '../views/bureautique/pharmacie/categorie_medicament/addcategorie.vue'
import editcategorie from '../views/bureautique/pharmacie/categorie_medicament/editcategorie.vue'

import addmedicament from '../views/bureautique/pharmacie/medicament/addmedicament.vue'
import editmedicament from '../views/bureautique/pharmacie/medicament/editmedicament.vue'
import medicament from '../views/bureautique/pharmacie/medicament/medicament.vue'

// route du module diagnostic
import diagnostic from '../views/bureautique/diagnostic/diagnostic.vue'
import adddiagnostic from '../views/bureautique/diagnostic/adddiagnostic.vue'
import editdiagnostic from '../views/bureautique/diagnostic/editdiagnostic.vue'

// route du module constante
import constante from '../views/bureautique/constante/constante.vue'
import addconstante from '../views/bureautique/constante/addconstante.vue'
import editconstante from '../views/bureautique/constante/editconstante.vue'

// route des traitements
import traitement from '../views/bureautique/traitement/traitement.vue'
import addtraitement from '../views/bureautique/traitement/addtraitement.vue'
import edittraitement from '../views/bureautique/traitement/edittraitement.vue'

// route du dossier médical
import dossier from '../views/bureautique/dossier_medical/dossier.vue'

// route de service/entite prise de constante
import entiteconstante from '../views/entite/constante/entiteconstante.vue'
import prendreconstante from '../views/entite/constante/prendreconstante.vue'

// route du service medecin/consultation
import consultation from '../views/entite/consultation/consultation.vue'
import diagnostics from '../views/entite/consultation/diagnostics.vue'

// route de laboratoire
import laboratoire from '../views/entite/laboratoire/laboratoire.vue'
import examen from '../views/entite/laboratoire/examen.vue'

// route dm du patient par medecin
import dm from '../views/entite/consultation/dm.vue'
import infodm from '../views/entite/consultation/infodm.vue'

// route du service pensement
import pensement from '../views/entite/pensement/pensement.vue'
import soigner from '../views/entite/pensement/soigner.vue'

// route du service urgence
import urgence from '../views/entite/urgence/urgence.vue'
import traiterurgence from "../views/entite/urgence/traiterurgence.vue"
import fairetraitement from "../views/entite/urgence/fairetraitement.vue"

// route du service caisse
import caisse from '../views/entite/caisse/caisse.vue'
import facture from '../views/entite/caisse/facture.vue'

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
  // route de workflow
  {
    path:'/acceuil',
    name:'acceuil',
    component:acceuil
  },
  {
    path:'/admin/profil',
    name:'profil',
    component:profil
  },
  {
    path:'/profil/ajouter',
    name:'addprofil',
    component:addprofil
  },
  {
    path:'/profil/edit/:id',
    name:'editprofil',
    component:editprofil
  },
  // route des droits
  {
    path:'/employe/droit/:id',
    name:'droit',
    component:droit
  },
  // route de entite acceuil
  {
    path:'/acceuil/addpatient',
    name:'addpatient',
    component:addpatient
  },
  {
    path:'/acceuil/editpatient/:id',
    name:'editpatient',
    component:editpatient
  },
  {
    path:'/acceuil/profil/:id',
    name:'profilpatient',
    component:profilepatient
  },
  {
    path:'/acceuil/dossier/:id',
    name:'adddossier',
    component:adddossier
  },

  // route de la pharmacie
  {
    path:'/pharmacie',
    name:'pharmacie',
    component:pharmacie
  },
  {
    path:'/pharmacie/categorie',
    name:'categorie',
    component:categorie
  },
  {
    path:'/pharmacie/categorie/add',
    name:'addcategorie',
    component:addcategorie
  },
  {
    path:'/pharmacie/categorie/edit/:id',
    name:'editcategorie',
    component:editcategorie
  },
  {
    path:'/pharmacie/medicament',
    name:'medicament',
    component:medicament
  },
  {
    path:'/pharmacie/medicament/add',
    name:'addmedicament',
    component:addmedicament
  },
  {
    path:'/pharmacie/medicament/edit/:id',
    name:'editmedicament',
    component:editmedicament
  },

  // route du module diagnostic
  {
    path:'/diagnostic',
    name:'diagnostic',
    component:diagnostic
  },
  {
    path:'/diagnostic/add',
    name:'adddiagnostic',
    component:adddiagnostic
  },
  {
    path:'/diagnostic/edit/:id',
    name:'editdiagnostic',
    component:editdiagnostic
  },

  // route du module constante
  {
    path:'/constante',
    name:'constante',
    component:constante
  },
  {
    path:'/constante/add',
    name:'addconstante',
    component:addconstante
  },
  {
    path:'/constante/edit/:id',
    name:'editconstante',
    component:editconstante
  },
  // route des traitements
  {
    path:'/traitement',
    name:'traitement',
    component:traitement
  },
  {
    path:'/traitement/add',
    name:'addtraitement',
    component:addtraitement
  },
  {
    path:'/traitement/edit/:id',
    name:'edittraitement',
    component:edittraitement
  },
  // route du DM
  {
    path:'/dossier',
    name:'dossier',
    component:dossier
  },
// route de service/entite prise de constante
  {
    path:'/entite/constante',
    name:'entiteconstante',
    component:entiteconstante
  },
  {
    path:'/entite/prendre/constante/:id',
    name:'prendreconstante',
    component:prendreconstante
  },
  // route du service medecin/consultation
  {
    path:'/consultation',
    name:'consultation',
    component:consultation
  },
  {
    path:'/consultation/diagnostic/:id',
    name:'diagnostics',
    component:diagnostics
  },
  // route de laboratoire
  {
    path:'/laboratoire',
    name:'laboratoire',
    component:laboratoire
  },
  {
    path:'/laboratoire/examen/:id',
    name:'examen',
    component:examen
  },
  // route dm du patient
  {
    path:'/consultation/dossier_medical/:id',
    name:'dm',
    component:dm
  },
  {
    path:'/consultation/info_medical/:id',
    name:'infodm',
    component:infodm
  },
  // route de service pensement
  {
    path:'/pensement',
    name:'pensement',
    component:pensement
  },
  {
    path:'/pensement/:id',
    name:'soigner',
    component:soigner
  },
  // route du service urgence
  {
    path:'/urgence',
    name:'urgence',
    component:urgence
  },
  {
    path:'/urgence/:id',
    name:'traiterurgence',
    component:traiterurgence
  },
  {
    path:'/urgence/traitement/:id',
    name:'fairetraitement',
    component:fairetraitement
  },

  // route du service caisse
  {
    path:'/caisse',
    name:'caisse',
    component:caisse
  },
  {
    path:'/facture/:id',
    name:'facture',
    component:facture
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
