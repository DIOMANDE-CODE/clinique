<template>
  <div>
    <loader v-if="preloader"></loader>
    <div class="page-wrapper">
      <div class="content">
        <button class="btn btn-primary btn-rounded" v-on:click="retourner">
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </button>
        <br /><br />
        <div class="row"></div>
        <div class="card-box profile-header">
          <div class="row">
            <div class="col-md-11">
              <div class="profile-view">
                <div class="profile-basic">
                  <div class="row">
                    <div class="col-md-12">
                      <ul class="personal-info">
                        <li>
                          <span
                            class="title"
                            style="font-weight: bold; color:black"
                            >Identifiant:</span
                          >
                          <span class="text" style="color:black">{{
                            identite
                          }}</span>
                        </li>
                        <li>
                          <span
                            class="title"
                            style="font-weight: bold; color:black"
                            >Nom:</span
                          >
                          <span class="text" style="color:black">{{
                            nom
                          }}</span>
                        </li>
                        <li>
                          <span
                            class="title"
                            style="font-weight: bold; color:black"
                            >Email:</span
                          >
                          <span class="text" style="color:black">{{
                            email
                          }}</span>
                        </li>
                        <li>
                          <span
                            class="title"
                            style="font-weight: bold; color:black"
                            >Numéro d'urgence:</span
                          >
                          <span class="text" style="color:black">{{
                            numero_urgence
                          }}</span>
                        </li>
                        <li>
                          <span
                            class="title"
                            style="font-weight: bold; color:black"
                            >Adresse physique:</span
                          >
                          <span class="text" style="color:black">{{
                            addresse_physique
                          }}</span>
                        </li>
                        <li>
                          <span
                            class="title"
                            style="font-weight: bold; color:black"
                            >Adresse postale:</span
                          >
                          <span class="text" style="color:black">{{
                            adresse_postale
                          }}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="profile-tabs">
          <ul class="nav nav-tabs nav-tabs-bottom">
            <li class="nav-item">
              <a class="nav-link active" href="#about-cont" data-toggle="tab"
                >Departements et services</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#bottom-tab2" data-toggle="tab"
                >Analyses</a
              >
            </li>
          </ul>

          <div class="tab-content">
            <div class="tab-pane show active" id="about-cont">
              <div class="row">
                <div class="col-md-12">
                  <div class="card-box">
                    <h3 class="card-title">
                      Liste des départements et leurs services
                    </h3>
                    <div class="experience-box">
                      <ul class="experience-list">
                        <li
                          v-for="(departement, cle) in departements_final[0]"
                          :key="cle"
                        >
                          <div class="experience-user">
                            <div class="before-circle"></div>
                          </div>
                          <div class="experience-content">
                            <div class="timeline-content">
                              <a class="name">{{
                                departement.departement_nom
                              }}</a
                              ><br /><br />
                              <div class="row">
                                <div
                                  v-for="(service, cle) in departement.services"
                                  :key="cle"
                                >
                                  <span
                                    v-if="service.service_statut === 'inactif'"
                                    class="custom-badge status-red"
                                    >{{ service.service_nom }}</span
                                  >&nbsp;&nbsp;
                                  <span
                                    v-if="service.service_statut === 'actif'"
                                    class="custom-badge status-green"
                                    >{{ service.service_nom }}</span
                                  >
                                </div>
                                &nbsp;&nbsp;&nbsp;
                              </div>
                            </div>
                          </div>
                        </li>

                        <!--<li v-for="(departement, cle) in departements" :key="cle">
                          <div class="experience-user">
                            <div class="before-circle"></div>
                          </div>
                          <div class="experience-content">
                            <div class="timeline-content">
                              <a href="#/" class="name">{{ departement[cle] }},{{cle}}</a>
                             
                              <span class="time">2001 - 2003</span>
                            </div>
                          </div>
                        </li>-->
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane" id="bottom-tab2">
              Tab content 2
            </div>
            <div class="tab-pane" id="bottom-tab3">
              Tab content 3
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { chemin } from "../../../assets/js/chemin.js";
import { identifiant } from "../../../assets/js/info.js";
import loader from "../../../components/loader.vue";
export default {
  data() {
    return {
      prealoader: false,
      nom: "",
      numero_urgence: "",
      addresse_physique: "",
      adresse_postale: "",
      fax: "",
      identite: "",
      departements_final: [],
      // specialites: [],
      message: "",
      success: false,
      errors: false,
      preloader: false,
    };
  },
  components: {
    loader,
  },
  created() {
    this.preloader = true;
    this.chargement();
    this.chargement_depart();
  },
  methods: {
    chargement() {
      this.preloader = false;
      console.log("loading.......");
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + "/clinique/" + identifiant.id)
        .then((response) => {
          if (response.data.state === true) {
            this.preloader = false;
            this.nom = response.data.data.nom;
            this.identite = response.data.data.numero_identifiant;
            this.numero_urgence = response.data.data.telephone_urgence;
            this.email = response.data.data.email;
            this.addresse_physique = response.data.data.adresse_physique;
            this.fax = response.data.data.fax;
            this.adresse_postale = response.data.data.adresse_postale;
          } else {
            this.preloader = false;
            console.log(response.data.response);
          }
        });
    },
    chargement_depart() {
      console.log("ca marche");
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + "/clinique/" + identifiant.id)
        .then((response) => {
          var departements = [];
          console.log("response :", response.data);
          console.log("response departements:", response.data.departements);
          departements = response.data.departements;
          console.log("departements", departements);
          this.departements_final.push(departements);
          console.log("departements final :", this.departements_final[0]);

          /*
          departements.forEach((departement) => {
          
         
          
          console.log("id departement:", departement.departement_id);
            console.log("nom departement:", departement.departement_nom);
            console.log(
              "services departement " + departement.departement_id + " ",
              departement.services
            );
           
          
          var services = [];
            services = departement.services;
            console.log("les services:", services);
            services.forEach((service) => {
              if (service.service_statut === "actif") {
                console.log("nom service actif:", service.service_nom);
                 this.specialites.push(service.service_nom)
              }
              if (service.service_statut === 'inactif'){
                console.log("nom service inactif:",service.service_nom);
              }
            });
          });

           */
        });
    },
    retourner() {
      this.$router.push("/admin/clinique");
    },
    desactiver_depart(pk) {
      this.preloader = true;
      console.log(pk);
      console.log(identifiant.id);
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .post(chemin + "/activerDesactiverDepartementsClinique", {
          clinique_id: identifiant.id,
          departement_id: pk,
          statut: "inactif",
        })
        .then((response) => {
          if (response.data.state === true) {
            this.preloader = false;
            this.success = true;
            this.message = response.data.message;
            console.log("desactiver");
          } else {
            this.preloader = false;
            this.errors = true;
            this.message = response.data.message;
            console.log("non desactiver");
          }
        })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });
    },
    service(pk) {
      identifiant.id_departement = pk;
      this.$router.push("/departement/service/" + pk);
    },
  },
};
</script>
