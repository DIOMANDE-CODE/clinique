<template>
  <div>
    <loader v-if="preloader"></loader>
    <div class="page-wrapper">
      <div class="content">
          <button class="btn btn-primary btn-rounded" v-on:click="retourner">
          <i class="fa fa-arrow-left" aria-hidden="true"></i></button
        ><br /><br />
        <h3 class="page-title" style="color:black; font-weight: bold;">Attribuer département à clinique</h3>
        <br />
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
                {{ depart.nom }}&nbsp;&nbsp;&nbsp;
              </label>
            </div>
          </div>
        </div>

        <button
          class="btn btn-success"
          style="position:absolute; left:3%"
          v-on:click="attribuer"
        >
          Attribuer
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
            var donnee = response.data.data;
            donnee.forEach((element) => {
              if(element.statut === 'actif'){
                this.departements.push(element);
              }
            })
            console.log(this.departements);
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
       console.log(send_data);
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .post(chemin + "/attribuerDepartementsClinique/", {
          id_clinique:this.clinique,
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
            this.charge_cliniquet()
            this.charge_departement()
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
