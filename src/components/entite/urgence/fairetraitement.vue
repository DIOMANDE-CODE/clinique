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
        <div class="row">
          <div class="col-md-12" style=" height : 500px; overflow-y: scroll;">
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
                        <td>hjfhjfh</td>
                        <td>{{trait.dose}}</td>
                        <td>{{trait.voie}}</td>
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
          <div class="m-t-20 text-center">
            <button
              type="button"
              class="btn btn-success submit-btn"
              v-on:click="transferer"
            >
              Appliquer le traitement
            </button>
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
              v-for="examen in constantelist"
              :key="examen.id"
            >
              <div class="profile-widget">
                <h4 class="doctor-name text-ellipsis">
                  <a>{{ examen.libelle }}</a>
                </h4>
                <br />
                <div class="col-sm-12">
                  <div class="form-group">
                    <label>valeur </label>
                    <input
                      class="form-control"
                      type="text"
                      v-model="examen.value"
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
              v-on:click="validerConstante"
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
      constantelist:[]
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
    this.constanteByDossier()
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
          this.workflows = response.data.data;
          console.log("workflow :", this.workflows);
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
          console.log('constante:',this.constantelist)
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
            console.log("traitements dossier :", response.data);
          var result = Object.keys(response.data).map((key) => [response.data[key]]);
          console.log("traitements dossier :", result);

          this.traitements_fait = result;
          response.data.forEach((traitement) => {
            console.log("traitement :", traitement);
          });
        })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });
    },
    listeTraitementUrgence() {
      console.log("loading......................");
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
          .post(chemin + "/ajouterTraitementDossier", {
            dossier_id: this.$route.params.id,
            traitements: this.traitements,
          })
          .then((response) => {
            console.log(response.data);
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
      console.log("destination :", this.destination);
      console.log("examens :", this.constantelist);
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
          .post(chemin + "/ajouterConstanteDossier", {
            dossier_id: this.$route.params.id,
            traitements: this.traitements,
          })
          .then((response) => {
            console.log(response.data);
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
            console.log("constantes dossier :", response.data);
         
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
      console.log("purchased", this.achat);

      console.log(pk, ligne_id);
      this.preloader = true;
      console.log("image :", solder);
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
