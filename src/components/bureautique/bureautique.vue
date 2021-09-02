<template>
  <div>
    <div class="page-wrapper" :style="'background-image:url('+bgImage+')'" style="height:800px;background-position: center;background-size: 100% ;background-repeat: no-repeat;">
      <div class="content">
        <a href='https://fr.freepik.com/photos/main'></a>
        <div class="row">
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4" v-if="admin">
            <router-link to="/admin/specialite"
              ><div class="dash-widget">
                <span class="dash-widget-bg1"
                  ><i class="fa fa-lightbulb-o" aria-hidden="true"></i
                ></span>
                <div class="dash-widget-info text-right">
                  <span class="widget-title1">Services</span>
                </div>
              </div></router-link
            >
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4" v-if="admin">
            <router-link to="/admin/departement"
              ><div class="dash-widget">
                <span class="dash-widget-bg1"
                  ><i class="fa fa-building-o" aria-hidden="true"></i
                ></span>
                <div class="dash-widget-info text-right">
                  <span class="widget-title1">Departements</span>
                </div>
              </div></router-link
            >
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4" v-if="admin">
            <router-link to="/attribution"
              ><div class="dash-widget">
                <span class="dash-widget-bg1"
                  ><i class="fa fa-exchange" aria-hidden="true"></i
                ></span>
                <div class="dash-widget-info text-right">
                  <span class="widget-title1">Attribution</span>
                </div>
              </div></router-link
            >
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4" v-if="admin">
            <router-link to="/admin/analyse"
              ><div class="dash-widget">
                <span class="dash-widget-bg1"
                  ><i class="fa fa-heartbeat"></i
                ></span>
                <div class="dash-widget-info text-right">
                  <span class="widget-title1">Analyses</span>
                </div>
              </div></router-link
            >
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4" v-if="admin">
            <router-link to="/admin/assurance"
              ><div class="dash-widget">
                <span class="dash-widget-bg1"><i class="fa fa-file"></i></span>
                <div class="dash-widget-info text-right">
                  <span class="widget-title1">Assurances</span>
                </div>
              </div></router-link
            >
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4" v-if="admin">
            <router-link to="/admin/profil"
              ><div class="dash-widget">
                <span class="dash-widget-bg1"
                  ><i class="fa fa-user-circle"></i
                ></span>
                <div class="dash-widget-info text-right">
                  <span class="widget-title1"> Profil </span>
                </div>
              </div></router-link
            >
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4" v-if="admin">
            <router-link to="/admin/clinique"
              ><div class="dash-widget">
                <span class="dash-widget-bg1"
                  ><i class="fa fa-hospital-o" aria-hidden="true"></i
                ></span>
                <div class="dash-widget-info text-right">
                  <span class="widget-title1"> Clinique</span>
                </div>
              </div></router-link
            >
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4" v-if="admin">
            <router-link to="/admin/employe"
              ><div class="dash-widget">
                <span class="dash-widget-bg1"
                  ><i class="fa fa-user-o"></i
                ></span>
                <div class="dash-widget-info text-right">
                  <span class="widget-title1"> Personnels </span>
                </div>
              </div></router-link
            >
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4" v-if="profil_id.includes(4) && service_id.includes(3)">
            <router-link to="/acceuil"
              ><div class="dash-widget">
                <span class="dash-widget-bg1"><i class="fa fa-home"></i></span>
                <div class="dash-widget-info text-right">
                  <span class="widget-title1"> Accueil</span>
                </div>
              </div></router-link
            >
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4" v-if="admin">
            <router-link to="/pharmacie"
              ><div class="dash-widget">
                <span class="dash-widget-bg1"
                  ><i class="fa fa-medkit"></i
                ></span>
                <div class="dash-widget-info text-right">
                  <span class="widget-title1"> Pharmacie</span>
                </div>
              </div></router-link
            >
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4" v-if="admin">
            <router-link to="/diagnostic"
              ><div class="dash-widget">
                <span class="dash-widget-bg1"
                  ><i class="fa fa-search"></i
                ></span>
                <div class="dash-widget-info text-right">
                  <span class="widget-title1"> Diagnostics</span>
                </div>
              </div></router-link
            >
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4" v-if="admin">
            <router-link to="/constante"
              ><div class="dash-widget">
                <span class="dash-widget-bg1"
                  ><i class="fa fa-thermometer"></i
                ></span>
                <div class="dash-widget-info text-right">
                  <span class="widget-title1"> Constante</span>
                </div>
              </div></router-link
            >
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4" v-if="profil_id.includes(5) && service_id.includes(1)">
            <router-link to="/entite/constante"
              ><div class="dash-widget">
                <span class="dash-widget-bg1"
                  ><i class="fa fa-thermometer"></i
                ></span>
                <div class="dash-widget-info text-right">
                  <span class="widget-title1"> Prise de constante</span>
                </div>
              </div></router-link
            >
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4" v-if="profil_id.includes(1) && service_id.includes(4)">
            <router-link to="/consultation"
              ><div class="dash-widget">
                <span class="dash-widget-bg1"
                  ><i class="fa fa-code-fork"></i
                ></span>
                <div class="dash-widget-info text-right">
                  <span class="widget-title1"> Consultation</span>
                </div>
              </div></router-link
            >
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4" v-if="admin">
            <router-link to="/traitement"
              ><div class="dash-widget">
                <span class="dash-widget-bg1"
                  ><i class="fa fa-scissors"></i
                ></span>
                <div class="dash-widget-info text-right">
                  <span class="widget-title1"> Traitements </span>
                </div>
              </div></router-link
            >
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4" v-if="profil_id.includes(6) && service_id.includes(5)">
            <router-link to="/laboratoire"
              ><div class="dash-widget">
                <span class="dash-widget-bg1"
                  ><i class="fa fa-heartbeat"></i
                ></span>
                <div class="dash-widget-info text-right">
                  <span class="widget-title1"> Examens </span>
                </div>
              </div></router-link
            >
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4" v-if="profil_id.includes(8) && service_id.includes(6)">
            <router-link to="/pensement"
              ><div class="dash-widget">
                <span class="dash-widget-bg1"
                  ><i class="fa fa-signing"></i
                ></span>
                <div class="dash-widget-info text-right">
                  <span class="widget-title1"> Pensements </span>
                </div>
              </div></router-link
            >
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4" v-if="profil_id.includes(1) && service_id.includes(7)">
            <router-link to="/urgence"
              ><div class="dash-widget">
                <span class="dash-widget-bg1"
                  ><i class="fa fa-signing"></i
                ></span>
                <div class="dash-widget-info text-right">
                  <span class="widget-title1"> Urgences </span>
                </div>
              </div></router-link
            >
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4" v-if="profil_id.includes(2) && service_id.includes(2)">
            <router-link to="/caisse"
              ><div class="dash-widget">
                <span class="dash-widget-bg1"
                  ><i class="fa fa-money"></i
                ></span>
                <div class="dash-widget-info text-right">
                  <span class="widget-title1"> Caisse </span>
                </div>
              </div></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { chemin } from "../../assets/js/chemin.js";

