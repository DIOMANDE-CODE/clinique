<template>
  <div>
    <loader v-if="preloader"></loader>
    <div class="page-wrapper">
      <div class="content">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
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
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4 col-3">
            <h4 class="page-title" style="color:black; font-weight:bold;">
              CLINIQUES
            </h4>
          </div>
          <div class="col-sm-8 col-4 text-right m-b-20">
            <router-link to="/clinique/ajouter"
              ><a
                style="color:white"
                class="btn btn-primary float-right btn-rounded"
                ><i class="fa fa-plus"></i> Ajouter une clinique</a
              ></router-link
            >
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <p>{{ message }}</p>
            <div class="table-responsive">
              <table id="example" class="table table-striped custom-table mb-0 datatable">
                <thead>
                  <tr>
                    <th>Nom des cliniques</th>
                    <th>Identifiants</th>
                    <th>Téléphones</th>
                    <th>Urgences</th>
                    <th>Status</th>
                    <th class="text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="clinique in cliniques" v-bind:key="clinique.id">
                    <td>{{ clinique.nom }}</td>
                    <td>{{ clinique.numero_identifiant }}</td>
                    <td>{{ clinique.telephone }}</td>
                    <td>{{ clinique.telephone_urgence }}</td>
                    <td v-if="clinique.statut === 'actif'">
                      <span class="custom-badge status-green">{{
                        clinique.statut
                      }}</span>
                    </td>
                    <td v-else>
                      <span class="custom-badge status-red">{{
                        clinique.statut
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
                          <!-- <router-link to="/admin/edit/"
                            ><a class="dropdown-item"
                              ><i class="fa fa-pencil m-r-5"></i> Edit</a
                            ></router-link
                          > -->
                          <a
                            v-if="clinique.statut === 'actif'"
                            class="dropdown-item "
                            href="#"
                            data-toggle="modal"
                            data-target="#delete_employee"
                            v-on:click="Voir(clinique.id)"
                            >Voir +</a
                          >
                          <a
                            v-if="clinique.statut === 'actif'"
                            class="dropdown-item "
                            href="#"
                            data-toggle="modal"
                            data-target="#delete_employee"
                            v-on:click="desactiver(clinique.id)"
                            ><i class="fa fa-trash-o m-r-5"></i>désactiver la
                            clinique</a
                          >
                          <a
                            v-if="clinique.statut === 'inactif'"
                            class="dropdown-item "
                            href="#"
                            data-toggle="modal"
                            data-target="#delete_employee"
                            v-on:click="activer(clinique.id)"
                            ><i class="fa fa-trash-o m-r-5"></i>Activer la
                            clinique</a
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
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { chemin } from "../../../assets/js/chemin.js";
import { identifiant } from "../../../assets/js/info.js";
import loader from "../../../components/loader.vue";

import "bootstrap/dist/css/bootstrap.min.css"; //for table good looks
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import $ from "jquery";

export default {
  mounted() {
    this.preloader = true;
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
          console.log(response.data);
          if (response.data.state === true) {
            this.preloader = false;
            this.cliniques = response.data.data;
              setTimeout(function() {
            $("#example").DataTable({
              pagingType: "full_numbers",
              pageLength: 5,
              processing: true,
              dom: "Bfrtip",
              buttons: ["copy", "csv", "print"],
              order: [],
            });
          }, 1000);
          } else {
            this.preloader = false;
            this.message = "Aucune cliniques existantes";
            console.log("erreur de chargement");
          }
        })
        .catch((err) => {
          console.log(err);
        });
  },
  data() {
    return {
      cliniques: [],
      preloader: false,
      nom: "",
      numero_identifiant: "",
      email: "",
      telephone: "",
      telephone_urgence: "",
      addresse_physique: "",
      addresse_postale: "",
      fax: "",
      status: "",

      message: "",
      success: false,
      errors: false,
    };
  },
  components: {
    loader,
  },
  methods: {
    retourner() {
      this.$router.push("/bureautique");
    },
    modifier(pk) {
      this.$router.push("/admin/modifier/" + pk);
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
        .post(chemin + "/activerDesactiverClinique", {
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
    activer(pk) {
      this.preload = true;
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .post(chemin + "/activerDesactiverClinique", {
          id: pk,
          statut: "actif",
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

    cliquer() {
      this.preloader = true;
      var clinique = {
        numero_identifiant: this.numero_identifiant,
        nom: this.nom,
        email: this.email,
        telephone: this.telephone,
        telephone_urgence: this.telephone_urgence,
        adresse_physique: this.addresse_physique,
        adresse_postale: this.addresse_postale,
        fax: this.fax,
      };
      console.log(clinique);
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .post(chemin + "/creationClinique", clinique)
        .then((response) => {
          if (response.data.state === true) {
            this.preloader = false;
            this.success = true;
            this.message = response.data.message;
            console.log("reussie");
            this.charge();

            this.numero_identifiant = "";
            this.nom = "";
            this.email = "";
            this.telephone = "";
            this.telephone_urgence = "";
            this.addresse_physique = "";
            this.addresse_postale = "";
            this.fax = "";
          } else {
            this.preloader = false;
            this.errors = true;
            this.message = response.data.message;
          }
        })
        .catch((err) => {
          this.preloader = false;
          this.errors = true;
          console.log(err);
        });
    },
    Voir(pk) {
      identifiant.id = pk;
      this.$router.push("/clinique/voir/" + pk);
    },
  },
};
</script>
