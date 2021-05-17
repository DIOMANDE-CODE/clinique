<template>
  <div>
    <loader v-if="preload"></loader>
    <div class="page-wrapper">
      <div class="content">
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
          <div class="col-sm-4 col-3">
            <h4 class="page-title">Employés</h4>
          </div>
          <div class="col-sm-3 col-5 text-right m-b-20">
            <router-link to="/change/code"
              ><a
                style="color:white"
                class="btn btn-primary float-right btn-rounded"
              >
                Changer de mot de passe</a
              ></router-link
            >
          </div>
          <div class="col-sm-3 col-4 text-right m-b-20">
            <router-link to="/employe/ajouter"
              ><a
                style="color:white"
                class="btn btn-primary float-right btn-rounded"
                ><i class="fa fa-plus"></i> Ajouter un employé</a
              ></router-link
            >
          </div>
        </div>
        <div class="row"></div>
        <div class="row filter-row">
          <div class="col-sm-6 col-md-3">
            <div class="form-group form-focus">
              <label class="focus-label">Employee ID</label>
              <input type="text" class="form-control floating" />
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
            <div class="form-group form-focus">
              <label class="focus-label">Employee Name</label>
              <input type="text" class="form-control floating" />
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
            <div class="form-group form-focus select-focus">
              <label class="focus-label">Role</label>
              <select class="select floating">
                <option>Select Role</option>
                <option>Nurse</option>
                <option>Pharmacist</option>
                <option>Laboratorist</option>
                <option>Accountant</option>
                <option>Receptionist</option>
              </select>
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
            <a href="#" class="btn btn-success btn-block"> Search </a>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="table-responsive">
              <table class="table table-striped custom-table">
                <thead>
                  <tr>
                    <th style="min-width:200px;">Nom</th>
                    <th>Prenom</th>
                    <th>Sexe</th>
                    <th>Contact</th>
                    <th>Profil</th>
                    <th class="text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="employe in employes" v-bind:key="employe.id">
                    <td>
                      <img
                        width="28"
                        height="28"
                        src="../../../assets/img/user.jpg"
                        class="rounded-circle"
                        alt=""
                      />
                      <h2>{{ employe.nom }}</h2>
                    </td>
                    <td>{{ employe.prenoms }}</td>
                    <td>{{ employe.genre }}</td>
                    <td>{{ employe.telephone }}</td>
                    <td v-if="employe.statut === 'actif'">
                      <span class="custom-badge status-green">{{
                        employe.role
                      }}</span>
                    </td>
                    <td v-else>
                      <span class="custom-badge status-red">{{
                        employe.role
                      }}</span>
                    </td>
                    <td class="text-right">
                      <div class="dropdown dropdown-action">
                        <a
                          href="#"
                          class="action-icon dropdown-toggle"
                          data-toggle="dropdown"
                          aria-expanded="false"
                          ><i class="fa fa-ellipsis-v"></i
                        ></a>
                        <div class="dropdown-menu dropdown-menu-right">
                          <a
                            class="dropdown-item"
                            style="color:black"
                            v-on:click="modifier(employe.id)"
                            v-bind:identifiant="identifiant"
                            ><i class="fa fa-pencil m-r-5"></i> Edit</a
                          >
                          <router-link to="/employe/profil"
                            ><a class="dropdown-item" style="color:black"
                              ><i class="fa fa-pencil m-r-5"></i>Profil</a
                            ></router-link
                          >
                          <a
                            v-if="employe.statut === 'actif'"
                            class="dropdown-item "
                            href="#"
                            data-toggle="modal"
                            data-target="#delete_employee"
                            v-on:click="desactiver(employe.id)"
                            ><i class="fa fa-user-md m-r-5"></i>desactiver le
                            profil</a
                          >
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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
import { chemin } from "../../../assets/js/chemin.js";
import { info } from "../../../assets/js/info.js";

import loader from "../../../components/loader.vue";

export default {
  name: "employe",
  data() {
    return {
      employes: [],
      identifiant: null,
      status: "",
      preload: false,
      success: false,
      errors: false,
      message: "",
    };
  },
  components: {
    loader,
  },
  created() {
    this.charge();
  },
  methods: {
    charge: function() {
      this.preload = true
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + "/listeUtilisateur")
        .then((response) => {
          console.log(response.data.data);
          if (response.data.state === true) {
            this.preload = false
            this.employes = response.data.data;
          } else {
            this.preload = false
            console.log("erreur de chargement");
          }
        });
    },
    modifier(pk) {
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + "/utilisateur/" + pk)
        .then((response) => {
          if (response.data.state === true) {
            info.id = response.data.data.id;
            info.nom = response.data.data.nom;
            info.prenom = response.data.data.prenoms;
            info.nationnalite = response.data.data.nationalite;
            info.telephone = response.data.data.telephone;
            info.date = response.data.data.date_naissance;
            info.addresse = response.data.data.adresse_domicile;
            info.situation = response.data.data.situation_matrimoniale;
            info.genre = response.data.data.genre;
            info.email = response.data.data.email;
            info.role = response.data.data.role;
            console.log(info);

            this.$router.push("/employe/modifier/" + pk);
          } else {
            console.log("erreur");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    desactiver(pk) {
      this.preload = true;
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .post(chemin + "/activerDesactiverUtilisateur/", {
          id: pk,
          statut: "inactif",
        })
        .then((response) => {
          if (response.data.state === true) {
            this.preload = false;
            this.success = true;
            this.message = response.data.message;
            this.charge();
          } else {
            this.preload = false;
            this.errors = true;
            this.message = response.data.message;
          }
        })
        .catch((err) => {
          this.preload = false;
          console.log(err);
        });
    },
  },
};
</script>
