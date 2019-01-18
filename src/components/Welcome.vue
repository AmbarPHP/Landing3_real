<template>
  <section id="Welcome">
    <header class="masthead">
      <div class="container h-100">
        <div class="row h-100">
          <div class="col-lg-7 my-auto">
            <div class="header-content mx-auto">
              <h2>PROEBA PACKING :</h2>
              <h1 class="mb-5">Venta ,Empaque y Transportación de Mango</h1>
              <p>Bienvenidos cosechamos mangos de diferentes tipos, mangos seleccionados frescos y limpios , tenemos la mejores técnicas de empacado y distribución de mangos.</p>
              <p>Contamos con personal para el servicios de recolección, procesamiento de las frutas, empaque a la medida y distribución.</p>
            </div>
          </div>
          <div class="col-lg-5 my-auto">
            <div class="device-container">
              <div class="device-mockup iphone6_plus portrait white">
                <div class="device">
                  <div class="screen">
                    <!-- Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! -->
                    <img src="../assets/images/logo1.png" class="img-fluid" alt>
                  </div>
                  <div class="button">
                    <!-- You can hook the "home button" to some JavaScript events or just remove it -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
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
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300");
@import "../assets/scss/masthead.scss";
$color-resaltado: #00be00;
$color-complementario: #891e67;
$background-color: #fff;
$font: "Open Sans", sans-serif; //'Montserrat', sans-serif;

#Welcome {
  font-family: $font;
  padding-top: 15vh;

  h2 {
    font-weight: normal;
    font-size: 48px;
    font-weight: bold;
    color: #fff;
  }
  h3 {
    font-weight: normal;
    font-size: 28px;
    font-weight: bold;
    color: #fff;
  }
  p {
    color: #fff;
    font-size: 1.5rem;
    a {
      color: $color-resaltado;
    }
    .jumbotron {
      background-color: $color-complementario;
    }
  }

  // a {
  //   color: $color-resaltado;
  // }
}
</style>
