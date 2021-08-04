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
                    <strong>Dépense en Pensements</strong>
                  </h4>

                  <div class="table-responsive">
                    <table class="table table-striped custom-table">
                      <thead>
                        <tr>
                          <th style="min-width:200px;">Désignations</th>
                          <th>Coût de l'assurance</th>
                          <th>Coût du patient</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="facture in factures.pensements"
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
                              }).format(prix_examens_T)
                            }}
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
                  <h4 class="m-b-10"><strong>Dépense en examens</strong></h4>

                  <div class="table-responsive">
                    <table class="table table-striped custom-table">
                      <thead>
                        <tr>
                          <th style="min-width:200px;">Désignations</th>
                          <th>Prix</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="facture in factures.examens"
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
                    <strong>Dépense en ordonnances</strong>
                  </h4>

                  <div class="table-responsive">
                    <table class="table table-striped custom-table">
                      <thead>
                        <tr>
                          <th style="min-width:200px;">Désignations</th>
                          <th>Prix unitaire</th>
                          <th>Quantité</th>
                          <th>Prix Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="facture in factures.ordonnances"
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
