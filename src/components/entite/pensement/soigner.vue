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

        <div class="content">
          <div class="row doctor-grid">
            <p>{{ message_diagnostic }}</p>
            <div
              class="col-md-4 col-sm-4  col-lg-4"
              v-for="examen in pensements.pensements"
              :key="examen.id"
            >
              <div class="profile-widget">
                <h4 class="doctor-name text-ellipsis">
                  <a href="profile.html">{{ examen.libelle }}</a>
                </h4>
              </div>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-form-label col-md-2">Service destinataire</label>
            <div class="col-md-10">
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
          <div class="m-t-20 text-center">
            <button
              type="button"
              class="btn btn-warning submit-btn"
              v-on:click="transferer"
            >
              Transferer</button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var solde = "";
import loader from "../../loader.vue";
import axios from "axios";
import { chemin } from "../../../assets/js/chemin.js";
export default {
  data() {
    return {
      // Data of constante
      file: "",
      pensements: [],
      workflows: [],
      liste_constantes: [],
      preloader: false,
      success: false,
      errors: false,
      message: "",
      search: "",
      achat: null,
      payee: "",
      message_diagnostic: "",

      medicament: "",
      quantite: "",
      posologie: "",
      ordonnances: [],
      id: "",

      activer_diagnostic: false,
      activer_examens: false,
      activer_ordonnances: false,
      activer_pensements: false,
    };
  },
  components: {
    loader,
  },
  created() {
    this.charger_diagnostic();
    this.charger_workfow();
  },
  methods: {
    paye(id, result) {
      console.log("id :", id);
      console.log("result :", result);
      solde = result;
      console.log("achat :", solde);
    },
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
    charger_diagnostic() {
      console.log("loading......................");
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + "/pensementsByDossier/" + this.$route.params.id)
        .then((response) => {
          console.log("pensement dossier :", response.data);
          this.pensements = response.data;
          if (this.pensements.pensements.length === 0) {
            this.message_diagnostic = "Aucun pensement pour ce patient";
          }
        })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });
    },

    retourner() {
      this.$router.push("/pensement");
    },
    onFilesSelected(e) {
      this.file = e.target.files[0];
    },
    transferer() {
      console.log("destination :", this.destination);
      console.log("examens :", this.examens);
      this.preloader = true;
      if (this.destination === "") {
        this.preloader = false;
        this.errors = true;
        this.message = "Veuillez indiquer un destinataire";
      } else {
        axios
          .create({
            headers: {
              "Content-Type": "application/json,multipart/form-data",
              Authorization: "Bearer " + localStorage.getItem("token"),
              "Access-Control-Allow-Origin": "*",
            },
          })
          .post(chemin + "/transfererDossier", {
            dossier_id: this.$route.params.id,
            destination_service_id: this.destination,
          })
          .then((response) => {
            console.log(response.data);
            if (response.data.state === "true") {
              this.preloader = false;
              this.success = true;
              this.message = "transfert effectué";
              this.destination = ""
              this.$router.push('/pensement');
            } else {
              this.errors = true;
              this.message = "transfert non enregistré";
            }
          })
          .catch((err) => {
            this.preloader = false;
            console.log(err);
          });
      }
    },
    terminer(){
      console.log("destination :", this.destination);
      console.log("examens :", this.examens);
      this.preloader = true;
        axios
          .create({
            headers: {
              "Content-Type": "application/json,multipart/form-data",
              Authorization: "Bearer " + localStorage.getItem("token"),
              "Access-Control-Allow-Origin": "*",
            },
          })
          .put(chemin + "/modifierFileAttente/" + this.$route.params.id, {
            status : "termine"
          })
          .then((response) => {
            console.log(response.data);
            if (response.data.state === "true") {
              this.preloader = false;
              this.success = true;
              this.message = "transfert effectué";
              this.destination = "";
            } else {
              this.errors = true;
              this.message = "transfert non enregistré";
            }
          })
          .catch((err) => {
            this.preloader = false;
            console.log(err);
          });
    },
    valider(pk, ligne_id, solder) {
      console.log("purchased", this.achat);
      const data = new FormData();
      data.append("dossier_id", this.$route.params.id);
      data.append("purchased", pk);
      data.append("id", ligne_id);
      data.append("resultat", pk);

      console.log(pk, ligne_id);
      this.preloader = true;
      console.log("image :", solder);
      {
        axios
          .create({
            headers: {
              "Content-Type": "application/json,multipart/form-data",
              Authorization: "Bearer " + localStorage.getItem("token"),
              "Access-Control-Allow-Origin": "*",
            },
          })
          .post(chemin + "/modifierExamenDossier", data)
          .then((response) => {
            console.log(response.data);
            if (response.data.state === "true") {
              this.preloader = false;
              this.success = true;
              this.message = "examen effectué";
              this.examens.examens.forEach((exam) => {
                console.log(exam);
                this.examens.examens = this.examens.examens.filter(
                  (item) => item.id !== pk
                );
              });
            } else {
              this.errors = true;
              this.message = "examen non enregistré";
            }
          })
          .catch((err) => {
            this.preloader = false;
            console.log(err);
          });
      }
    },
  },
};
</script>
<style>
.autocomplete {
  position: relative;
}

.autocomplete-results {
  padding: 0;
  margin: 0;
  border: 1px solid #eeeeee;
  height: 120px;
  min-height: 1em;
  max-height: 6em;
  overflow: auto;
}

.autocomplete-result {
  list-style: none;
  text-align: left;
  padding: 4px 2px;
  cursor: pointer;
}

.autocomplete-result:hover {
  background-color: blue;
  color: white;
}
</style>
