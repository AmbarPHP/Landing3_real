<template>
  <!-- feature -->
  <section id="Feature3">
    <div class="container">
      <div class="row">
        <div class="card col-xs-12 col-md-12 px-1">
          <h2 class="text">Welcome</h2>
          <h4 class="text2">Proeba Pack es uan empresa de empaquetado y distribucion de mercancia</h4>
          <p class="text3">Ahora nuestras sucursales tiene servicios a todo mexico</p>
          <img
            class="card-img-top"
            src="../assets/images/haden.jpg"
            alt="Card image"
            style="width:100%"
          >
        </div>
      </div>
    </div>
    <!-- <div id="container">
      <img class="image" src="../assets/images/haden.jpg">
      <h2 class="text">Welcome</h2>
      <h4 class="text">Proeba Pack es uan empresa de empaquetado y distribucion de mercancia</h4>
      <p class="text">Ahora nuestras sucursales tiene servicios a todo mexico</p>
    </div>-->
  </section>
</template>

<script>
export default {
  name: "Feature3",
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

#Feature3 {
  font-family: $font;
  display: block;
  height: 100%;
  width: 100%;
  background-color: $background-color;
  margin-bottom: 20px;
  color: $color-complementario;
  h2 {
    font-size: 38px;
  }

  #container {
    height: 400px;
    width: 400px;
    position: relative;
  }
  .image {
    position: absolute;
    left: 0;
    top: 0;
  }
  .text {
    z-index: 100;
    position: absolute;
    color: $background-color;
    font-size: 24px;
    font-weight: bold;
    left: 350px;
    top: 20px;
    font-size: 60px;
  }
  .text2 {
    z-index: 100;
    position: absolute;
    color: $background-color;
    font-size: 24px;
    font-weight: bold;
    left: 150px;
    top: 350px;
  }
  .text3 {
    z-index: 100;
    position: absolute;
    color: $background-color;
    font-size: 24px;
    font-weight: bold;
    left: 50px;
    top: 400px;
  }
}
</style>
