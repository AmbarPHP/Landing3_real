<template>
  <!-- Footer -->
  <section id="Footer">
    <div class="row">
      <div class="col-lg-6 h-100 text-center text-lg-left my-auto">
        <ul class="list-inline mb-2">
          <li class="list-inline-item">
            <a href="#">About</a>
          </li>
          <li class="list-inline-item">&sdot;</li>
          <li class="list-inline-item">
            <a href="#">Contact</a>
          </li>
          <li class="list-inline-item">&sdot;</li>
          <li class="list-inline-item">
            <a href="#">Terms of Use</a>
          </li>
          <li class="list-inline-item">&sdot;</li>
          <li class="list-inline-item">
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
        <p class="text-muted small mb-4 mb-lg-0">&copy; Your Website 2018. All Rights Reserved.</p>
      </div>
      <div class="col-lg-6 h-100 text-center text-lg-right my-auto">
        <ul class="list-inline mb-0">
          <li class="list-inline-item mr-3">
            <a href="#">
              <i class="fab fa-facebook fa-2x fa-fw"></i>
            </a>
          </li>
          <li class="list-inline-item mr-3">
            <a href="#">
              <i class="fab fa-twitter-square fa-2x fa-fw"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a href="#">
              <i class="fab fa-instagram fa-2x fa-fw"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Footer",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
</style>
