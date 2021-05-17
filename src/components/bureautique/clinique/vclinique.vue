<template>
  <div>
    <div class="page-wrapper">
      <div class="content">
        <div class="row">
          <div class="col-sm-7 col-6">
            <h4 class="page-title">Plus d'information</h4>
          </div>

          <div class="col-sm-5 col-6 text-right m-b-30">
            <a
              class="btn btn-primary btn-rounded"
              style="color:white"
              v-on:click="retourner"
            >
              Retour
            </a>
          </div>
        </div>
        <div class="card-box profile-header">
          <div class="row">
            <div class="col-md-12">
              <div class="profile-view">
                <div class="profile-basic">
                  <div class="row">
                    <div class="col-md-5">
                      <div class="profile-info-right">
                        <h3 class="user-name m-t-0 mb-0">
                          {{ nom }}
                        </h3>
                        <small class="text-muted">{{ identite }}</small>
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
                          <span class="title">Addresse:</span>
                          <span class="text">{{ addresse_physique }}</span>
                        </li>
                        <li>
                          <span class="title">Fax:</span>
                          <span class="text">{{ fax }}</span>
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
                >Information</a
              >
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" href="#bottom-tab2" data-toggle="tab"
                >Profile</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#bottom-tab3" data-toggle="tab"
                >Messages</a
              >
            </li> -->
          </ul>

          <div class="tab-content">
            <div class="tab-pane show active" id="about-cont">
              <div class="row">
                <div class="col-md-12">
                  <div class="card-box">
                    <h3 class="card-title">Departement(s)</h3>
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
                              <div>
                                <span class="custom-badge status-red">
                                  desactiver
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="card-box mb-0">
                    <h3 class="card-title">Service(s)</h3>
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
                              <div>
                                <span class="custom-badge status-red">
                                  desactiver
                                </span>
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
            <!-- <div class="tab-pane" id="bottom-tab2">
              Tab content 2
            </div>
            <div class="tab-pane" id="bottom-tab3">
              Tab content 3
            </div> -->
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
export default {
  data() {
    return {
      prealoader: false,
      nom: "",
      telephone: "",
      addresse_physique: "",
      fax: "",
      identite: "",
    };
  },
  created() {
    this.chargement();
  },
  methods: {
    chargement() {
      console.log("loading.......");
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + "/listClinique")
        .then((response) => {
          var clinique = response.data.data;
          clinique.forEach((element) => {
            if (identifiant.id === element.id) {
              this.nom = element.nom
              this.identite = element.numero_identifiant
              this.telephone = element.telephone
              this.email = element.email
              this.addresse_physique = element.adresse_physique
              this.fax = element.fax
            }
          });
        });
    },
    retourner() {
      this.$router.push("/admin/clinique");
    },
  },
};
</script>
