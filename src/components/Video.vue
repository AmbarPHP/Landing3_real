
<template>
  <section id="Video">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <iframe
            width="660"
            height="550"
            src="https://www.youtube.com/embed/TF9MctIpWBA"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
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

  height: 100vh;
  width: 100%;
}
</style>
