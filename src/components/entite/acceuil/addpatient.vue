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
              AJOUTER
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
                <div class="col-sm-6">
                  <div class="form-group">
                    <label> Objet <span class="text-danger">*</span></label>
                    <input
                      class="form-control"
                      type="text"
                      v-model="objet"
                      required
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>Nom <span class="text-danger">*</span></label>
                    <input
                      class="form-control"
                      type="text"
                      v-model="nom"
                      required
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>Prénom <span class="text-danger">*</span></label>
                    <input
                      class="form-control"
                      type="text"
                      v-model="prenom"
                      required
                    />
                  </div>
                </div>
                <div class="form-group col-sm-6">
                  <label class="display-block">Sexe </label>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="quartier"
                      id="employee_active"
                      value="homme"
                      v-model="sexe"
                    />
                    <label class="form-check-label" for="employee_active">
                      H
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="quartier"
                      id="employee_inactive"
                      value="femme"
                      v-model="sexe"
                    />
                    <label class="form-check-label" for="employee_inactive">
                      F
                    </label>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label
                      >Date de naissance <span class="text-danger">*</span>
                    </label>
                    <input
                      type="date"
                      class="form-control"
                      :max="today"
                      v-model="date"
                      required
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label
                      >Nationalité <span class="text-danger">*</span>
                    </label>
                    <input
                      class="form-control"
                      type="text"
                      v-model="nationnalite"
                      required
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>Ethnie</label>
                    <input class="form-control" type="text" v-model="ethnie" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>Lieu de naissance </label>
                    <input
                      class="form-control"
                      type="text"
                      v-model="lieu_naissance"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>Résidence </label>
                    <input
                      class="form-control"
                      type="text"
                      v-model="residence"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>Quartier </label>
                    <input
                      class="form-control"
                      type="text"
                      v-model="quartier"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>Contact fix </label>
                    <input class="form-control" type="number" v-model="fix" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label
                      >Contact cellulaire
                      <span class="text-danger">*</span></label
                    >
                    <input
                      class="form-control"
                      type="number"
                      v-model="telephone"
                      required
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>Email</label>
                    <input class="form-control" type="email" v-model="mail" />
                  </div>
                </div>
                <div class="form-group col-sm-6">
                  <label class="display-block">Assurances </label>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="assurance"
                      id="employee_active"
                      value="1"
                      v-model="assurance"
                      @change="checkAssurance(assurance)"
                    />
                    <label class="form-check-label" for="employee_active">
                      Oui
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="assurance"
                      id="employee_inactive"
                      value="0"
                      v-model="assurance"
                      @change="checkAssurance(assurance)"
                    />
                    <label class="form-check-label" for="employee_inactive">
                      Non
                    </label>
                  </div>
                </div>
                <div class="form-group col-sm-6" v-if="checkedAssurance">
                  <label class="col-form-label ">
                    Maison d'assurance<span class="text-danger">*</span>
                  </label>
                  <div class="col-md-12 p-0">
                    <select class="form-control" v-model="assurance_nom">
                      <option value="0" disabled
                        >Choisissez son assurance</option
                      >
                      <option
                        required
                        :value="serv.id"
                        v-for="serv in assurances"
                        v-bind:key="serv.id"
                        >{{ serv.nom }}</option
                      >
                    </select>
                  </div>
                </div>
                <div class="col-sm-6" v-if="checkedAssurance">
                  <div class="form-group">
                    <label> Matricule de l'assurance</label>
                    <input
                      class="form-control"
                      type="text"
                      v-model="matricule_assurance"
                    />
                  </div>
                </div>
                <div class="col-sm-6" v-if="checkedAssurance">
                  <div class="form-group">
                    <label> Taux de couverture<span class="text-danger">*</span></label>
                    <input
                      class="form-control"
                      type="number"
                      v-model="pourcentage"
                    />
                  </div>
                </div>
                <div class="col-sm-6" v-if="checkedAssurance">
                  <div class="form-group">
                    <label> Numéro de bon</label>
                    <input
                      class="form-control"
                      type="number"
                      v-model="bon_assurance"
                    />
                  </div>
                </div>
                <div class="col-sm-6" v-if="checkedAssurance">
                  <div class="form-group">
                    <label> Acte de l'assurance</label>
                    <input
                      class="form-control"
                      type="text"
                      v-model="acte_assurance"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label> Profession</label>
                    <input
                      class="form-control"
                      type="text"
                      v-model="profession"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label> Formation</label>
                    <input
                      class="form-control"
                      type="text"
                      v-model="formation"
                    />
                  </div>
                </div>
                <div class="form-group col-sm-6">
                  <label class="display-block"> Situation professionnel </label>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="activite"
                      id="employee_active"
                      value="retraite"
                      v-model="activite"
                    />
                    <label class="form-check-label" for="employee_active">
                      Retraité
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="activite"
                      id="employee_inactive"
                      value="chomage"
                      v-model="activite"
                    />
                    <label class="form-check-label" for="employee_inactive">
                      Chômage
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="activite"
                      id="employee_inactive"
                      value="activite"
                      v-model="activite"
                    />
                    <label class="form-check-label" for="employee_inactive">
                      En activté
                    </label>
                  </div>
                </div>
                <div class="form-group col-sm-6">
                  <label class="display-block">Niveau d'instruction </label>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="instruction"
                      id="employee_active"
                      value="non"
                      v-model="instruction"
                    />
                    <label class="form-check-label" for="employee_active">
                      NON
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="instruction"
                      id="employee_inactive"
                      value="primaire"
                      v-model="instruction"
                    />
                    <label class="form-check-label" for="employee_inactive">
                      Primaire
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="instruction"
                      id="employee_inactive"
                      value="secondaire"
                      v-model="instruction"
                    />
                    <label class="form-check-label" for="employee_inactive">
                      Secondaire
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="instruction"
                      id="employee_inactive"
                      value="superieur"
                      v-model="instruction"
                    />
                    <label class="form-check-label" for="employee_inactive">
                      Supérieur
                    </label>
                  </div>
                </div>
                <div class="form-group col-sm-6">
                  <label class="display-block">Situation matrimoniale </label>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="matrimoniale"
                      id="employee_active"
                      value="celibataire"
                      v-model="matrimoniale"
                    />
                    <label class="form-check-label" for="employee_active">
                      Célibataire
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="matrimoniale"
                      id="employee_inactive"
                      value="marie(e)"
                      v-model="matrimoniale"
                    />
                    <label class="form-check-label" for="employee_inactive">
                      Marié(e)
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="matrimoniale"
                      id="employee_inactive"
                      value="en couple"
                      v-model="matrimoniale"
                    />
                    <label class="form-check-label" for="employee_inactive">
                      En couple
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="matrimoniale"
                      id="employee_inactive"
                      value="divorce(e)"
                      v-model="matrimoniale"
                    />
                    <label class="form-check-label" for="employee_inactive">
                      Divorcé
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="matrimoniale"
                      id="employee_inactive"
                      value="veuf(ve)"
                      v-model="matrimoniale"
                    />
                    <label class="form-check-label" for="employee_inactive">
                      Veuf(ve)
                    </label>
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
                Creer
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
import moment from "moment";
moment.locale("fr");

