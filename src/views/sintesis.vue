<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-3 La aplicación de diversos métodos para analizar los procesos de mantenimiento industrial se encuentra enfocados en maximizar la eficiencia operativa de los equipos, por ello, fortalecer las funciones del departamento de mantenimiento haciendo énfasis en la capacitación permanente y responsabilidad de los operarios ayudará a mantener los equipos y la organización a lo largo del tiempo.
    p.mb-3 Los métodos de programación de actividades CPM/PERT son útiles para la planeación de actividades de cualquier campo profesional, desde la decoración de un edificio hasta la obtención de productos tecnológicos. Desde sus etapas de formulación han sido una herramienta de gran adaptabilidad y de utilización global, dada su practicidad.
    p.mb-5 En el desarrollo de un programa de mantenimiento es habitual que se disponga de tiempos rigurosos para las actividades o tareas. Los métodos estudiados permiten identificar la actividad en que se consume más tiempo, lo cual mejora las pérdidas de tiempo innecesarios al tiempo que se da al departamento de mantenimiento un panorama completo de las actividades de mantenimiento a desarrollar.


    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
