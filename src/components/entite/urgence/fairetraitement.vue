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
        <div class="row" style=" height : 500px; overflow-y: scroll;">
          <div class="col-md-6" >
            <p style="text-decoration: underline">
              <b>Traitements précédents</b>
            </p>
            <div class="table-responsive" v-for="(traitement,index) in traitements_fait" :key="index" >
              <table class="table table-striped custom-table table-bordered" >
                <div>
                  <thead>
                    <tr>
                      <th>Heures</th>
                      <th class="text-center"  colspan="3" >
                        H{{index}}
                      </th>
                    </tr>
                    <tr>
                      <th></th>
                      <th>Dose</th>
                      <th>Voie</th>
                      <th>heure</th>
                    </tr>
                  </thead>
                  <tbody>
                      <tr v-for="(trait,ind) in traitement[0]" :key="ind">
                        <td>{{trait.libelle}}</td>
                        <td>{{trait.dose}}</td>
                        <td>{{trait.voie}}</td>
                        <td>{{trait.heure}}</td>
                      </tr>
                  </tbody>
                </div>
              </table>
            </div>
          </div>
          <div class="col-md-6" >
            <p style="text-decoration: underline">
              <b>valeurs des constantes précédents</b>
            </p>
            <div class="table-responsive" v-for="(traitement,index) in constantes_fait" :key="index" >
              <table class="table table-striped custom-table table-bordered" >
                <div>
                  <thead>
                    <tr>
                      <th>Heures</th>
                      <th class="text-center"  colspan="3" >
                        H{{index}}
                      </th>
                    </tr>
                    <tr>
                      <th></th>
                      <th>Valeur</th>
                      <th>heure</th>
                    </tr>
                  </thead>
                  <tbody>
                      <tr v-for="(trait,ind) in traitement[0]" :key="ind">
                        <td>{{trait.libelle}}</td>
                        <td>{{trait.value}}</td>
                        <td>{{trait.heure}}</td>
                      </tr>
                  </tbody>
                </div>
              </table>
            </div>
          </div>
        </div>
        <br /><br />
        <p style="text-decoration: underline">
          <b>Faire un nouveau traitement</b>
        </p>
        <br /><br />
        <div class="content">
          <div class="row doctor-grid">
            <div
              class="col-md-4 col-sm-4  col-lg-4"
              v-for="examen in traitements"
              :key="examen.id"
            >
              <div class="profile-widget">
                <h4 class="doctor-name text-ellipsis">
                  <a>{{ examen.libelle }}</a>
                </h4>
                <br />
                <div class="col-sm-12">
                  <div class="form-group">
                    <label>Doses </label>
                    <input
                      class="form-control"
                      type="text"
                      v-model="examen.dose"
                    />
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="form-group">
                    <label>Voie </label>
                    <input
                      class="form-control"
                      type="text"
                      v-model="examen.voie"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr> <hr>
        <p style="text-decoration: underline">
          <b>Prendre les constantes</b>
        </p>
        <br /><br />
        <div class="content">
          <div class="row doctor-grid">
            <div
              class="col-md-4 col-sm-4  col-lg-4"
              v-for="constant in constantelist"
              :key="constant.id"
            >
              <div class="profile-widget">
                <h4 class="doctor-name text-ellipsis">
                  <a>{{ constant.libelle }}</a>
                </h4>
                <br />
                <div class="col-sm-12">
                  <div class="form-group">
                    <label>valeur </label>
                    <input
                      class="form-control"
                      type="text"
                      v-model="constant.value"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="m-t-20 text-center">
            <button
              type="button"
              class="btn btn-success submit-btn"
              v-on:click="storeTraitement"
            >
              Enregistrer
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
      traitements: [],
      traitements_fait: [],
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
      voie: "",
      dose: "",

      activer_diagnostic: false,
      activer_examens: false,
      activer_ordonnances: false,
      activer_pensements: false,
      constantelist:[],
      constantes_fait: [],
    };
  },
  components: {
    loader,
  },
  created() {
    this.listeTraitementUrgence();
    this.charger_workfow();
    this.charger_traitement();
    this.constante()
    
  },
  methods: {
    paye(id, result) {
      solde = result;
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
        })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });
    },
    constante() {
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
          this.constantelist = response.data
          this.constanteByDossier()
        })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });
    },
    charger_traitement() {
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + "/traitementsByDossier/" + this.$route.params.id)
        .then((response) => {
          var result = Object.keys(response.data).map((key) => [response.data[key]]);
          
          result.forEach(element => {
                element.forEach(element1 => {
                      element1.forEach(element2 => {
                          this.traitements.forEach(cons => {
                            if (element2.traitement_id == cons.id) {
                                element2.libelle = cons.libelle
                                
                              }
                          });
                      });
                });
              });
          this.traitements_fait = result;
         
        })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });
    },
    listeTraitementUrgence() {
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + "/listeDesTraitementsUrgence")
        .then((response) => {
          this.traitements = response.data;
          if (this.traitements.length === 0) {
            this.message_diagnostic = "Aucun n'examen pour ce patient";
          }
        })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });
    },
    retourner() {
      this.$router.push("/urgence/" + this.$route.params.id);
    },
    onFilesSelected(e) {
      this.file = e.target.files[0];
    },
    storeTraitement() {
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
          .post(chemin + "/ajouterTraitementDossier", {
            dossier_id: this.$route.params.id,
            traitements: this.traitements,
          })
          .then((response) => {
            
            this.validerConstante()
            this.preloader = false;
            this.$swal({
              html: "Traitement effectué",
              icon: "success",
              confirmButtonText: `OK`,
            }).then((result) => {
              
              if (result.isConfirmed) {
                this.listeTraitementUrgence();
                this.charger_workfow();
                this.charger_traitement();
              }
            });
          })
          .catch((err) => {
            this.preloader = false;
            console.log(err);
          });
      }
    },
    validerConstante() {
      this.preloader = true;
        axios
          .create({
            headers: {
              "Content-Type": "application/json,multipart/form-data",
              Authorization: "Bearer " + localStorage.getItem("token"),
              "Access-Control-Allow-Origin": "*",
            },
          })
          .post(chemin + "/ajouterConstanteDossier", {
            dossier_id: this.$route.params.id,
            constantes: this.constantelist,
          })
          .then((response) => {
            
            this.preloader = false;
            this.$swal({
              html: "Traitement effectué",
              icon: "success",
              confirmButtonText: `OK`,
            }).then((result) => {
              if (result.isConfirmed) {
                this.listeTraitementUrgence();
                this.charger_workfow();
                this.charger_traitement();
                this.constanteByDossier()
              }
            });
          })
          .catch((err) => {
            this.preloader = false;
            console.log(err);
          });
    },
    constanteByDossier() {
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + "/constantesByDossier/" + this.$route.params.id)
        .then((response) => {
            var result = Object.keys(response.data).map((key) => [response.data[key]]);
            
              result.forEach(element => {
                element.forEach(element1 => {
                      element1.forEach(element2 => {
                          this.constantelist.forEach(cons => {
                            if (element2.constante_id == cons.id) {
                                element2.libelle = cons.libelle
                                
                              }
                          });
                      });
                });
              });
          this.constantes_fait = result;
        })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });
    },
    valider(pk, ligne_id, solder) {
      if (solder === true) {
        solder = 1;
      }

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
          .post(chemin + "/ajouterTraitementDossier", {
            traitements: this.traitements,
          })
          .then((response) => {
            
            if (response.data.state === "true") {
              this.preloader = false;
              this.success = true;
              this.message = "examen effectué";
              this.examens.examens.forEach((exam) => {
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
