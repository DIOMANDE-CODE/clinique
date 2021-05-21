<template>
  <div>
    <loader v-if="preloader"></loader>
    <div class="page-wrapper">
      <div class="content">
        <div class="row">
          <div class="col-sm-7 col-6">
            <h4 class="page-title">Plus d'information</h4>
          </div>

          <div class="col-sm-5 col-6 text-right m-b-30">
            <a
              class="btn btn-primary btn-rounded"
              style="color:white"
              v-on:click="retourner"
            >
              Retour
            </a>
          </div>
        </div>
        <div class="card-box profile-header">
          <div class="row">
            <div class="col-md-12">
              <div class="profile-view">
                <div class="profile-basic">
                  <div class="row">
                    <div class="col-md-5">
                      <div class="profile-info-right">
                        <h3 class="user-name m-t-0 mb-0">
                          {{ nom }}
                        </h3>
                        <small class="text-muted">{{ identite }}</small>
                      </div>
                    </div>
                    <div class="col-md-7">
                      <ul class="personal-info">
                        <li>
                          <span class="title">Telephone:</span>
                          <span class="text">{{ telephone }}</span>
                        </li>
                        <li>
                          <span class="title">Email:</span>
                          <span class="text">{{ email }}</span>
                        </li>
                        <li>
                          <span class="title">Addresse:</span>
                          <span class="text">{{ addresse_physique }}</span>
                        </li>
                        <li>
                          <span class="title">Fax:</span>
                          <span class="text">{{ fax }}</span>
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
                >Information</a
              >
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" href="#bottom-tab2" data-toggle="tab"
                >Profile</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#bottom-tab3" data-toggle="tab"
                >Messages</a
              >
            </li> -->
          </ul>
          <div
            v-if="success"
            class="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            {{ message }}
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div
            v-if="errors"
            class="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            {{ message }}
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="tab-content">
            <div class="tab-pane show active" id="about-cont">
              <div class="row">
                <div class="col-md-12">
                  <div class="card-box">
                    <h3 class="card-title">Departement(s)</h3>
                    <div class="experience-box">
                      <ul class="experience-list">
                        <li
                          v-for="depart in departements"
                          v-bind:key="depart.id"
                        >
                          <div class="experience-user">
                            <div class="before-circle"></div>
                          </div>
                          <div class="experience-content">
                            <div class="timeline-content">
                              <a v-on:click="service(depart.id)" style="cursor:pointer" class="name">{{ depart.nom }}</a>
                              <div><br>
                                <a
                                  v-on:click="desactiver_depart(depart.id)"
                                  style="cursor:pointer"
                                  ><span class="custom-badge status-red">
                                    desactiver
                                  </span></a
                                >
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="tab-pane" id="bottom-tab2">
              Tab content 2
            </div>
            <div class="tab-pane" id="bottom-tab3">
              Tab content 3
            </div> -->
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
      telephone: "",
      addresse_physique: "",
      fax: "",
      identite: "",
      departements: [],
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
      console.log("loading.......");
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + "/listClinique")
        .then((response) => {
          if (response.data.state === true) {
            this.preloader = false;
            var clinique = response.data.data;
            clinique.forEach((element) => {
              if (identifiant.id === element.id) {
                this.nom = element.nom;
                this.identite = element.numero_identifiant;
                this.telephone = element.telephone;
                this.email = element.email;
                this.addresse_physique = element.adresse_physique;
                this.fax = element.fax;
              }
            });
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
        .get(chemin + "/getDepartementsClinique/" + identifiant.id)
        .then((response) => {
          this.preloader = false;
          var depart = response.data.data;
          depart.forEach((element) => {
            this.departements.push(element);
          });
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
    service(pk){
      identifiant.id_departement = pk
      this.$router.push('/departement/service/' + pk)
    }
  },
};
</script>
