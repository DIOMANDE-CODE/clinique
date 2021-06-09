<template>
  <div>
    <loader></loader>
    <div class="page-wrapper" v-if="previous">
      <div class="content">
        <div class="m-t-15">
          <button class="btn btn-primary btn-rounded" v-on:click="retourner">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
          </button>
        </div>
        <br />
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <h4 class="page-title" style="color:back; font-weight: bold;">
              AJOUTER
            </h4>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
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
            <form>
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label
                      >Numéro identifiant
                      <span class="text-danger">*</span></label
                    >
                    <input
                      class="form-control"
                      type="text"
                      v-model="numero_identifiant"
                      required
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label
                      >Nom de la compagnie
                      <span class="text-danger">*</span></label
                    >
                    <input
                      class="form-control"
                      type="text"
                      v-model="nom"
                      required
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>Telephone</label>
                    <input
                      class="form-control "
                      type="number"
                      v-model="telephone"
                      required
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>Email</label>
                    <input
                      class="form-control"
                      type="email"
                      v-model="email"
                      required
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>Numero d'urgence</label>
                    <input
                      class="form-control"
                      type="number"
                      v-model="telephone_urgence"
                      required
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>Addresse physique</label>
                    <input
                      class="form-control"
                      type="text"
                      required
                      v-model="addresse_physique"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>Addresse postale</label>
                    <input
                      class="form-control"
                      type="text"
                      required
                      v-model="addresse_postale"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>Fax</label>
                    <input
                      class="form-control"
                      type="text"
                      v-model="fax"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="m-t-20 text-center">
                <button
                  class="btn btn-danger submit-btn"
                  v-on:click="renitialiser"
                >
                  Réinitialiser
                </button>&nbsp;&nbsp;
                <button class="btn btn-dark submit-btn" v-on:click="suivant">
                  Suivant
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="page-wrapper" v-if="next">
      <div class="content">
        <button class="btn btn-primary btn-rounded" v-on:click="retourner">
          <i class="fa fa-arrow-left" aria-hidden="true"></i></button
        ><br /><br />
        <h3 class="page-title" style="color:black; font-weight: bold;">
          Attribuer service à departement
        </h3>
        <br />

        <div
          v-if="success"
          class="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          Attribution effectué avec succes
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
          Attribution non effectuée
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="form-group row">
          <label class="col-form-label col-md-2">Departement(s)</label>
          <div class="col-md-10">
            <select class="form-control" v-model="departement">
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
          <label class="col-form-label col-md-2">Service(s)</label>
          <div class="col-md-10">
            <div class="checkbox">
              <label v-for="(serv, cle) in services" :key="cle">
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
          v-on:click="terminer"
        >
          Terminer
        </button>
        <button
          class="btn btn-warning"
          style="position:absolute; left:16%; color:white;"
          v-on:click="attribuer"
        >
          Attribuer et continuer/terminer
        </button>
        <button
          class="btn btn-dark"
          style="position:absolute;"
          v-on:click="retour"
        >
          Precedent
        </button>
      </div>
      <br /><br />
      <div class="tab-pane show active" id="about-cont">
        <div class="row">
          <div class="col-md-12">
            <div class="card-box">
              <h3 class="card-title">Liste des des attributions</h3>
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
    </div>
  </div>
</template>
<script>
import loader from "../../../components/loader.vue";
import axios from "axios";
import { chemin } from "../../../assets/js/chemin.js";
// var sauvegarder = [];

