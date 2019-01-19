<template>
  <!-- Adress -->
  <section id="Adress">
    <!-- <div class="row">
      <div class="col-md-4">
        <a class="btn-floating blue accent-1">
          <font-awesome-icon icon="map-market-alt"/>
          <font-awesome-icon size="3x" :icon="{ prefix: 'fab', iconName: 'map-marker-alt' }"/>
        </a>
        <p class="title">Direccion:</p>
        <p>Productora Agricola Yarexi SPR DE RL</p>
        <p>Puebla Norte no 356</p>
      </div>
      <div class="col-md-4">
        <a class="btn-floating blue accent-1">
          <font-awesome-icon icon="phone"/>
        </a>
        <p class="title">Telefono:</p>
        <p>(951) 236-4677</p>
      </div>
      <div class="col-md-4">
        <a class="btn-floating blue accent-1">
          <font-awesome-icon icon="envelope"/>
        </a>
        <p class="title">Correo:</p>
        <p>agricola_yarexi@hotmail.com</p>
        <p>Proebapack@hotmail.com</p>
      </div>
    </div>-->
    <div class="row">
      <div class="col-md-12">
        <a class="btn-floating blue accent-1">
          <font-awesome-icon icon="phone"/>
        </a>
        <!-- <p class="title">Telefono:</p> -->
        <p>(951) 236-4677</p>

        <a class="btn-floating blue accent-1">
          <font-awesome-icon icon="map-market-alt"/>
          <font-awesome-icon size="3x" :icon="{ prefix: 'fab', iconName: 'map-marker-alt' }"/>
        </a>
        <!-- <p class="title">Direccion:</p> -->
        <hr>
        <p>Productora Agricola Yarexi SPR DE RL</p>
        <p>Puebla Norte no 356</p>
        <hr>
        <a class="btn-floating blue accent-1">
          <font-awesome-icon icon="envelope"/>
        </a>
        <!-- <p class="title">Correo:</p> -->
        <p>agricola_yarexi@hotmail.com</p>
        <p>Proebapack@hotmail.com</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Adress",
  props: {
    msg: String
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#Adress {
  a,
  p {
    font-size: 18px;
    font-weight: bold;
    color: #fff;
  }
}
</style>