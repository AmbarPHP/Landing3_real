<template>
  <!-- feature -->
  <section id="SocialMedia">
    <div class="row">
      <div class="col">
        <a class="mb-1 fa-lg tw-ic">Twitter
          <font-awesome-icon size="2x" :icon="{ prefix: 'fab', iconName: 'twitter' }"/>
        </a>
      </div>
      <div class="col">
        <a class="mb-1 fa-lg li-ic">facebook
          <font-awesome-icon size="2x" :icon="{ prefix: 'fab', iconName: 'facebook' }"/>
        </a>
      </div>
      <div class="col">
        <a class="mb-1 fa-lg ins-ic">Instagram
          <font-awesome-icon size="2x" :icon="{ prefix: 'fab', iconName: 'instagram' }"/>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SocialMedia",
  props: {
    msg: String
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#SocialMedia {
  a,
  p {
    font-size: 18px;
    font-weight: bold;
    color: #fff;
  }
}
</style>

