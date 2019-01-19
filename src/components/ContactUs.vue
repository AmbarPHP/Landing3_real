<template>
  <!-- Footer -->
  <section id="ContactUs">
    <div class="row">
      <!-- Header -->
      <div class="col-lg-12 col-md-12 pl-5 col-sm-12 align-items-center">
        <h1 class="tittle-footer">CONTACTANOS</h1>
        <p>Tienes un proyecto en el que quieres que trabajemos en conjunto o quisas algunas preguntas</p>
        <p>contactanos y te atenderemos con la mejor disposicion</p>
      </div>
      <div class="w-100"></div>
      <!-- Grid column subscription-->
      <div class="col-lg-3 col-md-3 col-sm-12 pl-5">
        <p class="title">Nuestras Oficinas:</p>
        <Adress></Adress>
      </div>

      <div class="col-lg-4 col-md-4 col-sm-12">
        <p class="title">Escribenos:</p>
        <WriteUs></WriteUs>
      </div>
      <!-- Grid column social-->
      <div class="col-lg-5 col-md-5 col-sm-12">
        <p class="title">Mantente informado:</p>
        <SocialMedia></SocialMedia>
        <div class="w-100"></div>
        <br>
        <Maps></Maps>
      </div>
    </div>

    <Footer></Footer>
  </section>
</template>

<script>
import Maps from "../components/Maps.vue";
import Footer from "../components/Footer.vue";
import Adress from "../components/Adress.vue";
import WriteUs from "../components/WriteUs.vue";
import SocialMedia from "../components/SocialMedia.vue";
export default {
  name: "ContactUs",
  components: {
    Maps,
    Footer,
    Adress,
    WriteUs,
    SocialMedia
  },
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
$font: "Open Sans", sans-serif;

#ContactUs {
  display: inline-block;
  font-family: $font;
  margin-top: 0vh;
  //padding: 5vh;
  //height: 100vh;
  background-color: $color-complementario;
  color: $color-complementario;
  width: 100%; // trate de darle un ancho de el view port

  h1 {
    font-weight: 400;
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    padding-top: 5vh;
    font-family: $font_relaway;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    color: $color-complementario;
  }
  .title {
    font-weight: 400;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    padding-bottom: 0vh;
    font-family: $font_relaway;
  }
  a,
  p {
    font-size: 18px;
    font-weight: bold;
    color: #fff;
  }
  .white-box {
    //background-color: #fff;
    a,
    p {
      font-size: 18px;
      font-weight: bold;
      color: $color-complementario;
      background: #891e67;
    }
  }
}
</style>
