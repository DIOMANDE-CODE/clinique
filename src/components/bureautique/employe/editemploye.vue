<template>
  <div>
    <loader v-if="preloader"></loader>
    <div class="page-wrapper">
      <div class="content">
        <button class="btn btn-primary btn-rounded" v-on:click="retourner">
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </button>
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <h4 class="page-title" style="color:black; font-weight: bold;">
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
            <form @submit.prevent="modifier">
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label> nom <span class="text-danger">*</span></label>
                    <input class="form-control" type="text" v-model="nom" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>Prénom <span class="text-danger">*</span></label>
                    <input class="form-control" type="text" v-model="prenom" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label
                      >Nationalité <span class="text-danger">*</span></label
                    >
                    <input
                      class="form-control"
                      type="text"
                      v-model="nationnalite"
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
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label
                      >Date de naissance
                      <span class="text-danger">*</span></label
                    >
                    <input type="date" class="form-control" v-model="date" />
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
                    />
                  </div>
                </div>
                <div class="form-group col-sm-6">
                  <label class="display-block"
                    >Situation matrimoniale
                    <span class="text-danger">*</span></label
                  >
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="matrimoniale"
                      id="employee_active"
                      value="mariee"
                      v-model="situation"
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
                    />
                    <label class="form-check-label" for="employee_inactive">
                      Veuf(ve)
                    </label>
                  </div>
                </div>
                <div class="form-group col-sm-6">
                  <label class="display-block"
                    >Genre <span class="text-danger">*</span></label
                  >
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="quartier"
                      id="employee_active"
                      value="homme"
                      v-model="genre"
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
                    <input class="form-control" type="email" v-model="email" />
                  </div>
                </div>
                <div class="form-group col-sm-6">
                  <label class="col-form-label ">
                    Fonction <span class="text-danger">*</span>
                  </label>
                  <div class="col-md-12">
                    <select class="form-control" v-model="profile">
                      <option value="0" disabled>Choisissez sa fonction</option>
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
                    >Profil <span class="text-danger">*</span></label
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
                      <option value="0" disabled>Choisissez son service</option>
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
              </div>
              <div class="m-t-20 text-center">
                <button class="btn btn-success submit-btn">
                  Modifier
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="notification-box">
        <div class="msg-sidebar notifications msg-noti">
          <div class="topnav-dropdown-header">
            <span>Messages</span>
          </div>
          <div class="drop-scroll msg-list-scroll" id="msg_list">
            <ul class="list-box">
              <li>
                <a href="chat.html">
                  <div class="list-item">
                    <div class="list-left">
                      <span class="avatar">R</span>
                    </div>
                    <div class="list-body">
                      <span class="message-author">Richard Miles </span>
                      <span class="message-time">12:28 AM</span>
                      <div class="clearfix"></div>
                      <span class="message-content"
                        >Lorem ipsum dolor sit amet, consectetur
                        adipiscing</span
                      >
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div class="list-item new-message">
                    <div class="list-left">
                      <span class="avatar">J</span>
                    </div>
                    <div class="list-body">
                      <span class="message-author">John Doe</span>
                      <span class="message-time">1 Aug</span>
                      <div class="clearfix"></div>
                      <span class="message-content"
                        >Lorem ipsum dolor sit amet, consectetur
                        adipiscing</span
                      >
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div class="list-item">
                    <div class="list-left">
                      <span class="avatar">T</span>
                    </div>
                    <div class="list-body">
                      <span class="message-author"> Tarah Shropshire </span>
                      <span class="message-time">12:28 AM</span>
                      <div class="clearfix"></div>
                      <span class="message-content"
                        >Lorem ipsum dolor sit amet, consectetur
                        adipiscing</span
                      >
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div class="list-item">
                    <div class="list-left">
                      <span class="avatar">M</span>
                    </div>
                    <div class="list-body">
                      <span class="message-author">Mike Litorus</span>
                      <span class="message-time">12:28 AM</span>
                      <div class="clearfix"></div>
                      <span class="message-content"
                        >Lorem ipsum dolor sit amet, consectetur
                        adipiscing</span
                      >
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div class="list-item">
                    <div class="list-left">
                      <span class="avatar">C</span>
                    </div>
                    <div class="list-body">
                      <span class="message-author"> Catherine Manseau </span>
                      <span class="message-time">12:28 AM</span>
                      <div class="clearfix"></div>
                      <span class="message-content"
                        >Lorem ipsum dolor sit amet, consectetur
                        adipiscing</span
                      >
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div class="list-item">
                    <div class="list-left">
                      <span class="avatar">D</span>
                    </div>
                    <div class="list-body">
                      <span class="message-author"> Domenic Houston </span>
                      <span class="message-time">12:28 AM</span>
                      <div class="clearfix"></div>
                      <span class="message-content"
                        >Lorem ipsum dolor sit amet, consectetur
                        adipiscing</span
                      >
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div class="list-item">
                    <div class="list-left">
                      <span class="avatar">B</span>
                    </div>
                    <div class="list-body">
                      <span class="message-author"> Buster Wigton </span>
                      <span class="message-time">12:28 AM</span>
                      <div class="clearfix"></div>
                      <span class="message-content"
                        >Lorem ipsum dolor sit amet, consectetur
                        adipiscing</span
                      >
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div class="list-item">
                    <div class="list-left">
                      <span class="avatar">R</span>
                    </div>
                    <div class="list-body">
                      <span class="message-author"> Rolland Webber </span>
                      <span class="message-time">12:28 AM</span>
                      <div class="clearfix"></div>
                      <span class="message-content"
                        >Lorem ipsum dolor sit amet, consectetur
                        adipiscing</span
                      >
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div class="list-item">
                    <div class="list-left">
                      <span class="avatar">C</span>
                    </div>
                    <div class="list-body">
                      <span class="message-author"> Claire Mapes </span>
                      <span class="message-time">12:28 AM</span>
                      <div class="clearfix"></div>
                      <span class="message-content"
                        >Lorem ipsum dolor sit amet, consectetur
                        adipiscing</span
                      >
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div class="list-item">
                    <div class="list-left">
                      <span class="avatar">M</span>
                    </div>
                    <div class="list-body">
                      <span class="message-author">Melita Faucher</span>
                      <span class="message-time">12:28 AM</span>
                      <div class="clearfix"></div>
                      <span class="message-content"
                        >Lorem ipsum dolor sit amet, consectetur
                        adipiscing</span
                      >
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div class="list-item">
                    <div class="list-left">
                      <span class="avatar">J</span>
                    </div>
                    <div class="list-body">
                      <span class="message-author">Jeffery Lalor</span>
                      <span class="message-time">12:28 AM</span>
                      <div class="clearfix"></div>
                      <span class="message-content"
                        >Lorem ipsum dolor sit amet, consectetur
                        adipiscing</span
                      >
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div class="list-item">
                    <div class="list-left">
                      <span class="avatar">L</span>
                    </div>
                    <div class="list-body">
                      <span class="message-author">Loren Gatlin</span>
                      <span class="message-time">12:28 AM</span>
                      <div class="clearfix"></div>
                      <span class="message-content"
                        >Lorem ipsum dolor sit amet, consectetur
                        adipiscing</span
                      >
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div class="list-item">
                    <div class="list-left">
                      <span class="avatar">T</span>
                    </div>
                    <div class="list-body">
                      <span class="message-author">Tarah Shropshire</span>
                      <span class="message-time">12:28 AM</span>
                      <div class="clearfix"></div>
                      <span class="message-content"
                        >Lorem ipsum dolor sit amet, consectetur
                        adipiscing</span
                      >
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="topnav-dropdown-footer">
            <a href="chat.html">See all messages</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import loader from "../../../components/loader.vue";
