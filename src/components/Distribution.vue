<template>
  <!-- feature -->
  <section id="Distribution">
    <div class="container">
      <div class="row">
        <div class="col-xm-12 col-sm-12 col-md-6 col-lg-6 mx-0">
          <h2 class="text-uppercase">Procesos de distribución</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-xm-12 col-sm-12 col-md-6 col-lg-6 mx-0">
          <ul>
            <li>Procesos de distribución y venta</li>
            <li>Almacén.</li>
            <li>Recepción de suministros.</li>
            <li>Aprovisionamiento y compras.</li>
            <li>Transporte externo.</li>
            <li>Transporte interno.</li>
            <li>Transporte interempresa.</li>
            <li>Distribución.</li>
            <li>Tratamiento y atención de los pedidos</li>.
            <li>Reciclaje de residuos y de los produc</li>tos desechados por el cliente.
            <li>Planificación de la producción.</li>
            <li>Control de producción.</li>
            <li>Información y comunicaciones.</li>
            <li>Control de calidad.</li>
            <li>Mantenimiento.</li>
            <li>Ventas.</li>
          </ul>
        </div>
        <div
          class="col-xm-12 col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center d-flex align-items-center"
        >
          <img
            class="img-fluid rounded float-right align-bottom"
            src="../assets/images/infra.jpeg"
            alt="Infraestructura"
          >
        </div>
      </div>
      <div class="row">
        <div
          class="col-xm-12 col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center d-flex align-items-center"
        >
          <img
            class="img-fluid rouded float-left mx-1"
            src="../assets/images/infra.jpeg"
            alt="Feature img"
          >
        </div>
        <div class="col-xm-12 col-sm-12 col-md-12 col-lg-6">
          <h2 class="text-uppercase">La distribución de productos industriales</h2>
          <span
            class="d-flex justify-content-left align-items-center"
          >Productores – distribuidores industriales – consumidores industriales: en este caso los distribuidores industriales realizan las mismas funciones de los mayoristas y en algunas ocasiones desempeñan las funciones de los mayoristas y en algunas ocasiones desempeñan las funciones de fuerza de ventas de los fabricantes.</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Distribution",
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

#Distribution {
  background-color: #ccc; //$background-color; //#42b983;
  height: 100vh;
  width: 100%;
  margin-top: 15vh;
  // top: 0;
  // left: 0;
  //opacity: 0.3;//opacidad para dar algo de diseño

  h2 {
    padding-top: 5vh;
    text-align: center;
    color: $color-resaltado;
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
