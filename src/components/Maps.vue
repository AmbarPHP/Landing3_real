<template>
  <!-- feature -->
  <section id="Maps">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-12 px-2">
          <h2 class="text-uppercase">Mapa</h2>
        </div>
        <div class="col-xs-12 col-md-12 px-2">
          <img class="img-responsive fix" src="../assets/images/map.png" alt="Feature img">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Maps",
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

#Maps {
  padding-top: 20px;
  //background-color: #42b983;
  height: 100%;
  width: 100%;
  // top: 0;
  // left: 0;
  //opacity: 0.3;//opacidad para dar algo de diseño
  h2 {
    padding-top: 40px;
  }
}
img.fix {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
