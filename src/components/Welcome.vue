<template>
  <section id="Welcome">
    <div class="container-fluid no-padding">
      <div class="row h-50">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 table-bordered px-0 py-1 mx-0">
          <Carrusel></Carrusel>
        </div>
      </div>
      <div class="row h-50">
        <div
          class="col-xs-12 col-sm-12 col-md-12 col-lg-4 justify-content-center px-0 py-1 align-self-center table-bordered"
        >
          <div class="thumbnail">
            <a href="../assets/images/infra4.jpg">
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
        <div
          class="col-xs-12 col-sm-12 col-md-12 col-lg-4 justify-content-center px-0 py-1 align-self-center table-bordered"
        >
          <div class="thumbnail">
            <a href="../assets/images/haden.jpg">
              <img
                class="img-fluid rouded"
                src="../assets/images/infra4.jpeg"
                alt="Lights"
                style=" height:100% width:100%"
              >
              <div class="caption">
                <p>Lorem ipsum...</p>
              </div>
            </a>
          </div>
        </div>
        <div
          class="col-xs-12 col-sm-12 col-md-12 col-lg-4 justify-content-center px-0 py-1 align-self-center table-bordered"
        >
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
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300");
$color-resaltado: #00be00;
$color-complementario: #891e67;
$background-color: #fff;
$font: "Open Sans", sans-serif; //'Montserrat', sans-serif;

#Welcome {
  font-family: $font;
}
</style>
