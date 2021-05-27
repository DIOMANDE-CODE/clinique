<template>
  <div>
    <loader v-if="preloader"></loader>
    <div class="page-wrapper">
      <div class="content">
        <div class="row">
          <div class="col-sm-7 col-6">
            <h4 class="page-title">Profil</h4>
          </div>

          <div class="col-sm-5 col-6 text-right m-b-30">
            <a
              style="color:white"
              class="btn btn-primary btn-rounded"
              v-on:click="retourner"
              ><i class="fa fa-long-arrow-left "></i> retour</a
            >
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
                        <small class="text-muted">{{prenom}}</small>
                        <div class="staff-msg">
                          <router-link to="/admin/permission"
                            ><a class="btn btn-primary" style="color:white"
                              >Droit d'accès</a
                            ></router-link
                          >
                        </div>
                      </div>
                    </div>
                    <div class="col-md-7">
                      <ul class="personal-info">
                        <li>
                          <span class="title">Telephone:</span>
                          <span class="text">{{ telephone }}</span>
                        </li>
                        <li>
                          <span class="title">Email:</span>
                          <span class="text">{{ email }}</span>
                        </li>
                        <li>
                          <span class="title">Né le:</span>
                          <span class="text">{{ naissance }}</span>
                        </li>
                        <li>
                          <span class="title">Nationalité:</span>
                          <span class="text">{{ nationnalite }}</span>
                        </li>
                        <li>
                          <span class="title">Genre:</span>
                          <span class="text">{{ genre }}</span>
                        </li>
                        <li>
                          <span class="title">Addresse:</span>
                          <span class="text">{{ adresse_domicile }}</span>
                        </li>
                        <li>
                          <span class="title">Role:</span>
                          <span class="text">{{ role }}</span>
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
                >About</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#bottom-tab2" data-toggle="tab"
                >Profile</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#bottom-tab3" data-toggle="tab"
                >Messages</a
              >
            </li>
          </ul>

          <div class="tab-content">
            <div class="tab-pane show active" id="about-cont">
              <div class="row">
                <div class="col-md-12">
                  <div class="card-box">
                    <h3 class="card-title">Education Informations</h3>
                    <div class="experience-box">
                      <ul class="experience-list">
                        <li>
                          <div class="experience-user">
                            <div class="before-circle"></div>
                          </div>
                          <div class="experience-content">
                            <div class="timeline-content">
                              <a href="#/" class="name"
                                >International College of Medical Science
                                (UG)</a
                              >
                              <div>MBBS</div>
                              <span class="time">2001 - 2003</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="experience-user">
                            <div class="before-circle"></div>
                          </div>
                          <div class="experience-content">
                            <div class="timeline-content">
                              <a href="#/" class="name"
                                >International College of Medical Science
                                (PG)</a
                              >
                              <div>MD - Obstetrics & Gynaecology</div>
                              <span class="time">1997 - 2001</span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="card-box mb-0">
                    <h3 class="card-title">Experience</h3>
                    <div class="experience-box">
                      <ul class="experience-list">
                        <li>
                          <div class="experience-user">
                            <div class="before-circle"></div>
                          </div>
                          <div class="experience-content">
                            <div class="timeline-content">
                              <a href="#/" class="name"
                                >Consultant Gynecologist</a
                              >
                              <span class="time"
                                >Jan 2014 - Present (4 years 8 months)</span
                              >
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="experience-user">
                            <div class="before-circle"></div>
                          </div>
                          <div class="experience-content">
                            <div class="timeline-content">
                              <a href="#/" class="name"
                                >Consultant Gynecologist</a
                              >
                              <span class="time"
                                >Jan 2009 - Present (6 years 1 month)</span
                              >
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="experience-user">
                            <div class="before-circle"></div>
                          </div>
                          <div class="experience-content">
                            <div class="timeline-content">
                              <a href="#/" class="name"
                                >Consultant Gynecologist</a
                              >
                              <span class="time"
                                >Jan 2004 - Present (5 years 2 months)</span
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
            <div class="tab-pane" id="bottom-tab2">
              Tab content 2
            </div>
            <div class="tab-pane" id="bottom-tab3">
              Tab content 3
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { identifiant } from "../../../assets/js/info.js";
import axios from "axios";
// import chemin from "../../../assets/js/chemin.js"*
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
        .get(`http://192.168.1.3:8000/api/utilisateur/${identifiant.user_id}`)
        .then((response) => {
          this.preloader = false;
          console.log(response.data.data);
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
