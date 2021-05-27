<template>
  <div>
    <loader v-if="preloader"></loader>
    <div class="main-wrapper account-wrapper">
      <div class="account-page">
        <div class="account-center">
          <div class="account-box">
            <form class="form-signin" @submit.prevent="connecter" method="post">
              <div class="account-logo">
                <a href="index-2.html"
                  ><img src="../../assets/img/logo-dark.png" alt=""
                /></a>
              </div>
              <div class="alert alert-danger" role="alert" v-if="erreur">
                {{ erreur }}
              </div>
              <div class="form-group">
                <label>email</label>
                <input
                  type="email"
                  autofocus=""
                  class="form-control"
                  v-model="email"
                />
              </div>
              <div class="form-group">
                <label>Mot de passe</label>
                <input type="password" class="form-control" v-model="code" />
              </div>
              <div class="form-group text-center">
                <button
                  type="submit"
                  class="btn btn-primary account-btn"
                  @submit.prevent="connecter"
                >
                  Se connecter
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { chemin } from "../../assets/js/chemin.js";

import loader from "../loader.vue";

export default {
  name: "login",
  data() {
    return {
      erreur: "",
      succe: "",
      code: "",
      email: "",
      preloader: false,
    };
  },
  components: {
    loader,
  },
  methods: {
    connecter() {
      this.preloader = true;
      if (this.email == "" || this.code === "") {
        this.preloader = false;
        this.erreur = "Veuillez remplir les differents champs";
      } else {
        axios.get(chemin + "/ping")
        .then((response) => {
          console.log(response.data.state);
          if (response.data.state === true) {
            axios.post(chemin + "/connexion",{
              email:this.email,
              password:this.code
            })
            .then( response => {
              console.log(response.data);
              if (response.data.state === false) {
                this.preloader = false;
                this.erreur = response.data.message;
              } 
              else {
                this.preloader = false
                console.log('token :',response.data.token);
                console.log(('User info :',response.data.user));
                localStorage.setItem('token',response.data.token)
                this.$router.push('/bureautique')
              }
            })
            .catch(err => {
              this.preloader = false
              console.log(err);
            })
          } 
          else {
            this.erreur = "Verifier votre connexion";
          }
        })
        .catch(err => {
          console.log(err);
        })

      }
    },
  },
};
</script>
<style></style>
