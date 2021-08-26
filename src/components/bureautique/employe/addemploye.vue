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
                    <label>Téléphone <span class="text-danger">*</span></label>
                    <input
                      class="form-control"
                      type="text"
                      v-model="telephone"
                      required
                    />
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
                      >Addresse du domicile
                      <span class="text-danger">*</span></label
                    >
                    <input
                      class="form-control"
                      type="text"
                      v-model="addresse"
                      required
                    />
                  </div>
                </div>
                <div class="form-group col-sm-6">
                  <label class="display-block"
                    >Situation matrimoniale <span class="text-danger">*</span>
                  </label>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="matrimoniale"
                      id="employee_active"
                      value="mariee"
                      v-model="situation"
                      required
                    />
                    <label class="form-check-label" for="employee_active">
                      Marié(e)
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="matrimoniale"
                      id="employee_inactive"
                      value="celibataire"
                      v-model="situation"
                    />
                    <label class="form-check-label" for="employee_inactive">
                      Célibataire
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="matrimoniale"
                      id="employee_inactive"
                      value="divorcee"
                      v-model="situation"
                    />
                    <label class="form-check-label" for="employee_inactive">
                      Divorcé(e)
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="matrimoniale"
                      id="employee_inactive"
                      value="veuf"
                      v-model="situation"
                      required
                    />
                    <label class="form-check-label" for="employee_inactive">
                      Veuf(ve)
                    </label>
                  </div>
                </div>
                <div class="form-group col-sm-6">
                  <label class="display-block"
                    >Genre <span class="text-danger">*</span>
                  </label>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="quartier"
                      id="employee_active"
                      value="homme"
                      v-model="genre"
                      required
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
                      v-model="genre"
                    />
                    <label class="form-check-label" for="employee_inactive">
                      F
                    </label>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>Email <span class="text-danger">*</span></label>
                    <input
                      class="form-control"
                      type="email"
                      v-model="email"
                      required
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>
                      Mot de passe <span class="text-danger">*</span></label
                    >
                    <input
                      class="form-control"
                      type="password"
                      v-model="code"
                      required
                    />
                  </div>
                </div>
                <div class="form-group col-sm-6">
                  <label class="col-form-label "
                    >Clinique <span class="text-danger">*</span>
                  </label>
                  <div class="col-md-12">
                    <select
                      required
                      class="form-control clinique"
                      v-model="clinique"
                      @change="charger_departement()"
                    >
                      <option value="0" disabled>Choisissez sa clinique</option>
                      <option
                        :value="clin.id"
                        v-for="clin in cliniques"
                        v-bind:key="clin.id"
                        >{{ clin.nom }}</option
                      >
                    </select>
                  </div>
                </div>
                <div class="form-group col-sm-6">
                  <label class="col-form-label "
                    >Departement <span class="text-danger">*</span>
                  </label>
                  <div class="col-md-12">
                    <select
                      required
                      class="form-control"
                      v-model="departement"
                      @change="charger_service()"
                    >
                      <option value="0" disabled
                        >Choisissez son departement</option
                      >
                      <option
                        :value="depart.departement_id"
                        v-for="depart in departements"
                        v-bind:key="depart.id"
                        >{{ depart.departement_nom }}</option
                      >
                    </select>
                  </div>
                </div>
                <div class="form-group col-sm-6">
                  <label class="col-form-label "
                    >Service <span class="text-danger">*</span>
                  </label>
                  <div class="col-md-12">
                    <select class="form-control" v-model="service">
                      <option
                        required
                        :value="serv.service_id"
                        v-for="serv in services"
                        v-bind:key="serv.id"
                        >{{ serv.service_nom }}</option
                      >
                    </select>
                  </div>
                </div>
                <div class="form-group col-sm-6">
                  <label class="col-form-label ">
                    Profil <span class="text-danger">*</span>
                  </label>
                  <div class="col-md-12">
                    <select class="form-control" v-model="profile" multiple>
                      <option
                        required
                        :value="profil.id"
                        v-for="profil in profiles"
                        v-bind:key="profil.id"
                        >{{ profil.titre }}</option
                      >
                    </select>
                  </div>
                </div>
                <div class="form-group col-sm-6">
                  <label class="display-block"
                    >Rôle <span class="text-danger">*</span></label
                  >
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="status"
                      id="employee_active"
                      value="admin"
                      v-model="role"
                    />
                    <label class="form-check-label" for="employee_active">
                      admin
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="status"
                      id="employee_inactive"
                      value="utilisateur"
                      v-model="role"
                    />
                    <label class="form-check-label" for="employee_inactive">
                      utilisateur
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
              <button class="btn btn-success submit-btn" v-on:click="inscrire">
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
  name: "epresent",
  data() {
    return {
      user: {
        nom: "",
        prenom: "",
        nationnalite: "",
        telephone: "",
        date: "",
        addresse: "",
        situation: "",
        genre: "",
        email: "",
        role: "",
        code: "",
      },
      preloader: false,
      success: false,
      errors: false,
      message: "",
      // chargement des données de la clinique, departement et services, profiles
      cliniques: [],
      clinique: "",
      id_clinique: "",
      departements: [],
      departement: "",
      services: [],
      service: "",
      selectedClinique: false,
      profiles: [],
      profile: [],
    };
  },
  components: {
    loader,
  },
  created() {
    this.charger_clinique();
    this.listProfil();
  },
  methods: {
    retourner() {
      this.$router.push("/admin/employe");
    },
    renitialiser() {
      (this.nom = ""),
        (this.prenom = ""),
        (this.nationnalite = ""),
        (this.telephone = ""),
        (this.date = ""),
        (this.addresse = ""),
        (this.situation = ""),
        (this.genre = ""),
        (this.email = ""),
        (this.code = ""),
        (this.role = ""),
        (this.clinique = ""),
        (this.departement = ""),
        (this.service = ""),
        (this.profile = "");
    },
    inscrire() {
      console.log("id service:", this.service);
      console.log("id clinique:", this.clinique);
      console.log("id departement", this.departement);
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
      var user = {
        nom: this.nom,
        prenoms: this.prenom,
        nationalite: this.nationnalite,
        telephone: this.telephone,
        date_naissance: this.date,
        adresse_domicile: this.addresse,
        situation_matrimoniale: this.situation,
        genre: this.genre,
        email: this.email,
        password: this.code,
        role: this.role,
        clinique_id: this.clinique,
        departement_id: this.departement,
        service_id: this.service,
        profile_id: this.profile,
      };
      console.log("user information :", user);
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .post(chemin + "/inscription", user)
        .then((response) => {
          console.log(response.data);
          this.preloader = false;
          this.$swal({
            html: "Personnel ajouté",
            icon: "success",
            confirmButtonText: `OK`,
          }).then((result) => {
            if (result.isConfirmed) {
              this.$router.push("/admin/employe");
            }
          });
        })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });
    },
    charger_clinique() {
      console.log(" id de la clinique ", this.clinique);
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + "/listClinique")
        .then((response) => {
          this.preloader = false;
          if (response.data.state === true) {
            this.cliniques = response.data.data;
          } else {
            this.preloader = false;
            console.log("erreur de chargement");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    charger_departement() {
      console.log("departement clinique id ", this.clinique);
      // this.preloader = true;
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + "/getDepartementsClinique/" + this.clinique)
        .then((response) => {
          console.log(response.data.data);
          this.departements = response.data.data;
          // if (response.data.state === true) {
          //   this.preloader = false;
          //   this.departements = response.data.data;
          // } else {
          //   this.preloader = false;
          //   console.log("erreur de chargement");
          // }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    charger_service() {
      console.log("service");
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(
          chemin +
            `/listeServicesDepartement/${this.clinique}/${this.departement}`
        )
        .then((response) => {
          console.log(response.data);
          this.services = response.data.data;
          // if (response.data.state === true) {
          //   this.preloader = false;
          //   this.services = response.data.data;
          // } else {
          //   this.preloader = false;
          //   console.log("erreur de chargement");
          // }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    listProfil() {
      console.log("service");
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + `/getListeProfile`)
        .then((response) => {
          console.log(response.data);
          if (response.data.state === true) {
            this.preloader = false;
            this.profiles = response.data.data;
          } else {
            this.preloader = false;
            console.log("erreur de chargement");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    selectClinique() {
      console.log("##################################");
    },
  },
};
</script>
