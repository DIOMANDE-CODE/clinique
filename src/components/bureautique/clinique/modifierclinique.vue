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
            <h4 class="page-title" style="color:back; font-weight: bold;">
              MODIFIER
            </h4>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
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
            <form>
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label
                      >Numéro identifiant
                      <span class="text-danger">*</span></label
                    >
                    <input
                      class="form-control"
                      type="text"
                      v-model="numero_identifiant"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label
                      >Nom de la compagnie
                      <span class="text-danger">*</span></label
                    >
                    <input
                      class="form-control"
                      type="text"
                      v-model="nom"
                      required
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>Telephone <span class="text-danger">*</span></label>
                    <input
                      class="form-control "
                      type="text"
                      v-model="telephone"
                      required
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>Email <span class="text-danger">*</span></label>
                    <input
                      class="form-control"
                      type="email"
                      v-model="email"
                      required
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label
                      >Numero d'urgence
                      <span class="text-danger">*</span></label
                    >
                    <input
                      class="form-control"
                      type="text"
                      v-model="telephone_urgence"
                      required
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label
                      >Adresse physique
                      <span class="text-danger">*</span></label
                    >
                    <input
                      class="form-control"
                      type="text"
                      v-model="addresse_physique"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label
                      >Adresse postale <span class="text-danger">*</span></label
                    >
                    <input
                      class="form-control"
                      type="text"
                      v-model="addresse_postale"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>Fax <span class="text-danger">*</span></label>
                    <input class="form-control" type="text" v-model="fax" />
                  </div>
                </div>
              </div>
              <div class="m-t-20 text-center">
                <button
                  class="btn btn-success submit-btn"
                  v-on:click="modifier"
                >
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
      numero_identifiant: "",
      email: "",
      telephone: "",
      telephone_urgence: "",
      addresse_physique: "",
      addresse_postale: "",
      fax: "",
      status: "",
      id: "",
    };
  },
  components: {
    loader,
  },
  created() {
    this.preloader = true;
    axios
      .create({
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Access-Control-Allow-Origin": "*",
        },
      })
      .get(chemin + "/clinique/" + this.$route.params.id)
      .then((response) => {
        if (response.data.state === true) {
          this.preloader = false;
          this.nom = response.data.data.nom;
          this.numero_identifiant = response.data.data.numero_identifiant;
          this.email = response.data.data.email;
          this.addresse_physique = response.data.data.addresse_physique;
          this.addresse_postale = response.data.data.addresse_postale;
          this.telephone = response.data.data.telephone;
          this.telephone_urgence = response.data.data.telephone_urgence;
          this.addresse_physique = response.data.data.adresse_physique;
          this.addresse_postale = response.data.data.adresse_postale;
          this.fax = response.data.data.fax;
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
  methods: {
    retourner() {
      this.$router.push("/clinique/voir/" + this.$route.params.id);
    },
    renitialiser() {
      this.nom = "";
      this.numero_identifiant = "";
      this.email = "";
      this.addresse_physique = "";
      this.addresse_postale = "";
      this.telephone = "";
      this.telephone_urgence = "";
      this.fax = "";
    },
    modifier() {
      this.preloader = true;
      var clin = {
        numero_identifiant: this.numero_identifiant,
        nom: this.nom,
        email: this.email,
        telephone: this.telephone,
        telephone_urgence: this.telephone_urgence,
        adresse_physique: this.addresse_physique,
        adresse_postale: this.addresse_postale,
        fax: this.fax,
      };
      console.log("la clinique:", clin);
      console.log(
        "route:",
        chemin + "/modifierClinique/" + this.$route.params.id
      );
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .patch(chemin + "/modifierClinique/" + this.$route.params.id, clin)
        .then((response) => {
          if (response.data.state === true) {
            this.preloader = false;
            this.$swal({
              html: "Clinique modifiée",
              icon: "success",
              confirmButtonText: `OK`,
            }).then((result) => {
              if (result.isConfirmed) {
                this.$router.push("/admin/clinique");
              }
            });
          } else {
            this.preloader = false;
            this.errors = true;
            this.message = response.data.message;
            console.log("erreur");
          }
        });
    },
  },
};
</script>
