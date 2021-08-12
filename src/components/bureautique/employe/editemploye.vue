<template>
  <div>
    <loader v-if="preloader"></loader>
    <div class="page-wrapper">
      <div class="content">
        <button class="btn btn-primary btn-rounded" v-on:click="retourner">
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </button>
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <h4 class="page-title" style="color:black; font-weight: bold;">
              MODIFIER
            </h4>
          </div>
        </div>
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
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <form @submit.prevent="modifier">
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label> nom <span class="text-danger">*</span></label>
                    <input class="form-control" type="text" v-model="nom" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>Prénom <span class="text-danger">*</span></label>
                    <input class="form-control" type="text" v-model="prenom" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label
                      >Nationalité <span class="text-danger">*</span></label
                    >
                    <input
                      class="form-control"
                      type="text"
                      v-model="nationnalite"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>Téléphone <span class="text-danger">*</span></label>
                    <input
                      class="form-control"
                      type="text"
                      v-model="telephone"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label
                      >Date de naissance
                      <span class="text-danger">*</span></label
                    >
                    <input type="date" class="form-control" v-model="date" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label
                      >Addresse du domicile
                      <span class="text-danger">*</span></label
                    >
                    <input
                      class="form-control"
                      type="text"
                      v-model="addresse"
                    />
                  </div>
                </div>
                <div class="form-group col-sm-6">
                  <label class="display-block"
                    >Situation matrimoniale
                    <span class="text-danger">*</span></label
                  >
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="matrimoniale"
                      id="employee_active"
                      value="mariee"
                      v-model="situation"
                    />
                    <label class="form-check-label" for="employee_active">
                      Marié(e)
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="matrimoniale"
                      id="employee_inactive"
                      value="celibataire"
                      v-model="situation"
                    />
                    <label class="form-check-label" for="employee_inactive">
                      Célibataire
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="matrimoniale"
                      id="employee_inactive"
                      value="divorcee"
                      v-model="situation"
                    />
                    <label class="form-check-label" for="employee_inactive">
                      Divorcé(e)
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="matrimoniale"
                      id="employee_inactive"
                      value="veuf"
                      v-model="situation"
                    />
                    <label class="form-check-label" for="employee_inactive">
                      Veuf(ve)
                    </label>
                  </div>
                </div>
                <div class="form-group col-sm-6">
                  <label class="display-block"
                    >Genre <span class="text-danger">*</span></label
                  >
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="quartier"
                      id="employee_active"
                      value="homme"
                      v-model="genre"
                    />
                    <label class="form-check-label" for="employee_active">
                      H
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="quartier"
                      id="employee_inactive"
                      value="femme"
                      v-model="genre"
                    />
                    <label class="form-check-label" for="employee_inactive">
                      F
                    </label>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>Email <span class="text-danger">*</span></label>
                    <input class="form-control" type="email" v-model="email" />
                  </div>
                </div>
                <div class="form-group col-sm-6">
                  <label class="col-form-label ">
                    Profil <span class="text-danger">*</span>
                  </label>
                  <div class="col-md-12">
                    <select  class="form-control" v-model="profile" multiple >
                      <option
                        required
                        :value="profil.id"
                        v-for="profil in profiles"
                        v-bind:key="profil.id"
                        @change = "emptyTable"
                        >{{ profil.titre }}</option
                      >
                    </select>
                  </div>
                </div>
                <div class="form-group col-sm-6">
                  <label class="display-block"
                    >Role <span class="text-danger">*</span></label
                  >
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="status"
                      id="employee_active"
                      value="admin"
                      v-model="role"
                    />
                    <label class="form-check-label" for="employee_active">
                      admin
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="status"
                      id="employee_inactive"
                      value="utilisateur"
                      v-model="role"
                    />
                    <label class="form-check-label" for="employee_inactive">
                      utilisateur
                    </label>
                  </div>
                </div>
                <div class="form-group col-sm-6">
                  <label class="col-form-label "
                    >Clinique <span class="text-danger">*</span>
                  </label>
                  <div class="col-md-12">
                    <select
                      required
                      class="form-control clinique"
                      v-model="clinique"
                      @change="charger_departement()"
                    >
                      <option value="0" disabled>Choisissez sa clinique</option>
                      <option
                        :value="clin.id"
                        v-for="clin in cliniques"
                        v-bind:key="clin.id"
                        selected="selected"
                        >{{ clin.nom }}</option
                      >
                    </select>
                  </div>
                </div>
                <div class="form-group col-sm-6">
                  <label class="col-form-label "
                    >Departement <span class="text-danger">*</span>
                  </label>
                  <div class="col-md-12">
                    <select
                      required
                      class="form-control"
                      v-model="departement"
                      @change="charger_service()"
                    >
                      <option value="0" disabled
                        >Choisissez son departement</option
                      >
                      <option
                        :value="depart.departement_id"
                        v-for="depart in departements"
                        v-bind:key="depart.id"
                        selected="selected"
                        >{{ depart.departement_nom }}</option
                      >
                    </select>
                  </div>
                </div>
                <div class="form-group col-sm-6">
                  <label class="col-form-label "
                    >Service <span class="text-danger">*</span>
                  </label>
                  <div class="col-md-12">
                    <select class="form-control" v-model="service">
                      <option value="0" disabled>Choisissez son service</option>
                      <option
                        required
                        :value="serv.service_id"
                        v-for="serv in services"
                        v-bind:key="serv.id"
                        >{{ serv.service_nom }}</option
                      >
                    </select>
                  </div>
                </div>
              </div>
              <div class="m-t-20 text-center">
                <button class="btn btn-success submit-btn">
                  Modifier
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import loader from "../../../components/loader.vue";
import { chemin } from "../../../assets/js/chemin.js";

