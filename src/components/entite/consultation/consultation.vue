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
            <h4 class="page-title" style="color:black; font-weight:bold;">
              LISTE D'ATTENTE
            </h4>
          </div>
          <i
            class="fa fa-rotate-right m-r-5"
            style="cursor:pointer; color:green; position:absolute; left:25%;"
            v-on:click="actualiser"
            alt="actualiser"
          ></i>
        </div>
        <div class="row">
          <div class="col-md-12">
            <p>{{ message }}</p>
            <div class="table-responsive">
              <table id="example" class="table table-striped custom-table">
                <thead>
                  <tr>
                    <th style="min-width:200px;">Noms</th>
                    <th>Prenoms</th>
                    <th>Status</th>
                    <th>Motif</th>

                    <th class="text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="employe in patients" v-bind:key="employe.id">
                    <td>
                      <img
                        width="28"
                        height="28"
                        src="../../../assets/img/user.jpg"
                        class="rounded-circle"
                        alt=""
                      />
                      <h2>{{ employe.dossier.client.nom }}</h2>
                    </td>
                    <td>{{ employe.dossier.client.prenoms }}</td>
                    <td>{{ employe.status }}</td>
                    <td>{{ employe.dossier.objet }}</td>
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
                            v-on:click="voir_dm(employe.dossier.client_id)"
                            v-bind:identifiant="identifiant"
                            ><i
                              class="fa fa-user m-r-5"
                              style="cursor:pointer"
                            ></i>
                            Voir son DM</a
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
    this.preload = true;
    axios
      .create({
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Access-Control-Allow-Origin": "*",
        },
      })
      .get(chemin + "/getFile")
      .then((response) => {
        if (response.data.state === "true") {
          this.preload = false;
          this.patients = response.data.data;
          setTimeout(function() {
            $("#example").DataTable({
              pagingType: "full_numbers",
              pageLength: 10,
              processing: true,
              dom: "Bfrtip",
              order: [],
              language: {
                décimal: "",
                emptyTable: "Aucune donnée disponible dans le tableau",
                infoEmpty: "Aucun patient en liste d'attente",
                info: "Affichage de _START_ à _END_ sur _TOTAL_ entrées",
                infoFiltered: "(filtré à partir de _MAX_ entrées totales)",
                infoPostFix: "",
                thousands: ",",
                lengthMenu: "Afficher les entrées du _MENU_",
                loadingRecords: "Loading...",
                processing: "Processing...",
                search: "Chercher :",
                stateSave : true,
                zeroRecords: "Aucun enregistrement correspondant",
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
          this.preload = false;
          this.message = "Aucun employés existants";
          console.log("erreur de chargement");
        }
      });
  },
  data() {
    return {
      patients: [],
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
  methods: {
    voir_dm(pk) {
      this.$router.push("/consultation/dossier_medical/" + pk);
    },
    calendrier(pk) {
      this.$router.push("/employe/calendrier/" + pk);
    },
    actualiser() {
      window.location.reload();
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
        .post(chemin + "/activerDesactiverUtilisateur/", {
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
  },
};
</script>
