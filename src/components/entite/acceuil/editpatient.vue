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
              MODIFIER
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
                    />
                    <label class="form-check-label" for="employee_inactive">
                      Non
                    </label>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label> Nom de l'assurance</label>
                    <input
                      class="form-control"
                      type="text"
                      v-model="nom_assurance"
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
                  <label class="display-block">En activté </label>
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
                </div>
                <div class="form-group col-sm-6">
                  <label class="display-block">Niveau d'instruction </label>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="instruction"
                      id="employee_active"
                      value="non scolarise"
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
              <button class="btn btn-success submit-btn" v-on:click="modifier">
                Modifier
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
      // Data of patient
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
      nom_assurance: "",
      profession: "",
      formation: "",
      activite: "",
      instruction: "",
      matrimoniale: "",

      preloader: false,
      success: false,
      errors: false,
      message: "",
    };
  },
  created() {
      this.charger()
  },
  components: {
    loader,
  },
  methods: {
    charger() {
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + "/patient/" + this.$route.params.id)
        .then((response) => {
          console.log(response.data);
          this.preloader = false;
          this.nom = response.data.nom;
          this.prenom = response.data.prenoms;
          this.sexe = response.data.sexe;
          this.date = response.data.date_naissance;
          this.nationnalite = response.data.nationalite;
          this.lieu_naissance = response.data.lieu_naissance;
          this.ethnie = response.data.ethnie;
          this.residence = response.data.residence_ville;
          this.quartier = response.data.quartier;
          this.fix = response.data.contacts_fixe;
          this.telephone = response.data.contacts_cel;
          this.mail = response.data.email;
          this.assurance = response.data.assurance;
          this.profession = response.data.profession;
          this.formation = response.data.formation;
          this.activite = response.data.etat_professionnel;
          this.instruction = response.data.instruction;
          this.matrimoniale = response.data.status_matrimonial;
        })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });
    },
    retourner() {
      this.$router.push("/acceuil");
    },
    renitialiser() {
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
        (this.profession = ""),
        (this.formation = ""),
        (this.activite = ""),
        (this.instruction = ""),
        (this.matrimoniale = "");
    },
    modifier() {
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
        profession: this.profession,
        formation: this.formation,
        etat_professionnel: this.activite,
        instruction: this.instruction,
        status_matrimonial: this.matrimoniale,
      };
      console.log("patient :", patient);
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .put(chemin + "/patient/" + this.$route.params.id, patient)
        .then((response) => {
          console.log(response.data);
          this.preloader = false;
          this.success = true;
          this.message = "Patient modifé avec success";
          this.nom = "";
          this.prenom = "";
          this.sexe = "";
          this.date = "";
          this.nationnalite = "";
          this.lieu_naissance = "";
          this.residence = "";
          this.quartier = "";
          this.fix = "";
          this.telephone = "";
          this.email = "";
          this.assurance = "";
          this.profession = "";
          this.formation = "";
          this.activite = "";
          this.instruction = "";
          this.matrimoniale = "";

          this.charger();
        })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });
    },
  },
};
</script>
