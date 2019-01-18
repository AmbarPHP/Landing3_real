<template>
  <section id="Team" class="bg-light">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h1 class="section-heading text-uppercase">NUESTRO EQUIPO DE TRABAJO</h1>
          <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <div class="team-member">
            <h2>Equipo de Diseño</h2>
            <img
              class="mx-auto rounded-circle"
              width="200"
              height="200"
              src="../assets/images/team/team1.png"
              alt
            >
            <h2>Kay Garland</h2>
            <p class="text-muted">Lider de Diseño</p>
            <ul class="list-inline social-buttons">
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="team-member">
            <h2>Equipo de Mercadotecnia</h2>
            <img
              class="mx-auto rounded-circle"
              width="200"
              height="200"
              src="../assets/images/team/team1.png"
              alt
            >
            <h2>Larry Parker</h2>
            <p class="text-muted">Lider de Mercadotecnia</p>
            <ul class="list-inline social-buttons">
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="team-member">
            <h2>Equipo de Distribucion</h2>
            <img
              class="mx-auto rounded-circle"
              width="200"
              height="200"
              src="../assets/images/team/team1.png"
              alt
            >
            <h2 text-center>Diana Pertersen</h2>
            <p class="text-muted">Lider de Distribucion</p>
            <ul class="list-inline social-buttons">
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 mx-auto text-center">
          <p
            class="large text-muted"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Team",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300");
@import url("https://fonts.googleapis.com/css?family=Raleway:700");
$font: "Open Sans", sans-serif; //'Montserrat', sans-serif;
$font_relaway: "font-family: 'Raleway', sans-serif;";
$color-resaltado: #00be00;
$color-complementario: #891e67;

#Team {
  display: inline-block;
  font-family: $font;
  margin-top: 10vh;
  padding: 5vh;
  height: 100vh;
  background-color: rgba(245, 236, 236, 0.555);
  width: 100%;

  // top: 0;
  // left: 0;
  //opacity: 0.3;//opacidad para dar algo de diseño
  h1 {
    font-weight: 400;
    font-size: 2rem;
    font-weight: bold;
    color: $color-resaltado;
    padding-bottom: 5vh;
    padding-top: 15vh;
    font-family: $font_relaway;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    color: $color-complementario;
  }
  h4 {
    padding-top: 5vh;
    //text-align: center;
    color: $color-resaltado;
  }
  span,
  ul {
    color: $color-complementario;
  }
}
</style>
