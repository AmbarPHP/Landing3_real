<template>
  <!-- Footer -->
  <section id="ContactUs">
    <div class="row">
      <!-- Header -->
      <div class="col-md-12 mb-5">
        <h1 class="text-center tittle-footer">CONTACTANOS</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-2 col-md-2">
        <ul class="list-inline text-center list-unstyled">
          <li class="list-inline-item">
            <a class="p-2 fa-lg tw-ic">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="p-2 fa-lg li-ic">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="p-2 fa-lg ins-ic">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="col-sm-10 col-md-3">
        <p class="title">Correo:</p>
        <p>agricola_yarexi@hotmail.com</p>
        <p>Proebapack@hotmail.com</p>

        <p class="title">Telefono:</p>
        <p>(951) 236-4677</p>

        <p class="title">Direccion:</p>
        <p>Productora Agricola Yarexi SPR DE RL</p>
        <p>Puebla Norte no 356</p>
      </div>

      <div class="col-sm-10 col-md-5">
        <Maps></Maps>
      </div>
      <div class="col-sm-10 col-md-2">
        <ul class="list-inline text-center list-unstyled">
          <li class="list-inline-item">
            <a class="p-2 fa-lg tw-ic">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="p-2 fa-lg li-ic">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="p-2 fa-lg ins-ic">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <Footer></Footer>
  </section>
</template>

<script>
import Maps from "../components/Maps.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "ContactUs",
  components: {
    Maps,
    Footer
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
  padding: 5vh;
  height: 100vh;
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
    font-size: 2rem;
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
  .btn-verde {
    background-color: $color-resaltado;
    color: $color-complementario;
  }
}
</style>
