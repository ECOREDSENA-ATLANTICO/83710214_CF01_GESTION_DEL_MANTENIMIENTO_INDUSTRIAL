<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1(data-aos="fade-right") Desarrollo de contenidos.

    h3.red_gear.mb-4 Expresión Corporal

    .row.mb-5
      .col-lg-4.col-md-8.mx-auto.mb-3(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img_01.png', alt='Imagen Decorativa')
      .col-lg-8.col-md-12(data-aos="fade-left")
        p La gestión del mantenimiento industrial requiere antes de emprender un diseño tener en cuenta las problemáticas propias de cada situación en la empresa, el modelo seleccionado, las soluciones en general y los elementos de las soluciones deben estar basada sobre un conjunto apropiado de parámetros de costo, plazos, rendimientos y evaluación del riesgo.
        .cajon.color-primario.p-4 
          p.mb-0 La implementación de los controles para la gestión del acceso debe contemplar ciertas condiciones que eleven la complejidad y dificulten el acceso no autorizado a los activos de información de la organización.
      
    h3.red_gear.mb-4 Modelo para el desarrollo de un sistema.

    p.mb-5 La gestión del mantenimiento industrial requiere antes de emprender un diseño tener en cuenta las problemáticas propias de cada situación en la empresa, el modelo seleccionado, las soluciones en general y los elementos de las soluciones deben estar basada sobre un conjunto apropiado de parámetros de costo, plazos, rendimientos y evaluación del riesgo. 

    .row.mb-5
      .col-lg-8.col-12.mb-3
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="")
              p Antes de emprender un diseño, y teniendo en cuenta las problemáticas propias de cada situación en la empresa, se hace necesario adoptar una referencia para el desarrollo de un sistema.

          .row(numero="2" titulo="")
              p El modelo seleccionado como referencia permite analizar, por una parte, las necesidades del usuario y definir una solución óptima integral para el sistema en estudio.

          .row(numero="3" titulo="")
              p Las soluciones en general deben ser definidas y afinadas mediante un proceso iterativo y deben sustentarse sobre evaluaciones y procesos de verificación.

          .row(numero="4" titulo="")
              p La elección de las soluciones debe estar basada sobre un conjunto apropiado de parámetros de costo, plazos, rendimientos y evaluación del riesgo.
      .col-lg-4.col-10.mx-auto
        figure
          img.to_right(src='@/assets/curso/temas/tema1/img_02.png', alt='Imagen Decorativa')


    h2.mb-3 1.1 Funciones del procedimiento

    p El objetivo del Mantenimiento es conservar todos los bienes que componen los activos de la empresa, en las mejores condiciones de funcionamiento, con un muy buen nivel de confiabilidad, calidad y al menor costo posible. Tiene varias funciones a continuación:
    
    .tarjeta.bg01.mb-5
      .tarjeta.p-5.bg02
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-12.col-lg-6.mb-4.mb-md-0
              p 
                strong Reparar
              p Resolver averías.
              | En la gestión del mantenimiento industrial se refiere al proceso de identificar, diagnosticar y reparar fallos o defectos en equipos y maquinarias.
            .col-md-8.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/img_03.png', alt='Imagen Decorativa')

          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-12.col-lg-6.mb-4.mb-md-0
              p 
                strong Preservar
              p Lubricación, inspección, limpieza. 
              | En la gestión del mantenimiento industrial se refiere a un conjunto de prácticas esenciales para asegurar el funcionamiento eficiente y prolongado de los equipos y maquinarias, aplicando lubricantes, evaluando los equipos y eliminando la suciedad.
            .col-md-8.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/img_04.png', alt='Imagen Decorativa')

          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-12.col-lg-6.mb-4.mb-md-0
              p 
                strong Mantener
              p Gestión, programación y control del trabajo.
              | En la gestión del mantenimiento industrial se refiere al conjunto de procesos y prácticas destinados a planificar, organizar y supervisar las actividades de mantenimiento para asegurar su eficacia y eficiencia. Administrando los recursos y planificando las tareas.
            .col-md-8.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/img_05.png', alt='Imagen Decorativa')

          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-12.col-lg-6.mb-4.mb-md-0
              p 
                strong Mejorar
              p Disminuir trabajos no planificados.
              | En la gestión del mantenimiento industrial se refiere a la estrategia y prácticas destinadas a reducir la frecuencia y el impacto de las intervenciones de mantenimiento que no han sido programadas previamente. Realizando mantenimiento preventivo, análisis de datos y capacitación de personal.
            .col-md-8.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/img_06.png', alt='Imagen Decorativa')

          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-12.col-lg-6.mb-4.mb-md-0
              p 
                strong Proyectar
              p Participar en la ingeniería.
              | En la gestión del mantenimiento industrial se refiere al proceso de diseñar, planificar y desarrollar soluciones técnicas que optimicen el rendimiento, la confiabilidad y la seguridad de los equipos y sistemas industriales con diseño de soluciones e integración de tecnologías.
            .col-md-8.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/img_07.png', alt='Imagen Decorativa')
  
  
    h3.red_gear.mb-4 La excelencia o el desempeño superior:
    
    .row.mb-5.tarjeta.bg03.p-4.align-items-center
      .col-lg-4.col-8.mx-auto.mb-3(data-aos="fade-left")
        figure
          img.img-t.mb-2(src='@/assets/curso/temas/tema1/img_08.png', alt='Imagen Decorativa')
      .col-lg-8.col-12(data-aos="fade-right")
        SlyderF(columnas="col-lg-6 col-xl-6 col-md-6")
          .tarjeta.tarjeta--rojo.p-4.pt-5.pb-5
            p.text-center.bg04 Capacidad y habilidad de la fuerza de trabajo
            p.text-center.txt-white El personal del mantenimiento está altamente capacitado y sus conocimientos son transmitidos.

          .tarjeta.tarjeta--rojo.p-4.pt-5.pb-5
            p.text-center.bg04 Capacidad y habilidad de la fuerza de trabajo
            p.text-center.txt-white Los administradores superiores son, en general, ingenieros y los demás tienen grados técnicos.

          .tarjeta.tarjeta--rojo.p-4.pt-5.pb-5
            p.text-center.bg04 Evidencia por la calidad
            p.text-center.txt-white El mantenimiento siempre debe buscar el alineamiento de sus servicios y procedimientos para sostener las necesidades de los equipamientos.
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
