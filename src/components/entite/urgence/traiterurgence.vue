<template>
  <div>
    <loader v-if="preloader"></loader>
    <div class="page-wrapper">
      <div class="content">
        <div class="m-t-15">
          <button class="btn btn-primary btn-rounded" v-on:click="retourner">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
          </button>
          <button
            class="btn btn-secondary btn-rounded"
            v-on:click="faire_traitement"
            style="position:relative; left:83%;"
          >
            Faire son traitement
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
                  Faire une prescription
                </h4>
                <form action="#">
                  <div class="form-group">
                    <div class="form-group row">
                      <label class="col-form-label col-md-2"
                        >Traitements(s)</label
                      >
                      <div class="col-md-10">
                        <input
                          type="text"
                          class="form-control"
                          v-model="search"
                          @input="onChange"
                        />
                        <ul class="autocomplete-results" v-show="isOpen">
                          <li
                            class="autocomplete-result"
                            v-for="(result, i) in results"
                            :key="i"
                            @click="setResult(result.libelle, result.id)"
                          >
                            {{ result.libelle }}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-form-label col-md-2">Quantité(s)</label>
                      <div class="col-md-10">
                        <input
                          type="number"
                          class="form-control"
                          v-model="quantite"
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-form-label col-md-2"
                        >Posologie(s)</label
                      >
                      <div class="col-md-10">
                        <textarea
                          type="text"
                          class="form-control"
                          rows="3"
                          v-model="posologie"
                        ></textarea>
                      </div>
                    </div>
                    <div class="m-t-20 text-right">
                      <button
                        class="btn btn-secondary btn-submit"
                        style="color:white;"
                        type="button"
                        v-on:click="annuler"
                      >
                        Annuler</button
                      >&nbsp;&nbsp;
                      <button
                        class="btn btn-warning btn-submit"
                        style="color:white;"
                        type="button"
                        v-on:click="prescire"
                      >
                        Prescire
                      </button>
                    </div>
                  </div>

                  <div class="tab-pane show active" id="about-cont">
                    <br /><br />
                    <div class="row">
                      <div class="col-md-12">
                        <div class="card-box" v-if="detail">
                          <h3 class="card-title">
                            Detail de l'ordonnances
                          </h3>
                          <div class="experience-box">
                            <ul class="experience-list">
                              <li
                                v-for="(attribution_departement_service,
                                cle) in ordonnances"
                                :key="cle"
                              >
                                <div class="experience-user">
                                  <div class="before-circle"></div>
                                </div>
                                <div class="experience-content">
                                  <div class="timeline-content">
                                    <a class="name"
                                      >{{
                                        attribution_departement_service.medicament
                                      }}
                                      (
                                      {{
                                        attribution_departement_service.quantite
                                      }})</a
                                    ><br /><br />
                                    &nbsp;&nbsp;<span
                                      class="custom-badge status-grey"
                                      >{{
                                        attribution_departement_service.posologie
                                      }}</span
                                    >&nbsp;&nbsp;
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="m-t-20 text-center">
                <button
                  type="button"
                  class="btn btn-success submit-btn"
                  v-on:click="valider"
                >
                  Valider
                </button>
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
      pensements: [],
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
    this.charger_medicament();
  },
  methods: {
    activerpensement() {
      if (this.activer_pensements === false) {
        this.activer_pensements = true;
      } else {
        this.activer_pensements = false;
      }
    },
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
        // .get(chemin + "/listeDesTraitementsUrgence")
        .get(chemin + "/listerMedoc")
        .then((response) => {
          this.medocs = response.data;
        })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });
    },
    charger_workfow() {
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
          
          this.workflows = response.data.data;
          this.charger_medicament();
        })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });
    },
    prise_constante(id, val) {
      const valeur = {
        constante_id: id,
        value: val,
      };

      this.liste_constantes.push(valeur);
    },
    retourner() {
      this.$router.push("/urgence");
    },
    faire_traitement() {
      this.$router.push("/urgence/traitement/" + this.$route.params.id);
    },
    valider() {
      this.preloader = true;
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .post(chemin + "/ajouterOrdonnanceDossier", {
          dossier_id: this.$route.params.id,
          ordonnances: this.ordonnances,
        })
        .then((response) => {
          if (response.data.state) {
              this.preloader = false;
              this.success = true;
              this.message = "Medicament(s) prescri";
              this.ordonnances = [];
          }
          
        })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });
    },
    prescire() {
      this.detail = true;
      const prescription = {
        medicament_id: this.id,
        medicament: this.search,
        quantite: this.quantite,
        posologie: this.posologie,
      };
      this.ordonnances.push(prescription);
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
