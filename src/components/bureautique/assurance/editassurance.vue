<template>
  <div>
    <loader v-if="preloader"></loader>
    <div class="page-wrapper">
      <div class="content">
        <div class="m-t-15">
          <button class="btn btn-primary btn-rounded" v-on:click="retourner">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
          </button>
        </div>
        <br />
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <h4 class="page-title" style="color:black; font-weight: bold;">
              MODIFIER
            </h4>
          </div>
        </div>
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
          <div class="col-lg-8 offset-lg-2">
            <form @submit.prevent="modifier">
              <div class="form-group">
                <label>Assurances <span class="text-danger">*</span></label>
                <input class="form-control" type="text" v-model="nom" />
              </div>
              <div class="form-group">
                <label>Pourcentage <span class="text-danger">*</span></label>
                <input class="form-control" type="text" v-model="pourcentage" />
              </div>
              <div class="form-group">
                <label>Nom de l'entreprise</label>
                <input class="form-control" type="text" v-model="entreprise" />
              </div>
              <div class="m-t-20 text-center">
                <button class="btn btn-success submit-btn">
                  modifier
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="notification-box">
        <div class="msg-sidebar notifications msg-noti">
          <div class="topnav-dropdown-header">
            <span>Messages</span>
          </div>
          <div class="drop-scroll msg-list-scroll" id="msg_list">
            <ul class="list-box">
              <li>
                <a href="chat.html">
                  <div class="list-item">
                    <div class="list-left">
                      <span class="avatar">R</span>
                    </div>
                    <div class="list-body">
                      <span class="message-author">Richard Miles </span>
                      <span class="message-time">12:28 AM</span>
                      <div class="clearfix"></div>
                      <span class="message-content"
                        >Lorem ipsum dolor sit amet, consectetur
                        adipiscing</span
                      >
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div class="list-item new-message">
                    <div class="list-left">
                      <span class="avatar">J</span>
                    </div>
                    <div class="list-body">
                      <span class="message-author">John Doe</span>
                      <span class="message-time">1 Aug</span>
                      <div class="clearfix"></div>
                      <span class="message-content"
                        >Lorem ipsum dolor sit amet, consectetur
                        adipiscing</span
                      >
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div class="list-item">
                    <div class="list-left">
                      <span class="avatar">T</span>
                    </div>
                    <div class="list-body">
                      <span class="message-author"> Tarah Shropshire </span>
                      <span class="message-time">12:28 AM</span>
                      <div class="clearfix"></div>
                      <span class="message-content"
                        >Lorem ipsum dolor sit amet, consectetur
                        adipiscing</span
                      >
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div class="list-item">
                    <div class="list-left">
                      <span class="avatar">M</span>
                    </div>
                    <div class="list-body">
                      <span class="message-author">Mike Litorus</span>
                      <span class="message-time">12:28 AM</span>
                      <div class="clearfix"></div>
                      <span class="message-content"
                        >Lorem ipsum dolor sit amet, consectetur
                        adipiscing</span
                      >
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div class="list-item">
                    <div class="list-left">
                      <span class="avatar">C</span>
                    </div>
                    <div class="list-body">
                      <span class="message-author"> Catherine Manseau </span>
                      <span class="message-time">12:28 AM</span>
                      <div class="clearfix"></div>
                      <span class="message-content"
                        >Lorem ipsum dolor sit amet, consectetur
                        adipiscing</span
                      >
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div class="list-item">
                    <div class="list-left">
                      <span class="avatar">D</span>
                    </div>
                    <div class="list-body">
                      <span class="message-author"> Domenic Houston </span>
                      <span class="message-time">12:28 AM</span>
                      <div class="clearfix"></div>
                      <span class="message-content"
                        >Lorem ipsum dolor sit amet, consectetur
                        adipiscing</span
                      >
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div class="list-item">
                    <div class="list-left">
                      <span class="avatar">B</span>
                    </div>
                    <div class="list-body">
                      <span class="message-author"> Buster Wigton </span>
                      <span class="message-time">12:28 AM</span>
                      <div class="clearfix"></div>
                      <span class="message-content"
                        >Lorem ipsum dolor sit amet, consectetur
                        adipiscing</span
                      >
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div class="list-item">
                    <div class="list-left">
                      <span class="avatar">R</span>
                    </div>
                    <div class="list-body">
                      <span class="message-author"> Rolland Webber </span>
                      <span class="message-time">12:28 AM</span>
                      <div class="clearfix"></div>
                      <span class="message-content"
                        >Lorem ipsum dolor sit amet, consectetur
                        adipiscing</span
                      >
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div class="list-item">
                    <div class="list-left">
                      <span class="avatar">C</span>
                    </div>
                    <div class="list-body">
                      <span class="message-author"> Claire Mapes </span>
                      <span class="message-time">12:28 AM</span>
                      <div class="clearfix"></div>
                      <span class="message-content"
                        >Lorem ipsum dolor sit amet, consectetur
                        adipiscing</span
                      >
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div class="list-item">
                    <div class="list-left">
                      <span class="avatar">M</span>
                    </div>
                    <div class="list-body">
                      <span class="message-author">Melita Faucher</span>
                      <span class="message-time">12:28 AM</span>
                      <div class="clearfix"></div>
                      <span class="message-content"
                        >Lorem ipsum dolor sit amet, consectetur
                        adipiscing</span
                      >
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div class="list-item">
                    <div class="list-left">
                      <span class="avatar">J</span>
                    </div>
                    <div class="list-body">
                      <span class="message-author">Jeffery Lalor</span>
                      <span class="message-time">12:28 AM</span>
                      <div class="clearfix"></div>
                      <span class="message-content"
                        >Lorem ipsum dolor sit amet, consectetur
                        adipiscing</span
                      >
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div class="list-item">
                    <div class="list-left">
                      <span class="avatar">L</span>
                    </div>
                    <div class="list-body">
                      <span class="message-author">Loren Gatlin</span>
                      <span class="message-time">12:28 AM</span>
                      <div class="clearfix"></div>
                      <span class="message-content"
                        >Lorem ipsum dolor sit amet, consectetur
                        adipiscing</span
                      >
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div class="list-item">
                    <div class="list-left">
                      <span class="avatar">T</span>
                    </div>
                    <div class="list-body">
                      <span class="message-author">Tarah Shropshire</span>
                      <span class="message-time">12:28 AM</span>
                      <div class="clearfix"></div>
                      <span class="message-content"
                        >Lorem ipsum dolor sit amet, consectetur
                        adipiscing</span
                      >
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="topnav-dropdown-footer">
            <a href="chat.html">See all messages</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import loader from "../../../components/loader.vue";
