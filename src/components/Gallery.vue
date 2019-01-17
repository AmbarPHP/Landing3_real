

<template>
  <!-- feature -->
  <section id="Gallery">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <h3 class="text-center text-success">NUESTROS PRODUCTOS</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <h2>DISEÑO DE EMBALAJES</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
          <p>
            <a class="btn" href="#">Ver detalles »</a>
          </p>
          <div class="thumbnail">
            <a href="../assets/images/haden.jpg">
              <img src="../assets/images/proebapack/11.jpg" alt="Empaques" width="300" height="300">
              <div class="caption">
                <p>Lorem ipsum...</p>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-4">
          <h2>MAQUILA DE PRODUCTOS</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
          <p>
            <a class="btn" href="#">Ver detalles »</a>
          </p>
          <div class="thumbnail">
            <a href="../assets/images/haden.jpg">
              <img src="../assets/images/proebapack/11.jpg" alt="Empaques" width="300" height="300">
              <div class="caption">
                <p>Lorem ipsum...</p>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-4">
          <h2>TRANSPORTE Y DISTRIBUCION</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
          <p>
            <a class="btn" href="#">Ver detalles »</a>
          </p>
          <div class="thumbnail">
            <a href="../assets/images/proebapack/haden.jpg">
              <img src="../assets/images/proebapack/3.jpg" alt="Empaques" width="300" height="300">
              <div class="caption">
                <p>Lorem ipsum...</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="thumbnail">
            <a href="../assets/images/haden.jpg">
              <img src="../assets/images/proebapack/4.jpg" alt="Empaques" width="300" height="300">
              <div class="caption">
                <p>Lorem ipsum...</p>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="thumbnail">
            <a href="../assets/images/haden.jpg">
              <img src="../assets/images/proebapack/9.jpg" alt="Empaques" width="300" height="300">
              <div class="caption">
                <p>Lorem ipsum...</p>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="thumbnail">
            <a href="../assets/images/haden.jpg">
              <img src="../assets/images/proebapack/12.jpg" alt="Empaques" width="300" height="300">
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
export default {
  name: "Gallery",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$color-complementario: #891e67;
$color-resaltado: #00be00;
$background-color: #fff;

#Gallery {
  padding-top: 10vh;
  background-color: $background-color; //#164685;
  height: 100vh;
  width: 100%;
  padding-top: 15vh;
  top: 0;
  left: 0;
  //opacity: 0.3;
  h2 {
    padding-top: 40px;
    color: $color-complementario;
  }
}
</style>
