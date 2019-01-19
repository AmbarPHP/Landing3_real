<template>
  <!-- WriteUs -->
  <section id="WriteUs">
    <!-- Form with header -->
    <div class="card">
      <div class="card-body">
        <!-- Header -->
        <div class="form-header blue accent-1">
          <h3 class="mt-2">
            <i class="fas fa-envelope"></i> Escribenos:
          </h3>
        </div>
        <p class="dark-grey-text">Dejanos un mensaje aqui</p>
        <!-- Body -->
        <div class="md-form">
          <i class="fas fa-user prefix grey-text"></i>
          <input type="text" id="form-name" class="form-control">
          <label for="form-name">Nombre</label>
        </div>
        <div class="md-form">
          <i class="fas fa-envelope prefix grey-text"></i>
          <input type="text" id="form-email" class="form-control">
          <label for="form-email">Correo</label>
        </div>
        <div class="md-form">
          <i class="fas fa-tag prefix grey-text"></i>
          <input type="text" id="form-Subject" class="form-control">
          <label for="form-Subject">Acerca de</label>
        </div>
        <div class="md-form">
          <i class="fas fa-pencil prefix grey-text"></i>
          <textarea type="text" id="form-text" class="form-control md-textarea" rows="3"></textarea>
          <label for="form-text">Proeba</label>
        </div>
        <div class="text-center">
          <button class="btn">Enviar</button>
        </div>
      </div>
    </div>
    <!-- Form with header -->
  </section>
</template>

<script>
export default {
  name: "WriteUs",
  props: {
    msg: String
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#WriteUs {
}
</style>