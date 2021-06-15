<template>
  <div>
    <loader v-if="preloader"></loader>
    <div class="page-wrapper">
      <div class="content">
        <button class="btn btn-primary btn-rounded" v-on:click="retourner">
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </button>
        <br /><br />
        <div class="row"></div>
        <div class="card-box profile-header">
          <i
            class="fa fa-edit"
            style=" position:relative; left:95%; cursor:pointer;"
            v-on:click="modifier_clinique"
          ></i>
          <div class="row">
            <div class="col-md-11">
              <div class="profile-view">
                <div class="profile-basic">
                  <div class="row">
                    <div class="col-md-12">
                      <ul class="personal-info">
                        <li>
                          <span
                            class="title"
                            style="font-weight: bold; color:black"
                            >Identifiant:</span
                          >
                          <span class="text" style="color:black">{{
                            identite
                          }}</span>
                        </li>
                        <li>
                          <span
                            class="title"
                            style="font-weight: bold; color:black"
                            >Nom:</span
                          >
                          <span class="text" style="color:black">{{
                            nom
                          }}</span>
                        </li>
                        <li>
                          <span
                            class="title"
                            style="font-weight: bold; color:black"
                            >Email:</span
                          >
                          <span class="text" style="color:black">{{
                            email
                          }}</span>
                        </li>
                        <li>
                          <span
                            class="title"
                            style="font-weight: bold; color:black"
                            >Numéro d'urgence:</span
                          >
                          <span class="text" style="color:black">{{
                            numero_urgence
                          }}</span>
                        </li>
                        <li>
                          <span
                            class="title"
                            style="font-weight: bold; color:black"
                            >Adresse physique:</span
                          >
                          <span class="text" style="color:black">{{
                            addresse_physique
                          }}</span>
                        </li>
                        <li>
                          <span
                            class="title"
                            style="font-weight: bold; color:black"
                            >Adresse postale:</span
                          >
                          <span class="text" style="color:black">{{
                            adresse_postale
                          }}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="profile-tabs">
          <ul class="nav nav-tabs nav-tabs-bottom">
            <li class="nav-item">
              <a class="nav-link active" href="#about-cont" data-toggle="tab"
                >Departements et services</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#bottom-tab2" data-toggle="tab"
                >Analyses</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#bottom-tab3" data-toggle="tab"
                >Assurances</a
              >
            </li>
          </ul>

          <div class="tab-content">
            <div class="tab-pane show active" id="about-cont">
              <div class="row">
                <div class="col-md-12">
                  <div class="card-box">
                    <div class="content">
                      <h3
                        v-if="ajout_service"
                        class="card-title"
                        style="color:black; font-weight: bold;"
                      >
                        Ajouter des services
                      </h3>
                      <div class="form-group row" v-if="ajout_service">
                        <label class=" col-md-2">Service(s):</label>
                        <div class="col-md-10">
                          <div class="checkbox">
                            <p>{{erreur_message }}</p>
                            <label
                              v-for="(service, cle) in services_not"
                              :key="cle"
                            >
                              <input
                                :value="service.id"
                                v-model="coche"
                                type="checkbox"
                                name="checkbox"
                                required
                              />
                              {{ service.nom }}&nbsp;&nbsp;&nbsp;
                            </label>
                          </div>
                          <button
                            class="btn btn-success"
                            style="position:absolute; left:85%;"
                            v-on:click="terminer_ajout_service"
                          >
                            Ajouter
                          </button>
                          <button
                            class="btn btn-dark"
                            style="position:absolute; left:65%"
                            v-on:click="retour_add_service"
                          >
                            Precedent
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="content" v-if="ajout_departement_service">
                      <h3
                        class="card-title"
                        style="color:black; font-weight: bold;"
                      >
                        Ajouter des départements
                      </h3>
                      <div class="form-group row">
                        <label class=" col-md-2">Département(s):</label>
                        <div class="col-md-10">
                          <div class="form-group row">
                            <div class="col-md-10">
                              <select
                                class="form-control"
                                v-model="departement"
                              >
                                <option
                                  :value="cle"
                                  v-for="(depart, cle) in departements"
                                  :key="cle"
                                  >{{ depart.nom }}</option
                                >
                              </select>
                            </div>
                          </div>

                          <div class="form-group row">
                            <label
                              class="col-form-label col-md-2"
                              style="position:absolute; left:-20%;"
                              >Service(s):</label
                            >
                            <div class="col-md-10">
                              <div class="checkbox">
                                <label
                                  v-for="(serv, cle) in services"
                                  :key="cle"
                                >
                                  <input
                                    :value="serv.id"
                                    v-model="coche"
                                    type="checkbox"
                                    name="checkbox"
                                    required
                                  />
                                  {{ serv.nom }}&nbsp;&nbsp;&nbsp;
                                </label>
                              </div>
                            </div>
                          </div>
                          <button
                            class="btn btn-success"
                            style="position:absolute; left:85%;"
                            v-on:click="terminer_departement_service"
                          >
                            Terminer
                          </button>
                          <button
                            class="btn btn-warning"
                            style="position:absolute; left:45%; color:white;"
                            v-on:click="attribuer"
                          >
                            Attribuer et continuer/terminer
                          </button>
                          <button
                            class="btn btn-dark"
                            style="position:absolute; left:-15%"
                            v-on:click="retour_departement_service"
                          >
                            Precedent
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane show active"
                      id="about-cont"
                      v-if="ajout_departement_service"
                    >
                      <br /><br />
                      <div class="row">
                        <div class="col-md-12">
                          <div class="card-box">
                            <h3 class="card-title">
                              Liste des attributions
                            </h3>
                            <div class="experience-box">
                              <ul class="experience-list">
                                <li
                                  v-for="(attribution_departement_service,
                                  cle) in attribution_departements_services"
                                  :key="cle"
                                >
                                  <div class="experience-user">
                                    <div class="before-circle"></div>
                                  </div>
                                  <div class="experience-content">
                                    <div class="timeline-content">
                                      <a class="name">{{
                                        attribution_departement_service.departement
                                      }}</a
                                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i
                                        class="fa fa-trash-o m-r-5"
                                        style="cursor:pointer; color:red;"
                                        v-on:click="effacer(cle)"
                                      ></i
                                      ><br /><br />
                                      <span
                                        v-for="service in attribution_departement_service.nom_services"
                                        :key="service.id"
                                        class="custom-badge status-green"
                                        >{{ service }}</span
                                      >
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h3 class="card-title" v-if="list_departement_service">
                      Liste des départements et leurs services &nbsp; &nbsp;<i
                        class="fa fa-plus-circle m-r-5"
                        style="cursor:pointer; color:blue;"
                        v-on:click="ajouter_departement_service"
                      ></i>
                    </h3>
                    <div class="experience-box" v-if="list_departement_service">
                      <ul class="experience-list">
                        <li
                          v-for="(departement, cle) in departements_final[0]"
                          :key="cle"
                        >
                          <div class="experience-user">
                            <div class="before-circle"></div>
                          </div>
                          <div class="experience-content">
                            <div class="timeline-content">
                              <a class="name">{{
                                departement.departement_nom
                              }}</a
                              >&nbsp;&nbsp;&nbsp;<i
                                class="fa fa-plus-circle m-r-5"
                                style="cursor:pointer; color:blue;"
                                v-on:click="
                                  add_service(departement.departement_id)
                                "
                              ></i
                              >&nbsp;&nbsp;<i
                                class=" fa fa-trash-o m-r-5"
                                style="cursor:pointer; color:red;"
                                v-on:click="
                                  effacer_departement(
                                    departement.departement_id
                                  )
                                "
                              ></i
                              ><br /><br />
                              <div class="row">
                                <div
                                  v-for="(service, cle) in departement.services"
                                  :key="cle"
                                >
                                  <span
                                    v-if="service.service_statut === 'inactif'"
                                    class="custom-badge status-red"
                                    >{{ service.service_nom }} </span
                                  >&nbsp;&nbsp;
                                  <span
                                    v-if="service.service_statut === 'actif'"
                                    class="custom-badge status-green"
                                    >{{ service.service_nom }}</span
                                  >&nbsp;
                                  <i
                                    style="color:red; cursor:pointer;"
                                    v-on:click="
                                      effacer_service(
                                        service.service_id,
                                        departement.departement_id
                                      )
                                    "
                                    class="fa fa-minus-circle"
                                    aria-hidden="true"
                                  ></i>
                                </div>
                                &nbsp;&nbsp;&nbsp;
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Analyse -->

            <div class="tab-pane" id="bottom-tab2">
              <div class="row">
                <div class="col-md-12">
                  <div class="card-box">
                    <div class="content" v-if="ajout_analyse">
                      <h3
                        class="card-title"
                        style="color:black; font-weight: bold;"
                      >
                        Ajouter des analyses
                      </h3>
                      <div class="form-group row">
                        <label class=" col-md-2">Analyse(s):</label>
                        <div class="col-md-10">
                          <div class="checkbox">
                            <label
                              v-for="(analyse, cle) in analyses"
                              :key="cle"
                            >
                              <input
                                :value="analyse.id"
                                v-model="coche"
                                type="checkbox"
                                name="checkbox"
                                required
                              />
                              {{ analyse.denomination }}&nbsp;&nbsp;&nbsp;
                            </label>
                          </div>
                          <button
                            class="btn btn-success"
                            style="position:absolute; left:85%;"
                            v-on:click="terminer_analyse"
                          >
                            Ajouter
                          </button>
                          <button
                            class="btn btn-dark"
                            style="position:absolute; left:65%"
                            v-on:click="retour_analyse"
                          >
                            Precedent
                          </button>
                        </div>
                      </div>
                    </div>
                    <h3 class="card-title" v-if="list_analyse">
                      Liste des analyses &nbsp; &nbsp;<i
                        class="fa fa-plus-circle m-r-5"
                        style="cursor:pointer; color:blue;"
                        v-on:click="ajouter_analyse"
                      ></i>
                    </h3>

                    <div class="row" v-if="list_analyse">
                      <div class="col-md-12">
                        <div class="table-responsive">
                          <table
                            class="table table-striped custom-table mb-0 datatable"
                          >
                            <thead>
                              <tr>
                                <th>Codes</th>
                                <th>Denominations</th>
                                <th>Cotations</th>
                                <th>Status</th>
                                <th class="text-right">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                v-for="analyse in analyses"
                                v-bind:key="analyse.id"
                              >
                                <td>{{ analyse.code }}</td>
                                <td>{{ analyse.denomination }}</td>
                                <td>{{ analyse.cotation }}</td>
                                <td v-if="analyse.statut === 'actif'">
                                  <span class="custom-badge status-green">{{
                                    analyse.statut
                                  }}</span>
                                </td>
                                <td v-else>
                                  <span class="custom-badge status-red">{{
                                    analyse.statut
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
                                    <div
                                      class="dropdown-menu dropdown-menu-right"
                                    >
                                      <a
                                        v-if="analyse.statut === 'actif'"
                                        class="dropdown-item "
                                        href="#"
                                        data-toggle="modal"
                                        data-target="#delete_employee"
                                        v-on:click="Voir(analyse.id)"
                                        >Voir +</a
                                      >
                                      <a
                                        v-if="analyse.statut === 'actif'"
                                        class="dropdown-item "
                                        href="#"
                                        data-toggle="modal"
                                        data-target="#delete_employee"
                                        v-on:click="modifier(analyse.id)"
                                        ><i class="fa fa-pencil m-r-5"></i
                                        >Modifier</a
                                      >
                                      <a
                                        v-if="analyse.statut === 'actif'"
                                        class="dropdown-item "
                                        href="#"
                                        data-toggle="modal"
                                        data-target="#delete_employee"
                                        v-on:click="desactiver(analyse.id)"
                                        ><i class="fa fa-trash-o m-r-5"></i
                                        >désactiver la clinique</a
                                      >
                                      <a
                                        v-if="analyse.statut === 'inactif'"
                                        class="dropdown-item "
                                        href="#"
                                        data-toggle="modal"
                                        data-target="#delete_employee"
                                        v-on:click="activer(analyse.id)"
                                        ><i class="fa fa-trash-o m-r-5"></i
                                        >Activer la clinique</a
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
            </div>

            <!-- Assurance -->

            <div class="tab-pane" id="bottom-tab3">
              <div class="row">
                <div class="col-md-12">
                  <div class="card-box">
                    <div class="content" v-if="ajout_assurance">
                      <h3
                        class="card-title"
                        style="color:black; font-weight: bold;"
                      >
                        Ajouter des assurances
                      </h3>
                      <div class="form-group row">
                        <label class=" col-md-2">Assurance(s):</label>
                        <div class="col-md-10">
                          <div class="checkbox">
                            <label
                              v-for="(assurance, cle) in assurances"
                              :key="cle"
                            >
                              <input
                                :value="assurance.id"
                                v-model="coche"
                                type="checkbox"
                                name="checkbox"
                                required
                              />
                              {{ assurance.nom }}&nbsp;&nbsp;&nbsp;
                            </label>
                          </div>
                          <button
                            class="btn btn-success"
                            style="position:absolute; left:85%;"
                            v-on:click="terminer_assurance"
                          >
                            Ajouter
                          </button>
                          <button
                            class="btn btn-dark"
                            style="position:absolute; left:65%"
                            v-on:click="retour_assurance"
                          >
                            Precedent
                          </button>
                        </div>
                      </div>
                    </div>

                    <h3 class="card-title" v-if="list_assurance">
                      Liste des assurances &nbsp; &nbsp;<i
                        class="fa fa-plus-circle m-r-5"
                        style="cursor:pointer; color:blue;"
                        v-on:click="ajouter_assurance"
                      ></i>
                    </h3>
                    <div class="row" v-if="list_assurance">
                      <div class="col-md-12">
                        <div class="table-responsive">
                          <table
                            class="table table-striped custom-table mb-0 datatable"
                          >
                            <thead>
                              <tr>
                                <th>Assurances</th>
                                <th>Entreprises</th>
                                <th>Status</th>
                                <th class="text-right">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                v-for="assurance in assurances"
                                v-bind:key="assurance.id"
                              >
                                <td>{{ assurance.nom }}</td>
                                <td>{{ assurance.entreprise }}</td>
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
                                    <div
                                      class="dropdown-menu dropdown-menu-right"
                                    >
                                      <a
                                        v-if="assurance.statut === 'actif'"
                                        class="dropdown-item "
                                        href="#"
                                        data-toggle="modal"
                                        data-target="#delete_employee"
                                        v-on:click="Voir(assurance.id)"
                                        >Voir +</a
                                      >
                                      <a
                                        v-if="assurance.statut === 'actif'"
                                        class="dropdown-item "
                                        href="#"
                                        data-toggle="modal"
                                        data-target="#delete_employee"
                                        v-on:click="modifier(assurance.id)"
                                        ><i class="fa fa-pencil m-r-5"></i
                                        >Modifier</a
                                      >
                                      <a
                                        v-if="assurance.statut === 'actif'"
                                        class="dropdown-item "
                                        href="#"
                                        data-toggle="modal"
                                        data-target="#delete_employee"
                                        v-on:click="desactiver(assurance.id)"
                                        ><i class="fa fa-trash-o m-r-5"></i
                                        >désactiver la clinique</a
                                      >
                                      <a
                                        v-if="assurance.statut === 'inactif'"
                                        class="dropdown-item "
                                        href="#"
                                        data-toggle="modal"
                                        data-target="#delete_employee"
                                        v-on:click="activer(assurance.id)"
                                        ><i class="fa fa-trash-o m-r-5"></i
                                        >Activer la clinique</a
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

export default {
  data() {
    return {
      prealoader: false,
      nom: "",
      numero_urgence: "",
      addresse_physique: "",
      adresse_postale: "",
      fax: "",
      identite: "",
      departements_final: [],
      // specialites: [],
      erreur_message:"",
      message: "",
      success: false,
      errors: false,
      preloader: false,
      analyses: [],
      assurances: [],
      services: [],
      departements: [],
      services_not:[],

      // Ajout analyses, assurance, departements/services
      ajout_analyse: false,
      ajout_assurance: false,
      list_assurance: false,
      list_analyse: false,
      ajout_departement_service: false,
      list_departement_service: false,
      ajout_service: false,
      coche: [],
      sauvegarder: [],
      attribution_departements_services: [],
    };
  },
  components: {
    loader,
  },
  created() {
    this.preloader = true;
    this.chargement();
    this.chargement_depart();
    this.charger_analyses();
    this.charger_assurances();
    this.charger_departement_service();
  },
  methods: {
    // fonction des chargements
    charger_departement_service() {
      console.log("charger departements");
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + "/getDepartementsNotInClinique/" + this.$route.params.id)
        .then((response) => {
          console.log("departements not in clinique :", response.data);
          if (response.data.state === true) {
            if (
              response.data.departements.state === true &&
              response.data.services.state === true
            ) {
              console.log("all is true");
              this.departements = response.data.departements.data;
              this.services = response.data.services.data;
              console.log("services not in :", this.services);
              console.log("departements not in :", this.departements);
            }
            this.preloader = false;
          } else {
            this.preloader = false;
            console.log("erreur de chargement");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
      charger_assurances() {
        this.list_assurance = true;
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
              console.log("charger assurances :", response.data.data);
              this.preloader = false;
              var donnee = response.data.data;
              donnee.forEach((element) => {
                if (element.statut === "actif") {
                  this.assurances.push(element);
                }
              });
            } else {
              this.preloader = false;
              console.log("erreur de chargement");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      },
    modifier_clinique() {
      console.log("modifier_clinique");
      this.$router.push("/admin/modifier/" + this.$route.params.id);
    },
    retour_analyse() {
      this.ajout_analyse = false;
      this.list_analyse = true;
    },
    retour_assurance() {
      this.ajout_assurance = false;
      this.list_assurance = true;
    },
    retour_departement_service() {
      this.ajout_departement_service = false;
      this.list_departement_service = true;
    },
    retour_add_service() {
      this.ajout_service = false;
      this.list_departement_service = true;
    },
    ajouter_departement_service() {
      console.log("departements cliquer");
      this.ajout_departement_service = true;
      this.list_departement_service = false;
    },
    add_service(pk) {
      this.ajout_service = true;
      this.list_departement_service = false;
      this.departement = pk;
      console.log(pk);
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + "/getServicesNotInDepartement/" + pk)
        .then((response) => {
          this.services_not = [];
          this.erreur_message = "";
          if (response.data.state === true) {
            this.preloader = false;
            console.log("charger not services :", response.data.data);
            var donnee = response.data.data;
            donnee.forEach((element) => {
              if (element.statut === "actif") {
                this.services_not.push(element);
              }
            });
          } else {
            this.preloader = false;
            this.erreur_message = "Aucun services disponible"
          }
        })
        .catch((err) => {
          console.log(err);
        });
      console.log("ajouter");
    },
    ajouter_analyse() {
      this.ajout_analyse = true;
      this.list_analyse = false;
      console.log("cliquer");
    },
    ajouter_assurance() {
      this.ajout_assurance = true;
      this.list_assurance = false;
    },
    charger_analyses() {
      this.list_analyse = true;
      this.preloader = true;
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + "/listAnalyses")
        .then((response) => {
          if (response.data.state === true) {
            this.preloader = false;
            console.log("charger analyses :", response.data.data);
            var donnee = response.data.data;
            donnee.forEach((element) => {
              if (element.statut === "actif") {
                this.analyses.push(element);
              }
            });
          } else {
            this.preloader = false;
            console.log("erreur de chargement");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    chargement() {
      console.log("route :", this.$route.params.id);
      this.preloader = false;
      console.log("loading.......");
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + "/clinique/" + this.$route.params.id)
        .then((response) => {
          console.log(response.data);
          if (response.data.state === true) {
            this.preloader = false;
            this.nom = response.data.data.nom;
            this.identite = response.data.data.numero_identifiant;
            this.numero_urgence = response.data.data.telephone_urgence;
            this.email = response.data.data.email;
            this.addresse_physique = response.data.data.adresse_physique;
            this.fax = response.data.data.fax;
            this.adresse_postale = response.data.data.adresse_postale;
          } else {
            this.preloader = false;
            console.log(response.data.response);
          }
        });
    },
    chargement_depart() {
      this.list_departement_service = true;
      console.log("ca marche");
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + "/clinique/" + this.$route.params.id)
        .then((response) => {
          console.log(response.data);
          var departements = [];
          console.log("response :", response.data);
          console.log("response departements:", response.data.departements);
          departements = response.data.departements;
          console.log("departements", departements);
          this.departements_final.push(departements);
          console.log("departements final :", this.departements_final[0]);
        });
    },
    retourner() {
      this.$router.push("/admin/clinique");
    },
    desactiver_depart(pk) {
      this.preloader = true;
      console.log(pk);
      console.log(identifiant.id);
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .post(chemin + "/activerDesactiverDepartementsClinique", {
          clinique_id: this.$route.params.id,
          departement_id: pk,
          statut: "inactif",
        })
        .then((response) => {
          if (response.data.state === true) {
            this.preloader = false;
            this.success = true;
            this.message = response.data.message;
            console.log("desactiver");
          } else {
            this.preloader = false;
            this.errors = true;
            this.message = response.data.message;
            console.log("non desactiver");
          }
        })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });
    },
    service(pk) {
      this.$router.push("/departement/service/" + pk);
    },

    attribuer() {
      console.log("attribuer");
      console.log(this.departements[this.departement]);
      console.log(this.coche);
      var send_attribution = {
        id_departement: this.departements[this.departement].id,
        departement: this.departements[this.departement].nom,
        id_services: [],
        nom_services: [],
      };
      this.coche.forEach((item) => {
        const data = {
          id: "",
        };
        console.log("item :", item);
        console.log("services :", this.services[item - 1].nom);
        data.id = this.services[item - 1].id;
        send_attribution.id_services.push(data);
        send_attribution.nom_services.push(this.services[item - 1].nom);
        console.log("send attribution :", send_attribution);
        // console.log("this.services[item - 1].nom ",this.services[item - 1].nom);
      });

      this.sauvegarder.push(send_attribution);

      console.log("sauvegarder :", this.sauvegarder);
      this.attribution_departements_services.push(send_attribution);
      console.log(
        "attribution_departements_services :",
        this.attribution_departements_services
      );

      console.log("send attribution :", send_attribution);
      this.coche = [];
    },

    effacer(pk) {
      console.log("pk:", pk);
      console.log(
        "departements_services a supprimer:",
        this.attribution_departements_services[pk]
      );
      this.attribution_departements_services = this.attribution_departements_services.filter(
        (item) => item != this.attribution_departements_services[pk]
      );
      console.log("new liste :", this.attribution_departements_services);
    },




    terminer_ajout_service()  {
      console.log("ajout services");
      console.log("id du departement ajout service:", this.departement);
      var send_attribution = {
        id_departement: this.departement,
        id_services: [],
      };
      this.coche.forEach((item) => {
        const data = {
          id: "",
        };
        console.log("item :", item);
        console.log("services :", this.services[item - 1].nom);
        data.id = this.services[item - 1].id;
        send_attribution.id_services.push(data);
        send_attribution.nom_services.push(this.services[item - 1].nom);
        console.log("send attribution :", send_attribution);
        // console.log("this.services[item - 1].nom ",this.services[item - 1].nom);
      });

      this.sauvegarder.push(send_attribution);

      console.log("sauvegarder :", this.sauvegarder);
      this.attribution_departements_services.push(send_attribution);
      console.log(
        "attribution_departements_services :",
        this.attribution_departements_services
      );

      console.log("send attribution :", send_attribution);
      this.coche = [];
    },
    terminer_departement_service() {
      console.log("id de la clinique", this.$route.params.id);
      console.log(
        "id du departement :",
        this.departements[this.departement].id
      );
      console.log("liste complete :", this.sauvegarder);
      var service_departement = {
        departements_services: this.sauvegarder,
      };
      console.log(service_departement);
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .post(chemin + "/creationClinique", service_departement)
        .then((response) => {
          this.preloader = true;
          if (response.data.state === true) {
            this.preloader = false;
            this.success = true;
            this.message = response.data.message;
            console.log("reussie");
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


    // fonction pour effacer
    effacer_service(service_id, departement_id) {
      console.log("liste departements services :", this.departements_final[0]);
      console.log("service supprimé");
      console.log("id du service:", service_id);
      console.log("id du departement :", departement_id);

      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .post(chemin + "/updateToDeleteDepartementCliniqueService", {
          clinique_id: this.$route.params.id,
          departement_id: departement_id,
          service_id: service_id,
        })
        .then((response) => {
          window.location.reload()
          console.log(response.data);
          console.log("service supprimé");
        })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });
    },
    effacer_departement(pk){
      console.log("departement id :",pk);
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .post(chemin + "/updateToDeleteDepartementClinique", {
          clinique_id: this.$route.params.id,
          departement_id: pk,
        })
        .then((response) => {
          window.location.reload()
          console.log(response.data);
          console.log("departement supprimé");
        })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });
    }
  },
};
</script>
