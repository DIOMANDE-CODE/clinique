<template>
  <div>
    <loader v-if="preloader"></loader>
    <div class="page-wrapper">
      <div class="content">
        <button class="btn btn-primary btn-rounded" v-on:click="retourner">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
          </button> <br><br>
        <div class="row">
          <div class="col-sm-7 col-6">
            <h4 class="page-title" style="color:black; font-weight: bold;">PROFIL</h4>
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
                        <small class="text-muted" style="font-size:20px;">{{prenom}}</small>
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
                          <span class="title" style="font-weight: bold;">Telephone:</span>
                          <span class="text" style="color:black">{{ telephone }}</span>
                        </li>
                        <li>
                          <span class="title" style="font-weight: bold;">Email:</span>
                          <span class="text" style="color:black">{{ email }}</span>
                        </li>
                        <li>
                          <span class="title" style="font-weight: bold;">Né le:</span>
                          <span class="text" style="color:black">{{ naissance }}</span>
                        </li>
                        <li>
                          <span class="title" style="font-weight: bold;">Nationalité:</span>
                          <span class="text" style="color:black">{{ nationnalite }}</span>
                        </li>
                        <li>
                          <span class="title" style="font-weight: bold;">Genre:</span>
                          <span class="text" style="color:black">{{ genre }}</span>
                        </li>
                        <li>
                          <span class="title" style="font-weight: bold;">Addresse:</span>
                          <span class="text" style="color:black">{{ adresse_domicile }}</span>
                        </li>
                        <li>
                          <span class="title" style="font-weight: bold;">Role:</span>
                          <span class="text" style="color:black">{{ role }}</span>
                        </li>
                         <li>
                          <span class="title" style="font-weight: bold;">Fonction:</span>
                          <span class="text" style="color:black">{{ profile }}</span>
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
    </div>
  </div>
</template>
<script>
import axios from "axios";
import {chemin} from "../../../assets/js/chemin.js"
import loader from "../../../components/loader.vue"

export default {
  name: "profilemploye",
  data() {
    return {
      nom: "",
      telephone: "",
      email: "",
      naissance: "",
      nationnalite: "",
      genre: "",
      role: "",
      adresse_domicile: "",
      prenom: "",
      preloader: false,
      profile : "",
    };
  },
  components: {
    loader
  },
  created() {
    this.charger_info();
  },
  methods: {
    retourner() {
      this.$router.push("/admin/employe");
    },
    charger_info() {
      
      this.preloader = true
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + `/utilisateur/${this.$route.params.id}`)
        .then((response) => {
          this.preloader = false;
          
          if (response.data.state === true) {
            this.nom = response.data.data.nom;
            this.telephone = response.data.data.telephone;
            this.email = response.data.data.email;
            this.naissance = response.data.data.date_naissance;
            this.nationnalite = response.data.data.nationalite,
            this.genre = response.data.data.genre,
            this.adresse_domicile = response.data.data.adresse_domicile
            this.role = response.data.data.role
            this.prenom = response.data.data.prenoms
            this.profile = response.data.data.profile[0].titre;

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
