<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1(data-aos="fade-right") Introducción
  
      p El componente formativo “Parámetros de asignación y soluciones de un sistema” se centra en proporcionar una visión integral de la gestión del mantenimiento industrial, una disciplina esencial para garantizar el funcionamiento eficiente, continuo y confiable de los equipos, sistemas e instalaciones en entornos industriales. A través de este material, se comprenderán las bases para desarrollar y gestionar estrategias de mantenimiento que optimicen recursos, reduzcan riesgos y mejoren la productividad.
      p En este módulo, se explorarán cuatro áreas fundamentales: el modelo para el desarrollo de un sistema de mantenimiento, los elementos clave que conforman el mantenimiento industrial, las principales actividades relacionadas con esta gestión, y el uso de matrices y tablas de tiempos como herramientas de planificación y control.
      p Este componente formativo está diseñado para fortalecer las competencias necesarias para implementar soluciones sostenibles que impacten positivamente en la operación y desempeño de cualquier instalación industrial. ¡Bienvenido a este importante espacio de aprendizaje!

     
      figure.mb-4
        .video
          <iframe width="853" height="480" src="https://www.youtube.com/embed/_FTUtu6Woas" title="Video de Gestión del mantenimiento industrial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        figcaption Video: Sena 2014.
      p.mb-5 La gestión del mantenimiento industrial requiere tener en cuenta las problemáticas propias de cada situación en la empresa, el modelo seleccionado, las soluciones en general y los elementos de las soluciones deben estar basada sobre un conjunto apropiado de parámetros de costo, plazos, rendimientos y evaluación del riesgo.

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