export default {
  data() {
    return {
      // Data of patient
      objet: "",
      nom: "",
      prenom: "",
      sexe: "",
      date: "",
      nationnalite: "",
      ethnie: "",
      lieu_naissance: "",
      residence: "",
      quartier: "",
      fix: "",
      telephone: "",
      email: "",
      assurance: "",
      assurance_nom: "",
      matricule_assurance: "",
      numero_assurance: "",
      acte_assurance: "",
      bon_assurance: "",
      profession: "",
      formation: "",
      activite: "",
      instruction: "",
      matrimoniale: "",
      pourcentage: "",
      assurances: [],

      preloader: false,
      success: false,
      errors: false,
      checkedAssurance: false,
      message: "",
      today:null
    };
  },
  components: {
    loader,
  },
  mounted() {
    this.today = new Date
   let t =  moment(this.today).subtract(7, 'years').format("YYYY-MM-DD");
    console.log(t)
    this.today = t
    this.preloader = true;
    axios
      .create({
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Access-Control-Allow-Origin": "*",
        },
      })
      .get(chemin + "/listAssurances")
      .then((response) => {
        
        if (response.data.state === true) {
          this.preloader = false;
          this.assurances = response.data.data;
        } else {
          this.preloader = false;
          this.message = "Aucune assurances existantes";
          console.log("erreur de chargement");
        }
      });
  },
  methods: {
    retourner() {
      this.$router.push("/acceuil");
    },
    renitialiser() {
      (this.objet = ""),
        (this.nom = ""),
        (this.prenom = ""),
        (this.sexe = ""),
        (this.date = ""),
        (this.nationnalite = ""),
        (this.ethnie = ""),
        (this.lieu_naissance = ""),
        (this.residence = ""),
        (this.quartier = ""),
        (this.fix = ""),
        (this.telephone = ""),
        (this.email = ""),
        (this.assurance = ""),
        (this.nom_assurance = ""),
        (this.matricule_assurance = ""),
        (this.numero_assurance = ""),
        (this.acte_assurance = ""),
        (this.bon_assurance = ""),
        (this.profession = ""),
        (this.formation = ""),
        (this.activite = ""),
        (this.instruction = ""),
        (this.matrimoniale = "");
    },
    checkAssurance(pk) {
      if (pk === "1") {
        this.checkedAssurance = true;
      } else {
        this.checkedAssurance = false;
      }
    },
    ajouter() {
      if (
        this.nom === "" ||
        this.prenom === "" ||
        this.nationnalite === "" ||
        this.nationnalite === "" ||
        this.telephone === "" ||
        this.date === "" ||
        this.addresse === "" ||
        this.situation === "" ||
        this.genre === "" ||
        this.email === "" ||
        this.code === "" ||
        this.role === "" ||
        this.clinique === "" ||
        this.departement === "" ||
        this.service === "" ||
        this.profile === ""
      )
        this.preloader = true;
      var patient = {
        objet: this.objet,
        nom: this.nom,
        prenoms: this.prenom,
        sexe: this.sexe,
        date_naissance: this.date,
        nationalite: this.nationnalite,
        ethnie: this.ethnie,
        lieu_naissance: this.lieu_naissance,
        residence_ville: this.residence,
        quartier: this.quartier,
        contacts_fixe: this.fix,
        contacts_cel: this.telephone,
        email: this.mail,
        assurance: this.assurance,
        assurance_id: this.assurance_nom,
        numero_bon: this.bon_assurance,
        matricule: this.matricule_assurance,
        acte: this.acte_assurance,
        profile_id: localStorage.getItem("identifiant"),
        profession: this.profession,
        formation: this.formation,
        etat_professionnel: this.activite,
        instruction: this.instruction,
        status_matrimonial: this.matrimoniale,
        pourcentage: this.pourcentage,
      };
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .post(chemin + "/ajouterPatient", patient)
        .then((response) => {
          console.log(response.data)
          this.preloader = false;
          if (response.data.state) {
              this.$swal({
                html: "Patient enregistré",
                confirmButtonText: `Oui`,
              }).then((result) => {
                if (result.isConfirmed) {
                  
                  this.$router.push("/acceuil/profil/" + this.$route.params.id);
                }
              });
          }
          
          
        })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });
    },
  },
};
</script>
