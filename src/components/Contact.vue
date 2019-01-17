<template>
  <!-- contact -->
  <section id="Contact">
    <div class="overlay">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h2 class="text-uppercase">Contactanos</h2>

            <p>
              Visita nuestra novedades y noticias en las redes sociales
              tambien puedes compartir un link de nuestro sitio en tus redes sociales
            </p>
            <a class="btn btn-block btn-social btn-twitter">
              <span class="fa fa-twitter"></span>
              Sign in with Twitter
            </a>
            <a class="btn btn-block btn-social btn-facebook">
              <span class="fa fa-facebook"></span>
              Sign in with Facebook
            </a>

            <address>
              <p>
                <i class="fa fa-map-marker"></i> Colonia Plaza San Rafael, Tepic Nayarit,México
              </p>
              <p>
                <i class="fa fa-phone"></i> 311 23456789 o 311 23456789
              </p>
              <p>
                <i class="fa fa-envelope-o"></i> info@company.com
              </p>
            </address>
          </div>
          <div class="col-md-6">
            <div class="contact-form">
              <form action="#" method="post">
                <div class="form-group">
                  <div class="col-md-6">
                    <input type="text" class="form-control" placeholder="Nombre">
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-md-6">
                    <input type="email" class="form-control" placeholder="Direccion de correo">
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-md-12">
                    <input type="text" class="form-control" placeholder="Sobre que tema">
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-md-12">
                    <textarea class="form-control" placeholder="Tus comentarios" rows="4"></textarea>
                  </div>
                </div>
                <div class="col-md-8">
                  <button type="submit" class="btn btn-primary mb-2">Enviar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#Contact {
  height: 50vh;
  //margin-top: 15vh;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
