<template>
  <!-- About -->
  <section id="About">
    <div class="container-fluid">
      <div class="row">
        <div class="p-2 col-lg-4">
          <h4 class="mb-3 text-white">Heading 4</h4>
          <div class="blockquote text-muted">
            <p
              class="mb-0"
            >Blockquoute -&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <div class="blockquote-footer">Someone famous in My memories</div>
          </div>
          <a class="btn btn-info" href="#">Button</a>
        </div>
        <div class="col-md-8 align-self-center">
          <Video></Video>
        </div>
      </div>
      <div class="row">
        <div class="p-2 col-lg-4">
          <h4 class="mb-3">
            <b>Bold Heading 4</b>
          </h4>
          <ul class>
            <li class="my-1">One -&nbsp;Lorem ipsum dolor sit amet</li>
            <li class="my-1">Two -&nbsp;Lorem ipsum dolor sit amet</li>
            <li class="my-1">Three - Lorem ipsum dolor sit amet</li>
            <li class="my-1">Four - Lorem ipsum dolor sit amet</li>
          </ul>
        </div>
        <div class="p-md-2 col-lg-8">
          <h4 class="mb-3">
            <b>Bold Heading 4</b>
          </h4>
          <Carrusel></Carrusel>
        </div>
      </div>
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
$color-resaltado: #00be00;
$color-complementario: #891e67;
$background-color: #fff;
$font: "Open Sans", sans-serif; //'Montserrat', sans-serif;

#About {
  font-family: $font;
  padding-top: 5vh;
  background-color: #891e67;
  //height: 100vh;

  h4 {
    font-weight: normal;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
  }
  h2,
  h3 {
    font-weight: normal;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
  }
  a,
  p,
  li {
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
