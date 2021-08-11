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
                  <label class="">
                    Maison d'assurance<span class="text-danger">*</span>
                  </label>
                  <div class="col-md-12 pl-0">
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
                  <label> Matricule de l'assurance ou N° de Bon</label>
                    <input
                      class="form-control"
                      type="text"
                      v-model="matricule_assurance"
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
                Ajouter
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
      objet:'',
      assurance: "",
      assurance_nom: "",
      matricule_assurance: "",
      numero_assurance: "",
      acte_assurance: "",
      bon_assurance: "",
      assurances:[],

      preloader: false,
      success: false,
      errors: false,
      checkedAssurance: false,
      message: "",
    };
  },
  components: {
    loader,
  },
  mounted(){
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
          console.log(response.data);
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
        (this.assurance = ""),
        (this.nom_assurance = ""),
        (this.matricule_assurance = ""),
        (this.numero_assurance = ""),
        (this.acte_assurance = ""),
        (this.bon_assurance = "");
    },
    checkAssurance(pk) {
      console.log("assurance value:", pk);
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
      var dossier = {
        objet: this.objet,
        client_id : this.$route.params.id,
        assurance: this.assurance,
        assurance_id: this.assurance_nom,
        numero_bon:this.bon_assurance,
        matricule:this.matricule_assurance,
        acte: this.acte_assurance,
        profile_id: localStorage.getItem("identifiant"),
      };
      console.log("patient :", dossier);
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .post(chemin + "/ajouterNouveauDossier", dossier)
        .then((response) => {
          console.log(response.data);
          this.preloader = false;
          this.success = true;
          this.message = "nouveau dossier ajouté avec success";
        
          this.assurance = "";
          this.assurance_nom = "";
          this.bon_assurance = "";
          this.acte_assurance = "";
          this.matricule_assurance = "";
          this.objet = "";
        })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });
    },
  },
};
</script>
