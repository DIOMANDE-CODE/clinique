<template>
  <div>
    <div class="page-wrapper">
      <div class="content">
        <button class="btn btn-primary btn-rounded" v-on:click="retourner">
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </button>

        <br /><br />
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
                        <h3 class="user-name m-t-0 mb-0">{{ dm.nom }}</h3>
                        <small class="text-muted" style="font-size:20px;">{{
                          dm.prenoms
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
                            >Matricule:</span
                          >
                          <span class="text" style="color:black">{{
                            dm.matricule
                          }}</span>
                        </li>
                        <li>
                          <span class="title" style="font-weight: bold;"
                            >Email:</span
                          >
                          <span class="text" style="color:black">{{
                            dm.email
                          }}</span>
                        </li>
                        <li>
                          <span class="title" style="font-weight: bold;"
                            >Né le:</span
                          >
                          <span class="text" style="color:black">{{
                            dm.date_naissance
                          }}</span>
                        </li>
                        <li>
                          <span class="title" style="font-weight: bold;"
                            >Nationalité:</span
                          >
                          <span class="text" style="color:black">{{
                            dm.nationalite
                          }}</span>
                        </li>
                        <li>
                          <span class="title" style="font-weight: bold;"
                            >Ethnie:</span
                          >
                          <span class="text" style="color:black">{{
                            dm.ethnie
                          }}</span>
                        </li>
                        <li>
                          <span class="title" style="font-weight: bold;"
                            >Genre:</span
                          >
                          <span class="text" style="color:black">{{
                            dm.sexe
                          }}</span>
                        </li>
                        <li>
                          <span class="title" style="font-weight: bold;"
                            >Téléphone:</span
                          >
                          <span class="text" style="color:black">{{
                            dm.contacts_cel
                          }}</span>
                        </li>
                        <li>
                          <span class="title" style="font-weight: bold;"
                            >Résidence:</span
                          >
                          <span class="text" style="color:black">{{
                            dm.residence_ville
                          }}</span>
                        </li>
                        <li>
                          <span class="title" style="font-weight: bold;"
                            >Quartier:</span
                          >
                          <span class="text" style="color:black">{{
                            dm.quartier
                          }}</span>
                        </li>
                        <li>
                          <span class="title" style="font-weight: bold;"
                            >status:</span
                          >
                          <span class="text" style="color:black">{{
                            dm.status_matrimonial
                          }}</span>
                        </li>
                        <li>
                          <span class="title" style="font-weight: bold;"
                            >Profession:</span
                          >
                          <span class="text" style="color:black">{{
                            dm.profession
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
            v-for="dossier in dm.dossiers"
            v-bind:key="dossier.id"
          >
            <div
              class="profile-widget"
              v-if="day == dossier.updated_at"
              id="new"
              style="background-color:#98FB98"
            >
              <div class="doctor-img">
                <a class="avatar" style="cursor:default;"
                  ><img alt="" src="../../../assets/image/medical.png"
                /></a>
              </div>
              <h4 class="doctor-name text-ellipsis">
                <a>{{ dossier.num }}</a>
              </h4>
              <div class="doc-prof">{{ dossier.objet }}</div>
              <div class="user-country">{{ dossier.created_at }} <br /></div>
              <button
                v-on:click="voir(dossier.id)"
                type="button"
                class="btn btn-info"
              >
                Voir +
              </button>
            </div>
            <div v-else class="profile-widget">
              <div class="doctor-img">
                <a class="avatar" style="cursor:default;"
                  ><img alt="" src="../../../assets/image/medical.png"
                /></a>
              </div>
              <h4 class="doctor-name text-ellipsis">
                <a>{{ dossier.num }}</a>
              </h4>
              <div class="doc-prof">{{ dossier.objet }}</div>
              <div class="user-country">{{ dossier.created_at }} <br /></div>
              <button
                v-on:click="voir(dossier.id)"
                type="button"
                class="btn btn-info"
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
      day: null,
      dm: {},
    };
  },
  created() {
    this.charger_info();
  },
  methods: {
    retourner() {
      this.$router.push("/consultation");
    },
    faire_diagnostic(pk) {
      this.$router.push("/consultation/diagnostic/" + pk);
    },
    voir(pk) {
      console.log(pk);
      this.$router.push("/consultation/info_medical/" + pk);
    },
    charger_info() {
      console.log(chemin);
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
          this.dm = response.data;
          response.data.dossiers.forEach((element) => {
            element.created_at = moment(element.created_at).format(
              "Do MMMM YYYY"
            );
            element.updated_at = moment(element.updated_at).format(
              "Do MMMM YYYY"
            );
          });
          this.day = moment().format("Do MMMM YYYY");
          console.log("dossiers medical :", response.data);
        })
        .catch((err) => {
          this.preload = false;
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
#new {
  animation-name: example;
  animation-duration: 10s;
}

@keyframes example {
  from {
    background-color: rgb(255, 0, 149);
  }
  to {
    background-color: #98fb98;
  }
}
</style>
