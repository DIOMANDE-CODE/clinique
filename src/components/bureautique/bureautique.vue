<template>
  <div>
    <div class="page-wrapper">
      <div class="content">
        <div class="row">
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4">
            <router-link to="/admin/employe"
              ><div class="dash-widget">
                <span class="dash-widget-bg1"
                  ><i class="fa fa-user-o"></i
                ></span>
                <div class="dash-widget-info text-right">
                  <span class="widget-title1"> Employés </span>
                </div>
              </div></router-link
            >
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4">
            <router-link to="/admin/clinique"
              ><div class="dash-widget">
                <span class="dash-widget-bg2"
                  ><i class="fa fa-hospital-o" aria-hidden="true"></i
                ></span>
                <div class="dash-widget-info text-right">
                  <span class="widget-title2"> Clinique</span>
                </div>
              </div></router-link
            >
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4">
            <router-link to="/admin/departement"
              ><div class="dash-widget">
                <span class="dash-widget-bg3"
                  ><i class="fa fa-building-o" aria-hidden="true"></i
                ></span>
                <div class="dash-widget-info text-right">
                  <span class="widget-title3">Departements</span>
                </div>
              </div></router-link
            >
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4">
            <router-link to="/admin/specialite"
              ><div class="dash-widget">
                <span class="dash-widget-bg4"
                  ><i class="fa fa-lightbulb-o" aria-hidden="true"></i
                ></span>
                <div class="dash-widget-info text-right">
                  <span class="widget-title4">Services</span>
                </div>
              </div></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "index",
};
</script>
