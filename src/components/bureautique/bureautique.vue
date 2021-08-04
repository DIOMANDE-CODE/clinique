<template>
  <div>
    <div class="page-wrapper">
      <div class="content">
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
                  <span class="widget-title1"> Employés </span>
                </div>
              </div></router-link
            >
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4" v-if="secretaire">
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
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4" v-if="infirmiere">
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
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4" v-if="medecin">
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
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4" v-if="examinateur">
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
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4" v-if="soignant">
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
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4" v-if="urgence">
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
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4" v-if="caisse">
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
    };
  },
  created() {
    this.charger_utilsateur();
  },
  methods: {
    charger_utilsateur() {
      this.identifiant = this.$store.getters.getCurrentIdentifiant;
      console.log("identifiant", this.identifiant);
      console.log("listes des profile :", this.profiles);
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
          console.log("information about user", response.data);
          if (response.data.state === true) {
            const role = response.data.data.role;
            console.log("admin :", role);
            if (role === "admin") {
              this.admin = true;
            } else {
              const profil = response.data.data.profile[0].titre;
              const service = response.data.data.service[0].nom;
              console.log("profile :", profil);
              console.log("service :", service);
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
