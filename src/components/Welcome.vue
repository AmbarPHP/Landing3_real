<template>
  <!-- feature -->
  <section id="Welcome">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-12 col-md-12 col-ms-12 col-xs-12 text-center my-auto mx-0">
          <h2 class="text">Welcome</h2>
          <h4 class="text2">Proeba Pack es uan empresa de empaquetado y distribucion de mercancia</h4>
          <p class="text3">Ahora nuestras sucursales tiene servicios a todo mexico</p>
          <img class="img-fluid rounded mx-auto" src="../assets/images/haden.jpg" alt="Card image">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Welcome",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:800");
$color-resaltado: #00be00;
$color-complementario: #891e67;
$background-color: #fff;
$font: "Open Sans", sans-serif; //'Montserrat', sans-serif;

.text-white {
  color: $color-complementario !important;
}

#Welcome {
  font-family: $font;
  display: block;
  height: 100vh;
  width: 100%;
  background-color: #25240c; // $background-color;
  color: $color-complementario;

  h2,
  h4,
  p {
    z-index: 100;
    position: absolute;
    color: $background-color;
    font-size: 24px;
    font-weight: bold;
  }
  .text {
    top: 30%;
    font-size: 6rem;
  }
  .text2 {
    font-size: 2rem;
    top: 50%;
  }
  .text3 {
    font-size: 1rem;
    top: 90%;
  }
}
</style>
