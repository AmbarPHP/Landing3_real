<template>
  <section id="Servicios">
    <!-- <div class="container-fluid no-padding">
      <div class="row h-100">
        <div
          class="col-xs-12 col-sm-12 col-md-12 col-lg-12 justify-content-center px-0 py-1 align-self-center table-bordered"
        >
          <img
            class="img-fluid rouded w-100 h-100"
            src="../assets/images/Servicios.jpeg"
            alt="Lights"
            style=" height:100% width:100%"
          >
        </div>
      </div>
    </div>-->
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 py-4">
          <h1 class="text-center">NUESTROS SERVICIOS</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-12 col-sm-12">
          <h2>RECOLECTAMOS</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
          <p>
            <a class="btn" href="#">Ver detalles »</a>
          </p>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12">
          <h2>EMPACAMOS</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
          <p>
            <a class="btn" href="#">Ver detalles »</a>
          </p>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12">
          <h2>DISTRIBUIMOS</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
          <p>
            <a class="btn" href="#">Ver detalles »</a>
          </p>
        </div>
      </div>

      <div class="container-fluid no-padding">
        <div class="row h-100">
          <div
            class="col-xs-12 col-sm-12 col-md-12 col-lg-12 justify-content-center px-0 py-1 align-self-center table-bordered"
          >
            <img
              class="img-fluid rouded w-100 h-100"
              src="../assets/images/info_servicios.png"
              alt="Lights"
              style=" height:100% width:100%"
            >
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <h2 class="text-center">COMO FUNCIONA</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="icon">
            <i
              style="background-color:transparent;
              border-color:transparent;
              height:auto;width: 68px;
              line-height:normal;color:#ff9800;font-size:68px;"
              class="fa fontawesome-icon fa-laptop circle-no"
            >sdfasdf</i>
          </div>
          <h2>Diseño de embalaje</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
          <p>
            <a class="btn" href="#">View details »</a>
          </p>
        </div>
        <div class="col-md-4">
          <h2>Preparación del producto</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
          <p>
            <a class="btn" href="#">View details »</a>
          </p>
        </div>
        <div class="col-md-4">
          <h2>Transporte y Distribución</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
          <p>
            <a class="btn" href="#">View details »</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Servicios",
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
$background-color: #fff;
$font: "Open Sans", sans-serif; //'Montserrat', sans-serif;
$font_relaway: "font-family: 'Raleway', sans-serif;";
#Servicios {
  font-family: $font_relaway;
  margin-top: 1vh;
  //padding: 15vh;
  //height: 300vh;

  h1 {
    font-weight: 400;
    font-size: 2rem;
    font-weight: bold;
    color: $color-resaltado;
    padding-bottom: 5vh;
    padding-top: 15vh;
    font-family: $font_relaway;
  }
  h2 {
    padding-top: 5vh;
    font-size: 1.5rem;
    font-weight: bold;
    color: $color-complementario;
  }
  p {
    color: $color-complementario;
    a {
      color: $color-resaltado;
    }
  }

  // a {
  //   color: $color-resaltado;
  // }
}
</style>
