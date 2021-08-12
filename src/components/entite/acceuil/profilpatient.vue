<template>
  <div>
    <loader v-if="preloader"></loader>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Dossier</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            {{ message_assurance }}
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="page-wrapper">
      <div class="content">
        <button class="btn btn-primary btn-rounded" v-on:click="retourner">
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </button>
        <button class="btn btn-primary btn-rounded" v-on:click="retourner">
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </button>
        <div class="col-sm-8 col-9 text-right m-b-20">
          <a
            href="add-doctor.html"
            class="btn btn-primary btn-rounded float-right"
            ><i class="fa fa-plus"></i> Nouvelle consultation</a
          >
        </div>
        <br /><br />
        <div class="row">
          <div class="col-sm-7 col-6">
            <h4 class="page-title" style="color:black; font-weight: bold;">
              PROFIL
            </h4>
          </div>
        </div>
        <div class="card-box profile-header">
          <div class="row">
            <div class="col-md-12">
              <div class="profile-view">
                <div class="profile-img-wrap">
                  <!-- <div class="profile-img">
                    <a href="#"
                      ><img
                        class="avatar"
                        src="assets/img/doctor-03.jpg"
                        alt=""
                      />
                    </a>
                  </div> -->
                </div>
                <div class="profile-basic">
                  <div class="row">
                    <div class="col-md-5">
                      <div class="profile-info-left">
                        <h3 class="user-name m-t-0 mb-0">{{ nom }}</h3>
                        <small class="text-muted" style="font-size:20px;">{{
                          prenom
                        }}</small>
                        <div class="staff-msg">
                          <!--<router-link to="/admin/permission"
                          //   ><a class="btn btn-primary" style="color:white"
                          //     >Droit d'accès</a
                          //   ></router-link
                          // >-->
                        </div>
                      </div>
                    </div>
                    <div class="col-md-7">
                      <ul class="personal-info">
                        <li>
                          <span class="title" style="font-weight: bold;"
                            >Telephone:</span
                          >
                          <span class="text" style="color:black">{{
                            telephone
                          }}</span>
                        </li>
                        <li>
                          <span class="title" style="font-weight: bold;"
                            >Email:</span
                          >
                          <span class="text" style="color:black">{{
                            mail
                          }}</span>
                        </li>
                        <li>
                          <span class="title" style="font-weight: bold;"
                            >Né le:</span
                          >
                          <span class="text" style="color:black">{{
                            date
                          }}</span>
                        </li>
                        <li>
                          <span class="title" style="font-weight: bold;"
                            >Nationalité:</span
                          >
                          <span class="text" style="color:black">{{
                            nationnalite
                          }}</span>
                        </li>
                        <li>
                          <span class="title" style="font-weight: bold;"
                            >Ethnie:</span
                          >
                          <span class="text" style="color:black">{{
                            ethnie
                          }}</span>
                        </li>
                        <li>
                          <span class="title" style="font-weight: bold;"
                            >Genre:</span
                          >
                          <span class="text" style="color:black">{{
                            sexe
                          }}</span>
                        </li>
                        <li>
                          <span class="title" style="font-weight: bold;"
                            >Téléphone:</span
                          >
                          <span class="text" style="color:black">{{
                            telephone
                          }}</span>
                        </li>
                        <li>
                          <span class="title" style="font-weight: bold;"
                            >Résidence:</span
                          >
                          <span class="text" style="color:black">{{
                            residence
                          }}</span>
                        </li>
                        <li>
                          <span class="title" style="font-weight: bold;"
                            >Quartier:</span
                          >
                          <span class="text" style="color:black">{{
                            quartier
                          }}</span>
                        </li>
                        <li>
                          <span class="title" style="font-weight: bold;"
                            >status:</span
                          >
                          <span class="text" style="color:black">{{
                            matrimoniale
                          }}</span>
                        </li>
                        <li>
                          <span class="title" style="font-weight: bold;"
                            >Profession:</span
                          >
                          <span class="text" style="color:black">{{
                            profession
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
      </div>
      <!-- Voir les parcours -->
      <div class="content">
        <div class="row">
          <div class="col-sm-4 col-3">
            <h4 class="page-title">Dossier Médical du patient</h4>
          </div>
        </div>
        <div class="row doctor-grid">
          <div
            class="col-md-4 col-sm-4  col-lg-3"
            v-for="dossier in dossiers"
            v-bind:key="dossier.id"
          >
            <div class="profile-widget">
              <div class="doctor-img">
                <a class="avatar" style="cursor:default;"
                  ><img alt="" src="../../../assets/image/medical.png"
                /></a>
              </div>
              <h4 class="doctor-name text-ellipsis">
                <a>{{ dossier.num }}</a>
              </h4>
              <div class="doc-prof">{{ dossier.objet }}</div>
              <div class="user-country">
                {{ dossier.created_at }}
              </div>
              <button
                v-on:click="voir(dossier.id)"
                type="button"
                class="btn btn-info"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Voir +
              </button>
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
import moment from "moment";
moment.locale("fr");

export default {
  name: "profilemploye",
  data() {
    return {
      nom: "",
      prenom: "",
      sexe: "",
      date: "",
      nationnalite: "",
      ethnie: "",
      lieu_naissance: "",
      residence: "",
      quartier: "",
      fix: "",
      telephone: "",
      mail: "",
      assurance: "",
      nom_assurance: "",
      profession: "",
      formation: "",
      activite: "",
      instruction: "",
      matrimoniale: "",
      preloader: false,
      dossiers: [],
      assurances: [],
      message_assurance: "",
    };
  },
  components: {
    loader,
  },
  created() {
    this.charger_info();
  },
  methods: {
    retourner() {
      this.$router.push("/acceuil");
    },
    voir(pk) {
      console.log(pk);
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + `/patient/${this.$route.params.id}`)
        .then((response) => {
          const dossiers = response.data.dossiers;
          dossiers.forEach((dossier) => {
            if (dossier.id === pk) {
              console.log("id du dossiers", dossier.assurance);
              this.assurances = dossier.assurance;
              console.log(" assurance :", dossier.assurance);
              if (this.assurance === 0) {
                this.message_assurance = "Aucune assurance";
              }
            }
          });
        })
        .catch((err) => {
          this.preload = false;
          console.log(err);
        });
    },
    charger_info() {
      this.preloader = true;
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + `/patient/${this.$route.params.id}`)
        .then((response) => {
          this.preloader = false;
          console.log(response.data);
          this.nom = response.data.nom;
          this.prenom = response.data.prenoms;
          this.sexe = response.data.sexe;
          this.date = response.data.date_naissance;
          this.nationnalite = response.data.nationalite;
          this.lieu_naissance = response.data.lieu_naissance;
          this.ethnie = response.data.ethnie;
          this.residence = response.data.residence_ville;
          this.quartier = response.data.quartier;
          this.fix = response.data.contacts_fixe;
          this.telephone = response.data.contacts_cel;
          this.mail = response.data.email;
          this.assurance = response.data.assurance;
          this.profession = response.data.profession;
          this.formation = response.data.formation;
          this.activite = response.data.etat_professionnel;
          this.instruction = response.data.instruction;
          this.matrimoniale = response.data.status_matrimonial;

          response.data.created_at = moment(response.data.created_at).format(
            "Do MMMM YYYY, H:mm:ss "
          );
          console.log("dossiers :", this.dossiers);
          response.data.dossiers.forEach((element) => {
            element.created_at = moment(element.created_at).format(
              "Do MMMM YYYY, H:mm:ss "
            );
          });
          this.dossiers = response.data.dossiers;
        })
        .catch((err) => {
          this.preload = false;
          console.log(err);
        });
    },
  },
};
</script>
