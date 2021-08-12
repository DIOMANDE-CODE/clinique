<template>
  <div>
    <loader v-if="preload"></loader>
    <div class="page-wrapper">
      <div class="content">
        <button class="btn btn-primary btn-rounded" v-on:click="retourner">
          <i class="fa fa-arrow-left" aria-hidden="true"></i></button
        ><br /><br />
        <div class="row">
          <div class="col-sm-4 col-3">
            <h4 class="page-title" style="color:black; font-weight:bold;">
              DROITS D'ACCES
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
          <div class="col-sm-11 col-md-11 col-lg-11 col-xl-12">
            <h6 class="card-title m-b-20">Module d'accèss</h6>
            <div class="m-b-30">
              <div class="table-responsive">
                <table class="table table-striped custom-table">
                  <thead>
                    <tr>
                      <th>Modules</th>
                      <th class="text-center">Lire</th>
                      <th class="text-center">Ecrire</th>
                      <th class="text-center">Créer</th>
                      <th class="text-center">Modifier</th>
                      <th class="text-center">Supprimer</th>
                      <th class="text-center">Transfert</th>
                      <th class="text-center">Assigner</th>
                      <th class="text-center">Importer</th>
                      <th class="text-center">Exporter</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="module in modules" v-bind:key="module.id">
                      <td>{{ module.libelle }}</td>
                      <td>
                        <div class="material-switch float-right">
                          <input
                            :id="module.id + '_module_read'"
                            v-model="module.read_permission"
                            type="checkbox"
                            @change="
                              switchValueReadChange(
                                module.libelle,
                                module.read_permission
                              )
                            "
                          />
                          <label
                            :for="module.id + '_module_read'"
                            class="badge-success"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <div class="material-switch float-right">
                          <input
                            :id="module.id + '_module_write'"
                            v-model="module.write_permission"
                            @change="
                              switchValueWriteChange(
                                module.libelle,
                                module.write_permission
                              )
                            "
                            type="checkbox"
                          />
                          <label
                            :for="module.id + '_module_write'"
                            class="badge-success"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <div class="material-switch float-right">
                          <input
                            :id="module.id + '_module_create'"
                            v-model="module.create_permission"
                            @change="
                              switchValueCreateChange(
                                module.libelle,
                                module.create_permission
                              )
                            "
                            type="checkbox"
                          />
                          <label
                            :for="module.id + '_module_create'"
                            class="badge-success"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <div class="material-switch float-right">
                          <input
                            :id="module.id + '_module_update'"
                            v-model="module.update_permission"
                            @change="
                              switchValueUpdateChange(
                                module.libelle,
                                module.update_permission
                              )
                            "
                            type="checkbox"
                          />
                          <label
                            :for="module.id + '_module_update'"
                            class="badge-success"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <div class="material-switch float-right">
                          <input
                            :id="module.id + '_module_delete'"
                            v-model="module.delete_permission"
                            @change="
                              switchValueDeleteChange(
                                module.libelle,
                                module.delete_permission
                              )
                            "
                            type="checkbox"
                          />
                          <label
                            :for="module.id + '_module_delete'"
                            class="badge-success"
                          ></label>
                        </div>
                      </td>

                      <td>
                        <div class="material-switch float-right">
                          <input
                            :id="module.id + '_module_transfert'"
                            v-model="module.transfert_permission"
                            @change="
                              switchValueTransfertChange(
                                module.libelle,
                                module.transfert_permission
                              )
                            "
                            type="checkbox"
                          />
                          <label
                            :for="module.id + '_module_transfert'"
                            class="badge-success"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <div class="material-switch float-right">
                          <input
                            :id="module.id + '_module_assigner'"
                            v-model="module.assign_permission"
                            @change="
                              switchValueAssignChange(
                                module.libelle,
                                module.assign_permission
                              )
                            "
                            type="checkbox"
                          />
                          <label
                            :for="module.id + '_module_assigner'"
                            class="badge-success"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <div class="material-switch float-right">
                          <input
                            :id="module.id + '_module_import'"
                            v-model="module.import_permission"
                            @change="
                              switchValueImportChange(
                                module.libelle,
                                module.import_permission
                              )
                            "
                            type="checkbox"
                          />
                          <label
                            :for="module.id + '_module_import'"
                            class="badge-success"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <div class="material-switch float-right">
                          <input
                            :id="module.id + '_module_export'"
                            type="checkbox"
                            v-model="module.export_permission"
                            @change="
                              switchValueExportChange(
                                module.libelle,
                                module.export_permission
                              )
                            "
                          />
                          <label
                            :for="module.id + '_module_export'"
                            class="badge-success"
                          ></label>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="text-center" style="position:absolute; left:85%;">
                <button class="btn btn-success " v-on:click="attribuer">
                  Attribuer
                </button>
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
import axios from "axios";
import { chemin } from "../../../assets/js/chemin.js";
import loader from "../../../components/loader.vue";

