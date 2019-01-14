

<template>
  <!-- feature -->
  <section id="Gallery">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-12 px-1">
          <h2 class="text-uppercase">Productos</h2>
          <div class="row">
            <div class="col-md-4">
              <div class="thumbnail">
                <a href="../assets/images/haden.jpg">
                  <img src="../assets/images/haden.jpg" alt="Lights" style="width:100%">
                  <div class="caption">
                    <p>Lorem ipsum...</p>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="thumbnail">
                <a href="../assets/images/haden.jpg">
                  <img src="../assets/images/haden.jpg" alt="Nature" style="width:100%">
                  <div class="caption">
                    <p>Lorem ipsum...</p>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="thumbnail">
                <a href="../assets/images/haden.jpg">
                  <img src="../assets/images/haden.jpg" alt="Fjords" style="width:100%">
                  <div class="caption">
                    <p>Lorem ipsum...</p>
                  </div>
                </a>
              </div>
            </div>
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
.text-white {
  color: #fff !important;
}

#Gallery {
  padding-top: 20vh;
  background-color: $background-color; //#164685;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  //opacity: 0.3;
  h2 {
    padding-top: 40px;
  }
}
</style>
