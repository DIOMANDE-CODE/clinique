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
              <button class="btn btn-white" @click="printfacture('test')">
                <i class="fa fa-print fa-lg"></i> Imprimer
              </button>
            </div>
          </div>
        </div>
        <div class="row" id="test">
          <div class="col-md-12" id="test">
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
                    <h3 class="text-uppercase" v-if="factures.factures">Facture #{{factures.factures[0].num_facture}}</h3>
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
                          <th class="text-center">Coût de initial</th>
                          <th class="text-center">Coût de l'assurance</th>
                          <th class="text-center">Coût du patient</th>
                          <th class="text-right">Etat</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="pensement in factures.pensements"
                          :key="pensement.id"
                        >
                          <td>
                            <h2>{{ pensement.libelle }}</h2>
                          </td>
                          <td class="text-center">
                            {{
                              new Intl.NumberFormat("de-DE", {
                                style: "currency",
                                currency: "CFA",
                              }).format(pensement.prix)
                            }}
                          </td>
                          <td class="text-center">
                            {{
                              new Intl.NumberFormat("de-DE", {
                                style: "currency",
                                currency: "CFA",
                              }).format(pensement.prixAssurance)
                            }}
                          </td>
                          <td class="text-center">
                            {{
                              new Intl.NumberFormat("de-DE", {
                                style: "currency",
                                currency: "CFA",
                              }).format(pensement.prix-pensement.prixAssurance)
                            }}
                          </td>
                          <td class="text-right" v-if="pensement.pivot.purchased === 0">
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
                                    payerPensement(pensement.id, pensement.pivot.dossier_id)
                                  "
                                  v-bind:identifiant="identifiant"
                                  ><i
                                    class="fa fa-minus-circle  m-r-5"
                                    style="cursor:pointer"
                                  ></i>
                                  Payer</a
                                >
                              </div>
                            </div>
                          </td>
                          <td class="text-right" v-else>Payé</td>
                        </tr>
                      </tbody>
                    </table>
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
                </div>
                
                <br /><br /><br /><br />
                <div class="col-md-12" v-if="factures.examens != 0">
                  <h4 class="m-b-10"><strong>Prestation en examens</strong></h4>

                  <div class="table-responsive">
                    <table class="table table-striped custom-table">
                      <thead>
                        <tr>
                          <th style="min-width:200px;">Désignations</th>
                          <th class="text-center">Coût de initial</th>
                          <th class="text-center">Coût de l'assurance</th>
                          <th class="text-center">Coût du patient</th>
                          <th class="text-right">Etat</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="examen in factures.examens"
                          :key="examen.id"
                        >
                          <td >
                            <h2>{{ examen.libelle }}</h2>
                          </td>
                          <td class="text-center">
                            {{
                              new Intl.NumberFormat("de-DE", {
                                style: "currency",
                                currency: "CFA",
                              }).format(Number(examen.prix))
                            }}
                          </td>
                          <td class="text-center">
                            {{
                              new Intl.NumberFormat("de-DE", {
                                style: "currency",
                                currency: "CFA",
                              }).format(examen.prixAssurance)
                            }}
                          </td>
                          <td class="text-center">
                            {{
                              new Intl.NumberFormat("de-DE", {
                                style: "currency",
                                currency: "CFA",
                              }).format(examen.prix-Number(examen.prixAssurance))
                            }}
                          </td>
                          <td class="text-right" v-if="examen.pivot.purchased === 0">
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
                                  v-on:click="payerExamen(examen.id,examen.pivot.dossier_id)"
                                  v-bind:identifiant="identifiant"
                                  ><i
                                    class="fa fa-minus-circle  m-r-5"
                                    style="cursor:pointer"
                                  ></i>
                                  Payer</a
                                >
                              </div>
                            </div>
                          </td>
                          <td class="text-center" v-else> Payé</td>
                        </tr>
                      </tbody>
                    </table>
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
                          v-for="medoc in medocs"
                          :key="medoc.id"
                        >
                          <td>
                            <h2>{{ medoc.libelle }}</h2>
                          </td>
                          <td>
                            {{
                              new Intl.NumberFormat("de-DE", {
                                style: "currency",
                                currency: "CFA",
                              }).format(medoc.prix)
                            }}
                          </td>
                          <td
                          >
                            {{ medoc.pivot.quantity }}
                          </td>
                          <td>
                            {{
                              new Intl.NumberFormat("de-DE", {
                                style: "currency",
                                currency: "CFA",
                              }).format(medoc.prix*medoc.pivot.quantity)
                            }}
                          </td>
                          <td class="text-right" v-if="medoc.pivot.purchased === 0">
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
                                  v-on:click="payerMedoc(medoc.id,medoc.pivot.ordonnance_id)"
                                  v-bind:identifiant="identifiant"
                                  ><i
                                    class="fa fa-minus-circle  m-r-5"
                                    style="cursor:pointer"
                                  ></i>
                                  Payer</a
                                >
                              </div>
                            </div>
                          </td>
                          <td v-else class="text-right"> Payé</td>
                        </tr>
                      </tbody>
                    </table>
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
                </div>
                <div class="col-md-12" v-if="factures.consultation != 0">
                  <h4 class="m-b-10">
                    <strong>Autres prestation</strong>
                  </h4>
                  <div class="table-responsive">
                    <table class="table table-striped custom-table">
                      <thead>
                        <tr>
                          <th style="min-width:200px;">Désignations</th>
                          <th>Coût initial</th>
                          <th>Coût assurance</th>
                          <th>Coût patient</th>
                          <th class="text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="consulte in factures.consultation"
                          :key="consulte.id"
                        >
                        <td>
                            <h2>{{ consulte.libelle }}</h2>
                          </td>
                          <td>
                            <h2>{{ consulte.prix }}</h2>
                          </td>
                          <td>
                            {{
                              new Intl.NumberFormat("de-DE", {
                                style: "currency",
                                currency: "CFA",
                              }).format(consulte.prixAssurance)
                            }}
                          </td>
                          <td>
                            {{
                              new Intl.NumberFormat("de-DE", {
                                style: "currency",
                                currency: "CFA",
                              }).format(consulte.prix-consulte.prixAssurance)
                            }}
                          </td>
                          <td class="text-right" v-if="consulte.pivot.purchased === 0">
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
                                  v-on:click="payerConsulte(consulte.id,consulte.pivot.dossier_id)"
                                  v-bind:identifiant="identifiant"
                                  ><i
                                    class="fa fa-minus-circle  m-r-5"
                                    style="cursor:pointer"
                                  ></i>
                                  Payer</a
                                >
                              </div>
                            </div>
                          </td>
                          <td v-else class="text-right"> 
                            Payé
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="col-sm-12">
                    <p>
                      <strong>Total:</strong>
                      {{
                        new Intl.NumberFormat("de-DE", {
                          style: "currency",
                          currency: "CFA",
                        }).format(factures.consultationCost)
                      }}
                    </p>
                  </div>
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
                          }).format(factures.total)
                        }}</span
                        ><br />
                      </li>
                      <li>
                        Montant Assurance:
                        <span style="color:blue;">{{
                          new Intl.NumberFormat("de-DE", {
                            style: "currency",
                            currency: "CFA",
                          }).format(factures.total_assurance)
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
              <div class="text-left">
                    {{  day}}
              </div>
              <div class="text-right">
                <div v-if="factures.factures && factures.factures[0].sold" class="text-uppercase text-center font-weight-bold text-danger">
                  soldé
                </div>
                <div v-else>
                  <button class="btn btn-secondary" @click="solderFacture(factures.factures[0].num_facture,factures.id)">
                    <i class="fa fa-money"></i> Solder
                  </button>
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
import moment from 'moment';
moment.locale('fr');
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
      medocs: [],
      destination: "",
      payer: 0,
      day:null,
      sold:false,
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
    printfacture(test){
      console.log(test)
      var printContents = document.getElementById(test).innerHTML;
      var originalContents = document.body.innerHTML;

      document.body.innerHTML = printContents;
      if (printContents) {
        window.print();
      }
      

      document.body.innerHTML = originalContents;
    },
    solderFacture(num_facture, dossierId) {
      console.log("num facture",num_facture,"dossier", dossierId);
      this.preloader = true;
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .post(chemin + "/solderFacture",{
          dossier_id:dossierId,
          num_facture:num_facture,
          sold:1
        })
        .then((response) => {
          this.sold = true
          console.log(response)
          this.charger_donnee();
          
          })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });
    },
    payerConsulte(consulteId, dossierId) {
      console.log("examen",consulteId,"dossier", dossierId);
      this.preloader = true;
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .post(chemin + "/payerConsultation",{
          dossier_id:dossierId,
          consultation_id:consulteId,
          purchased:1
        })
        .then((response) => {
          console.log(response)
          this.charger_donnee();
          })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });
    },
    payerPensement(pensementId, dossierId) {
      console.log("examen",pensementId,"dossier", dossierId);
      this.preloader = true;
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .post(chemin + "/payerPensement",{
          dossier_id:dossierId,
          medicament_id:pensementId,
          purchased:1
        })
        .then((response) => {
          console.log(response)
          this.charger_donnee();
          })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });
      console.log(pensementId, dossierId);
      this.factures.pensementCost = this.factures.pensementCost - dossierId;
      this.pensements = this.pensements.filter(
        (item) => {
          console.log(item.id);
          item.id != this.pensements[pensementId]
        }
      );
    },
    payerExamen(ExamenId, dossierId) {
      console.log("examen",ExamenId,"dossier", dossierId);
      this.preloader = true;
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .post(chemin + "/payerExamen",{
          dossier_id:dossierId,
          examen_id:ExamenId,
          purchased:1
        })
        .then((response) => {
          console.log(response)
          this.charger_donnee();
          })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });

    },
    payerMedoc(medocId, ordoId) {
      console.log("medoc Id",medocId,"ordonnance ID", ordoId);
      this.preloader = true;
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .post(chemin + "/payerMedoc",{
          medicament_id:medocId,
          ordonnance_id:ordoId,
          purchased:1
        })
        .then((response) => {
          console.log(response)
          this.charger_donnee();
          })
        .catch((err) => {
          this.preloader = false;
          console.log(err);
        });

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
          console.log('facture',response.data)
          this.nom =
            response.data.client.nom + " " + response.data.client.prenoms;
          this.factures = response.data;
          
          let merge= []
          response.data.ordonnances.forEach(ordo => {
              ordo.medicaments.forEach(medoc => {
                  merge.push(medoc)
              });
          });
          this.day =moment(new Date).format('Do-MM-YYYY H:mm:s')

          this.medocs= merge
          this.payer = Number(response.data.total) - Number(response.data.total_assurance);
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
<style scoped>
@media print {
  body * {
    visibility: hidden;
  }
  #test, #test * {
    visibility: visible;
  }
  #test {
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>