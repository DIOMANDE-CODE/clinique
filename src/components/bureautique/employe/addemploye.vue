<template>
  <div>
    <loader v-if="preloader"></loader>
    <div class="page-wrapper">
      <div class="content">
        <div class="m-t-20 text-center">
          <button class="btn btn-primary" v-on:click="retourner">
            Retourner
          </button>
        </div>
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <h4 class="page-title">Ajouter l'employé</h4>
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
            <form @submit.prevent="inscrire">
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>Nom <span class="text-danger">*</span></label>
                    <input class="form-control" type="text" v-model="nom" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>Prénom</label>
                    <input class="form-control" type="text" v-model="prenom" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>Nationalité</label>
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
                    <label>Addresse du domicile</label>
                    <input
                      class="form-control"
                      type="text"
                      v-model="addresse"
                    />
                  </div>
                </div>
                <div class="form-group col-sm-6">
                  <label class="display-block">Situation matrimoniale</label>
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
                  <label class="display-block">Genre</label>
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
                <div class="col-sm-6">
                  <div class="form-group">
                    <label> Mot de passe </label>
                    <input
                      class="form-control"
                      type="password"
                      v-model="code"
                    />
                  </div>
                </div>
                <div class="form-group col-sm-6">
                  <label class="display-block">Profil</label>
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
              </div>
              <div class="m-t-20 text-center">
                <button class="btn btn-primary submit-btn">
                  Créer l'employé
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
import loader from "../../loader.vue";
import axios from "axios";
import { chemin } from "../../../assets/js/chemin.js";

export default {
  name: "epresent",
  data() {
    return {
      user: {
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
        code: "", 
      },
      preloader: false,
      success: false,
      errors: false,
      message: "",
    };
  },
  components: {
    loader,
  },
  methods: {
    retourner() {
      this.$router.push("/admin/employe");
    },
    inscrire() {
      this.preloader = true;
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
        password: this.code,
        role: this.role,
      };
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .post(chemin + "/inscription", user)
        .then((response) => {
          this.preloader = false;
          if (response.data.state === true) {
            this.success = true;
            this.message = response.data.message;

            this.nom = '';
            this.prenom = '';
            this.nationnalite = '';
            this.telephone = '';
            this.date = '';
            this.addresse = '';
            this.situation = '';
            this.genre = '';
            this.email = '';
            this.code = '';
            this.role = '';
          } 
          else {
            this.message = response.data.message;
          }
        })
        .catch((err) => {
          this.preloader = false;
          console.log(user.situation_matrimoniale);
          console.log(err.response.data.errors);
        });
    },
  },
};
</script>
