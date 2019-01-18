<template>
  <div id="app">
    <Navv2></Navv2>
    <Welcome></Welcome>
    <Servicios></Servicios>
    <Gallery></Gallery>
    <About></About>

    <ContactUs></ContactUs>
  </div>
</template>

<script>
import ContactUs from "./components/ContactUs.vue";
import Navv2 from "./components/Navv2.vue";
import About from "./components/About.vue";
import Servicios from "./components/Servicios.vue";
import Welcome from "./components/Welcome.vue";
import Gallery from "./components/Gallery.vue";

export default {
  name: "app",
  components: {
    ContactUs,
    Navv2,
    About,
    Servicios,
    Welcome,
    Gallery
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
  height: 800vh;
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
