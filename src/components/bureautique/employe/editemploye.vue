<template>
  <div>
    <div class="page-wrapper">
      <loader v-if="preloader"></loader>
      <div class="content">
        <button class="btn btn-primary" v-on:click="retourner">
          Retourner
        </button>
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <h4 class="page-title">Modifier</h4>
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
                    <label>Prénom</label>
                    <input class="form-control" type="text" v-model="prenom" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>Nationalité</label>
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
                    <label>Addresse du domicile</label>
                    <input
                      class="form-control"
                      type="text"
                      v-model="addresse"
                    />
                  </div>
                </div>
                <div class="form-group col-sm-6">
                  <label class="display-block">Situation matrimoniale</label>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="matrimoniale"
                      id="employee_active"
                      value="mariee"
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
                  <label class="display-block">Genre</label>
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
                  <label class="display-block">Profil</label>
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
              <div class="m-t-20 text-center">
                <button class="btn btn-primary submit-btn">
                  Modifier l'employé
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
import info from "../../../assets/js/info.js";

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
      id:'',
      success:false,
      errors:false,
      message:''
    };
  },
  created() {
    this.id = info.info.id;
    this.nom = info.info.nom;
    this.prenom = info.info.prenom;
    this.nationnalite = info.info.nationnalite;
    this.telephone = info.info.telephone;
    this.date = info.info.date;
    this.addresse = info.info.addresse;
    this.situation = info.info.situation;
    this.genre = info.info.genre;
    this.email = info.info.email;
    this.role = info.info.role;
  },
  methods: {
    retourner() {
      window.history.back();
    },
    modifier() {
      this.preloader = true
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
      };
      console.log(user);
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .patch(chemin + "/modifierInformationUtilisateur/" + this.id, user)
        .then((response) => {
          if (response.data.state === true) {
            this.preloader = false
            this.success = true
            this.message = 'Modification effectuée avec succès'
            console.log("modification réussie reussie");
          } else {
            this.preloader = false
            this.errors = true
            this.message = response.data.message
            console.log("erreur");
          }
        });
    },
  },
};
</script>
