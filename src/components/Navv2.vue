<template>
  <section id="Navv2">
    <b-navbar toggleable="true" toggle-breakpoint="lg" fixed="top" type="light" variant="light">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">ProebaPack</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item href="#Welcome" class="scrollactive-item">BIENVENIDOS</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item href="#About" class="scrollactive-item">CONOCENOS</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item href="#Servicios" class="scrollactive-item">SERVICIOS</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item href="#Gallery" class="scrollactive-item">PRODUCTOS</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item href="#Footer2">CONTACTANOS</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item href="#Maps">UBICANOS</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </section>
</template>

<script>
export default {
  name: "Navv2",
  props: {
    msg: String
  }
};
</script>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300');

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$color-complementario: #891e67;
$color-resaltado: #00be00;
$background-color: #fff;
#Navv2 {
  font-family: "Open Sans", sans-serif; //'Montserrat', sans-serif;

  a {
    color: $color-complementario;
    font-size: 1.5rem;
  }

  nav.navbar {
    background: $background-color;
    height: 15vh;
  }
  .nav-link,
  .navbar-brand {
    color: $color-complementario;
    cursor: pointer;
  }
  .nav-link {
    margin-right: 1em !important;
  }
  .nav-link:hover {
    background: $background-color;
    color: $color-resaltado;
  }
  .navbar-collapse {
    justify-content: flex-end;
  }
  .navbar-toggler {
    background: rgb(219, 219, 226); //$background-color;
    color: $color-resaltado;
  }
  .navbar-collapse {
    justify-content: flex-end;
  }
}
</style>
