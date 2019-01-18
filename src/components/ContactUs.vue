<template>
  <!-- Footer -->
  <section id="ContactUs">
    <div class="row">
      <div class="col-md-12">
        <h3 class="text-center tittle-footer">CONTACTANOS</h3>
      </div>
    </div>
    <div class="row footer">
      <!-- <div class="col-lg-3 text-center">
        <p class="tittle-footer">PROEBA PACKING</p>
        <p class="content-footer data">
          With our whole family originally coming to the US from Ireland,
          farming is definitely in our blood. Ultimately, having been
          running this farm for 89 years by now, we're the top supplier
          for all locals!
        </p>
        <div class="social-media">
          <li>
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"/>
          </li>
          <li>
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }"/>
          </li>
        </div>
      </div>
      <div class="col-lg-3 text-center">
        <div class="latestNews">
          <p class="tittle-footer">Ultimas Noticias</p>
          <p class="content-footer news">Tips for Taking Care of the Livestock</p>
          <p class="content-footer data">26 NOV 2018</p>

          <p class="content-footer news">Tips for Taking Care of the Livestock</p>
          <p class="content-footer data">26 NOV 2018</p>
        </div>
      </div>-->
      <div class="col-lg-6 col-md-6 col-sm-12 text-center">
        <div>
          <Maps></Maps>
        </div>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-12 text-center">
        <div>
          <p class="tittle-content">Direccion:</p>

          <p class="content-footer data">11559 Ventura Boulevard, Studio City, CA 91604</p>
          <p class="content-footer data">Email: proeba@demolink.org</p>
          <p class="content-footer data">Phone 01: 311-748-6051</p>
          <p class="content-footer data">Phone 02: 311-748-6052</p>
          <p class="content-footer data">Fax: 311-748-6050</p>
        </div>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-12 text-center">
        <div>
          <p class="tittle-content">Suscribase</p>
          <p class="content-footer data">Reciba noticias & Reciba correos con ofertas!</p>
          <div class="contact-form">
            <form action="#" method="post">
              <div class="form-group">
                <div class="col-md-12">
                  <input type="email" class="form-control" placeholder="Direccion de correo">
                </div>
              </div>

              <div class="col-md-12">
                <button type="submit" class="btn btn-verde mb-2">Suscribirse</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </section>
</template>

<script>
import Maps from "../components/Maps.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "ContactUs",
  components: {
    Maps,
    Footer
  },
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
$background-color: #fff;
$font: "Open Sans", sans-serif;

#ContactUs {
  display: inline-block;
  font-family: $font;
  margin-top: 1em;
  padding: 15vh;
  height: 80vh;
  background-color: $color-complementario;
  color: $color-complementario;
  margin-top: 1vh;

  width: 100%; // trate de darle un ancho de el view port

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
}

.tittle-footer {
  font-size: 28px;
  font-weight: bold;
  line-height: 1.2307;
  color: $background-color;
  padding-bottom: 5vh;
}
.tittle-content {
  font-size: 28px;
  font-weight: bold;
  line-height: 1.2307;
  color: $background-color;
  padding-bottom: 15vh;
}
.content-footer {
  padding-left: 0vw;
  padding-top: 0vh;
  text-align: left;
}
.news {
  font-weight: bold;
  line-height: 1.2307;
  color: $color-resaltado;
  font-size: 18px;
}
.data {
  color: $background-color;
  font-size: 18px;
}
.latestNews {
  //cambia el tipo de fuente a todo lo que esta en este div
  color: $color-resaltado;
  font-family: "Courier New", Courier, monospace;
}
h3 {
  color: $color-resaltado;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10vw;
}
a {
  color: $color-resaltado;
}
.btn-verde {
  background-color: $color-resaltado;
  color: $color-complementario;
}
</style>
