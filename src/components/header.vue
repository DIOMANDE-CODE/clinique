<template>
  <div>
    <loader v-if="preloader"></loader>
    <div class="header">
      <div class="header-left">
        <router-link to="/bureautique"
          ><a class="logo">
            <img src="logo.png" width="35" height="35" alt="" />
            <span>Centre du Diabete</span>
          </a></router-link
        >
      </div>
      <ul class="nav user-menu float-right">
        <li class="nav-item dropdown">
          <a
            href="#"
            class="dropdown-toggle nav-link user-link"

          >
            <span class="user-img">
              <img
                class="rounded-circle"
                src="../assets/image/992511.png"
                width="24"
                alt="Admin"
              />
            </span>

            <span @click="deconnecter">Deconnexion</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { chemin } from "../assets/js/chemin.js";

import loader from "./loader.vue";

export default {
  name: "Header",
  mounted() {
    this.checktoken();
  },
  data() {
    return {
      preloader: false,
    };
  },
  components: {
    loader,
  },
  methods: {
    checktoken() {
      if (localStorage.getItem("token") === null) {
        this.$router.push("/");
      } 
    },
    deconnecter() {
      this.preloader = true;
      // localStorage.removeItem("token");

      // this.preloader = false;
      // this.$router.push("/");
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + localStorage.getItem("token"),
          },
        })
        .post(chemin + "/deconnexion")
        .then((response) => {
          
          if (response.data.state === true) {
            this.preloader = false;
            localStorage.removeItem("token");
            this.$router.push("/");
          } else {
            console.log("deconnexion echouée");
          }
        })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });
    },
  },
};
</script>
