<template>
  <section id="Nav">
    <img class="img-responsive fix" src="../assets/logo.png" alt="Feature img">
    <nav class="navbar navbar-expand-lg fixed-top">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link scrollactive-item" href="#Welcome">
              Inicio
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link scrollactive-item" href="#Gallery">Nuestros Productos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link scrollactive-item" href="#Distribution">Distribución y Venta</a>
          </li>
          <li class="nav-item">
            <a class="nav-link scrollactive-item" href="#Footer2">Contactanos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link scrollactive-item" href="#Maps">Mapas</a>
          </li>
        </ul>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  name: "Nav",
  props: {
    msg: String
  }
};
</script>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:800');

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$color-complementario: #891e67;
$color-resaltado: #00be00;
$background-color: #fff;
#Nav {
  font-family: "Open Sans", sans-serif; //'Montserrat', sans-serif;

  a {
    color: #ccc;
  }

  .navbar {
    background: #ccc; //$background-color;
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
    background: #005; //$background-color;
    color: $color-resaltado;
  }
  .navbar-collapse {
    justify-content: flex-end;
  }
}
</style>
