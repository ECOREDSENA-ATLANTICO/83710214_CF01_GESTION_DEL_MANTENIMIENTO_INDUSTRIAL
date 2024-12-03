<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1(data-aos="fade-right") Introducción
  
      p El componente formativo “Parámetros de Asignación y Soluciones de un Sistema” se centra en proporcionar una visión integral de la gestión del mantenimiento industrial, una disciplina esencial para garantizar el funcionamiento eficiente, continuo y confiable de los equipos, sistemas e instalaciones en entornos industriales. A través de este material, se comprenderán las bases para desarrollar y gestionar estrategias de mantenimiento que optimicen recursos, reduzcan riesgos y mejoren la productividad.
      p En este módulo, se exploraran cuatro áreas fundamentales: el modelo para el desarrollo de un sistema de mantenimiento, los elementos clave que conforman el mantenimiento industrial, las principales actividades relacionadas con esta gestión, y el uso de matrices y tablas de tiempos como herramientas de planificación y control.
      p Este componente formativo está diseñado para fortalecer las competencias necesarias para implementar soluciones sostenibles que impacten positivamente en la operación y desempeño de cualquier instalación industrial. ¡Bienvenido a este importante espacio de aprendizaje!

  
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
