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
                    <th>numero de facture</th>
                    <th>Motif</th>
                    <th class="text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="patient in patients" v-bind:key="patient.id">
                    <td>
                      <img
                        width="28"
                        height="28"
                        src="../../../assets/img/user.jpg"
                        class="rounded-circle"
                        alt=""
                      />
                      <h2>{{ patient.dossier.client.nom }}</h2>
                    </td>
                    <td>{{ patient.dossier.client.prenoms }}</td>
                    <td>#{{ patient.num_facture }}</td>
                    <td>{{ patient.dossier.objet }}</td>
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
                            v-on:click="faire_facture(patient.dossier.id)"
                            v-bind:identifiant="identifiant"
                            ><i class="fa fa-money" style="cursor:pointer"></i>
                            Voir sa facture</a
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
      .get(chemin + "/listeFileAttentes")
      .then((response) => {
        console.log(" liste d'attente :", response.data);
        this.patients = response.data;
        setTimeout(function() {
          $("#example").DataTable({
            pagingType: "full_numbers",
            pageLength: 5,
            processing: true,
            dom: "Bfrtip",
            order: [],
          });
        }, 1000);
        this.preload = false;
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
    faire_facture(pk) {
      this.$router.push("/facture/" + pk);
    },
    calendrier(pk) {
      this.$router.push("/employe/calendrier/" + pk);
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