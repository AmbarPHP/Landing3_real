<template>
  <section id="Clientes" class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-6">
          <a href="#">
            <img class="img-fluid d-block mx-auto" src="../assets/images/clientes/cliente1.jpg" alt>
          </a>
        </div>
        <div class="col-md-3 col-sm-6">
          <a href="#">
            <img class="img-fluid d-block mx-auto" src="../assets/images/clientes/cliente2.jpg" alt>
          </a>
        </div>
        <div class="col-md-3 col-sm-6">
          <a href="#">
            <img class="img-fluid d-block mx-auto" src="../assets/images/clientes/cliente3.jpg" alt>
          </a>
        </div>
        <div class="col-md-3 col-sm-6">
          <a href="#">
            <img class="img-fluid d-block mx-auto" src="../assets/images/clientes/cliente4.jpg" alt>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Clientes",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$color-resaltado: #00be00;
$color-complementario: #891e67;
$background-color: #fff;

#Clientes {
  background-color: $color-complementario; //$background-color; //#42b983;

  width: 100%;
  margin-top: 15vh;
  // top: 0;
  // left: 0;
  //opacity: 0.3;//opacidad para dar algo de diseño
}
img.fix {
  height: 100%;
  width: 100%;
  align-content: center;
}
</style>
