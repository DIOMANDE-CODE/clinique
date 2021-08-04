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
              PRISE DE CONSTANTES
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
              <div class="row">
                <div
                  class="col-sm-6"
                  v-for="constante in constantes"
                  v-bind:key="constante.id"
                >
                  <div class="form-group">
                    <label>
                      {{ constante.libelle }}
                     </label
                    >
                    <input
                      class="form-control"
                      type="text"
                      v-model="constante.value"
                      @change="prise_constante(constante.id, constante.value)"
                      required
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-form-label">Service destinataire</label>
                  <div>
                    <select class="form-control" v-model="destination">
                      <option
                        :value="workflow.service.id"
                        v-for="workflow in workflows"
                        v-bind:key="workflow.id"
                        >{{ workflow.service.nom }}</option
                      >
                    </select>
                  </div>
                </div>
              </div>
            </form>
            <div class="m-t-20 text-center">
              <button
                class="btn btn-danger submit-btn"
                v-on:click="renitialiser"
              >
                Réinitialiser</button
              >&nbsp;&nbsp;
              <button class="btn btn-success submit-btn" v-on:click="ajouter">
                Ajouter
              </button>
            </div>
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
  data() {
    return {
      // Data of constante
      assurances: [],
      constantes: [],
      liste_constantes: [],
      workflows: [],
      destination:'',

      preloader: false,
      success: false,
      errors: false,
      checkedAssurance: false,
      message: "",
    };
  },
  components: {
    loader,
  },
  created() {
    this.charge();
  },
  methods: {
    charger_workfow() {
      console.log("workflow");
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + "/getWorkflowService")
        .then((response) => {
          console.log(response.data);
          this.workflows = response.data.data;
          console.log("workflow :", this.workflows);
        })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });
    },
    charge() {
      console.log("loading......................");
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + "/listeDesConstantes")
        .then((response) => {
          console.log("constante list :", response.data);
          this.constantes = response.data;
          this.charger_workfow();
        })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });
    },
    prise_constante(id, val) {
      console.log("constante id:", id);
      console.log("constante value:", val);

      const valeur = {
        constante_id: id,
        value: val,
      };

      this.liste_constantes.push(valeur);
      console.log("liste constante :", this.liste_constantes);
    },
    retourner() {
      this.$router.push("/entite/constante");
    },
    renitialiser() {
      this.charge();
    },
    ajouter() {
       console.log("destination id", this.destination);
      this.preloader = true;
      var constante_final = {
        dossier_id: this.$route.params.id,
        constantes: this.constantes,
        destination_service_id: this.destination,
      };
      console.log("constante finale :", constante_final);
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .post(chemin + "/ajouterConstanteDossier", constante_final)
        .then((response) => {
          console.log(response.data);
          this.preloader = false;
          this.success = true;
          this.message = "Constante ajouté avec success";
          this.$router.push("/entite/constante");
        })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });
    },
  },
};
</script>
