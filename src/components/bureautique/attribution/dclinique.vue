<template>
  <div>
    <loader v-if="preloader"></loader>
    <div class="page-wrapper">
      <br />
      <button
        class="btn btn-primary"
        style="position:absolute; left:3%"
        v-on:click="retourner"
      >
        Retourner
      </button>
      <div class="content">
        <br />
        <h3 class="page-title">Attribution de departement(s) à clinique</h3>
        <br /><br /><br /><br />
        <div
          v-if="success"
          class="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          Attribution effectué avec succes
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
          Attribution non effectuée
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="form-group row">
          <label class="col-form-label col-md-2">Clinique(s)</label>
          <div class="col-md-10">
            <select class="form-control" v-model="clinique">
              <option
                :value="cle"
                v-for="(clin, cle) in cliniques"
                :key="cle"
                >{{ clin.nom }}</option
              >
            </select>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-form-label col-md-2">Departement(s)</label>
          <div class="col-md-10">
            <div class="checkbox">
              <label v-for="(depart, cle) in departements" :key="cle">
                <input
                  :value="depart.id"
                  v-model="coche"
                  type="checkbox"
                  name="checkbox"
                />
                {{ depart.nom }}
              </label>
            </div>
          </div>
        </div>

        <button
          class="btn btn-primary"
          style="position:absolute; left:3%"
          v-on:click="attribuer"
        >
          Attribution
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import loader from "../../loader.vue";
import { chemin } from "../../../assets/js/chemin.js";

export default {
  data() {
    return {
      preloader: false,
      cliniques: [],
      clinique: "",
      departements: [],
      coche: [],
      blocs: [],
      success: false,
      errors: false,
      message: "",
    };
  },
  components: {
    loader,
  },
  created() {
    this.charge_clinique();
    this.charge_departement();
  },
  methods: {
    charge_clinique() {
      this.preloader = true;
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
    charge_departement() {
      this.preloader = true;
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + "/listDepartement")
        .then((response) => {
          if (response.data.state === true) {
            this.preloader = false;
            this.departements = response.data.data;
          } else {
            this.preloader = false;
            console.log("erreur de chargement");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    retourner() {
      this.$router.push("/attribution");
    },
    attribuer() {
      this.preloader = true;
      var send_data = [];
      this.coche.forEach((key, item) => {
        const data = {
          id: item,
        };
        send_data.push(data);
      });
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .post(chemin + "/attribuerDepartementsClinique/" + this.clinique, {
          departements: send_data,
        })
        .then((response) => {
          console.log(response.data);
          if (response.data.state === true) {
            this.preloader = false;
            this.success = true;
            this.message = response.data.message;
            this.clinique = "";
            this.coche = [];
          } else {
            this.preloader = false;
            this.errors = true;
            this.message = response.data.message;
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
