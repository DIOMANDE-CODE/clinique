<template>
  <div>
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
            <h4 class="page-title">Listes patients</h4>
          </div>
          <div class="col-sm-8 col-4 text-right m-b-20">
            <router-link to="/acceuil/addpatient"
              ><a
                style="color:white"
                class="btn btn-primary float-right btn-rounded"
                ><i class="fa fa-plus"></i> Ajouter un patient</a
              ></router-link
            >
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <p>{{ message }}</p>
            <div class="table-responsive">
              <table id="example" class="table table-striped custom-table">
                <thead>
                  <tr>
                    <th style="min-width:200px;">matricule</th>
                    <th v-show="false">noms</th>
                    <th v-show="false">Prenoms</th>
                    <th v-show="false">Sexes</th>
                    <th class="text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="employe in clients" :key="employe.id">
                    <td>
                      <img
                        width="28"
                        height="28"
                        src="../../../assets/img/user.jpg"
                        class="rounded-circle"
                        alt=""
                      />
                      <h2>{{ employe.matricule }}</h2>
                    </td>
                    <td v-show="false">{{ employe.nom }}</td>
                    <td v-show="false">{{ employe.prenoms }}</td>
                    <td v-show="false">{{ employe.sexe }}</td>
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
                            style="color:black; cursor:pointer"
                            v-on:click="voir(employe.id)"
                            v-bind:identifiant="identifiant"
                            ><i
                              class="fa fa-user m-r-5"
                              style="cursor:pointer"
                            ></i>
                            Voir +</a
                          >
                          <a
                            class="dropdown-item"
                            style="color:black; cursor:pointer"
                            v-on:click="consultation(employe.id)"
                            v-bind:identifiant="identifiant"
                            ><i
                              class="fa fa-plus m-r-5"
                              style="cursor:pointer"
                            ></i>
                            nouvelle consultation</a
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
  
  data() {
    return {
      clients: [],
      identifiant: null,
      status: "",
      preload: false,
      success: false,
      errors: false,
      message: "",
    };
  },
  components: {},
  mounted() {
    this.lister()
  },
  methods: {
    lister: function(){
        this.preload = true;
        axios
          .create({
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
              "Access-Control-Allow-Origin": "*",
            },
          })  
          .get(chemin + "/listerPatients")
          .then((response) => {
            console.log("Patients :",response.data);
            this.preload = false;
            this.clients = response.data;
            setTimeout(function() {
            $("#example").DataTable({
              pagingType: "full_numbers",
              pageLength: 10,
              processing: true,
              dom: "Bfrtip",
              buttons: ["copy", "csv", "print"],
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
          });
    },
    charge: function() {
      this.preload = true;
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + "/listerPatients")
        .then((response) => {
          this.preload = false;
          this.clients = response.data;
          this.table.rows = this.clients;
        });
    },
    voir(pk) {
      this.$router.push("/acceuil/profil/" + pk);
    },
    consultation(pk) {
      this.$router.push("/acceuil/dossier/" + pk);
    },
  },
};
</script>
