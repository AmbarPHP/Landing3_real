<template>
  <section id="Welcome">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="jumbotron">
            <h2>PROEBA PACKING :</h2>
            <h3>Venta ,Empaque y Transportación de Mango</h3>
            <p>Bienvenidos cosechamos mangos de diferentes tipos, mangos seleccionados frescos y limpios , tenemos la mejores técnicas de empacado y distribución de mangos.</p>
            <p>Contamos con personal para el servicios de recolección, procesamiento de las frutas, empaque a la medida y distribución.</p>
            <p>
              <a class="btn btn-primary btn-large" href="#">Aprede mas»</a>
            </p>

            <div class="row">
              <div class="col-md-4 py-4">
                <a class="btn btn-primary btn-large" href="#">NUESTROS CLIENTES »</a>
              </div>
              <div class="col-md-4">
                <!-- <a class="btn btn-primary btn-large" href="#">VER NUESTRA GENTE »</a> -->
              </div>
              <div class="col-md-4 py-4">
                <a class="btn btn-primary btn-large" href="#">VACANTES»</a>
              </div>
            </div>
          </div>
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
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300");
$color-resaltado: #00be00;
$color-complementario: #891e67;
$background-color: #fff;
$font: "Open Sans", sans-serif; //'Montserrat', sans-serif;

#Welcome {
  font-family: $font;

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