export default {
  name: "editemploye",
  components: {
    loader,
  },
  data() {
    return {
      preloader: false,
      utilisateur: [],
      nom: "",
      prenom: "",
      nationnalite: "",
      telephone: "",
      date: "",
      addresse: "",
      situation: "",
      genre: "",
      email: "",
      role: "",
      ancien: [],
      id: "",
      success: false,
      errors: false,
      message: "",
      profiles: [],
      profile: [],
      pivot: [],

      // chargement des données de la clinique, departement et services, profiles
      cliniques: [],
      clinique: "",
      id_clinique: "",
      departements: [],
      departement: "",
      services: [],
      service: "",
      selectedClinique: false,
    };
  },
  created() {
    this.charger_info();
    this.charger_clinique();
  },
  methods: {
    charger_service() {
      console.log("service");
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(
          chemin +
            `/listeServicesDepartement/${this.clinique}/${this.departement}`
        )
        .then((response) => {
          console.log(response.data);
          this.services = response.data.data;
          // if (response.data.state === true) {
          //   this.preloader = false;
          //   this.services = response.data.data;
          // } else {
          //   this.preloader = false;
          //   console.log("erreur de chargement");
          // }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    charger_departement() {
      console.log("departement clinique id ", this.clinique);
      // this.preloader = true;
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })  
        .get(chemin + "/getDepartementsClinique/" + this.clinique)
        .then((response) => {
          console.log(response.data.data);
          this.departements = response.data.data;
          // if (response.data.state === true) {
          //   this.preloader = false;
          //   this.departements = response.data.data;
          // } else {
          //   this.preloader = false;
          //   console.log("erreur de chargement");
          // }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    emptyTable() {
      this.profile = [];
    },
    charger_clinique() {
      console.log(" id de la clinique ", this.clinique);
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
          this.preloader = false;
          if (response.data.state === true) {
            this.cliniques = response.data.data;
          } else {
            this.preloader = false;
            console.log("erreur de chargement");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    charger_info() {
      this.preloader = true;
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + "/utilisateur/" + this.$route.params.id)
        .then((response) => {
          this.listProfil();
          console.log("utilisateur :", response.data.data);
          if (response.data.state === true) {
            this.preloader = false;
            this.nom = response.data.data.nom;
            this.prenom = response.data.data.prenoms;
            this.nationnalite = response.data.data.nationalite;
            this.telephone = response.data.data.telephone;
            this.date = response.data.data.date_naissance;
            this.addresse = response.data.data.adresse_domicile;
            this.situation = response.data.data.situation_matrimoniale;
            this.genre = response.data.data.genre;
            this.email = response.data.data.email;
            this.role = response.data.data.role;
            this.nom = response.data.data.nom;
            this.service = response.data.data.service[0].nom;
            this.description = response.data.data.description;
            const profiles = response.data.data.profile
            profiles.forEach((prof) => {
              this.profile.push(prof.id);
              console.log((this.profile));
            })
          } else {
            this.preloader = false;
            this.message = "Aucun services existants";
            console.log("erreur de chargement");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    retourner() {
      this.$router.push("/admin/employe");
    },
    modifier() {
      var user = {
        nom: this.nom,
        prenoms: this.prenom,
        nationalite: this.nationnalite,
        telephone: this.telephone,
        date_naissance: this.date,
        adresse_domicile: this.addresse,
        situation_matrimoniale: this.situation,
        genre: this.genre,
        email: this.email,
        role: this.role,
        clinique_id: this.clinique,
        departement_id: this.departement,
        service_id: this.service,
        profile_id: this.profile,
        profile_user_id: this.pivot,
      };
      user.pivot = this.pivot;
      console.log(user);
      this.preloader = true;
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .put(
          chemin + "/modifierInformationUtilisateur/" + this.$route.params.id,
          user
        )
        .then((response) => {
          console.log("reponse :",response.data);
          if (response.data.state === true) {
            this.preloader = false;
            this.success = true;
            this.message = "Modification effectuée avec succès";
            this.$router.push('/admin/employe');

            this.nom = user.nom;
          } else {
            this.preloader = false;
            this.errors = true;
            this.message = response.data.message;
            console.log("erreur");
          }
        });
    },

    listProfil() {
      console.log("service");
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
          console.log("profil :", response.data);
          if (response.data.state === true) {
            this.preloader = false;
            this.profiles = response.data.data;
          } else {
            this.preloader = false;
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
