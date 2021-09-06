<template>
  <div>
    <loader v-if="preloader"></loader>
    <div class="page-wrapper">
      <div class="content">
      <div class="m-t-15">
          <button class="btn btn-primary btn-rounded" v-on:click="retourner">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
          </button>
        </div><br>
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <h4 class="page-title" style="color:black; font-weight: bold;">MODIFIER</h4>
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
                <label>Libéllé <span class="text-danger">*</span></label>
                <input class="form-control" type="text" v-model="nom" />
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
      description: "",
      id:""
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
      .get(chemin + "/traitementUrgence/" + this.$route.params.id)
      .then((response) => {
          this.preloader = false;
          this.nom = response.data.libelle;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    retourner() {
      this.$router.push("/traitement")
    },
    renitialiser(){
        this.nom = '',
        this.description = ''
    },
    modifier() {
      this.preloader = true
      var constante = {
        libelle: this.nom,
      };
      
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .put(chemin + "/traitementUrgence/" + this.$route.params.id, constante)
        .then((response) => {
            
            this.preloader = false
                this.$swal({
              html: "Traitément modifié",
              icon: "success",
              confirmButtonText: `OK`,
            }).then((result) => {
              if (result.isConfirmed) {
                this.$router.push("/traitement");
              }
            });
        });
    }
  }
};
</script>
