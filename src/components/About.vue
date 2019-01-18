<template>
  <!-- About -->
  <section id="About">
    <div class="container-fluid">
      <div class="row">
        <div class="p-2 col-lg-4">
          <h4 class="mb-3 text-white">Proebapack</h4>
          <div class="blockquote text-muted">
            <h2>"Constantemente estamos creciendo una gran compañia"</h2>
            <p>Ubicados en el municipio 5 de Mayo, Tepic, Nayarit.</p>
            <p>
              Nuestra empresa surge por la necesidad de crear empaque de calidad,
              de exportar nuestro productos al extranjero
              La Empacadora sustentable, abre sus puerta un 15 de Mayo 2018,
              gracias el apoyo de nuestro socio ALGUIEN propietario de EMPRESA.
              Area de 4000 mtrs cuadrados
              Con 3 naves,20x60 cada una con :
              Espacios lavador, separacion de fruta, area de reposo
              cuartos de conservacion
              maquinaria para cajas de carton
            </p>
            <p>
              Nuestros clientes son Frutera frog, Robison Fresh
              Actualmente tenemos la capacidad de produccion:3 cargas al dia
              Nuestra Meta es :??
            </p>
          </div>
        </div>
        <div class="col-md-8 align-self-center">
          <Video></Video>
        </div>
      </div>
      <div class="row">
        <div class="p-2 col-lg-4">
          <h4 class="mb-3">
            <b>Bold Heading 4</b>
          </h4>
          <ul class>
            <li class="my-1">One -&nbsp;Lorem ipsum dolor sit amet</li>
            <li class="my-1">Two -&nbsp;Lorem ipsum dolor sit amet</li>
            <li class="my-1">Three - Lorem ipsum dolor sit amet</li>
            <li class="my-1">Four - Lorem ipsum dolor sit amet</li>
          </ul>
        </div>
        <div class="p-md-2 col-lg-8">
          <h4 class="mb-3">
            <b>Bold Heading 4</b>
          </h4>
          <Carrusel></Carrusel>
        </div>
      </div>
    </div>
    <Clientes></Clientes>
    <Team></Team>
  </section>
</template>

<script>
import Video from "../components/Video.vue";
import Clientes from "../components/Clientes.vue";
import Team from "../components/Team.vue";
import Carrusel from "../components/Carrusel.vue";
export default {
  name: "About",
  components: {
    Video,
    Clientes,
    Team,
    Carrusel
  },
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

#About {
  font-family: $font;
  padding-top: 5vh;
  background-color: #891e67;
  //height: 100vh;

  h4 {
    font-weight: normal;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
  }
  h2,
  h3 {
    font-weight: normal;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
  }
  a,
  p,
  li {
    color: #fff;
    font-size: 18px;
  }

  // pills
  .nav-pills .nav-link.active {
    color: #fff;
    font-size: 18px;
    //background-color: #28a745 !important;
  }

  .nav-link {
    display: block;
    //padding: 0.5rem 1rem;
    a {
      color: #fff;
    }
  }
}
</style>
