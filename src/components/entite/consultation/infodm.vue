<template>
  <div>
    <loader v-if="preloader"></loader>
    <img src="../../../assets/img/clock.png" alt="examen" width="100%" height="800px"/>
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
          <div class="row">
            <div class="col-lg-12">
              <div class="card-box">
                <h4 class="card-title">
                  Diagnostics
                  <input
                    type="checkbox"
                    name="radio"
                    v-model="activerDiagnostic"
                    @change="activerdiagnostic()"
                  />
                </h4>

                <form action="#" v-if="activer_diagnostic">
                  <div class="form-group row">
                    <div
                      class="col-4"
                      v-for="diagnostic in diagnostics"
                      v-bind:key="diagnostic.id"
                    >
                      <div
                        class="col-md-10"
                        v-if="diagnostic.type === 'checkbox'"
                      >
                        <div class="checkbox">
                          <input
                            type="checkbox"
                            name="checkbox"
                            checked
                            disabled
                            v-model="diagnostic.value"
                            :value="diagnostic.id"
                          />
                          {{ diagnostic.libelle }}
                        </div>
                        <br />
                        <div class="form-group row">
                          <div
                            class="col-md-12"
                            v-if="diagnostic.description === ''"
                          >
                            <textarea
                              type="text"
                              class="form-control"
                              rows="3"
                              disabled
                              :value="diagnostic.description"
                            ></textarea>
                          </div>
                        </div>
                        <br />
                      </div>

                      <div class="col-md-10" v-if="diagnostic.type === 'text'">
                        <div class="form-group row">
                          <label class="col-form-label col-md-2">{{
                            diagnostic.libelle
                          }}</label>
                          <div class="col-md-12">
                            <textarea
                              type="text"
                              class="form-control"
                              rows="3"
                            ></textarea>
                          </div>
                        </div>
                        <br />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="card-box">
                <h4 class="card-title">
                  Examens
                  <input
                    type="checkbox"
                    name="radio"
                    v-model="activerExamens"
                    @change="activerexamen()"
                  />
                </h4>
                <div class="row doctor-grid" v-if="activer_examens">
                  <p>{{ info_message_examens }}</p>
                  <div
                    class="col-md-4 col-sm-4  col-lg-6"
                    v-for="examen in examens"
                    :key="examen.id"
                  >
                    <div class="profile-widget">
                      <h4 class="doctor-name text-ellipsis">
                        <a>{{ examen.libelle }}</a>
                      </h4>
                      <br />
                      <button
                        v-on:click="voir_examen(examen.pivot.examen_id)"
                        type="button"
                        class="btn btn-info"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        Voir +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-box">
                <h4 class="card-title">Pensements</h4>
              </div>
              <div class="card-box">
                <h4 class="card-title">
                  Ordonnance
                  <input
                    type="checkbox"
                    name="radio"
                    v-model="activerOrdonnance"
                    @change="activerordonnance()"
                  />
                </h4>
              </div>
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
      diagnostics: [],
      pensemnts: [],
      examens: [],
      workflows: [],
      liste_constantes: [],
      destination: "",
      preloader: false,
      success: false,
      errors: false,
      checkedAssurance: false,
      message: "",
      search: "",
      medocs: [],
      results: [],
      isOpen: false,
      detail: false,
      info_message_diagnostic: "",
      info_message_examens: "",

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
    this.charger_examen();
  },
  methods: {
    activerdiagnostic() {
      if (this.activer_diagnostic === false) {
        this.activer_diagnostic = true;
      } else {
        this.activer_diagnostic = false;
      }
    },
    activerexamen() {
      if (this.activer_examens === false) {
        this.activer_examens = true;
      } else {
        this.activer_examens = false;
      }
    },
    activerordonnance() {
      if (this.activer_ordonnances === false) {
        this.activer_ordonnances = true;
      } else {
        this.activer_ordonnances = false;
      }
    },
    activerpensemnt() {
      if (this.activer_pensements === false) {
        this.activer_pensements = true;
      } else {
        this.activer_pensements = false;
      }
    },
    setResult(result, id) {
      this.search = result;
      this.id = id;
      this.isOpen = false;
    },
    filterResults() {
      console.log("djdkd", this.medocs[0].libelle);
      this.results = this.medocs.filter(
        (item) =>
          item.libelle.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      );
    },
    onChange() {
      this.filterResults();
      this.isOpen = true;
    },
    charger_medicament() {
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + "/listerMedoc")
        .then((response) => {
          console.log(response.data);
          this.medocs = response.data;
          console.log("medoc :", this.medocs);
        })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });
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
          this.charger_medicament();
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
        .get(chemin + "/dossiersByClient/" + this.$route.params.id)
        .then((response) => {
          console.log("diagnostic list :", response.data.data.diagnostics);
          this.diagnostics = response.data.data.diagnostics;
          if (this.diagnostics.length === 0) {
            this.info_message_diagnostic = "aucun diagnostic fait à ce jour";
          }
        })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });
    },
    charger_examen() {
      console.log("loading......................");
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + "/dossiersByClient/" + this.$route.params.id)
        .then((response) => {
          console.log("examens list :", response.data.data);
          this.examens = response.data.data.examens;
          if (this.examens.length === 0) {
            this.info_message = "Aucun examen fait ce jour";
          }
          this.charger_diagnostic();
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
      this.$router.push("/consultation");
    },
    valider() {
      this.preloader = true;
      console.log("diagnostics :", this.diagnostics);
      console.log("examens :", this.examens);
      console.log("pensements :", this.pensements);
      console.log("destination id", this.destination);
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
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
              "Access-Control-Allow-Origin": "*",
            },
          })
          .post(chemin + "/ajouterDiagnosticDossier ", {
            dossier_id: this.$route.params.id,
            diagnostics: this.diagnostics,
            examens: this.examens,
            pensements: this.pensemnts,
            ordonnances: this.ordonnances,
            destination_service_id: this.destination,
          })
          .then((response) => {
            console.log(response.data);
            this.preloader = false;
            this.success = true;
            location.reload();
            this.message = "Consultation terminée";
            this.ordonnances = [];
          })
          .catch((err) => {
            this.preloader = false;
            console.log(err);
          });
      }
    },
    prescire() {
      console.log("################################");
      this.detail = true;
      const prescription = {
        medicament_id: this.id,
        medicament: this.search,
        quantite: this.quantite,
        posologie: this.posologie,
      };
      this.ordonnances.push(prescription);
      console.log("ordonnances or :", prescription);
      console.log("ordonnances or :", this.ordonnances);
      this.search = "";
      this.quantite = "";
      this.posologie = "";
      this.id = "";
      this.isOpen = false;
    },
    annuler() {
      this.ordonnances = [];
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
