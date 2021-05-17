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
            <form>
              <div class="row">
                <div class="col-lg-8 offset-lg-2">
                  <h4 class="page-title">Créer un service</h4>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-8 offset-lg-2">
                  <div class="form-group">
                    <label>Nom du service</label>
                    <input class="form-control" type="text" v-model="nom" />
                  </div>
                  <div class="form-group">
                    <label>Description</label>
                    <textarea
                      cols="30"
                      rows="4"
                      class="form-control"
                      v-model="description"
                    ></textarea>
                  </div>
                  <div class="m-t-20 text-center">
                    <button
                      class="btn btn-primary submit-btn"
                      v-on:click="cliquer"
                    >
                      Créer
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <br /><br /><br /><br /><br /><br />
        <div class="row">
          <div class="col-sm-5 col-5">
            <h4 class="page-title">Liste des services</h4>
          </div>
          <div class="col-sm-7 col-7 text-right m-b-30"></div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="table-responsive">
              <table class="table table-striped custom-table mb-0 datatable">
                <thead>
                  <tr>
                    <th>Nom du service</th>
                    <th>Description</th>
                    <th class="text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="service in services" v-bind:key="service.id">
                    <td>{{ service.nom }}</td>
                    <td>
                      <span class="custom-badge status-green">{{
                        service.statut
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
                          <!-- <router-link to="/admin/edit/"><a class="dropdown-item"
                            ><i class="fa fa-pencil m-r-5"></i> Edit</a
                          ></router-link> -->
                          <a
                            class="dropdown-item"
                            href="#"
                            data-toggle="modal"
                            data-target="#delete_department"
                            v-on:click="desactiver(service.id)"
                            ><i class="fa fa-trash-o m-r-5"></i> desactiver</a
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

export default {
  data() {
    return {
      services: [],
      preloader: false,
      nom: "",
      description: "",

      message: "",
      success: false,
      errors: false,
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
      this.preloader = true
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + "/listService")
        .then((response) => {
          if (response.data.state === true) {
            this.preloader = false;
            this.services = response.data.data;
          } else {
            this.preloader = false
            console.log("erreur de chargement");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    retourner() {
      this.$router.push("/bureautique");
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
        .post(chemin + "/activierDesactiverService", {
          id: pk,
          statut: "inactif",
        })
        .then((response) => {
          if (response.data.state === true) {
            this.preloader = false;
            this.success = true;
            this.message = response.data.message;
            this.charge();
          } else {
            this.preloader = false;
            this.errors = true;
            this.message = response.data.message;
          }
        })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });
    },

    cliquer() {
      this.preloader = true;
      var service = {
        nom: this.nom,
        description: this.description,
      };
      console.log(service);
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .post(chemin + "/creationService", service)
        .then((response) => {
          if (response.data.state === true) {
            this.preloader = false;
            this.success = true;
            this.message = response.data.message;
            console.log("reussie");
            this.charge();

            this.nom = "";
            this.description = "";
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
  },
};
</script>