import { chemin } from "../../../assets/js/chemin.js";

export default {
  name: "editemploye",
  components: {
    loader,
  },
  data() {
    return {
      preloader: false,
      utilisateur: [],
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
      ancien: [],
      id: "",
      success: false,
      errors: false,
      message: "",
      profiles: [],
      profile: "",
      pivot: "",

      // chargement des données de la clinique, departement et services, profiles
      cliniques: [],
      clinique: "",
      id_clinique: "",
      departements: [],
      departement: "",
      services: [],
      service: "",
      selectedClinique: false,
    };
  },
  created() {
    this.charger_info();
    this.charger_clinique();
  },
  methods: {
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
    charger_info() {
      this.preloader = true;
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + "/utilisateur/" + this.$route.params.id)
        .then((response) => {
          this.listProfil();
          console.log("utilisateur :", response.data);
          if (response.data.state === true) {
            this.preloader = false;
            this.nom = response.data.data.nom;
            this.prenom = response.data.data.prenoms;
            this.nationnalite = response.data.data.nationalite;
            this.telephone = response.data.data.telephone;
            this.date = response.data.data.date_naissance;
            this.addresse = response.data.data.adresse_domicile;
            this.situation = response.data.data.situation_matrimoniale;
            this.genre = response.data.data.genre;
            this.email = response.data.data.email;
            this.role = response.data.data.role;
            this.nom = response.data.data.nom;
            this.description = response.data.data.description;
            this.profile = response.data.data.profile[0].titre;
            this.pivot = response.data.data.profile[0].pivot.id;
          } else {
            this.preloader = false;
            this.message = "Aucun services existants";
            console.log("erreur de chargement");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    retourner() {
      this.$router.push("/admin/employe");
    },
    modifier() {
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
        role: this.role,
        clinique_id: this.clinique,
        departement_id: this.departement,
        service_id: this.service,
        profile_id: this.profile,
      };
      user.pivot = this.pivot;
      console.log(user);
      this.preloader = true;
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .put(
          chemin + "/modifierInformationUtilisateur/" + this.$route.params.id,
          user
        )
        .then((response) => {
          console.log("reponse :",response.data);
          if (response.data.state === true) {
            this.preloader = false;
            this.success = true;
            this.message = "Modification effectuée avec succès";

            this.nom = user.nom;
          } else {
            this.preloader = false;
            this.errors = true;
            this.message = response.data.message;
            console.log("erreur");
          }
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
          console.log("profil :", response.data);
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
  },
};
</script>
