<template>
  <div>
    <div class="sidebar" id="sidebar">
      <div class="sidebar-inner slimscroll">
        <div id="sidebar-menu" class="sidebar-menu">
          <ul>
            <li class="menu-title">Menu</li>
            <li>
              <router-link to="/admin/clinique"
                ><a
                  ><i class='fa fa-hospital-o'></i><span>Clinique</span></a
                ></router-link
              >
            </li>
            <li>
              <router-link to="/admin/code"
                ><a
                  ><i class='fa fa-lightbulb-o'></i>
                  <span>Mot de passe</span></a
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
export default {};
</script>
