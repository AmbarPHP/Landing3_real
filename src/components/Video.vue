
<template>
  <section id="Video">
    <div class="container">
      <div class="row">
        <div class="col-md-12 py-4">
          <h3 class="text-center text-success">CONOCENOS</h3>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/TF9MctIpWBA"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="col-md-6">
          <h2 class="text-center text-success">NUESTROS MANGOS</h2>
          <p>mangos seleccionados y listos para venderse</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Video"
};
</script>

<style scoped lang="scss">
$color-complementario: #891e67;
$color-resaltado: #00be00;
$background-color: #fff;

@import url("https://fonts.googleapis.com/css?family=Open+Sans:300");

#Video {
  font-family: "Open Sans", sans-serif;
  background-color: $color-complementario;
  color: #fff;
  height: 50vh;
  width: 100%;

  p {
    color: #fff;
  }
  h2 {
    color: #fff;
  }
}
</style>