export default {
  name: "index",
  data() {
    return {
      admin: false,
      secretaire: false,
      infirmiere: false,
      medecin: false,
      examinateur: false,
      soignant: false,
      urgence: false,
      caisse: false,
      profiles:[],
      profil_id:[],
      service_id:[],
      bgImage:null
    };
  },
  created() {
    this.listProfil()
  },
  methods: {
    listProfil() {
      axios
        .create({
          headers: {
            // "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + `/getListeProfile`)
        .then((response) => {           
          if (response.data.state === true) {
            this.preloader = false;
            this.profiles = response.data.data;
            this.charger_utilsateur();
          } else {
            this.preloader = false;
            console.log("erreur de chargement");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    charger_utilsateur() {
      this.identifiant = this.$store.getters.getCurrentIdentifiant;

      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + "/utilisateur/" + localStorage.getItem("identifiant"))
        .then((response) => {
          if (response.data.state === true) {
            const role = response.data.data.role;
            if (role === "admin") {
              this.admin = true;
            } else {
              response.data.data.profile.forEach(element => {
                if (element.id == 4) {
                  this.bgImage = 'bg/accueil.jpg'
                }
                if (element.id == 5) {
                  this.bgImage = 'bg/constante.jpg'
                }
                if (element.id == 1) {
                  this.bgImage = 'bg/medecin.jpg'
                }
                if (element.id == 2) {
                  this.bgImage = 'bg/caisse.jpg'
                }
                if (element.id == 6) {
                  this.bgImage = 'bg/labo.jpg'
                }
                if (element.id == 8) {
                  this.bgImage = 'bg/pansement.jpg'
                }
                
                this.profil_id.push(element.id)
              });

              response.data.data.service.forEach(element => {
                this.service_id.push(element.id)
                if (element.id == 7) {
                  this.bgImage = 'bg/urgence.jpg'
                }
              });

              const profil = response.data.data.profile[0].titre;
              const service = response.data.data.service[0].nom;
              switch (profil + "|" + service) {
                case "sécrétaire|Accueil":
                  this.secretaire = true;
                  break;
                case "infirmière|Prise De Constante":
                  this.infirmiere = true;
                  break;
                case "medecin|Consultation Générale":
                  this.medecin = true;
                  break;
                case "examinateur|Laboratoire":
                  this.examinateur = true;
                  break;
                case "soignant|Pensement":
                  this.soignant = true;
                  break;
                case "medecin|Urgence":
                  this.urgence = true;
                  break;
                case "caissière|Caisse":
                  this.caisse = true;
                  break;
              }
            }
          } else {
            console.log("erreur de chargement");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
