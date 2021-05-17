<template>
  <div>
    <div class="page-wrapper">
      <div class="content">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <form>
              <h3 class="page-title">Ajouter une clinique</h3>
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label
                      >Nom de la compagnie
                      <span class="text-danger">*</span></label
                    >
                    <input
                      class="form-control"
                      type="text"
                      value=""
                      name="nom"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>Telephone</label>
                    <input
                      class="form-control "
                      value=""
                      type="text"
                      name="email"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>Email</label>
                    <input
                      class="form-control"
                      value=""
                      type="email"
                      name="email"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>Numero d'urgence</label>
                    <input
                      class="form-control"
                      value="818-978-7102"
                      type="text"
                      name="telephone_urgence"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                    <label>Addresse physique</label>
                    <input
                      class="form-control"
                      value="3864 Quiet Valley Lane, Sherman Oaks, CA, 91403"
                      type="text"
                      name="addresse_physique"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>Fax</label>
                    <input
                      class="form-control"
                      value="818-978-7102"
                      type="text"
                      name="fax"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label class="display-block">Status</label>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="status"
                        id="product_active"
                        value="option1"
                        checked
                      />
                      <label class="form-check-label" for="product_active">
                        Active
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="status"
                        id="product_inactive"
                        value="option2"
                      />
                      <label class="form-check-label" for="product_inactive">
                        Inactive
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row"></div>
              <div class="row"></div>
              <div class="row">
                <div class="col-sm-6 text-center m-t-20">
                  <button
                    type="button"
                    class="btn btn-primary submit-btn"
                  >
                    Créer la clinique
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
  methods: {
    
  },
};
</script>
