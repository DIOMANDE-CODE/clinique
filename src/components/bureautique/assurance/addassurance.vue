<template>
  <div>
    <loader v-if="preloader"></loader>
    <div class="page-wrapper">
      <div class="content">
        <div class="m-t-15">
          <button class="btn btn-primary btn-rounded" v-on:click="retourner">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
          </button>
        </div>
        <br />
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <h4 class="page-title" style="color:black; font-weight: bold;">
              AJOUTER
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
            <form>
              <div class="form-group">
                <label
                  >Maison d'assurance <span class="text-danger">*</span></label
                >
                <input
                  class="form-control"
                  type="text"
                  v-model="nom"
                  required
                />
              </div>
              <!-- <div class="form-group">
                <label
                  >Pourcentage de l'assurance
                  <span class="text-danger">*</span></label
                >
                <input
                  class="form-control"
                  type="text"
                  v-model="pourcentage"
                  required
                />
              </div> -->
              <div class="form-group">
                <label>Nom de l'entreprise</label>
                <input
                  class="form-control"
                  type="text"
                  v-model="entreprise"
                  required
                />
              </div>
              <div class="m-t-20 text-center">
                <button
                  class="btn btn-danger submit-btn"
                  v-on:click="renitialiser"
                >
                  Réinitialiser</button
                >&nbsp;&nbsp;&nbsp;
                <button class="btn btn-success submit-btn" v-on:click="ajouter">
                  creer
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
import loader from "../../../components/loader.vue";
import axios from "axios";
import { chemin } from "../../../assets/js/chemin.js";

export default {
  name: "ajoutdepartement",
  data() {
    return {
      success: false,
      errors: false,
      message: "",
      preloader: false,
      nom: "",
      entreprise: "",
      pourcentage: "",
    };
  },
  components: {
    loader,
  },
  methods: {
    renitialiser() {
      (this.nom = ""), (this.entreprise = ""), (this.pourcentage = "");
    },
    ajouter() {
      if (
        this.nom === "" ||
        this.entreprise === "" ||
        this.pourcentage === ""
      ) {
        // this.errors = true
        // this.message = "Veuillez saisir le nom du departement"
      } else {
        this.preloader = true;
        var assurance = {
          nom: this.nom,
          entreprise: this.entreprise,
          pourcentage: this.pourcentage,
        };
        axios
          .create({
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
              "Access-Control-Allow-Origin": "*",
            },
          })
          .post(chemin + "/creationAssurance", assurance)
          .then((response) => {
            if (response.data.state === true) {
              this.preloader = false;
              this.$swal({
                html: "Assurance ajoutée",
                icon: "success",
                confirmButtonText: `OK`,
              }).then((result) => {
                if (result.isConfirmed) {
                  this.success = true;
                  this.$router.push("/admin/assurance");
                }
              })
            } else {
              this.preloader = false;
              this.errors = true;
              this.message = response.data.message;
            }
          })
          .catch((err) => {
            this.preloader = false;
            this.errors = true;
            console.log(err);
          });
      }
    },
    retourner() {
      this.$router.push("/admin/assurance");
    },
  },
};
</script>
