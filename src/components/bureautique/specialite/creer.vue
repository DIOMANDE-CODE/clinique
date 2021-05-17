<template>
  <div>
    <div class="page-wrapper">
      <br />
      <button
        class="btn btn-primary"
        style="position:absolute; left:3%"
        v-on:click="retourner"
      >
        Retourner
      </button>
      <div class="content">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <h4 class="page-title text-center">Creer un profil</h4>
            <br />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div class="form-group row">
              <label class="col-form-label col-md-2">Spécialité</label>
              <div class="col-md-10">
                <select class="form-control">
                  <option>-- Choisir --</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                  <option>Option 5</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-8 col-md-8 col-lg-8 col-xl-9">
            <div class="m-b-30">
              <ul class="list-group">
                <li class="list-group-item">
                  Employee
                  <div class="material-switch float-right">
                    <input id="staff_module" type="checkbox" />
                    <label for="staff_module" class="badge-success"></label>
                  </div>
                </li>
                <li class="list-group-item">
                  Holidays
                  <div class="material-switch float-right">
                    <input id="holidays_module" type="checkbox" />
                    <label for="holidays_module" class="badge-success"></label>
                  </div>
                </li>
                <li class="list-group-item">
                  Leave Request
                  <div class="material-switch float-right">
                    <input id="leave_module" type="checkbox" />
                    <label for="leave_module" class="badge-success"></label>
                  </div>
                </li>
                <li class="list-group-item">
                  Events
                  <div class="material-switch float-right">
                    <input id="events_module" type="checkbox" />
                    <label for="events_module" class="badge-success"></label>
                  </div>
                </li>
                <li class="list-group-item">
                  Chat
                  <div class="material-switch float-right">
                    <input id="chat_module" type="checkbox" />
                    <label for="chat_module" class="badge-success"></label>
                  </div>
                </li>
              </ul>
            </div>
            <div class="table-responsive">
              <table class="table table-striped custom-table">
                <thead>
                  <tr>
                    <th>Permissions</th>
                    <th class="text-center">Lire</th>
                    <th class="text-center">Ecrire</th>
                    <th class="text-center">Creer</th>
                    <th class="text-center">Effacer</th>
                    <th class="text-center">Import</th>
                    <th class="text-center">Export</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Employee</td>
                    <td class="text-center">
                      <input type="checkbox" checked="" />
                    </td>
                    <td class="text-center">
                      <input type="checkbox" checked="" />
                    </td>
                    <td class="text-center">
                      <input type="checkbox" checked="" />
                    </td>
                    <td class="text-center">
                      <input type="checkbox" checked="" />
                    </td>
                    <td class="text-center">
                      <input type="checkbox" checked="" />
                    </td>
                    <td class="text-center">
                      <input type="checkbox" checked="" />
                    </td>
                  </tr>
                  <tr>
                    <td>Holidays</td>
                    <td class="text-center">
                      <input type="checkbox" checked="" />
                    </td>
                    <td class="text-center">
                      <input type="checkbox" checked="" />
                    </td>
                    <td class="text-center">
                      <input type="checkbox" checked="" />
                    </td>
                    <td class="text-center">
                      <input type="checkbox" checked="" />
                    </td>
                    <td class="text-center">
                      <input type="checkbox" checked="" />
                    </td>
                    <td class="text-center">
                      <input type="checkbox" checked="" />
                    </td>
                  </tr>
                  <tr>
                    <td>Leave Request</td>
                    <td class="text-center">
                      <input type="checkbox" checked="" />
                    </td>
                    <td class="text-center">
                      <input type="checkbox" checked="" />
                    </td>
                    <td class="text-center">
                      <input type="checkbox" checked="" />
                    </td>
                    <td class="text-center">
                      <input type="checkbox" checked="" />
                    </td>
                    <td class="text-center">
                      <input type="checkbox" checked="" />
                    </td>
                    <td class="text-center">
                      <input type="checkbox" checked="" />
                    </td>
                  </tr>
                  <tr>
                    <td>Events</td>
                    <td class="text-center">
                      <input type="checkbox" checked="" />
                    </td>
                    <td class="text-center">
                      <input type="checkbox" checked="" />
                    </td>
                    <td class="text-center">
                      <input type="checkbox" checked="" />
                    </td>
                    <td class="text-center">
                      <input type="checkbox" checked="" />
                    </td>
                    <td class="text-center">
                      <input type="checkbox" checked="" />
                    </td>
                    <td class="text-center">
                      <input type="checkbox" checked="" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-sm-4 col-md-4 col-lg-4 col-xl-3">
              <a class="btn btn-success btn-block" style="color:white"
                >Creer le profil</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "epresent",
  methods: {
    retourner() {
      this.$router.push("/bureautique");
    },
  },
};
</script>
