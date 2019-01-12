<template>
  <!-- Footer -->
  <section id="Footer2">
    <div class="row footer">
      <div class="col-lg-3 text-center">
        <img class="fix" src="../assets/images/logo6.png" alt="Feature img">
        <p class="content-footer">
          With our whole family originally coming to the US from Ireland,
          farming is definitely in our blood. Ultimately, having been
          running this farm for 89 years by now, we're the top supplier
          for all locals!
        </p>
        <div class="social-media">
          <li>
            <a class="fa fa-twitter hasTooltip" href="#" title data-original-title="Twitter"></a>
          </li>
          <li>
            <a class="fa fa-facebook hasTooltip" href="#" title data-original-title="Facebook"></a>
          </li>
          <li>
            <a class="fa fa-google-plus hasTooltip" href="#" title data-original-title="GooglePlus"></a>
          </li>
          <li>
            <a class="fa fa-youtube hasTooltip" href="#" title data-original-title="Youtube"></a>
          </li>
        </div>
      </div>
      <div class="col-lg-3 text-center">
        <div class="latestNews">
          <p class="tittle-footer">Ultimas Noticias</p>

          <p class="content-footer-news">Tips for Taking Care of the Livestock</p>
          <p style="color:#fff">26 NOV 2018</p>

          <p class="content-footer-news">Tips for Taking Care of the Livestock</p>
          <p style="color:#fff">26 NOV 2018</p>
        </div>
      </div>
      <div class="col-lg-3 text-center">
        <div>
          <p class="tittle-footer">Contactanos</p>
          <p class="content-footer">
            11559 Ventura Boulevard, Studio City, CA 91604
            Email: latify@demolink.org
            Phone 01: 555-748-6051
            Phone 02: 555-748-6052
            Fax: 555-748-6050
          </p>
        </div>
      </div>
      <div class="col-lg-3 text-center">
        <div>
          <p class="tittle-footer">Suscribase</p>

          <p class="content-footer">Follow Blog Updates & Get All the Special Offers!</p>
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
#Footer2 {
  background-color: #262e37;
  color: #fff;
  margin-left: 0px;
  img.fix {
    text-align: left;
  }
}

.tittle-footer {
  padding-top: 30px;
  padding-bottom: 30px;
  font-size: 28px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  line-height: 1.2307;
  color: #fff;
}
.content-footer-news {
  font-weight: bold;
  line-height: 1.2307;
  color: #00d496;
  font-size: 18px;
  text-align: left;
}
.content-footer {
  color: #fff;
  text-align: left;
}

.latestNews {
  color: #00d496;
  font-family: "Courier New", Courier, monospace;
}
h3 {
  color: #00d496;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.btn-verde {
  background-color: #42b983;
  color: #fff;
}
</style>