export default {
  data() {
    return {
      preload: true,
      success: false,
      errors: false,
      modules: [],
      permissions: [],
      messages:'',
    };
  },
  components: {
    loader,
  },
  created() {
    this.charger_module();
  },
  methods: {
    charger_module() {
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + "/getListeModule")
        .then((response) => {
          console.log("Modules du système charger module:", response.data.data);
          this.preload = false;
          if (response.data.state === true) {
            this.modules = response.data.data;
            this.modules.forEach((module) => {
              console.log("module", module);
              module.read_permission = false;
              module.write_permission = false;
              module.create_permission = false;
              module.delete_permission = false;
              module.transfert_permission = false;
              module.assign_permission = false;
              module.import_permission = false;
              module.export_permission = false;
              module.update_permission = false;
              module.user_id = this.$route.params.id;
            });
            this.charger_permission();
          } else {
            this.preloader = false;
            console.log("erreur de chargement");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    charger_permission() {
      console.log("charger_permission");
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .get(chemin + `/utilisateur/${this.$route.params.id}`)
        .then((response) => {
          console.log(
            "Permission du système :",
            response.data.data.permissions
          );
          const droits = response.data.data.permissions;
          this.modules.forEach((module) => {
            console.log("list of modules :", module);
            droits.forEach((permission) => {
              console.log("permission", permission.pivot);
              console.log("module write_permission :", permission.pivot.write);
                this.preload = false;
              if (module.id === permission.id) {
                if (permission.pivot.read === 1) {
                  module.read_permission = true;
                }
                if (permission.pivot.write === 1) {
                  module.write_permission = true;
                }
                if (permission.pivot.create === 1) {
                  module.create_permission = true;
                }
                if (permission.pivot.delete === 1) {
                  module.delete_permission = true;
                }
                if (permission.pivot.transfert === 1) {
                  module.transfert_permission = true;
                }
                if (permission.pivot.assigner === 1) {
                  module.assign_permission = true;
                }
                if (permission.pivot.import === 1) {
                  module.import_permission = true;
                }
                if (permission.pivot.export === 1) {
                  module.export_permission = true;
                }
                if (permission.pivot.update === 1) {
                  module.update_permission = true;
                }
              }
            
            });
          });
          console.log("new modules :", this.modules);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    retourner() {
      this.$router.push("/admin/employe");
    },
    attribuer() {
      console.log("attribuer");
      console.log("envoie api :", this.modules);
      this.preload = true;
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .post(chemin + "/assignerPermission", {
          modules: this.modules,
        })
        .then((response) => {
          this.success = true;
          this.message = "Attribution effectué avec success"
          console.log("response :", response.data);
          console.log("success");
          this.preload = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    switchValueReadChange(pk, access) {
      console.log("id du module :", pk);
      console.log("valeur du droit read :", access);
    },

    switchValueWriteChange(pk, access) {
      console.log("id du module :", pk);
      console.log("valeur du droit write:", access);
    },

    switchValueCreateChange(pk, access) {
      console.log("id du module :", pk);
      console.log("valeur du droit create :", access);
    },

    switchValueDeleteChange(pk, access) {
      console.log("id du module :", pk);
      console.log("valeur du droit delete :", access);
    },

    switchValueAssignChange(pk, access) {
      console.log("id du module :", pk);
      console.log("valeur du droit assign :", access);
    },

    switchValueImportChange(pk, access) {
      console.log("id du module :", pk);
      console.log("valeur du droit import :", access);
    },

    switchValueTransfertChange(pk, access) {
      console.log("id du module :", pk);
      console.log("valeur du droit transfert :", access);
    },

    switchValueExportChange(pk, access) {
      console.log("id du module :", pk);
      console.log("valeur du droit export :", access);
    },

    switchValueUpdateChange(pk, access) {
      console.log("id du module :", pk);
      console.log("valeur du droit update :", access);
    },
  },
};
</script>
