<template>
  <div id="app">
    <Nav></Nav>
    <Welcome></Welcome>
    <!-- <Carrusel></Carrusel> -->
    <Embed></Embed>
    <Gallery></Gallery>
    <Distribution></Distribution>
    <Maps></Maps>
    <Footer2></Footer2>
    <Footer></Footer>

    <!-- <div class="container margins">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-ms-12 col-xs-12 text-center my-auto mx-0">
          <Nav></Nav>
        </div>
      </div>
      <div class="row" id="home">
        <div class="col-lg-12 col-md-12 col-ms-12 col-xs-12 text-center my-auto mx-0">
          <Welcome></Welcome>
        </div>
      </div>
      <div class="row" id="home2">
        <div class="col-lg-12col-md-12 col-ms-12 col-xs-12 text-center my-auto mx-0">
          <Carrusel></Carrusel>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12col-md-12 col-ms-12 col-xs-12 text-center my-auto mx-0">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            At accusantium laborum natus vero distinctio fugit atque velit
            voluptatibus beatae! Aliquam praesentium placeat non maxime ab
            provident officiis veniam tempora necessitatibus.
          </p>
        </div>
      </div>

      <div class="row" id="solutions">
        <div class="col-lg-12 col-md-12 col-ms-12 col-xs-12 text-center my-auto mx-0">
          <Embed></Embed>
        </div>
      </div>
      <div class="row" id="gallery">
        <div class="col-lg-12col-md-12 col-ms-12 col-xs-12 text-center my-auto mx-0">
          <Gallery></Gallery>
        </div>
      </div>
      <div class="row" id="distribution">
        <div class="col-lg-12 col-md-12 col-ms-12 col-xs-12 text-center my-auto mx-0">
          <Distribution></Distribution>
        </div>
      </div>
      <div class="row" id="maps">
        <div class="col-lg-12col-md-12 col-ms-12 col-xs-12 text-center my-auto mx-0">
          <Maps></Maps>
        </div>
      </div>
      <div class="row" id="contact">
        <div class="col-lg-12 col-md-12 col-ms-12 col-xs-12 text-center my-auto mx-0">
          <Footer2></Footer2>
        </div>
      </div>
      <div class="row" id="footer">
        <div class="col-lg-12col-md-12 col-ms-12 col-xs-12 text-center my-auto mx-0">
          <Footer></Footer>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
import Footer2 from "./components/Footer2.vue";
import Footer from "./components/Footer.vue";
import Nav from "./components/Nav.vue";
import Contact from "./components/Contact.vue";
import Distribution from "./components/Distribution.vue";
import Welcome from "./components/Welcome.vue";
import Embed from "./components/Embed.vue";
import Maps from "./components/Maps.vue";
import Gallery from "./components/Gallery.vue";
import Carrusel from "./components/Carrusel.vue";

export default {
  name: "app",
  components: {
    Footer2,
    Footer,
    Nav,
    Distribution,
    Welcome,
    Gallery,
    Carrusel,
    Embed,
    Maps
  },
  data() {
    return {
      msg: "Welcome to Manglar Fruit"
    };
  }
};
</script>

<style lang="scss">
$color-complementario: #891e67;
$color-resaltado: #00be00;
$background-color: #fff;

html,
body {
  height: 100%;
  margin: 0 auto;
  padding: 0;
  background-color: $background-color;
}

#app {
  //background-color: $background-color; //#262e37;
  background: url(https://www.pexels.com/photo/snow-covered-mountain-1755243.jpg)
    no-repeat 50% 50%;
  color: #fff;
  font-family: "Montserrat", sans-serif; //tipo de fuente
  width: 100%; //las unidades del viewport se dividen en 100 partes de vw
  margin-left: 0px;
  padding: 0px;
  height: 900vh; //muy importante multiplicar por el numero de sessiones, porque 100 es el tamaño del viewport
}

h1,
h2 {
  font-weight: normal;
  font-size: 28px;
  font-weight: bold;
  line-height: 1.2307;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>
