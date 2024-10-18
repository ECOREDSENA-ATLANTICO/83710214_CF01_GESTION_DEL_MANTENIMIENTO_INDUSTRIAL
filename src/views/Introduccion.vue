<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1(data-aos="fade-right") Introducción
  
      p.mb-4 El componente formativo parámetros de asignación y soluciones de un sistema, se enfoca en describir la gestión del mantenimiento industrial es una disciplina que se enfoca en asegurar el funcionamiento eficiente y continuo de los equipos y sistemas en una planta o instalación industrial. De esta manera, en este material de formación se estudiarán modelo para el desarrollo de un sistema, elementos de mantenimiento industrial, actividades de mantenimiento y matrices y tablas de tiempos. Bienvenido a este componente formativo: 
  
      figure.mb-5
        .video
          <iframe width="853" height="480" src="https://www.youtube.com/embed/4ghDpL7vTdg?si=7N-RRTiH-Qj6qd3g" title="Video de Gestión del mantenimiento industrial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        figcaption Video: Sena 2014.


  </template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
