<template>
  <div>
    <loader v-if="preloader"></loader>
    <div class="page-wrapper">
      <div class="content">
        <div class="row">
          <div class="col-sm-5 col-5">
            <h4 class="page-title" style="color:black; font-weight: bold;">
              ASSURANCES
            </h4>
          </div>
          <div class="col-sm-7 col-7 text-right m-b-30">
            <router-link to="/add/assurance"
              ><a style="color:white" class="btn btn-primary btn-rounded"
                ><i class="fa fa-plus"></i> Ajouter une assurance</a
              ></router-link
            >
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
          <div class="col-md-12">
            <div class="table-responsive">
              <table
                id="example"
                class="table table-striped custom-table mb-0 datatable"
              >
                <thead>
                  <tr>
                    <th>Assurances</th>
                    <th>Entreprises</th>
                    <!-- <th>Pourcentage (%)</th> -->
                    <th>Status</th>
                    <th class="text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="assurance in assurances" v-bind:key="assurance.id">
                    <td>{{ assurance.nom }}</td>
                    <td>{{ assurance.entreprise }}</td>
                    <!-- <td>{{ assurance.pourcentage }}</td> -->
                    <td v-if="assurance.statut === 'actif'">
                      <span class="custom-badge status-green">{{
                        assurance.statut
                      }}</span>
                    </td>
                    <td v-else>
                      <span class="custom-badge status-red">{{
                        assurance.statut
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
                            v-if="assurance.statut === 'actif'"
                            class="dropdown-item"
                            href="#"
                            data-toggle="modal"
                            data-target="#delete_department"
                            v-on:click="modifier(assurance.id)"
                            ><i
                              class="fa fa-pencil m-r-5"
                              style="cursor:pointer"
                            ></i>
                            Modifier</a
                          >
                          <a
                            v-if="assurance.statut === 'actif'"
                            class="dropdown-item"
                            href="#"
                            data-toggle="modal"
                            data-target="#delete_department"
                            v-on:click="desactiver(assurance.id)"
                            ><i class="fa fa-trash-o m-r-5"></i> Désactiver</a
                          >
                          <a
                            v-else-if="assurance.statut === 'inactif'"
                            class="dropdown-item"
                            href="#"
                            data-toggle="modal"
                            data-target="#delete_department"
                            v-on:click="activer(assurance.id)"
                            ><i class="fa fa-trash-o m-r-5"></i> Activer</a
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
import loader from "../../loader.vue";
import axios from "axios";
import { chemin } from "../../../assets/js/chemin.js";
import { assurance } from "../../../assets/js/info.js";

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
      .get(chemin + "/listAssurances")
      .then((response) => {
        if (response.data.state === true) {
          this.preloader = false;
          this.assurances = response.data.data;
          setTimeout(function() {
            $("#example").DataTable({
              pagingType: "full_numbers",
              pageLength: 10,
              processing: true,
              order: [],
              language: {
                décimal: "",
                emptyTable: "Aucune donnée disponible dans le tableau",
                infoEmpty: "Showing 0 to 0 of 0 entries",
                info: "Affichage de _START_ à _END_ sur _TOTAL_ entrées",
                infoFiltered: "(filtré à partir de _MAX_ entrées totales)",
                infoPostFix: "",
                thousands: ",",
                lengthMenu: "Afficher les entrées du _MENU_",
                loadingRecords: "Loading...",
                processing: "Processing...",
                search: "Chercher :",
                stateSave : true,
                zeroRecords: "Aucun enregistrement correspondant trouvé",
                paginate: {
                  first: "Premier",
                  last: "Dernier",
                  next: "Suivant",
                  previous: "Précédent",
                },
                aria: {
                  sortAscending: ": activate to sort column ascending",
                  sortDescending: ": activate to sort column descending",
                },
              },
            });
          }, 1000);
        } else {
          this.preloader = false;
          this.message = "Aucune assurances existantes";
          console.log("erreur de chargement");
        }
      });
  },
  data() {
    return {
      preloader: false,
      success: false,
      errors: false,
      assurances: [],
      message: "",
    };
  },
  components: {
    loader,
  },
  methods: {
    charge(){
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
    modifier(pk) {
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + "/assurance/" + pk)
        .then((response) => {
          if (response.data.state === true) {
            assurance.id = response.data.data.id;
            assurance.code = response.data.data.nom;
            assurance.denomination = response.data.data.entreprise;

            this.$router.push("/edit/assurance/" + assurance.id);
          } else {
            console.log("erreur");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    desactiver(pk) {
      this.preloader = true;
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .post(chemin + "/activerDesactiverAssurance", {
          id: pk,
          statut: "inactif",
        })
        .then((response) => {
          if (response.data.state === true) {
            this.preloader = false;
            this.$swal({
              html: "Assurance désactivée",
              icon: "success",
              confirmButtonText: `OK`,
            }).then((result) => {
              if (result.isConfirmed) {
                this.charge();
              }
            });
          } else {
            this.preloader = false;
          }
        })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });
    },
    activer(pk) {
      this.preloader = true;
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .post(chemin + "/activerDesactiverAssurance", {
          id: pk,
          statut: "actif",
        })
        .then((response) => {
          if (response.data.state === true) {
            this.preloader = false;
            this.$swal({
              html: "Assurance activée",
              icon: "success",
              confirmButtonText: `OK`,
            }).then((result) => {
              if (result.isConfirmed) {
                this.charge();
              }
            });
          } else {
            this.preloader = false;
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