export default {
  data() {
    return {
      numero_identifiant: "",
      nom: "",
      telephone: "",
      telephone_urgence: "",
      addresse_physique: "",
      addresse_postale: "",
      fax: "",

      preloader: false,
      success: false,
      errors: false,
      message: "",
      next: false,

      // Data des attributions
      cliniques: [],
      services: [],
      departements: "",
      coche: [],
      blocs: [],
      departements_services: [],
      voir: false,
      sauvegarder: [],
      attribution_departements_services: [],
    };
  },
  components() {
    loader;
  },
  created() {
    this.previous = true;
    // this.charge_departement();
    // this.charge_service();
  },
  methods: {
    retour() {
      this.previous = true;
      this.next = false;
    },
    renitialiser() {
      (this.nom = ""),
        (this.email = ""),
        (this.numero_identifiant = ""),
        (this.telephone = ""),
        (this.telephone_urgence = ""),
        (this.addresse_postale = ""),
        (this.addresse_physique = ""),
        (this.fax = "");
    },
    suivant() {
      console.log("cliquer");
      if (
        this.nom === "" ||
        this.numero_identifiant === "" ||
        this.telephone === "" ||
        this.telephone_urgence === "" ||
        this.email === "" ||
        this.addresse_physique === "" ||
        this.addresse_postale === "" ||
        this.fax === ""
      ) {
        this.errors = true;
        this.message = "Veuillez remplir tous les champs";
      } else {
        this.previous = false;
        this.next = true;
        this.services = [];
        this.charge_departement();
        this.charge_service();
      }
    },
    retourner() {
      this.$router.push("/admin/clinique");
    },

    // donnee des attributions
    charge_service() {
      this.preloader = true;
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + "/listService")
        .then((response) => {
          if (response.data.state === true) {
            this.preloader = false;
            var donnee = response.data.data;
            donnee.forEach((element) => {
              if (element.statut === "actif") {
                this.services.push(element);
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
    charge_departement() {
      this.preloader = true;
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + "/listDepartement")
        .then((response) => {
          if (response.data.state === true) {
            this.preloader = false;
            this.departements = response.data.data;
          } else {
            this.preloader = false;
            console.log("erreur de chargement");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    attribuer() {
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
        data.id = this.services[item - 1].id;
        send_attribution.id_services.push(data);
        send_attribution.nom_services.push(this.services[item - 1].nom);
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

      // console.log(" departements coche :",this.coche);
      // this.voir = true;
      // console.log(this.voir);
      // this.preloader = true;
      // // var send_attribution = []

      // console.log(
      //   " departement attribué :",
      //   this.departements[this.departement]
      // );

      // var send_data = {
      //   position_departement: this.departement,
      //   id_services: [],
      // };
      // var services_attribues = []
      // this.coche.forEach((key, item) => {
      //   console.log(" services attribués :",this.services[item]);
      //   services_attribues.push(this.services[item])

      //   // console.log("service attribué :", data.position_service);
      //   // send_attribution.id_services.push(data);
      //   // console.log("send attribution :", sen);
      // });

      // send_attribution = {
      //   departement:   this.departements[this.departement],
      //   id_services: services_attribues,
      // };

      // console.log("send attribution: ",send_attribution);
      // this.attribution_departements_services.push(send_attribution)
      // console.log("attribution departements services :",this.attribution_departements_services);

      // this.sauvegarder.push(send_data);

      // this.coche = [];
      // console.log(this.sauvegarder);
      // console.log("donnee coche:",send_data);
      // console.log("departements_services:", sauvegarder);
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
    terminer() {
      var clinique = {
        nom: this.nom,
        numero_identifiant: this.numero_identifiant,
        telephone: this.telephone,
        email: this.email,
        telephone_urgence: this.telephone_urgence,
        adresse_postale: this.addresse_postale,
        adresse_physique: this.addresse_physique,
        fax: this.fax,
        departements_services: this.sauvegarder,
      };
      console.log(clinique);
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .post(chemin + "/creationClinique", clinique)
        .then((response) => {
          this.preloader = true;
          if (response.data.state === true) {
            this.preloader = false;
            this.success = true;
            this.message = response.data.message;
            (this.nom = ""),
              (this.email = ""),
              (this.numero_identifiant = ""),
              (this.telephone = ""),
              (this.telephone_urgence = ""),
              (this.addresse_postale = ""),
              (this.addresse_physique = ""),
              (this.fax = ""),
              (this.coche = []);
            console.log("reussie");

            this.nom = "";
            this.description = "";
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
  },
};
</script>
