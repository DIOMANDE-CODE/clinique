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
          <div class="row">
            <div class="col-lg-12">
              <div class="card-box">
                <h4 class="card-title">
                  Diagnostics
                  <i
                    v-if="activer_diagnostic === false"
                    @change="activerdiagnostic()"
                    class="fa fa-plus-circle"
                    style="cursor:pointer;"
                    v-on:click="activerdiagnostic()"
                  ></i>
                  <i
                    v-if="activer_diagnostic"
                    @change="activerdiagnostic()"
                    style="cursor:pointer;"
                    v-on:click="activerdiagnostic()"
                    class="fa fa-minus-circle"
                  ></i>
                </h4>
                <form v-if="activer_diagnostic">
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
                            v-model="diagnostic.value"
                            :value="diagnostic.id"
                          />
                          {{ diagnostic.libelle }}
                        </div>
                        <br />
                        <div v-if="diagnostic.value" class="form-group row">
                          <div class="col-md-12">
                            <textarea
                              type="text"
                              class="form-control"
                              rows="3"
                              placeholder="détail"
                              v-model="diagnostic.description"
                            ></textarea>
                          </div>
                        </div>
                        <br />
                      </div>
                      <div class="col-md-10" v-if="diagnostic.type === 'text'">
                        <div class="form-group row">
                          <label class="col-form-label col-md-12">{{
                            diagnostic.libelle
                          }}</label>
                          <div class="col-md-12">
                            <textarea
                              type="text"
                              class="form-control"
                              rows="3"
                              v-model="diagnostic.description"
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
                  <i
                    v-if="activer_examens === false"
                    @change="activerexamen()"
                    class="fa fa-plus-circle"
                    style="cursor:pointer;"
                    v-on:click="activerexamen()"
                  ></i>
                  <i
                    v-if="activer_examens"
                    @change="activerexamen()"
                    style="cursor:pointer;"
                    v-on:click="activerexamen()"
                    class="fa fa-minus-circle"
                  ></i>
                </h4>
                <form action="#" v-if="activer_examens">
                  <div class="form-group row">
                    <div
                      class="col-4"
                      v-for="examen in examens"
                      v-bind:key="examen.id"
                    >
                      <div class="col-md-10">
                        <div class="checkbox">
                          <input
                            type="checkbox"
                            name="checkbox"
                            v-model="examen.value"
                          />
                          {{ examen.libelle }}
                        </div>
                        <br />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="card-box">
                <h4 class="card-title">
                  Pansements
                  <i
                    v-if="activer_pensements === false"
                    @change="activerpensement()"
                    class="fa fa-plus-circle"
                    style="cursor:pointer;"
                    v-on:click="activerpensement()"
                  ></i>
                  <i
                    v-if="activer_pensements"
                    @change="activerpensement()"
                    style="cursor:pointer;"
                    v-on:click="activerpensement()"
                    class="fa fa-minus-circle"
                  ></i>
                </h4>
                <form action="#" v-if="activer_pensements">
                  <div class="form-group row">
                    <div
                      class="col-4"
                      v-for="examen in medocs"
                      v-bind:key="examen.id"
                    >
                      <div class="col-md-10">
                        <div class="checkbox">
                          <input
                            type="checkbox"
                            name="checkbox"
                            v-model="examen.value"
                          />
                          {{ examen.libelle }}
                        </div>
                        <br />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="card-box">
                <h4 class="card-title">
                  Ordonnance
                  <i
                    v-if="activer_ordonnances === false"
                    @change="activerordonnance()"
                    class="fa fa-plus-circle"
                    style="cursor:pointer;"
                    v-on:click="activerordonnance()"
                  ></i>
                  <i
                    v-if="activer_ordonnances"
                    @change="activerordonnance()"
                    style="cursor:pointer;"
                    v-on:click="activerordonnance()"
                    class="fa fa-minus-circle"
                  ></i>
                </h4>
                <form action="#" v-if="activer_ordonnances">
                  <div class="form-group">
                    <div class="form-group row">
                      <label class="col-form-label col-md-2"
                        >Médicament(s)</label
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
              <div class="form-group row">
                <label class="col-form-label col-md-3"
                  >Service destinataire :</label
                >
                <div
                  class="col-md-3"
                  v-for="workflow in workflows"
                  v-bind:key="workflow.id"
                >
                  <div class="checkbox">
                    <input
                      type="checkbox"
                      name="checkbox"
                      v-model="workflow.value"
                      :value="workflow.id"
                    />
                    {{ workflow.service.nom }}
                  </div>
                </div>
              </div>
              <div class="m-t-20 text-center">
                <button
                  type="button"
                  class="btn btn-warning submit-btn"
                  v-on:click="valider"
                  style="color:white;"
                >
                  Transferer le patient</button
                >&nbsp; &nbsp; &nbsp;
                <button
                  type="button"
                  class="btn btn-success submit-btn"
                  v-on:click="terminer"
                >
                  Terminer
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
      diagnostic: [],
      pensements: [],
      pensement: [],
      examens: [],
      examen: [],
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
    this.charger_diagnostic();
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
    charger_pensement() {
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
          
          this.medocs = response.data;
          this.charger_info();
        })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });
    },
    charger_info() {

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
          this.dossier_id = response.data.data.client_id;

          const examens_fait = response.data.data.examens;
          examens_fait.forEach((exam) => {
            this.examen.push(exam.id);
          });

          this.examens.forEach((exa) => {
            if (this.examen.includes(exa.id)) {
              exa.value = true;
            }
          });

          const diagnostics_fait = response.data.data.diagnostics;
          diagnostics_fait.forEach((diag) => {
            this.diagnostic.push(diag.id);
          });

          this.diagnostics.forEach((diagno) => {
            if (this.diagnostic.includes(diagno.id)) {
              diagno.value = true;
            }
          });

          const pensements_fait = response.data.data.pensements;
          pensements_fait.forEach((pens) => {
            this.pensement.push(pens.id);
          });

          this.medocs.forEach((pensem) => {
            if (this.pensement.includes(pensem.id)) {
              pensem.value = true;
            }
          });
        })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });
    },
    terminer() {
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
          status: "termine",
        })
        .then((response) => {
          
          if (response.data.state === "true") {
            this.preloader = false;
             this.$swal({
              html: "Consultation terminé",
              icon:"success",
              confirmButtonText: `OK`,
            }).then((result) => {
              if (result.isConfirmed) {
                this.preloader = false;
                this.$router.push("/consultation");
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
          this.charger_pensement();
        })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });
    },
    charger_diagnostic() {
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + "/listeDesDiagnostics")
        .then((response) => {
          this.diagnostics = response.data;
          this.charger_examen();
        })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });
    },
    charger_examen() {
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + "/listeDesExamens")
        .then((response) => {
          this.examens = response.data;
          this.charger_workfow();
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
      this.$router.push("/consultation");
    },
    valider() {
      this.preloader = true;
      let count = 0;
      this.workflows.forEach((element) => {
        if (element.value) {
          count++;
        }
      });
      if (count === 0) {
        this.errors = true;
        this.message = "Veuillez indiquer un destinataire";
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
            pensements: this.medocs,
            ordonnances: this.ordonnances,
            workflows: this.workflows,
          })
          .then((response) => {
            if (response.data.state) {
                this.preloader = false;
                this.$swal({
                  html: "Transfert effectué",
                  icon: "success",
                  confirmButtonText: `OK`,
                }).then((result) => {
                  if (result.isConfirmed) {
                    this.preloader = false;
                    this.success = true;
                    this.ordonnances = [];
                    this.$router.push("/consultation");
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
