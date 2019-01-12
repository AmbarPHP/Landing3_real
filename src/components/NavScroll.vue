<template>
  <section id="NavScroll">
    <scrollactive class="my-nav">
      <a href="#home" class="scrollactive-item">Home</a>
      <a href="#about-us" class="scrollactive-item">About Us</a>
      <a href="#portfolio" class="scrollactive-item">Portfolio</a>
      <a href="#contact" class="scrollactive-item">Contact</a>
      <a href="#footer" class="scrollactive-item">Footer</a>
    </scrollactive>
  </section>
</template>

<script>
export default {
  name: "NavScroll",
  props: {
    msg: String
  }
};
</script>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:800');

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#NavScroll {
  font-family: "Open Sans", sans-serif; //'Montserrat', sans-serif;
}
</style>