import axios from "axios";
import { chemin } from "../../../assets/js/chemin.js";

export default {
  name: "ajoutdepartement",
  data() {
    return {
      success: false,
      errors: false,
      message: "",
      preloader: false,

      nom: "",
      entreprise: "",
      id: "",
      pourcentage: "",
    };
  },
  components: {
    loader,
  },
  created() {
    this.preloader = true;
    axios
      .create({
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Access-Control-Allow-Origin": "*",
        },
      })
      .get(chemin + "/assurance/" + this.$route.params.id)
      .then((response) => {
        if (response.data.state === true) {
          this.preloader = false;
          this.nom = response.data.data.nom;
          this.entreprise = response.data.data.entreprise;
          this.pourcentage = response.data.data.pourcentage;
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
  methods: {
    retourner() {
      this.$router.push("/admin/assurance");
    },
    renitialiser() {
      (this.entreprise = ""), (this.nom = ""), (this.pourcentage = "");
    },
    modifier() {
      this.preloader = true;
      var assurances = {
        nom: this.nom,
        entreprise: this.entreprise,
        pourcentage: this.pourcentage,
      };
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .patch(
          chemin + "/modifierAssurance/" + this.$route.params.id,
          assurances
        )
        .then((response) => {
          if (response.data.state === true) {
            this.preloader = false;
            this.$swal({
              html: "Assurance modifiée",
              icon: "success",
              confirmButtonText: `OK`,
            }).then((result) => {
              if (result.isConfirmed) {
                this.$router.push("/admin/assurance");
              }
            });
          } else {
            this.preloader = false;
            this.errors = true;
            this.message = response.data.message;
            console.log("erreur");
          }
        });
    },
  },
};
</script>
