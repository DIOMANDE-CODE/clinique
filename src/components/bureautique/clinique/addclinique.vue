<template>
  <div>
    <div class="page-wrapper">
      <div class="content">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <form>
              <h3 class="page-title">Paramètre de la clinique</h3>
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label
                      >Nom de la compagnie
                      <span class="text-danger">*</span></label
                    >
                    <input class="form-control" type="text" value="" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>Numéro d'urgence</label>
                    <input
                      class="form-control "
                      value="Daniel Porter"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                    <label>Addresse</label>
                    <input
                      class="form-control"
                      value="3864 Quiet Valley Lane, Sherman Oaks, CA, 91403"
                      type="text"
                    />
                  </div>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-3">
                  <div class="form-group">
                    <label>Pays</label>
                    <select class="form-control select">
                      <option>USA</option>
                      <option>United Kingdom</option>
                    </select>
                  </div>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-3">
                  <div class="form-group">
                    <label>Ville</label>
                    <input
                      class="form-control"
                      value="Sherman Oaks"
                      type="text"
                    />
                  </div>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-3">
                  <div class="form-group">
                    <label>Code postal</label>
                    <input class="form-control" value="91403" type="text" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>Email</label>
                    <input
                      class="form-control"
                      value="danielporter@example.com"
                      type="email"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>Contact</label>
                    <input
                      class="form-control"
                      value="818-978-7102"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>Fax</label>
                    <input
                      class="form-control"
                      value="818-978-7102"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6 text-center m-t-20">
                  <button type="button" class="btn btn-primary submit-btn">
                    Creer la clinique
                  </button>
                </div>
                <div class="col-sm-6 text-center m-t-20">
                  <button
                    type="button"
                    class="btn btn-primary submit-btn"
                    v-on:click="retourner"
                  >
                    Retour
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>  
  </div>
</template>
<script>
export default {
  name: "addclinique",
  methods: {
    retourner() {
      this.$router.push("/bureautique/clinique");
    },
  },
};
</script>
