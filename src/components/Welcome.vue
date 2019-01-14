<template>
  <section id="Welcome">
    <Carrusel></Carrusel>
    <div class="container h-100">
      <div class="row d-flex">
        <div class="col-md-12 table-bordered justify-content-center align-self-center py-4">
          <!-- <div>
            <span class="text">Welcome</span>
            <span>Proeba Pack es uan empresa de empaquetado y distribucion de mercancia</span>
            <span>Ahora nuestras sucursales tiene servicios a todo mexico</span>
          </div>
          <img
            class="img-fluid rounded w-100"
            src="../assets/images/top_malmo-1110x480.jpg"
            alt="Card image"
          >
          -->
          <Carrusel></Carrusel>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-4 table-bordered">
          <div class="thumbnail">
            <a href="../assets/images/haden.jpg">
              <img
                class="img-fluid rouded"
                src="../assets/images/infra3.jpeg"
                alt="Lights"
                style="height:100% width:100%"
              >
              <div class="caption">
                <p>Lorem ipsum...</p>
              </div>
            </a>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4 table-bordered">
          <div class="thumbnail">
            <a href="../assets/images/haden.jpg">
              <img
                class="img-fluid rouded"
                src="../assets/images/infra.jpeg"
                alt="Lights"
                style=" height:100% width:100%"
              >
              <div class="caption">
                <p>Lorem ipsum...</p>
              </div>
            </a>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4 table-bordered">
          <div class="thumbnail">
            <a href="../assets/images/haden.jpg">
              <img
                class="img-fluid rouded"
                src="../assets/images/infra4.jpeg"
                alt="Lights"
                style="height:100% width:100%"
              >
              <div class="caption">
                <p>Lorem ipsum...</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Carrusel from "./Carrusel";
export default {
  name: "Welcome",
  components: { Carrusel },
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
  // display: block;
  height: 100vh;
  width: 100vw;
  background-color: $background-color;
  color: $color-complementario;
  margin: 0px;

  span {
    position: absolute;
    color: #fff;
  }
  p {
    z-index: 100;
    position: absolute;
    color: $color-complementario;
  }
  .welcome {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }
  .text {
    font-size: 6rem;
    font-weight: bold;
  }
  .text2 {
    font-size: 2rem;
  }
  .text3 {
    font-size: 1rem;
  }
}
</style>
