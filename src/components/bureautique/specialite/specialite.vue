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
          <div class="col-sm-5 col-5">
            <h4 class="page-title" style="color:black; font-weight: bold;">
              SERVICES
            </h4>
          </div>
          <div class="col-sm-7 col-7 text-right m-b-30">
            <router-link to="/specialite/add"
              ><a style="color:white" class="btn btn-primary btn-rounded"
                ><i class="fa fa-plus"></i> Ajouter un service</a
              ></router-link
            >
          </div>
        </div>
        <div class="row filter-row">
                    <div class="col-sm-6 col-md-3">
                        <div class="form-group form-focus">
                            <label class="focus-label">Employee ID</label>
                            <input type="text" class="form-control floating">
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="form-group form-focus">
                            <label class="focus-label">Employee Name</label>
                            <input type="text" class="form-control floating">
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
              <table class="table table-striped custom-table mb-0 datatable">
                <thead>
                  <tr>
                    <th>Nom des services</th>
                    <th>Descriptions</th>
                    <th>Status</th>
                    <th class="text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="service in services" v-bind:key="service.id">
                    <td>{{ service.nom }}</td>
                    <td>{{ service.description }}</td>
                    <td v-if="service.statut === 'actif'">
                      <span class="custom-badge status-green">{{
                        service.statut
                      }}</span>
                    </td>
                    <td v-else>
                      <span class="custom-badge status-red">{{
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
                            v-if="service.statut === 'actif'"
                            class="dropdown-item"
                            href="#"
                            data-toggle="modal"
                            data-target="#delete_department"
                            v-on:click="modifier(service.id)"
                            ><i
                              class="fa fa-pencil m-r-5"
                              style="cursor:pointer"
                            ></i>
                            Modifier</a
                          >
                          <a
                            v-if="service.statut === 'actif'"
                            class="dropdown-item"
                            href="#"
                            data-toggle="modal"
                            data-target="#delete_department"
                            v-on:click="desactiver(service.id)"
                            ><i class="fa fa-trash-o m-r-5"></i> desactiver</a
                          >
                          <a
                            v-else-if="service.statut === 'inactif'"
                            class="dropdown-item"
                            href="#"
                            data-toggle="modal"
                            data-target="#delete_department"
                            v-on:click="activer(service.id)"
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
      this.preloader = true;
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
      this.$router.push("/bureautique");
    },
    modifier(pk) {
      this.$router.push("/specialite/modifier/" + pk);
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
        .post(chemin + "/activerDesactiverService", {
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
        .post(chemin + "/activerDesactiverService", {
          id: pk,
          statut: "actif",
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
