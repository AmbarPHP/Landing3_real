<template>
  <div id="app">
    <Nav></Nav>
    <Welcome></Welcome>
    <Servicios></Servicios>
    <!-- <Carrusel></Carrusel> -->
    <Video></Video>
    <Gallery></Gallery>
    <Distribution></Distribution>
    <Maps></Maps>
    <Footer2></Footer2>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer2 from "./components/Footer2.vue";
import Footer from "./components/Footer.vue";
import Nav from "./components/Nav.vue";
import Contact from "./components/Contact.vue";
import Distribution from "./components/Distribution.vue";
import Servicios from "./components/Servicios.vue";
import Welcome from "./components/Welcome.vue";
import Video from "./components/Video.vue";
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
    Servicios,
    Welcome,
    Gallery,
    Carrusel,
    Video,
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

  width: 100%; //las unidades del viewport se dividen en 100 partes de vw
  margin-left: 0px;
  padding: 0px;
  height: 900vh; //muy importante multiplicar por el numero de sessiones, porque 100 es el tamaño del viewport
}

h1,
h2 {
  font-weight: normal;
  font-size: 48px;
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
