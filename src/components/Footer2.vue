<template>
  <!-- Footer -->
  <section id="Footer2">
    <div class="row footer">
      <div class="col-lg-3 text-center">
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
      </div>
      <div class="col-lg-3 text-center">
        <div>
          <p class="tittle-footer">Contactanos</p>

          <p class="content-footer data">11559 Ventura Boulevard, Studio City, CA 91604</p>
          <p class="content-footer data">Email: proeba@demolink.org</p>
          <p class="content-footer data">Phone 01: 311-748-6051</p>
          <p class="content-footer data">Phone 02: 311-748-6052</p>
          <p class="content-footer data">Fax: 311-748-6050</p>
        </div>
      </div>
      <div class="col-lg-3 text-center">
        <div>
          <p class="tittle-footer">Suscribase</p>
          <p class="content-footer data">Follow Blog Updates & Get All the Special Offers!</p>
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
  </section>
</template>

<script>
export default {
  name: "Footer2",
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
#Footer2 {
  background-color: $background-color; //#262e37; //$background-color; // //
  color: $color-complementario;
  //margin-left: 0vw;
  padding-top: 25vh; //un margen de separacion del 10 % del viewport
  padding-bottom: 25vh; //dejar espacion entre este componete y el footer
  height: 100vh; //50% del view port
  width: 100%; // trate de darle un ancho de el view port
}
.tittle-footer {
  margin-top: 20vh;
  font-size: 28px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  line-height: 1.2307;
  color: $color-complementario;
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
  color: $color-complementario;
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
