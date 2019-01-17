<template>
  <section id="About">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 py-4">
          <h1 class="text-center">NOSOTROS SOMOS PROEBAPAC</h1>
        </div>
      </div>
      <b-tabs pills card>
        <b-tab title="CONOCENOS" active>
          <div class="row">
            <div class="col-md-6">
              <Video></Video>
            </div>
            <div class="col-md-6 float-center align-bottom">
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
        </b-tab>
        <b-tab title="NUESTROS GENTE">
          <div class="row">
            <div class="col-md-4 text-center">
              <h2>NUESTRO EQUIPO</h2>
              <p>Un grupo de profesionales le atendera</p>

              <img
                class="img-fluid rounded float-right align-bottom"
                src="../assets/images/gente.png"
                alt="Infraestructura"
              >
              <p>
                <a class="btn" href="#">View details »</a>
              </p>
            </div>
            <div class="col-md-4 text-center">
              <h2>GERENTE GRAL PROEBAPAC</h2>
              <p>Iván Barajas</p>
              <img
                class="img-fluid rounded-circle float-center align-bottom"
                src="../assets/images/gerente.png"
                alt="Infraestructura"
              >
            </div>
          </div>
        </b-tab>
        <b-tab title="NUESTROS PLANTA Y PROCESOS">
          <div class="row">
            <div class="col-md-4 float-center align-bottom">
              <h2>Planta 5 de Mayo</h2>
              <p>Empacadora cuenta con las siguientes areas:</p>
              <b-list-group>
                <b-list-group-item>Recepcion</b-list-group-item>
                <b-list-group-item>Area de prueba fitosanitaria de Fruta</b-list-group-item>
                <b-list-group-item>Area de lavado y preseleccion</b-list-group-item>
                <b-list-group-item>Tina de tratamientos hidrotermicos</b-list-group-item>
                <b-list-group-item>Area de reposo</b-list-group-item>
                <b-list-group-item>Area de empacado de Fruta</b-list-group-item>
                <b-list-group-item>Area de conservacion y refrigeracion</b-list-group-item>
                <b-list-group-item>Area de maquinaria para caja de carton</b-list-group-item>
                <b-list-group-item>Area de embalajes</b-list-group-item>
              </b-list-group>
            </div>

            <div class="col-md-8">
              <img
                class="img-fluid rounded float-center align-bottom"
                src="../assets/images/infra.jpeg"
                alt="Infraestructura"
              >
            </div>
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </section>
</template>

<script>
import Video from "../components/Video.vue";
export default {
  name: "About",
  components: {
    Video
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
  padding-top: 15vh;
  background-color: #891e67;
  //height: 100vh;

  h1 {
    font-weight: normal;
    font-size: 38px;
    font-weight: bold;
    color: #fff;
  }
  h2 {
    font-weight: normal;
    font-size: 28px;
    font-weight: bold;
    color: #fff;
  }
  h3 {
    font-weight: normal;
    font-size: 18px;
    font-weight: bold;
    color: $color-complementario;
  }

  a,
  p {
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
