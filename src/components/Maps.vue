<template>
  <!-- feature -->
  <section id="Maps">
    <
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14847.877980776071!2d-104.90133423438347!3d21.508914770722182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84273702c0e631ab%3A0xf8dd9a85cd205254!2sCentro%2C+Tepic%2C+Nay.!5e0!3m2!1ses-419!2smx!4v1547836123481"
      width="600"
      height="400"
      frameborder="0"
      style="border:0"
      allowfullscreen
    ></iframe>
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
  display: block;

  //background-color:#fff;
  //height: 100vh;//se lo quite para que se adapte al contenido
  //margin-top: 5vh;
  width: 100%;
  // top: 0;
  // left: 0;
  //opacity: 0.3;//opacidad para dar algo de diseño
  h2 {
    //padding-top: 40px;
  }
}
</style>
