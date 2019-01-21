<template>
  <!-- About -->
  <section id="About">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 py-4">
          <h1 class="text-center">QUIENES SOMOS</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-md-12 text-center">
          <div class="blockquote">
            <span>
              "Constantemente estamos creciendo, somos una gran compañia"
              Ubicados en el municipio 5 de Mayo, Tepic, Nayarit.
              Nuestro socios Yarexi
            </span>
            <p>
              Nuestra empresa surge por la necesidad de crear empaque de calidad,
              de exportar nuestro productos al extranjero
              La Empacadora sustentable, abre sus puerta un 15 de Mayo 2018,
              gracias el apoyo de nuestro socio ALGUIEN propietario de EMPRESA.
              Area de 4000 mtrs cuadrados:
            </p>
            <p>Con 3 naves, 20x60 cada una cuenta con:</p>
            <p>Empacadora cuenta con las siguientes areas:</p>
            <ul>
              <li>Recepcion</li>
              <li>Area de prueba fitosanitaria de Fruta</li>
              <li>Area de lavado y preseleccion</li>
              <li>Tina de tratamientos hidrotermicos</li>
              <li>Area de reposo</li>
              <li>Area de empacado de Fruta</li>
              <li>Area de conservacion y refrigeracion</li>
              <li>Area de maquinaria para caja de carton</li>
              <li>Area de embalajes</li>
            </ul>
            <p>
              Nuestros clientes son Frutera frog, Robison Fresh
              Actualmente tenemos la capacidad de produccion:3 cargas al dia
              Nuestra Meta es :""
            </p>
          </div>
        </div>
        <div class="col-lg-6 text-center col-md-12">
          <Video></Video>
        </div>
      </div>
      <!-- <div class="row">
        <div class="p-md-1 col-lg-8 col-md-12">
          <Carrusel></Carrusel>
        </div>
        <div class="col-lg-4 col-md-12">
          <h2>Planta 5 de Mayo</h2>
          <p>Empacadora cuenta con las siguientes areas:</p>
          <ul>
            <li>Recepcion</li>
            <li>Area de prueba fitosanitaria de Fruta</li>
            <li>Area de lavado y preseleccion</li>
            <li>Tina de tratamientos hidrotermicos</li>
            <li>Area de reposo</li>
            <li>Area de empacado de Fruta</li>
            <li>Area de conservacion y refrigeracion</li>
            <li>Area de maquinaria para caja de carton</li>
            <li>Area de embalajes</li>
          </ul>
        </div>
      </div>-->
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
@import url("https://fonts.googleapis.com/css?family=Raleway:700");
$font: "Open Sans", sans-serif; //'Montserrat', sans-serif;
$font_relaway: "font-family: 'Raleway', sans-serif;";
$color-resaltado: #00be00;
$color-complementario: #891e67;

#About {
  font-family: $font;
  margin-top: 1em; //alinear base line for section
  background-color: #fff; // rgba(245, 236, 236, 0.555);
  //padding: 15vh;
  //height: 300vh;

  //height: 100vh;
  h1 {
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: $color-resaltado;
    padding-bottom: 5vh;

    font-family: $font_relaway;
  }
  span {
    display: block;
    margin-top: 10px;
    font-weight: 300;
    color: #777;
    font-size: 1.5rem;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    color: $color-complementario;
  }
  a,
  p,
  li {
    color: $color-complementario;
    font-size: 1rem;
    border: $color-resaltado;
    padding-left: 20px;
  }
}
</style>
