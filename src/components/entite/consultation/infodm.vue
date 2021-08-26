<template>
  <div>
    <loader v-if="preloader"></loader>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Fiche d'examen</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" style="height:500px;">
            <iframe
              id="inlineFrameExample"
              title="Inline Frame Example"
              width="1100"
              height="450"
              :src="'http://192.168.1.7:8000/' + fiche_examens"
            >
            </iframe>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
    <img
      src="../../../assets/img/clock.png"
      alt="examen"
      width="100%"
      height="800px"
    />
    <div class="page-wrapper">
      <div class="content">
        <div class="m-t-15">
          <button class="btn btn-primary btn-rounded" v-on:click="retourner">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
          </button>
          <button
            style="position:relative; left:80%"
            class="btn btn-warning btn-rounded"
            v-on:click="faire_diagnostic"
          >
            <i class="fa fa-code-fork"></i> Consulter le patient
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
                <form action="#" v-if="activer_diagnostic">
                  <p>{{ info_message_diagnostic }}</p>

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
                <div class="row doctor-grid" v-if="activer_examens">
                  <p>{{ info_message_examen }}</p>
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
                        v-on:click="voir_examen(examen.pivot.resultat)"
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
                  <p>{{ info_message_pensements }}</p>

                  <div class="form-group row">
                    <div
                      class="col-4"
                      v-for="diagnostic in pensements"
                      v-bind:key="diagnostic.id"
                    >
                      <div class="col-md-10">
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
                <div class="row">
                  <div class="col-md-12" v-if="activer_ordonnances">
                    <p>{{ message_info_ordonnance }}</p>
                    <div class="table-responsive">
                      <table class="table table-striped custom-table">
                        <thead>
                          <tr>
                            <th>Medicament</th>
                            <th>Quantié</th>
                            <th>Dosage</th>
                            <th>Posologie</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="employe in ordonnances"
                            v-bind:key="employe.id"
                          >
                            <td>
                              {{ employe.libelle }}
                            </td>
                            <td>
                              {{ employe.pivot.quantity }}
                            </td>
                            <td>
                              {{ employe.dosage }}
                            </td>
                            <td>
                              {{ employe.pivot.posologie }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              style="position:relative; left:38%;"
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
      info_message_pensements: "",
      fiche_examens: null,

      medicament: "",
      quantite: "",
      posologie: "",
      ordonnances: [],
      pensements: [],
      id: "",
      dossier_id: 0,
      consultation: false,

      activer_diagnostic: false,
      activer_examens: false,
      activer_ordonnances: false,
      activer_pensements: false,
    };
  },
  components: {
    loader,
  },
  mounted() {
    this.charger_diagnostic();
  },
  methods: {
    voir_examen(fiche) {
      console.log("id :", fiche);
      this.fiche_examens = fiche;
    },
    terminer() {
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
          status: "termine",
        })
        .then((response) => {
          console.log(response.data);
          if (response.data.state === "true") {
            this.preloader = false;
            this.$swal({
              html: "Consultation terminé",
              icon: "success",
              confirmButtonText: `OK`,
            }).then((result) => {
              if (result.isConfirmed) {
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
    faire_diagnostic() {
      this.$router.push("/consultation/diagnostic/" + this.$route.params.id);
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
    activerpensement() {
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
          this.charger_ordonnance();
        })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });
    },
    charger_ordonnance() {
      console.log("examen");
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
          console.log("ordonnance list :", response.data.data.ordonnances);
          let merge = [];
          response.data.data.ordonnances.forEach((ordo) => {
            ordo.medicaments.forEach((medoc) => {
              merge.push(medoc);
            });
          });
          this.ordonnances = merge;
          console.log("ordonnances :", this.ordonnances);
          if (this.ordonnances.length === 0) {
            this.message_info_ordonnance =
              "Aucune ordonnance prescrite fait ce jour";
          }
          this.charger_examen();
        })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });
    },
    charger_examen() {
      console.log("loading......................");
      console.log("params :", this.$route.params);

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
          this.dossier_id = response.data.data.client_id;
          this.examens = response.data.data.examens;
          if (this.examens.length === 0) {
            this.info_message_examen = "Aucun examen fait ce jour";
          }
          this.charger_pensement();
        })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });
    },
    charger_pensement() {
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
          console.log("pensements list :", response.data.data);
          this.pensements = response.data.data.pensements;
          if (this.pensements.length === 0) {
            this.info_message_pensements = "Aucun pensement fait ce jour";
          }
          if (
            this.pensements.length === 0 &&
            this.ordonnances.length === 0 &&
            this.examens.length === 0 &&
            this.diagnostics.length === 0
          ) {
            this.consultation = true;
          }
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
            this.message = "Consultation terminée";
            this.ordonnances = [];
            this.$router.push("/consultation");
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
