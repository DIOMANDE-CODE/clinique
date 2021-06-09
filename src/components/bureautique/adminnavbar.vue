<template>
  <div>
    <div class="sidebar" id="sidebar">
      <div class="sidebar-inner slimscroll">
        <div id="sidebar-menu" class="sidebar-menu">
          <ul>
            <li>
              <router-link to="/bureautique"
                ><a
                  ><i class="fa fa-arrow-left" aria-hidden="true"></i>
                  <span style="color:black; font-weight: bold;">Accueil</span></a
                ></router-link
              >
            </li>
            <li class="menu-title">Menu</li>

            <li>
              <router-link to="/admin/clinique"
                ><a
                  ><i class="fa fa-hospital-o"></i><span style="color:black;">Cliniques</span></a
                ></router-link
              >
            </li>
            <li>
              <router-link to="/admin/departement"
                ><a
                  ><i class="fa fa-building-o"></i> <span style="color:black;">Departements</span></a
                ></router-link
              >
            </li>
            <li>
              <router-link to="/admin/employe"
                ><a
                  ><i class="fa fa-user-o"></i> <span style="color:black;">Employes</span></a
                ></router-link
              >
            </li>
            <li>
              <router-link to="/admin/specialite"
                ><a
                  ><i class="fa fa-lightbulb-o"></i> <span style="color:black;">Services</span></a
                ></router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "patients",
};
</script>
