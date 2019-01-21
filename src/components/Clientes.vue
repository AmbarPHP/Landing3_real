<template>
  <section id="Clientes" class="my-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-6">
          <a href="#">
            <img class="img-fluid d-block mx-auto" src="../assets/images/clientes/cliente2.png" alt>
          </a>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6">
          <a href="#">
            <img class="img-fluid d-block mx-auto" src="../assets/images/clientes/cliente2.png" alt>
          </a>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6">
          <a href="#">
            <img class="img-fluid d-block mx-auto" src="../assets/images/clientes/cliente2.png" alt>
          </a>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6">
          <a href="#">
            <img class="img-fluid d-block mx-auto" src="../assets/images/clientes/cliente2.png" alt>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Clientes",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300");
@import url("https://fonts.googleapis.com/css?family=Raleway:700");
$font: "Open Sans", sans-serif; //'Montserrat', sans-serif;
$font_relaway: "font-family: 'Raleway', sans-serif;";
$color-resaltado: #00be00;
$color-complementario: #891e67;

#Clientes {
  //background-color: rgba(245, 236, 236, 0.555);
  width: 100%;
  //margin-top: 15vh;
  // top: 0;
  // left: 0;
  //opacity: 0.3;//opacidad para dar algo de diseño
  h1 {
    font-weight: 400;
    font-size: 2rem;
    font-weight: bold;
    color: $color-resaltado;
    //padding-top: 15vh;
    font-family: $font_relaway;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    color: $color-complementario;
  }
}
</style>
