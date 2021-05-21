<template>
  <div>
    <div class="sidebar" id="sidebar">
      <div class="sidebar-inner slimscroll">
        <div id="sidebar-menu" class="sidebar-menu">
          <ul>
            <li class="menu-title">Menu</li>
            <li>
              <router-link to="/bureautique"
                ><a
                  ><i class="fa fa-arrow-left" aria-hidden="true"></i>
                  <span>Retour</span></a
                ></router-link
              >
            </li>
            <li>
              <router-link to="/admin/clinique"
                ><a
                  ><i class="fa fa-hospital-o"></i><span>Clinique</span></a
                ></router-link
              >
            </li>
              <li>
                <router-link to="/admin/departement"
                  ><a
                    ><i class="fa fa-building-o"></i> <span>Departements</span></a
                  ></router-link
                >
              </li>
            <li>
              <router-link to="/admin/specialite"
                ><a
                  ><i class="fa fa-lightbulb-o"></i> <span>Services</span></a
                ></router-link
              >
            </li>
            <li>
              <router-link to="/attribution"
                ><a
                  ><i class="fa fa-arrows-h" aria-hidden="true"></i
                  ><span>attribution</span></a
                ></router-link
              >
            </li>
            <li>
              <router-link to="/admin/employe"
                ><a
                  ><i class="fa fa-user-o"></i> <span>Employes</span></a
                ></router-link
              >
            </li>
            <li>
              <router-link to="/creer/profil"
                ><a
                  ><i class="fa fa-user-md" aria-hidden="true"></i
                  ><span>Creer un profil</span></a
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
