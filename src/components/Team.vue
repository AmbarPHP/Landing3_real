<template>
  <section id="Team" class="bg-light">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">NUESTRO EQUIPO DE TRABAJO</h2>
          <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <div class="team-member">
            <h4>Equipo de Diseño</h4>
            <img
              class="mx-auto rounded-circle"
              width="200"
              height="200"
              src="../assets/images/team/team1.png"
              alt
            >
            <h4>Kay Garland</h4>
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
            <h4>Equipo de Mercadotecnia</h4>
            <img
              class="mx-auto rounded-circle"
              width="200"
              height="200"
              src="../assets/images/team/team1.png"
              alt
            >
            <h4>Larry Parker</h4>
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
            <h4>Equipo de Distribucion</h4>
            <img
              class="mx-auto rounded-circle"
              width="200"
              height="200"
              src="../assets/images/team/team1.png"
              alt
            >
            <h4>Diana Pertersen</h4>
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
$color-resaltado: #00be00;
$color-complementario: #891e67;
$background-color: #fff;

#Team {
  background-color: #ccc;
  width: 100%;

  // top: 0;
  // left: 0;
  //opacity: 0.3;//opacidad para dar algo de diseño
  h2 {
    padding-top: 5vh;
    //text-align: center;
    color: $color-resaltado;
  }
  h4 {
    padding-top: 5vh;
    //text-align: center;
    color: $color-complementario;
  }
  span,
  ul {
    color: $color-complementario;
  }
}
img.fix {
  height: 100%;
  width: 100%;
  align-content: center;
}
</style>
