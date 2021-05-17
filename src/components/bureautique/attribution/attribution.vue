<template>
  <div>
    <div class="page-wrapper">
      <div class="content">
        <div class="row">
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-6">
            <router-link to="/clinique/departement"
              ><div class="dash-widget">
                <span class="dash-widget-bg1"
                  ><i></i
                ></span>
                <div class="dash-widget-info text-right">
                  <span class="widget-title1"> departement à clinique </span>
                </div>
              </div></router-link
            >
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-6">
            <router-link to="/service/departement"
              ><div class="dash-widget">
                <span class="dash-widget-bg2"
                  ><i class="" aria-hidden="true"></i
                ></span>
                <div class="dash-widget-info text-right">
                  <span class="widget-title2"> Services à departement</span>
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
  name: "index"
};
</script>
