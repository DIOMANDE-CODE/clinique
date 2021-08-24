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
              v-for="examen in examens"
              :key="examen.id"
            >
              <div class="profile-widget" v-if="examen.pivot.resultat === null">
                <h4 class="doctor-name text-ellipsis">
                  <a href="profile.html">{{ examen.libelle }}</a>
                </h4>
                <br />
                <div class="form-group row">
                  <div class="col-md-12">
                    <input
                      class="form-control"
                      type="file"
                      ref="file"
                      id="file"
                      @change="onFilesSelected"
                    />
                  </div>
                  <div class="col-md-10">
                    <br />
                    <div class="checkbox" v-if="verif_assurance.length !== 0">
                      assurance
                      <input
                        type="checkbox"
                        :name="examen.id + '_checkbox'"
                        :value="examen.pivot.assurance"
                        v-model="examen.pivot.assurance"
                        @change="paye(examen.id, examen.pivot.assurance)"
                      />
                    </div>
                    <br />
                  </div>
                </div>

                <div class="m-t-20 text-center">
                  <button
                    type="button"
                    class="btn btn-warning submit-btn"
                    @click="
                      valider(
                        examen.id,
                        examen.pivot.id,
                        examen.pivot.assurance
                      )
                    "
                  >
                    Valider
                  </button>
                </div>
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
              class="btn btn-success submit-btn"
              v-on:click="transferer"
            >
              Transferer
            </button>
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
      examens: [],
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
      confirm: false,

      medicament: "",
      quantite: "",
      posologie: "",
      ordonnances: [],
      id: "",
      verif_assurance: [],

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
        .get(chemin + "/listeExamenByDossier/" + this.$route.params.id)
        .then((response) => {
          console.log("examen dossier :", response.data);
          response.data.examens.forEach((element) => {
            if (element.pivot.assurance === 1) {
              element.pivot.assurance = true;
            }
          });
          this.examens = response.data.examens;
          this.verif_assurance = response.data.assurance;
        })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });
    },
    retourner() {
      this.$router.push("/laboratoire");
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
              this.$swal({
                html: "Transfert effectué",
                icon: "success",
                confirmButtonText: `OK`,
              }).then((result) => {
                if (result.isConfirmed) {
                  this.preloader = false;
                  this.$router.push("/laboratoire");
                }
              });
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
    valider(pk, ligneId, assurance) {
      console.log("ligne id :", ligneId);
      if (assurance === true) {
        assurance = 1;
      }
      console.log("purchased", this.achat);
      const data = new FormData();
      data.append("dossier_id", this.$route.params.id);
      data.append("purchased", pk);
      data.append("id", ligneId);
      data.append("resultat", this.file);
      data.append("assurance", assurance);
      if (this.confirm === true) {
        data.append("confirm", true);
        data.append("purchased", pk);
      }
      console.log(pk, ligneId);
      this.preloader = true;
      if (this.destination === "") {
        this.errors = true;
        this.message = "Veuillez indiquer un destinataire";
        this.preloader = false;
      } else if (this.ordonnances === []) {
        this.errors = true;
        this.message = "Veuillez donner une ordonnance";
        this.preloader = false;
      } else {
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
            console.log("data :", data);
            console.log(response.data);
            if (response.data.state === "true") {
              this.preloader = false;
              this.success = true;
              this.message = "examen effectué";
              this.examens.forEach((exam) => {
                console.log(exam);
                this.examens = this.examens.filter(
                  (item) => item.id !== response.data.data.id
                );
              });
            } else {
              this.preloader = false;
              this.$swal({
                icon: "warning",
                html:
                  "Paiement pour cet examen non fait, voulez-vous continuez ?",
                showDenyButton: true,
                confirmButtonText: `Oui`,
                denyButtonText: `Non`,
              }).then((result) => {
                if (result.isConfirmed) {
                  this.preloader = false;
                  this.confirm = true;
                  this.valider(
                    response.data.data.purchased,
                    response.data.data.id,
                    response.data.data.assurance
                  );
                }
              });
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
