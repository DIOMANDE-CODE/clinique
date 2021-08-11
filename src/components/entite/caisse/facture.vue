<template>
  <div>
    <loader v-if="preload"></loader>
    <div class="page-wrapper">
      <div class="content">
        <div class="row">
          <div class="col-sm-5 col-4">
            <button class="btn btn-primary btn-rounded" v-on:click="retourner">
              <i class="fa fa-arrow-left" aria-hidden="true"></i>
            </button>
          </div>
          <div class="col-sm-7 col-8 text-right m-b-30">
            <div class="btn-group btn-group-sm">
              <button class="btn btn-white">
                <i class="fa fa-print fa-lg"></i> Imprimer
              </button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="card-box">
              <h4 class="payslip-title">
                Société de Gestion et d'Assistance Médicale ( SOGESCAM )
              </h4>
              <div class="row">
                <div class="col-sm-6 m-b-20">
                  <img src="assets/img/logo-dark.png" class="inv-logo" alt="" />
                  <ul class="list-unstyled mb-0">
                    <li>Centre Médical du diabète, des maladies</li>
                    <li>Cardio-Vasculaires, de la santé et de la</li>
                    <li>sécurité au travail de Marcory INJS</li>
                    <br />
                    <li>Siège : Abidjan Marcory</li>
                    <li>Boite Postale : 30 BP 467 Abidjan 30</li>
                    <li>Tel : 01520201-64529295</li>
                  </ul>
                </div>
                <div class="col-sm-6 m-b-20">
                  <div class="invoice-details">
                    <h3 class="text-uppercase">Facture #49029</h3>
                    <ul class="list-unstyled">
                      <li>
                        <b>Patient:</b> <span>{{ nom }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12 m-b-20">
                  <ul class="list-unstyled">
                    <li>
                      <h5 class="mb-0">
                        <strong>Date du jour : </strong> &nbsp;
                        {{ new Date(factures.created_at).getDate() }}/{{
                          new Date(factures.created_at).getMonth() + 1
                        }}/{{ new Date(factures.created_at).getFullYear() }}
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12" v-if="factures.pensements != 0">
                  <h4 class="m-b-10">
                    <strong>Prestation en Pensements</strong>
                  </h4>

                  <div class="table-responsive">
                    <table class="table table-striped custom-table">
                      <thead>
                        <tr>
                          <th style="min-width:200px;">Désignations</th>
                          <th>Coût de l'assurance</th>
                          <th>Coût du patient</th>
                          <th class="text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="facture in pensements"
                          :key="facture.id"
                        >
                          <td>
                            <h2>{{ facture.libelle }}</h2>
                          </td>
                          <td>
                            {{
                              new Intl.NumberFormat("de-DE", {
                                style: "currency",
                                currency: "CFA",
                              }).format(prix_examens_T)
                            }}
                          </td>
                          <td>
                            {{
                              new Intl.NumberFormat("de-DE", {
                                style: "currency",
                                currency: "CFA",
                              }).format(facture.prix)
                            }}
                          </td>
                          <td class="text-right">
                            <div class="dropdown dropdown-action">
                              <a
                                href="#"
                                class="action-icon dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                                ><i class="fa fa-minus-circle"></i
                              ></a>
                              <div class="dropdown-menu dropdown-menu-right">
                                <a
                                  class="dropdown-item"
                                  style="color:black; cursor:pointer"
                                  v-on:click="
                                    effacer_pensement(facture.id, facture.prix)
                                  "
                                  v-bind:identifiant="identifiant"
                                  ><i
                                    class="fa fa-minus-circle  m-r-5"
                                    style="cursor:pointer"
                                  ></i>
                                  Rétirer</a
                                >
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="col-sm-12">
                  <p>
                    <strong>Total:</strong>
                    {{
                      new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "CFA",
                      }).format(factures.pensementCost)
                    }}
                  </p>
                </div>
                <br /><br /><br /><br />
                <div class="col-md-12" v-if="factures.examens != 0">
                  <h4 class="m-b-10"><strong>Prestation en examens</strong></h4>

                  <div class="table-responsive">
                    <table class="table table-striped custom-table">
                      <thead>
                        <tr>
                          <th style="min-width:200px;">Désignations</th>
                          <th>Coût de l'assurance</th>
                          <th>Coût du patient</th>
                          <th class="text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="facture in examens"
                          :key="facture.id"
                        >
                          <td>
                            <h2>{{ facture.libelle }}</h2>
                          </td>
                          <td>
                            {{
                              new Intl.NumberFormat("de-DE", {
                                style: "currency",
                                currency: "CFA",
                              }).format(prix_examens_T)
                            }}
                          </td>
                          <td>
                            {{
                              new Intl.NumberFormat("de-DE", {
                                style: "currency",
                                currency: "CFA",
                              }).format(facture.prix)
                            }}
                          </td>
                          <td class="text-right">
                            <div class="dropdown dropdown-action">
                              <a
                                href="#"
                                class="action-icon dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                                ><i class="fa fa-minus-circle"></i
                              ></a>
                              <div class="dropdown-menu dropdown-menu-right">
                                <a
                                  class="dropdown-item"
                                  style="color:black; cursor:pointer"
                                  v-on:click="effacer_examens(facture.id,facture.prix)"
                                  v-bind:identifiant="identifiant"
                                  ><i
                                    class="fa fa-minus-circle  m-r-5"
                                    style="cursor:pointer"
                                  ></i>
                                  Rétirer</a
                                >
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="col-sm-12">
                  <p>
                    <strong>Total:</strong>
                    {{
                      new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "CFA",
                      }).format(factures.examenCost)
                    }}
                  </p>
                </div>
                <br /><br /><br /><br />
                <div class="col-md-12" v-if="factures.ordonnances != 0">
                  <h4 class="m-b-10">
                    <strong>Prestation en ordonnances</strong>
                  </h4>

                  <div class="table-responsive">
                    <table class="table table-striped custom-table">
                      <thead>
                        <tr>
                          <th style="min-width:200px;">Désignations</th>
                          <th>Coût unitaire</th>
                          <th>Quantité</th>
                          <th>Coût total</th>
                          <th class="text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="facture in ordonnances"
                          :key="facture.id"
                        >
                          <td
                            v-for="medicament in facture.medicaments"
                            :key="medicament.id"
                          >
                            <h2>{{ medicament.libelle }}</h2>
                          </td>
                          <td
                            v-for="medicament in facture.medicaments"
                            :key="medicament.id"
                          >
                            {{
                              new Intl.NumberFormat("de-DE", {
                                style: "currency",
                                currency: "CFA",
                              }).format(medicament.prix)
                            }}
                          </td>
                          <td
                            v-for="medicament in facture.medicaments"
                            :key="medicament.id"
                          >
                            {{ medicament.pivot.quantity }}
                          </td>
                          <td
                            v-for="medicament in facture.medicaments"
                            :key="medicament.id"
                          >
                            {{
                              new Intl.NumberFormat("de-DE", {
                                style: "currency",
                                currency: "CFA",
                              }).format(
                                medicament.prix * medicament.pivot.quantity
                              )
                            }}
                          </td>
                          <td class="text-right">
                            <div class="dropdown dropdown-action">
                              <a
                                href="#"
                                class="action-icon dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                                ><i class="fa fa-minus-circle"></i
                              ></a>
                              <div class="dropdown-menu dropdown-menu-right">
                                <a
                                  v-for="medicament in facture.medicaments"
                                  :key="medicament.id"
                                  class="dropdown-item"
                                  style="color:black; cursor:pointer"
                                  v-on:click="effacer_ordonnance(medicament.id,medicament.prix)"
                                  v-bind:identifiant="identifiant"
                                  ><i
                                    class="fa fa-minus-circle  m-r-5"
                                    style="cursor:pointer"
                                  ></i>
                                  Rétirer</a
                                >
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="col-sm-12">
                  <p>
                    <strong>Total:</strong>
                    {{
                      new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "CFA",
                      }).format(factures.ordornnanceCost)
                    }}
                  </p>
                </div>
                <div style="position:relative; left:70%;">
                  <div class="invoice-details">
                    <ul class="list-unstyled">
                      <li>
                        Montant total:
                        <span style="color:blue;">{{
                          new Intl.NumberFormat("de-DE", {
                            style: "currency",
                            currency: "CFA",
                          }).format(prix_T)
                        }}</span
                        ><br />
                      </li>
                      <li>
                        Montant Assurance:
                        <span style="color:blue;">{{
                          new Intl.NumberFormat("de-DE", {
                            style: "currency",
                            currency: "CFA",
                          }).format(total_assurance)
                        }}</span
                        ><br />
                      </li>
                      <li>
                        Montant à payer:
                        <span style="color:green;">{{
                          new Intl.NumberFormat("de-DE", {
                            style: "currency",
                            currency: "CFA",
                          }).format(payer)
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
  </div>
</template>
<script>
import loader from "../../loader.vue";
import axios from "axios";
import { chemin } from "../../../assets/js/chemin.js";
export default {
  data() {
    return {
      // Data of constante
      prix_examens_T: 0,
      prix_ordonnances_T: 0,
      prix_pensement_T: 0,
      prix_T: 0,
      factures: [],
      examens: [],
      ordonnances: [],
      pensements: [],
      destination: "",
      payer: 0,

      preloader: false,
      success: false,
      errors: false,
      checkedAssurance: false,
      message: "",
      nom: "",
    };
  },
  components: {
    loader,
  },
  created() {
    this.charger_donnee();
  },
  methods: {
    effacer_pensement(pk, prix) {
      console.log("pensements :", this.pensements);
      console.log(pk, prix);
      this.factures.pensementCost = this.factures.pensementCost - prix;
      this.pensements = this.pensements.filter(
        (item) => {
          console.log(item.id);
          item.id != this.pensements[pk]
        }
      );
    },
       effacer_examens(pk, prix) {
      console.log("examens :", this.pensements);
      console.log(pk, prix);
      this.factures.examenCost = this.factures.examenCost - prix;
      this.examens = this.examens.filter(
        (item) => {
          console.log(item.id);
          item.id === pk
        }
      );
    },
    effacer_ordonnance(pk,prix) {
      console.log(pk, prix);
      console.log("ordonnances :", this.ordonnances);
      this.factures.ordornnanceCost = this.factures.ordornnanceCost - prix
      this.ordonnances = this.ordonnances.forEach((item) => {
        item.medicaments.filter((medoc) => {
          console.log(medoc);
          medoc.id != this.ordonnances[pk]
          console.log("ok");
        })
      });
      // console.log(pk, prix);
      // this.prix_ordonnances_T = this.prix_ordonnances_T - prix;
      // this.ordonnances = this.ordonnances.filter(
      //   (item) => item != this.ordonnances[pk]
      // );
    },
    charger_donnee() {
      this.preloader = true;
      console.log("workflow");
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + "/getDossierFacture/" + this.$route.params.id)
        .then((response) => {
          console.log("facture :", response.data);
          this.nom =
            response.data.client.nom + " " + response.data.client.prenoms;
          this.factures = response.data;
          this.examens = response.data.examens;
          this.ordonnances = response.data.ordonnances;
          this.pensements = response.data.pensements;
          this.prix_examens_T = Number(response.data.examenCost);
          this.prix_ordonnances_T = Number(response.data.ordornnanceCost);
          this.prix_pensement_T = Number(response.data.pensementCost);
          this.prix_T =
            this.prix_examens_T +
            this.prix_pensement_T +
            this.prix_ordonnances_T;
          this.payer = Number(response.data.total_assurance) || this.prix_T;
          console.log("information :", this.factures);
          this.preloader = false;
          this.total_assurance = this.prix_T-Number(response.data.total_assurance)
          })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });
    },
    charge() {
      console.log("loading......................");
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + "/listeDesConstantes")
        .then((response) => {
          console.log("constante list :", response.data);
          this.constantes = response.data;
          this.charger_workfow();
        })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });
    },
    prise_constante(id, val) {
      console.log("constante id:", id);
      console.log("constante value:", val);

      const valeur = {
        constante_id: id,
        value: val,
      };

      this.liste_constantes.push(valeur);
      console.log("liste constante :", this.liste_constantes);
    },
    retourner() {
      this.$router.push("/caisse");
    },
    renitialiser() {
      this.charge();
    },
    ajouter() {
      console.log("destination id", this.destination);
      this.preloader = true;
      var constante_final = {
        dossier_id: this.$route.params.id,
        constantes: this.constantes,
        destination_service_id: this.destination,
      };
      console.log("constante finale :", constante_final);
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .post(chemin + "/ajouterConstanteDossier", constante_final)
        .then((response) => {
          console.log(response.data);
          this.preloader = false;
          this.success = true;
          this.message = "Constante ajouté avec success";
          this.charge();
        })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });
    },
  },
};
</script>
