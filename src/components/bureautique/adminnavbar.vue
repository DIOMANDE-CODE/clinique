<template>
  <div>
    <div class="sidebar" id="sidebar">
      <div class="sidebar-inner slimscroll">
        <div id="sidebar-menu" class="sidebar-menu">
          <ul>
            <li>
              <router-link to="/bureautique"
                ><a
                  ><i class="fa fa-arrow-left" aria-hidden="true"></i>
                  <span style="color:black; font-weight: bold;"
                    >Accueil</span
                  ></a
                ></router-link
              >
            </li>
            <li class="menu-title">Menu</li>

            <li v-if="admin">
              <router-link to="/admin/specialite"
                ><a
                  ><i class="fa fa-lightbulb-o"></i>
                  <span style="color:black;">Services</span></a
                ></router-link
              >
            </li>
            <li v-if="admin">
              <router-link to="/admin/departement"
                ><a
                  ><i class="fa fa-building-o"></i>
                  <span style="color:black;">Departements</span></a
                ></router-link
              >
            </li>
            <li v-if="admin">
              <router-link to="/attribution"
                ><a
                  ><i class="fa fa-exchange"></i>
                  <span style="color:black;">Attribution</span></a
                ></router-link
              >
            </li>
            <li v-if="admin">
              <router-link to="/admin/analyse"
                ><a
                  ><i class="fa fa-heartbeat"></i>
                  <span style="color:black;">Analyses</span></a
                ></router-link
              >
            </li>
            <li v-if="admin">
              <router-link to="/admin/assurance"
                ><a
                  ><i class="fa fa-file"></i>
                  <span style="color:black;">Assurances</span></a
                ></router-link
              >
            </li>
            <li v-if="admin">
              <router-link to="/admin/profil"
                ><a
                  ><i class="fa fa-user-circle"></i>
                  <span style="color:black;">Profil</span></a
                ></router-link
              >
            </li>
            <li v-if="admin">
              <router-link to="/admin/clinique"
                ><a
                  ><i class="fa fa-hospital-o"></i
                  ><span style="color:black;">Cliniques</span></a
                ></router-link
              >
            </li>
            <li v-if="admin">
              <router-link to="/admin/employe"
                ><a
                  ><i class="fa fa-user-o"></i>
                  <span style="color:black;">Personnels</span></a
                ></router-link
              >
            </li>
            <li v-if="profil_id.includes(4) && service_id.includes(3)">
              <router-link to="/acceuil"
                ><a
                  ><i class="fa fa-home"></i>
                  <span style="color:black;">Accueil</span></a
                ></router-link
              >
            </li>
            <li v-if="admin">
              <router-link to="/pharmacie"
                ><a
                  ><i class="fa fa-medkit"></i>
                  <span style="color:black;">Pharmacie</span></a
                ></router-link
              >
            </li>
            <li v-if="admin">
              <router-link to="/diagnostic"
                ><a
                  ><i class="fa fa-search"></i>
                  <span style="color:black;">Diagnostics</span></a
                ></router-link
              >
            </li>
            <li v-if="admin">
              <router-link to="/constante"
                ><a
                  ><i class="fa fa-thermometer"></i>
                  <span style="color:black;">Constante</span></a
                ></router-link
              >
            </li>
            <li v-if="admin">
              <router-link to="/traitement"
                ><a
                  ><i class="fa fa-scissors"></i>
                  <span style="color:black;">Traitements</span></a
                ></router-link
              >
            </li>
            <li v-if="profil_id.includes(5) && service_id.includes(1)">
              <router-link to="/entite/constante"
                ><a
                  ><i class="fa fa-thermometer"></i>
                  <span style="color:black;">Prise de constante</span></a
                ></router-link
              >
            </li>
            <li v-if="profil_id.includes(1) && service_id.includes(4)">
              <router-link to="/consultation"
                ><a
                  ><i class="fa fa-code-fork"></i>
                  <span style="color:black;">Consultation</span></a
                ></router-link
              >
            </li>
            <li v-if="admin">
              <router-link to="/dossier"
                ><a
                  ><i class="fa fa-folder"></i>
                  <span style="color:black;">Dossier Médical</span></a
                ></router-link
              >
            </li>
            <li v-if="profil_id.includes(6) && service_id.includes(5)">
              <router-link to="/laboratoire"
                ><a
                  ><i class="fa fa-heartbeat"></i>
                  <span style="color:black;">Examens</span></a
                ></router-link
              >
            </li>
            <li v-if="profil_id.includes(8) && service_id.includes(6)">
              <router-link to="/pensement"
                ><a
                  ><i class="fa fa-signing"></i>
                  <span style="color:black;">Pansements</span></a
                ></router-link
              >
            </li>
            <li v-if="profil_id.includes(1) && service_id.includes(7)">
              <router-link to="/pensement"
                ><a
                  ><i class="fa fa-signing"></i>
                  <span style="color:black;">Urgences</span></a
                ></router-link
              >
            </li>
            <li v-if="profil_id.includes(2) && service_id.includes(2)">
              <router-link to="/caisse"
                ><a
                  ><i class="fa fa-money"></i>
                  <span style="color:black;">Caisse</span></a
                ></router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { chemin } from "../../assets/js/chemin.js";
export default {
  name: "patients",
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
      identifiant: "",
      profiles: [],
      profil_id: [],
      service_id: [],
    };
  },
  mounted() {
    this.listProfil();
  },
  methods: {
    listProfil() {
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
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
              response.data.data.profile.forEach((element) => {
                this.profil_id.push(element.id);
              });
              response.data.data.service.forEach((element) => {
                this.service_id.push(element.id);
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
