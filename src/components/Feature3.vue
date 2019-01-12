<template>
  <!-- feature -->
  <section id="Feature3">
    <div class="container">
      <div class="row">
        <div class="card col-xs-12 col-md-6 px-1" style="width:50%">
          <img
            class="card-img-top"
            src="../assets/images/haden.jpg"
            alt="Card image"
            style="width:100%"
          >
          <div class="card-body">
            <h2 class="title-feature">Certificaciones de Procesos</h2>
            <p>
              Trabajamos bajo la norma de calidad 9000 y
              proporcionamos a nuestros clientes un producto a la medida
            </p>

            <a href="#" class="btn btn-verde">Ver mas</a>
          </div>
        </div>
        <div class="card col-xs-12 col-md-6 px-1" style="width:50%">
          <div class="card-body">
            <h2 class="title-feature">NUESTRO COMPROMISO</h2>
            <ul class="list-group">
              <li class="list-group-item">Calidad</li>
              <li class="list-group-item">Atencion</li>
              <li class="list-group-item">Responsabilidad</li>
              <li class="list-group-item">Iniciativa</li>
              <li class="list-group-item">Creatividad</li>
              <li class="list-group-item">Higiene</li>
            </ul>

            <a href="#" class="btn btn-verde">Ver mas</a>
          </div>
          <img
            class="card-img-bottom"
            src="../assets/images/haden.jpg"
            alt="Card image"
            style="width:100%"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Feature3",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.text-white {
  color: #fff !important;
}

#Feature3 {
  display: block;
  border: #00d496;
  border: 2px;
  //height: 800px;
  width: 100%;
  background-color: #f4f;
  margin-bottom: 20px;
}

.card {
  background-color: #262e37;
  text-decoration-color: #fff;

  //opacity: 0.3;
  ul > li,
  h2,
  p {
    background-color: #262e37;
    text-align: center;
    color: #00d496;
    margin: 0px;
    border: 0px;
    font-size: 1.2em;
  }
  .btn-verde {
    background-color: #42b983;
    color: #fff;
  }
  .title-feature {
    padding-top: 30px;
    padding-bottom: 30px;
    font-size: 28px;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    line-height: 1.2307;
    color: #fff;
  }
}

h2 {
  padding-top: 40px;
}

img.fix {
  height: 100%;
  width: 100%;
  align-content: center;
}
</style>
