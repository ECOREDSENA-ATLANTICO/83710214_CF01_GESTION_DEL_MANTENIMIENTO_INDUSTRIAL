<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1(data-aos="fade-right") Modelo para el desarrollo de un sistema.

    .row.mb-2.align-items-center
      .col-lg-9(data-aos="fade-left")
        p En el dinámico panorama industrial actual, donde la eficiencia, la productividad y la competitividad son factores críticos para el éxito, el mantenimiento ha evolucionado de una función reactiva a una estrategia proactiva fundamental. Ya no se considera simplemente como un gasto, sino como una inversión estratégica esencial para garantizar la operatividad continua, la seguridad, y la rentabilidad de las operaciones. La creciente complejidad de los sistemas de producción, la incorporación de tecnologías avanzadas, y la exigencia de una mayor eficiencia han elevado la importancia del mantenimiento a un nivel estratégico.
        p El mantenimiento industrial eficaz trasciende la simple reparación de equipos; abarca una gama compleja de actividades, recursos, y decisiones estratégicas interconectadas. Desde la planificación y la programación hasta la ejecución y la evaluación, cada elemento juega un rol crucial en la optimización de los procesos y en el logro de los objetivos de la organización. Un sistema de mantenimiento bien implementado no solo reduce los tiempos de inactividad y los costos asociados con las fallas, sino que también mejora la calidad del producto, incrementa la seguridad en el lugar de trabajo, y contribuye significativamente a la sostenibilidad de las operaciones a largo plazo.
      .col-lg-3.mx-auto.mb-3(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img01.png', alt='Imagen Decorativa')
      
    .row.mb-5.align-items-center
      .col-lg-6.mx-auto.mb-3(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img02.png', alt='Imagen Decorativa')
      .col-lg-6(data-aos="fade-left")
        p Es necesario explorar los componentes esenciales de un sistema de mantenimiento industrial eficaz. Así como los recursos necesarios —humanos, materiales y tecnológicos— que sustentan la función de mantenimiento, las estrategias de mantenimiento y su selección, los procesos de planificación y organización, y los métodos de control y evaluación del rendimiento. Comprender estos elementos es fundamental para la implementación de un sistema de mantenimiento óptimo que responda a los desafíos de la industria moderna y contribuya al éxito sostenible de cualquier organización.
     
    h3.mb-3.titulo-imagen-izq-1 Concepción del mantenimiento:

    .mb-4
      .align-items-center.d-flex.flex-nowrap.mb-0
        img.img-auto.pr-2(src='@/assets/curso/temas/tema2/img40.svg', alt='Imagen Decorativa')
        p.mb-0 ¿Cuáles son los ítems que deben ser mantenidos?
      .align-items-center.d-flex.flex-nowrap.mb-0
        img.img-auto.pr-2(src='@/assets/curso/temas/tema2/img40.svg', alt='Imagen Decorativa')
        p.mb-0 ¿Qué mantenimiento debe realizarse?
      .align-items-center.d-flex.flex-nowrap.mb-0
        img.img-auto.pr-2(src='@/assets/curso/temas/tema2/img40.svg', alt='Imagen Decorativa')
        p.mb-0 ¿Cuándo esas actividades de mantenimiento deben realizarse?

    .row.mb-2.align-items-center
      .col-lg-9(data-aos="fade-left")
        p Una concepción del mantenimiento es la estructura organizacional mediante la cual las políticas específicas del mantenimiento de las instalaciones son desarrolladas. Es la materialización de la forma de cómo una compañía piensa acerca del rol del mantenimiento como una función operativa.
        p La concepción del mantenimiento es un conjunto de variadas intervenciones de mantenimiento (correctivo, preventivo, etc.) y la estructura general en las cuales esas intervenciones son previstas. En resumen, es una abstracción del significado de la realidad cuando es comprensible por otros y la cual explica, guía y controla como el proceso de mantenimiento de desarrolla o trabaja.

      .col-lg-3.mx-auto.mb-3(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img03.png', alt='Imagen Decorativa')

    p.mb-5 La concepción del mantenimiento describe la estructura organizacional y las políticas que definen cómo se gestiona el mantenimiento. 
      strong Se deben considerar tres aspectos clave:

    .row.mb-5.tarjeta.bg03.p-4.align-items-center
      .col-lg-4.col-10.mx-auto.mb-3(data-aos="fade-left")
        figure
          img.img-t.mb-2(src='@/assets/curso/temas/tema2/img04.png', alt='Imagen Decorativa')
      .col-lg-8.col-12(data-aos="fade-right")
        SlyderF(columnas="col-lg-6 col-xl-6 col-md-6")
          .tarjeta.tarjeta--rojo.p-4.pt-5.pb-5
            h3 Ítems a mantener: 
            p.mb-0 Mide la fiabilidad de los equipos. Un aumento en el MTBF indica un sistema de mantenimiento eficaz.

          .tarjeta.p-4.pt-5.pb-5
            h3 Tipos de mantenimiento: 
            p.mb-0 Selección de las estrategias de mantenimiento apropiadas (correctivo, preventivo, predictivo, detective).

          .tarjeta.p-4.pt-5.pb-5
            h3 Cronograma de mantenimiento:
            p.mb-0 Establecimiento de la frecuencia y el momento de las intervenciones de mantenimiento.

    h3.mb-3.titulo-imagen-izq-1 Concepciones más usadas
    p.mb-4 Existen diferentes concepciones de mantenimiento, cada una con sus propias ventajas y desventajas. 
      strong Algunas de las más utilizadas son:

    .row.mb-5
      .col-10.mx-auto
        .titulo-sexto.color-acento-botones.mb-4
          h5 Tabla 3.
          span Conceptos de mantenimiento

        .tabla-a.th_red.mb-2
          table
            thead
              tr
                th.text-center 
                  span Concepción
                th 
                  span Descripción

            tbody
              tr.text-center
                td 
                  span Terotecnología Avanzada
                td 
                  span Integración de tecnologías avanzadas para optimizar la gestión del mantenimiento.
              tr.text-center
                td 
                  span Concepción Estratégica de Mantenimiento (SMC)
                td 
                  span Enfoque estratégico que alinea el mantenimiento con los objetivos de negocio de la empresa.
              tr.text-center
                td 
                  span Mantenimiento Centrado en la Confiabilidad (MCC)
                td 
                  span Se centra en la identificación y gestión de los modos de fallo para mejorar la confiabilidad del equipo.
              tr.text-center
                td 
                  span Mantenimiento Centrado en el Negocio (BCN)
                td 
                  span Integra el mantenimiento con las estrategias de negocio para maximizar la rentabilidad. 
              tr.text-center
                td 
                  span Mantenimiento Productivo Total (TPM)
                td 
                  span Involucra a todos los empleados en la mejora continua del mantenimiento y la productividad.
              tr.text-center
                td 
                  span Apoyo Logístico Integrado/Análisis del Apoyo Logístico (ILS/LSA)
                td 
                  span Proceso sistemático para el soporte logístico de equipos y sistemas complejos. 
              tr.text-center
                td 
                  span Mantenimiento con Calidad Total (TQM)
                td 
                  span Implementación de los principios de la calidad total en el mantenimiento. 
              tr.text-center
                td 
                  span Mantenimiento Basado en el Riesgo (RBM)
                td 
                  span Se centra en la identificación y gestión de los riesgos asociados con las fallas del equipo. 
          figcaption.mb-5 Fuente: Sena 2024

        p.mb-5 En el contexto industrial, las variables y problemáticas relacionadas con el mantenimiento pueden ser complejas y de gran envergadura. Ejemplos de desafíos:

        .row.mb-5
          .col-lg-4.col-12
            .align-items-start.d-flex.flex-nowrap.mb-1
              img.img-auto.pr-2(src='@/assets/curso/temas/tema2/img40.svg', alt='Imagen Decorativa')
              p.mb-0.lh-sm Definición de los tipos de mantenimiento.
            .align-items-start.d-flex.flex-nowrap.mb-1
              img.img-auto.pr-2(src='@/assets/curso/temas/tema2/img40.svg', alt='Imagen Decorativa')
              p.mb-0.lh-sm Atención según la criticidad de los equipos.
            .align-items-start.d-flex.flex-nowrap.mb-1
              img.img-auto.pr-2(src='@/assets/curso/temas/tema2/img40.svg', alt='Imagen Decorativa')
              p.mb-0 Programación de paradas de los equipos.
            .align-items-start.d-flex.flex-nowrap.mb-1
              img.img-auto.pr-2(src='@/assets/curso/temas/tema2/img40.svg', alt='Imagen Decorativa')
              p.mb-0.lh-sm Calidad de la mano de obra.
            .align-items-start.d-flex.flex-nowrap.mb-1
              img.img-auto.pr-2(src='@/assets/curso/temas/tema2/img40.svg', alt='Imagen Decorativa')
              p.mb-0.lh-sm Evaluación de servicios de terceros
          .col-lg-4.col-12
            .align-items-start.d-flex.flex-nowrap.mb-1
              img.img-auto.pr-2(src='@/assets/curso/temas/tema2/img40.svg', alt='Imagen Decorativa')
              p.mb-0.lh-sm Introducción de nuevas tecnologías.
            .align-items-start.d-flex.flex-nowrap.mb-1
              img.img-auto.pr-2(src='@/assets/curso/temas/tema2/img40.svg', alt='Imagen Decorativa')
              p.mb-0.lh-sm Eliminación de equipos obsoletos.
            .align-items-start.d-flex.flex-nowrap.mb-1
              img.img-auto.pr-2(src='@/assets/curso/temas/tema2/img40.svg', alt='Imagen Decorativa')
              p.mb-0.lh-sm Definición de canales logísticos.
            .align-items-start.d-flex.flex-nowrap.mb-1
              img.img-auto.pr-2(src='@/assets/curso/temas/tema2/img40.svg', alt='Imagen Decorativa')
              p.mb-0.lh-sm Sistemas de información y administración.

          .col-lg-4.col-12
            figure
              img.img-t.mb-2(src='@/assets/curso/temas/tema2/img05.png', alt='Imagen Decorativa')
        p El aspecto relevante que debe conocerse es la madurez del equipo de personas y de la organización, para contar con el apoyo suficiente para evolucionar según cambian las condiciones del entorno.



    h3.mb-4.titulo-imagen-izq-1 Gestión estratégica de la función mantenimiento:

    .row.mb-4.align-items-center
      .col-lg-3.mx-auto.mb-3(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img06.png', alt='Imagen Decorativa')
      .col-lg-9(data-aos="fade-left")
        p Se puede conceptuar gestión estratégica como un proceso sistemático, planeado, gerenciado, ejecutado e acompañado bajo el liderazgo de la alta administración de la institución, involucrando y comprometiendo todos los gerentes, responsables y personal de la organización.
        p Es un trabajo en equipo que tiene por finalidad asegurar el crecimiento de su nivel tecnológico y administrativo, la continuidad en su gestión asegurando la eficiencia de sus servicios, vía adecuación continua de su estrategia, de su capacitación y de su estructura, posibilitándole enfrentarse y anticiparse a los cambios observados o previsibles en su ambiente externo.

      

    
    .row.mb-5
      .col-lg-10.col-12.mx-auto

        .align-items-center.d-flex.flex-nowrap.mb-1
          img.img-auto.pr-2(src='@/assets/curso/temas/tema2/img39.svg', alt='Imagen Decorativa')
          h3.mb-0 El mantenimiento y su gestión:

        .row.mb-2.align-items-center
          .col-lg-9.col-12(data-aos="fade-left")
            p Hay un amplio acuerdo entre diversos autores de que la ingeniería y la gestión del mantenimiento están recibiendo cada vez más atención, especialmente debido a la necesidad de obtener de los equipamientos, de alto costo, una alta productividad, como también mediante un efectivo mantenimiento influir fuertemente en el diferencial competitivo de su producto.
            p Pero, la atención que recibe la función mantenimiento es, frecuentemente, producto de una acción aislada sin una adecuada integración entre las varias técnicas empleadas. 
              strong Se puede consultar, a continuación, los elementos básicos de la gestión del mantenimiento:
          .col-lg-3.col-8.mx-auto.mb-3(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/tema2/img07.png', alt='Imagen Decorativa')


        .align-items-center.d-flex.flex-nowrap.mb-1
          img.img-auto.pr-2(src='@/assets/curso/temas/tema2/img39.svg', alt='Imagen Decorativa')
          h3.mb-0 Formas más usadas:
        p.mb-5 La aproximación más frecuente para incrementar la eficiencia de la función mantenimiento es implementar alguna filosofía o técnica de mantenimiento más publicada.
        p
          strong Esto incluye:
        .row.mb-5
          .col-lg-3.col-md-6.col-12.d-flex
            .tarjeta.p-3.bg-gray
              p.mb-0
                strong 01
              figure
                img.img-auto.mx-auto.mb-3(src='@/assets/curso/temas/tema2/img08.svg', alt='Imagen Decorativa')
              p.text-center.mb-0 MCC (mantenimiento centrado en la confiabilidad)

          .col-lg-3.col-md-6.col-12.d-flex
            .tarjeta.p-3.bg-gray
              p.mb-0
                strong 02
              figure
                img.img-auto.mx-auto.mb-3(src='@/assets/curso/temas/tema2/img09.svg', alt='Imagen Decorativa')
              p.text-center.mb-0 TPM (mantenimiento productivo total)
          .col-lg-3.col-md-6.col-12.d-flex
            .tarjeta.p-3.bg-gray
              p.mb-0
                strong 03
              figure
                img.img-auto.mx-auto.mb-3(src='@/assets/curso/temas/tema2/img10.svg', alt='Imagen Decorativa')
              p.text-center.mb-0 MBC (mantenimiento centrado en la condición)
          .col-lg-3.col-md-6.col-12.d-flex
            .tarjeta.p-3.bg-gray
              p.mb-0
                strong 04
              figure
                img.img-auto.mx-auto.mb-3(src='@/assets/curso/temas/tema2/img11.svg', alt='Imagen Decorativa')
              p.text-center.mb-0 CMMS (sistemas de administración del mantenimiento computacional) entre otras.
            

        p Todas estas técnicas contribuirán, de alguna forma, para el éxito de la organización del mantenimiento.
        p.mb-5 Pero, la forma casual o improvisada en que ellas son introducidas es una forma segura para no optimizar su aplicación.

        .align-items-center.d-flex.flex-nowrap.mb-0
          img.img-auto.pr-2(src='@/assets/curso/temas/tema2/img39.svg', alt='Imagen Decorativa')
          h3.mb-0 Forma más adecuada:

        .row.mb-5.align-items-center
          .col-lg-9(data-aos="fade-left")
            p La forma correcta para direccionarlas necesidades para la función mantenimiento efectiva dentro de la organización es teniendo una visión holística de la función.
            p La necesidad de integrar completamente el mantenimiento en el sistema de negocios de la empresa especialmente usando tecnologías de la información y formulando una concepción con bases teóricas comprobadas.
            p.mb-3 Además, si las variadas metodologías, filosofías y técnicas empleadas son propiamente coordinadas y planeadas, el efecto de esta manera es un mejoramiento con buen desempeño de la función mantenimiento.
          .col-lg-3.mx-auto.mb-3(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/tema2/img12.png', alt='Imagen Decorativa')


        .align-items-center.d-flex.flex-nowrap.mb-0
          img.img-auto.pr-2(src='@/assets/curso/temas/tema2/img39.svg', alt='Imagen Decorativa')
          h3.mb-0 Variables del mantenimiento
        
        p.mb-4 Las distintas variables de significación que repercuten en el desempeño de los sistemas de la empresa:

        .row.mb-5.align-items-center
          .col-lg-3.col-12
            .align-items-start.d-flex.flex-nowrap.mb-1
              img.img-auto.pr-2(src='@/assets/curso/temas/tema2/img40.svg', alt='Imagen Decorativa')
              p.mb-0.lh-sm Fiabilidad.
            .align-items-start.d-flex.flex-nowrap.mb-1
              img.img-auto.pr-2(src='@/assets/curso/temas/tema2/img40.svg', alt='Imagen Decorativa')
              p.mb-0.lh-sm Disponibilidad.
            .align-items-start.d-flex.flex-nowrap.mb-1
              img.img-auto.pr-2(src='@/assets/curso/temas/tema2/img40.svg', alt='Imagen Decorativa')
              p.mb-0.lh-sm Mantenibilidad.
            .align-items-start.d-flex.flex-nowrap.mb-1
              img.img-auto.pr-2(src='@/assets/curso/temas/tema2/img40.svg', alt='Imagen Decorativa')
              p.mb-0.lh-sm Calidad.
            .align-items-start.d-flex.flex-nowrap.mb-1
              img.img-auto.pr-2(src='@/assets/curso/temas/tema2/img40.svg', alt='Imagen Decorativa')
              p.mb-0.lh-sm Costo.
            .align-items-start.d-flex.flex-nowrap.mb-1
              img.img-auto.pr-2(src='@/assets/curso/temas/tema2/img40.svg', alt='Imagen Decorativa')
              p.mb-0.lh-sm Entrega / Plazo.
          .col-lg-9.col-12
            figure
              img(src='@/assets/curso/temas/tema2/img13.png', alt='Imagen Decorativa')

        p
          strong Las variables del mantenimiento pueden desarrollarse desde distintas premisas, tal como es presentada la información, en la siguiente infografía: 


        .align-items-center.d-flex.flex-nowrap.mb-0
          img.img-auto.pr-2(src='@/assets/curso/temas/tema2/img39.svg', alt='Imagen Decorativa')
          h3.mb-0 Integración del mantenimiento en el contexto productivo:

        .row.mb-5.align-items-center
          .col-lg-9(data-aos="fade-left")
            p Así, el mantenimiento actúa positivamente en la disminución del costo total (con mayor tiempo de buen funcionamiento y menor tiempo de recolocación) en el mejoramiento del equipamiento (introduciendo mejorías) como también, en la seguridad de las personas y del ambiente, en el proyecto de nuevos productos, entre otros aspectos.
            p.mb-3 Todo esto impone demandas más altas para que el equipo de mantenimiento también aumente su eficiencia y capacidad. Es un problema de competitividad en todo nivel.
          .col-lg-3.mx-auto.mb-3(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/tema2/img15.png', alt='Imagen Decorativa')


    h3.mb-3.titulo-imagen-izq-1 Concepciones más usadas
    p.mb-4 La visión moderna del mantenimiento se centra en preservar las funciones de los activos de la empresa, cumplir las tareas que sirven para asegurar que el equipamiento puede hacer lo que le usuario desea, cuando él lo espera. 
      strong A la luz de lo anterior, se puede definir la política de mantenimiento: 




    //- .row.align-items-center.tarjeta.bg06.p-4.mb-4
    //-   .col-lg-4.col-md-8.mx-auto.mb-3(data-aos="fade-right")
    //-     figure
    //-       img(src='@/assets/curso/temas/tema2/img_01.png', alt='Imagen Decorativa')
    //-   .col-lg-8.col-md-12(data-aos="fade-left")
    //-     h3.red_gear.mb-4 Concepción del mantenimiento:
    //-     .row
    //-       .col-12.col-md-4.d-flex.align
    //-         .tarjeta.p-4.bg02.shadow
    //-           p.text-center ¿Cuáles son los ítems que deben ser mantenidos?
    //-       .col-12.col-md-4.d-flex
    //-         .tarjeta.p-4.bg02.shadow
    //-           p.text-center ¿Qué mantenimiento debe realizarse?
    //-       .col-12.col-md-4.d-flex
    //-         .tarjeta.p-4.bg02.shadow
    //-           p.text-center ¿Cuándo esas actividades de mantenimiento deben realizarse?
     
    //- .row.mb-5.align-items-center
    //-   .col-lg-9.col-md-12(data-aos="fade-left")
    //-     p Una concepción del mantenimiento es la estructura organizacional mediante la cual las políticas específicas del mantenimiento de las instalaciones son desarrolladas. Es la materialización de la forma de cómo una compañía piensa acerca del rol del mantenimiento como una función operativa. 
    //-     .cajon.color-primario.p-4.mb-3
    //-       p.mb-0 La concepción del mantenimiento es un conjunto de variadas intervenciones de mantenimiento (correctivo, preventivo, etc.) y la estructura general en las cuales esas intervenciones son previstas. En resumen, es una abstracción del significado de la realidad cuando es comprensible por otros y la cual explica, guía y controla como el proceso de mantenimiento de desarrolla o trabaja.   
    //-   .col-lg-3.col-md-8.mx-auto.mb-3(data-aos="fade-right")
    //-     figure
    //-       img(src='@/assets/curso/temas/tema2/img_02.png', alt='Imagen Decorativa')

    //- .tarjeta.bg05.p-4.mb-5
    //-   .row.align-items-center
    //-     .col-lg-4.col-md-8.mx-auto.mb-3(data-aos="fade-right")
    //-       figure
    //-         img(src='@/assets/curso/temas/tema2/img_04.png', alt='Imagen Decorativa')
    //-     .col-lg-8.col-md-12(data-aos="fade-left")
    //-       h3.red_gear.mb-4 Concepción del mantenimiento:
    //-       .row
    //-         .col-12.col-lg-6
    //-           ul.bullets
    //-             li
    //-               p 1. Tero – Tecnología avanzada estómago.
    //-             li
    //-               p 2. Concepción Estratégica de mantenimiento (SMC).
    //-             li
    //-               p 3. Mantenimiento Centrado en la Confiabilidad (MCC).
    //-             li
    //-               p 4. Mantenimiento Centrado en el Negocio (BCN).
    //-         .col-12.col-lg-6
    //-           ul.bullets  
    //-             li
    //-               p 5. Mantenimiento Productivo Total (TPM).
    //-             li
    //-               p 6. Apoyo Logístico Integrado/Análisis del Apoyo Logístico (ILS/LSA).
    //-             li
    //-               p 7. Mantenimiento con Calidad Total (TQMain).
    //-             li
    //-               p 8. Mantenimiento Basado en el Riesgo (RBM).

    //- .row.mb-5.align-items-center
    //-   .col-lg-9.col-md-12(data-aos="fade-left")
    //-     h3.red_gear.mb-4 Caso del mantenimiento industrial:
    //-     .row
    //-         .col-12.col-lg-6
    //-           ul.bullets
    //-             li
    //-               p 1. Definición de los tipos de mantenimiento.
    //-             li
    //-               p 2. Atención conforme a criticidad de cada equipamiento.
    //-             li
    //-               p 3. Cronogramas de parada de los equipamientos.
    //-             li
    //-               p 4. Definición de la calidad de la mano de obra y su obtención.
    //-             li
    //-               p 5. Evaluación de los servicios de terceros.
    //-         .col-12.col-lg-6
    //-           ul.bullets  
    //-             li
    //-               p 6. Introducción de nuevas tecnologías.
    //-             li
    //-               p 7. Decisión sobre la eliminación de equipos y su substitución
    //-             li
    //-               p 8. Definición de canales logísticos.
    //-             li
    //-               p 9. Definición del sistema de información y de administración, etc.

                  
    //-   .col-lg-3.col-md-8.mx-auto.mb-3(data-aos="fade-right")
    //-     figure
    //-       img(src='@/assets/curso/temas/tema2/img_05.png', alt='Imagen Decorativa')

    //- .bloque-texto-g.bg10.p-3.p-sm-4.p-md-5.mb-5
    //-   .bloque-texto-g__img(
    //-     :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img_06.png')})`}"
    //-   )
    //-   .bloque-texto-g__texto.p-4
    //-     p.mb-0 El aspecto relevante que debe conocerse es la madurez del equipo de personas y de la organización, para contar  con el apoyo suficiente para evolucionar según cambian las condiciones del entorno.


    //- h3.red_gear.mb-4 Gestión estratégica de la función mantenimiento:
    //- .row.mb-5.align-items-center
    //-   .col-lg-8.col-md-12(data-aos="fade-left")
    //-     p Se puede conceptuar gestión estratégica como un proceso sistemático, planeado, gerenciado, ejecutado e acompañado bajo el liderazgo de la alta administración de la institución, involucrando y comprometiendo todos los gerentes, responsables y personal de la organización.
    //-     .bg05.p-4.mb-3
    //-       p.mb-0 Es un trabajo en equipo que tiene por finalidad asegurar el crecimiento de su nivel tecnológico y administrativo, la continuidad en su gestión asegurando la eficiencia de sus servicios, vía adecuación continua de su estrategia, de su capacitación y de su estructura, posibilitándole enfrentarse y anticiparse a los cambios observados o previsibles en su ambiente externo.
    //-   .col-lg-4.col-md-8.mx-auto.mb-3(data-aos="fade-right")
    //-     figure
    //-       img(src='@/assets/curso/temas/tema2/img_08.png', alt='Imagen Decorativa')


    //- h3.red_gear.mb-4 El mantenimiento y su gestión:

    //- .row.mb-5.align-items-center
    //-   .col-lg-4.col-md-8.mx-auto.mb-3(data-aos="fade-right")
    //-     figure
    //-       img(src='@/assets/curso/temas/tema2/img_09.png', alt='Imagen Decorativa')
    //-   .col-lg-8.col-md-12(data-aos="fade-left")
    //-     p Hay un amplio acuerdo entre diversos autores de que la ingeniería y la gestión del mantenimiento están recibiendo cada vez más atención, especialmente debido a la necesidad de obtener de los equipamientos, de alto costo, una alta productividad, como también mediante un efectivo mantenimiento influir fuertemente en el diferencial competitivo de su producto.
    //-     .cajon.cajon.color-acento-contenido.p-4.mb-3
    //-       p.mb-0 Pero, la atención que recibe la función mantenimiento es, frecuentemente, producto de una acción aislada sin una adecuada integración entre las varias técnicas empleadas. Se puede consultar, a continuación, los elementos básicos de la gestión del mantenimiento: 
      

    //- .tarjeta.bg01.mb-5
    //-   .tarjeta.p-5.bg02
    //-     SlyderA(tipo="b")
    //-       .row.justify-content-center.align-items-center.my-lg-4
    //-         .col-md-12.col-lg-6.mb-4.mb-md-0
    //-           p 
    //-             strong Objetivo global.
    //-           p Definir el ambiente de los activos y la estrategia de negocio.
    //-         .col-md-8.col-lg-6
    //-           figure
    //-             img(src='@/assets/curso/temas/tema2/img_10.png', alt='Imagen Decorativa')

    //-       .row.justify-content-center.align-items-center.my-lg-4
    //-         .col-md-12.col-lg-6.mb-4.mb-md-0
    //-           p 
    //-             strong Brecha de la eficiencia.
    //-           p Definir el dónde está ahora, qué se puede hacer para obtener la meta, cómo hará que suceda y donde desea estar. 
    //-         .col-md-8.col-lg-6
    //-           figure
    //-             img(src='@/assets/curso/temas/tema2/img_11.png', alt='Imagen Decorativa')

    //-       .row.justify-content-center.align-items-center.my-lg-4
    //-         .col-md-12.col-lg-6.mb-4.mb-md-0
    //-           p 
    //-             strong Cerrando la brecha. 
    //-           p Definir análisis del estado, análisis de la base de activos, análisis FODA, estrategia para cerrar la brecha, implementación del plan, definición de tareas, priorización de iniciativas, medir el éxito, estrategias para la eficiencia. Desarrollo de la visión, declaración de la misión, principios guía, beneficios del negocio.
    //-         .col-md-8.col-lg-6
    //-           figure
    //-             img(src='@/assets/curso/temas/tema2/img_12.png', alt='Imagen Decorativa')
  
    //- h3.red_gear.mb-4 Formas más usadas:
    //- p.mb-0 La aproximación más frecuente para incrementar la eficiencia de la función mantenimiento es implementar alguna filosofía o técnica de mantenimiento más publicada.
    //- p.mb-4 Esto incluye:
    //- .row.mb-5
    //-   .col-6.col-md-4
    //-     .tarjeta-avatar-b.mb-3
    //-       .tarjeta-avatar-b__img
    //-         img.img-t.m-auto(src='@/assets/curso/temas/tema2/img_14.svg', alt='Imagen Decorativa')
    //-       .tarjeta.bg13.row.align-items-center.bg03
    //-         p.mb-0
    //-           b MCC (mantenimiento centrado en la confiabilidad).
    //-   .col-6.col-md-4
    //-     .tarjeta-avatar-b.mb-3
    //-       .tarjeta-avatar-b__img
    //-         img.img-t.m-auto(src='@/assets/curso/temas/tema2/img_14.svg', alt='Imagen Decorativa')
    //-       .tarjeta.bg13.row.align-items-center.bg03
    //-         p.mb-0
    //-           b TPM (mantenimiento productivo total).
    //-   .col-6.col-md-4
    //-     .tarjeta-avatar-b.mb-3
    //-       .tarjeta-avatar-b__img
    //-         img.img-t.m-auto(src='@/assets/curso/temas/tema2/img_14.svg', alt='Imagen Decorativa')
    //-       .tarjeta.bg13.row.align-items-center.bg03
    //-         p.mb-0
    //-           b MCC (mantenimiento centrado en la confiabilidad).
    //-   .col-6.col-md-4
    //-     .tarjeta-avatar-b.mb-3
    //-       .tarjeta-avatar-b__img
    //-         img.img-t.m-auto(src='@/assets/curso/temas/tema2/img_14.svg', alt='Imagen Decorativa')
    //-       .tarjeta.bg13.row.align-items-center.bg03
    //-         p.mb-0
    //-           b TPM (mantenimiento productivo total).
    //-   .col-6.col-md-4
    //-     .tarjeta-avatar-b.mb-3
    //-       .tarjeta-avatar-b__img
    //-         img.img-t.m-auto(src='@/assets/curso/temas/tema2/img_14.svg', alt='Imagen Decorativa')
    //-       .tarjeta.bg13.row.align-items-center.bg03
    //-         p.mb-0
    //-           b MBC (mantenimiento centrado en la condición).
    //-   .col-6.col-md-4
    //-     .tarjeta-avatar-b.mb-3
    //-       .tarjeta-avatar-b__img
    //-         img.img-t.m-auto(src='@/assets/curso/temas/tema2/img_14.svg', alt='Imagen Decorativa')
    //-       .tarjeta.bg13.row.align-items-center.bg03
    //-         p.mb-0
    //-           b CMMS (sistemas de administración del mantenimiento computacional) entre otras.

    //- h3.red_gear.mb-4 Formas más usadas:
    //- p La forma correcta para direccionarlas necesidades para la función mantenimiento efectiva dentro de la organización es teniendo una visión holística de la función.

    //- .row.mb-5.align-items-center
    //-   .col-lg-4.col-md-8.mx-auto.mb-3(data-aos="fade-right")
    //-     figure
    //-       img(src='@/assets/curso/temas/tema2/img_15.png', alt='Imagen Decorativa')
    //-   .col-lg-8.col-md-12(data-aos="fade-left")
    //-     .cajon.cajon.color-primario.p-4.mb-3
    //-       p.mb-0 La necesidad de integrar completamente el mantenimiento en el sistema de negocios de la empresa especialmente usando tecnologías de la información y formulando una concepción con bases teóricas comprobadas.
    //-     p Además, si las variadas metodologías, filosofías y técnicas empleadas son propiamente coordinadas y planeadas, el efecto de esta manera es un mejoramiento con buen desempeño de la función mantenimiento.
        
    //- h3.red_gear.mb-4 Variables del mantenimiento
    //- .tarjeta.bg06.p-4.mb-5
    //-   .row
    //-     .col-12.col-lg-8.mx-auto
    //-       .row
    //-         .col-6.col-lg-4
    //-           ul.bullets.mb-0
    //-             li
    //-               p 1. Fiabilidad
    //-             li
    //-               p 2. Mantenibilidad
    //-         .col-6.col-lg-4
    //-           ul.bullets.mb-0
    //-             li
    //-               p 3. Calidad
    //-             li
    //-               p 4. Seguridad.
    //-         .col-6.col-lg-4
    //-           ul.bullets.mb-0
    //-             li
    //-               p 5. Costo.
    //-             li
    //-               p 6. Entrega / Plazo.


    //- p.mb-5 Las variables del mantenimiento pueden desarrollarse desde distintas premisas, tal como es presentada la información, en la siguiente infografía:
   
    //- .tarjeta.mb-5
    //-   .row
    //-     .col-12.col-lg-6.bg11.p-4
    //-       .row.pt-5
    //-         .col-7.mx-auto
    //-           h3 Variables de mantenimiento
    //-           p El mantenimiento industrial es una parte esencial de la gestión de operaciones en una planta o fábrica. Su objetivo principal es asegurar que los equipos y sistemas funcionen de manera eficiente y segura, minimizando tiempos de inactividad y costos. Las variables del mantenimiento industrial se pueden clasificar en varias categorías clave, cada una de las cuales influye en la efectividad y eficiencia del proceso de mantenimiento.
    //-     .col-12.col-lg-6.bg07.p-4
    //-       figure
    //-         img.img-auto(src='@/assets/curso/temas/tema2/img_17.svg', alt='Imagen Decorativa')


    //- h3.red_gear.mb-4 Integración del mantenimiento en el contexto productivo:
    //- .bloque-texto-g.bg10.p-3.p-sm-4.p-md-5.mb-5
    //-   .bloque-texto-g__img(
    //-     :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img_06.png')})`}"
    //-   )
    //-   .bloque-texto-g__texto.p-4
    //-     p.mb-0 Así, el mantenimiento actúa positivamente en la disminución del costo total (con mayor tiempo de buen funcionamiento y menor tiempo de recolocación) en el mejoramiento del equipamiento (introduciendo mejorías) como también, en la seguridad de las personas y del ambiente, en el proyecto de nuevos productos, entre otros aspectos.

    //- p.mb-5 Todo esto impone demandas más altas para que el equipo de mantenimiento también aumente su eficiencia y capacidad. Es un problema de competitividad en todo nivel.

    //- h3.red_gear.mb-4 Políticas y acciones de mantenimiento:
    //- p.mb-4 La visión moderna del mantenimiento se centra en preservar las funciones de los activos de la empresa, cumplir las tareas que sirven para asegurar que el equipamiento puede hacer lo que le usuario desea, cuando él lo espera.

    //- .row.mb-5
    //-   .col-lg-4.col-10.mx-auto.mb-4
    //-     figure
    //-       img.img-auto.mx-auto(src='@/assets/curso/temas/tema2/img_25.png', alt='Imagen Decorativa')
    //-   .col-lg-8.col-12.mb-3
    //-     LineaTiempoD.color-acento-botones
    //-       .row(numero="-" titulo="1")
    //-         p La visión moderna del mantenimiento se centra en preservar las funciones de los activos de la empresa, cumplir las tareas que sirven para asegurar que el equipamiento puede hacer lo que le usuario desea, cuando él lo espera.

    //-       .row(numero="-" titulo="2")
    //-         p A la luz de lo anterior, se puede definir la política de mantenimiento

    //-       .row(numero="-" titulo="3")
    //-         p La política es una regla que especifica, dependiendo del estado de la variable, lo que hay que exactamente en una situación particular, en vista de conseguir un cierto objetivo.
          
    //-       .row(numero="-" titulo="4")
    //-         p En mantenimiento: es una regla que especifica que es lo que hay que hacer en una situación particular de mantenimiento para obtener el nivel deseado de eficiencia de un equipo productivo. 


    //- p En el siguiente carrusel se observarán las diferentes formas de las políticas.

    //- .tarjeta.bg01.mb-5
    //-   .tarjeta.p-5.bg02
    //-     SlyderA(tipo="b")
    //-       .row.justify-content-center.align-items-center.my-lg-4
    //-         .col-md-12.col-lg-6.mb-4.mb-md-0
    //-           p 
    //-             strong Intervenciones de mantenimiento correctivo
    //-           p Intervenciones después que la falla ocurra. Ej.: espero que la falla ocurra y entonces remedio la situación tan pronto como sea posible.
    //-         .col-md-8.col-lg-6
    //-           figure
    //-             img(src='@/assets/curso/temas/tema2/img_26.png', alt='Imagen Decorativa')

    //-       .row.justify-content-center.align-items-center.my-lg-4
    //-         .col-md-12.col-lg-6.mb-4.mb-md-0
    //-           p 
    //-             strong Intervenciones de mantenimiento predictivo: 
    //-           p Intervenciones que toman lugar antes que la falla ocurra. Ej.: ejecutar acciones regulares de mantenimiento, para evitar que modos de fallas den problemas.
    //-         .col-md-8.col-lg-6
    //-           figure
    //-             img(src='@/assets/curso/temas/tema2/img_27.png', alt='Imagen Decorativa')

    //-       .row.justify-content-center.align-items-center.my-lg-4
    //-         .col-md-12.col-lg-6.mb-4.mb-md-0
    //-           p 
    //-             strong Intervenciones de mantenimiento predictivo: 
    //-           p intervenciones que toman lugar si cierta condición es alcanzada. Ej.: cuando el monitoreo de la condición indique que un “signo vital” alcanzó el umbral de falla potencial se programa la intervención.
    //-         .col-md-8.col-lg-6
    //-           figure
    //-             img(src='@/assets/curso/temas/tema2/img_28.png', alt='Imagen Decorativa')

    //-       .row.justify-content-center.align-items-center.my-lg-4
    //-         .col-md-12.col-lg-6.mb-4.mb-md-0
    //-           p 
    //-             strong Intervenciones de mantenimiento predictivo: 
    //-           p se aplica a los aparatos que sólo necesitan trabajar cuando son requeridos y no se sabe cuándo ellos están en falla. Ej.: hacer un chequeo periódico a los detectores de humo.
    //-         .col-md-8.col-lg-6
    //-           figure
    //-             img(src='@/assets/curso/temas/tema2/img_29.png', alt='Imagen Decorativa')
  

    //- .row.mb-5
    //-   .col-12.col-lg-8
    //-     AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--rojo")
    //-       div(titulo="Ingeniería del mantenimiento (mejoramiento del diseño)")
    //-         .p-3
    //-           p 
    //-             b Reparación intermedia
    //-           ul.numeros 
    //-             li
    //-               span.numero 1
    //-               p Un problema siempre recurrente puede ser completamente solucionado.
    //-             li
    //-               span.numero 2
    //-               p La aplicación de ingeniería para el mejoramiento de un componente no significa necesariamente que el mantenimiento ya no es necesario.
    //-             li
    //-               .numero 3
    //-               p En algunos casos, ajustes de diseños menores pueden ser efectivos y baratos.
    //-             li 
    //-               .numero 4
    //-               p Pérdidas de producción. La ingeniería de mantenimiento puede tomar periodos considerables de tiempo.
    //-             li 
    //-               .numero 5
    //-               p Grandes proyectos de mejoramiento pueden ser muy caros, y el resultado esperado puede no materializarse.
    //-             li 
    //-               .numero 6
    //-               p Un mejoramiento que no está bien analizado puede dejar afuera la causa raíz del problema.
    //-             li 
    //-               .numero 7
    //-               p Resolver el problema en un área puede sobrecargar y causar un problema en otra área.
    //-             li 
    //-               .numero 8
    //-               p Problemas inesperados. Casi siempre en proyectos grandes problemas inesperados pueden suceder.
            
    //-       div(titulo="Mantenimiento basado en la falla")
    //-         .p-3
    //-           ul.numeros 
    //-             li
    //-               span.numero 1
    //-               p Bajo costo si es correctamente aplicado. Si el mantenimiento no es requerido, no hay costo.
    //-             li
    //-               span.numero 2
    //-               p Las fallas son generalmente inesperadas. No se requiere de planificaciones avanzadas lo cual es una reducción de costos.
    //-             li
    //-               span.numero 3
    //-               p Recolección de datos. Se pueden usar los mismos datos de otros equipos no críticos.
    //-             li
    //-               span.numero 4
    //-               p Baja probabilidad de mortalidad infantil. El mantenimiento preventivo trae al equipo al estado tan bueno como nuevo, lo cual a menudo no deseable.
    //-             li
    //-               span.numero 5
    //-               p Riesgo en la seguridad. A menudo no se tiene cuidado de la falla.
    //-             li
    //-               span.numero 6
    //-               p Grandes pérdidas de producción pueden ocurrir debido a paros sin control.
    //-             li
    //-               span.numero 7
    //-               p La falla de un componente puede provocar daños secundarios en otros.
    //-             li
    //-               span.numero 8
    //-               p Ya que las fallas son inesperadas, se requieren altos stocks de repuestos.
    //-             li
    //-               span.numero 9
    //-               p Para mantener la tasa de producción se requieren redundancias.
    //-             li
    //-               span.numero 10
    //-               p Para ser capaz de reaccionar suficientemente rápido, se necesitan equipos de mantenimiento en stand by.

          
    //-       div(titulo="Mantenimiento basado en la condición")
    //-         .p-3
    //-           p 
    //-             b Reparación intermedia
    //-           ul.numeros 
    //-             li
    //-               span.numero 1
    //-               p Un problema siempre recurrente puede ser completamente solucionado.
    //-             li
    //-               span.numero 2
    //-               p La aplicación de ingeniería para el mejoramiento de un componente no significa necesariamente que el mantenimiento ya no es necesario.
    //-             li
    //-               span.numero 3
    //-               p En algunos casos, ajustes de diseños menores pueden ser efectivos y baratos.
    //-             li
    //-               span.numero 4
    //-               p Pérdidas de producción. La ingeniería de mantenimiento puede tomar periodos considerables de tiempo.
    //-             li
    //-               span.numero 5
    //-               p Grandes proyectos de mejoramiento pueden ser muy caros, y el resultado esperado puede no materializarse.
    //-             li
    //-               span.numero 6
    //-               p Un mejoramiento que no está bien analizado puede dejar afuera la causa raíz del problema.
    //-             li
    //-               span.numero 7
    //-               p Resolver el problema en un área puede sobrecargar y causar un problema en otra área.
    //-             li
    //-               span.numero 8
    //-               p Problemas inesperados. Casi siempre en proyectos grandes problemas inesperados pueden suceder.
      
    //-       div(titulo="Mantenimiento basado en el uso o el tiempo")
    //-         .p-3
    //-           p 
    //-             b Reparación intermedia
    //-           ul.numeros 
    //-             li
    //-               span.numero 1
    //-               p Un problema siempre recurrente puede ser completamente solucionado.
    //-             li
    //-               span.numero 2
    //-               p La aplicación de ingeniería para el mejoramiento de un componente no significa necesariamente que el mantenimiento ya no es necesario.
    //-             li
    //-               span.numero 3
    //-               p En algunos casos, ajustes de diseños menores pueden ser efectivos y baratos.
    //-             li
    //-               span.numero 4
    //-               p Pérdidas de producción. La ingeniería de mantenimiento puede tomar periodos considerables de tiempo.
    //-             li
    //-               span.numero 5
    //-               p Grandes proyectos de mejoramiento pueden ser muy caros, y el resultado esperado puede no materializarse.
    //-             li
    //-               span.numero 6
    //-               p Un mejoramiento que no está bien analizado puede dejar afuera la causa raíz del problema.
    //-             li
    //-               span.numero 7
    //-               p Resolver el problema en un área puede sobrecargar y causar un problema en otra área.
    //-             li
    //-               span.numero 8
    //-               p Problemas inesperados. Casi siempre en proyectos grandes problemas inesperados pueden suceder.
            
    //-       div(titulo="Tercerización: otra alternativa")
    //-         .p-3
    //-           p 
    //-             b Reparación intermedia
    //-           ul.numeros 
    //-             li
    //-               span.numero 1
    //-               p Un problema siempre recurrente puede ser completamente solucionado.
    //-             li
    //-               span.numero 2
    //-               p La aplicación de ingeniería para el mejoramiento de un componente no significa necesariamente que el mantenimiento ya no es necesario.
    //-             li
    //-               span.numero 3
    //-               p En algunos casos, ajustes de diseños menores pueden ser efectivos y baratos.
    //-             li
    //-               span.numero 4
    //-               p Pérdidas de producción. La ingeniería de mantenimiento puede tomar periodos considerables de tiempo.
    //-             li
    //-               span.numero 5
    //-               p Grandes proyectos de mejoramiento pueden ser muy caros, y el resultado esperado puede no materializarse.
    //-             li
    //-               span.numero 6
    //-               p Un mejoramiento que no está bien analizado puede dejar afuera la causa raíz del problema.
    //-             li
    //-               span.numero 7
    //-               p Resolver el problema en un área puede sobrecargar y causar un problema en otra área.
    //-             li
    //-               span.numero 8
    //-               p Problemas inesperados. Casi siempre en proyectos grandes problemas inesperados pueden suceder.
                
                
                
      
    //-   .col-8.col-lg-4
    //-     figure
    //-       img(src='@/assets/curso/temas/tema2/img_30.png', alt='Imagen Decorativa')


    //- h3.red_gear.mb-4 Requerimiento: es la demanda por servicios de mantenimiento:

    //- p.mb-5 La cual se puede establecer mediante:

    //- .row.bg12.p-4.mb-5.align-items-center
    //-   .col-8.col-md-3
    //-     figure
    //-       img(src='@/assets/curso/temas/tema2/img_32.png', alt='Imagen Decorativa')
    //-   .col-12.col-md-9
    //-     .row.p-2
    //-       .col-6.col-md-3.mb-3.d-flex
    //-         .tarjeta.bg02.p-3.shadow-sm
    //-             span
    //-               b.txt-red 01
    //-               img.mx-auto.img-auto.mb-3(src='@/assets/curso/temas/tema2/img_33.svg', alt='Imagen Decorativa')
    //-             p.text-center Frecuencia indicada por el fabricante de la maquina o el repuesto
    //-       .col-6.col-md-3.mb-3.d-flex
    //-         .tarjeta.bg02.p-3.shadow-sm
    //-             span
    //-               b.txt-red 02
    //-               img.mx-auto.img-auto.mb-3(src='@/assets/curso/temas/tema2/img_34.svg', alt='Imagen Decorativa')
    //-             p.text-center Experiencia de los operadores o gente de experiencia de mantenimiento de la planta.

    //-       .col-6.col-md-3.mb-3.d-flex
    //-         .tarjeta.bg02.p-3.shadow-sm
    //-             span
    //-               b.txt-red 03
    //-               img.mx-auto.img-auto.mb-3(src='@/assets/curso/temas/tema2/img_35.svg', alt='Imagen Decorativa')
    //-             p.text-center Quejas del Operador
    //-       .col-6.col-md-3.mb-3.d-flex
    //-         .tarjeta.bg02.p-3.shadow-sm
    //-             span
    //-               b.txt-red 04
    //-               img.mx-auto.img-auto.mb-3(src='@/assets/curso/temas/tema2/img_70.svg', alt='Imagen Decorativa')
    //-             p.text-center Rondas de inspección
    //-       .col-6.col-md-3.mb-3.d-flex
    //-         .tarjeta.bg02.p-3.shadow-sm
    //-             span
    //-               b.txt-red 05
    //-               img.mx-auto.img-auto.mb-3(src='@/assets/curso/temas/tema2/img_36.svg', alt='Imagen Decorativa')
    //-             p.text-center Programas anteriores y análisis de desviaciones
    //-       .col-6.col-md-3.mb-3.d-flex
    //-         .tarjeta.bg02.p-3.shadow-sm
    //-             span
    //-               b.txt-red 06
    //-               img.mx-auto.img-auto.mb-3(src='@/assets/curso/temas/tema2/img_37.svg', alt='Imagen Decorativa')
    //-             p.text-center Políticas de abastecimiento de la demanda
    //-       .col-6.col-md-3.mb-3.d-flex
    //-         .tarjeta.bg02.p-3.shadow-sm
    //-             span
    //-               b.txt-red 07
    //-               img.mx-auto.img-auto.mb-3(src='@/assets/curso/temas/tema2/img_38.svg', alt='Imagen Decorativa')
    //-             p.text-center Actualización del Equipo

    //- .row.mb-5
    //-   .col-10.mx-auto
    //-     .bg10.p-3
    //-       p.mb-0.text-white
    //-         b Planificación de los trabajos: es hacer la compatibilización entre los requerimientos de mantenimiento y la disponibilidad de recursos.

    //- p.mb-5 Para planificar se requiere: Listado de requerimientos


    //- .tarjeta--container.row.mb-5
    //-   .col-md.tarjeta.color-primario.p-5
    //-     .row.justify-content-center.mb-4
    //-       .col-6
    //-         figure
    //-           img.img-auto.mx-auto(src='@/assets/curso/temas/tema2/img_39.svg', alt='Texto que describa la imagen')
    //-     p.text-center Listado de requerimientos
      
    //-   .col-md.tarjeta.bg05.p-5
    //-     .row.justify-content-center.mb-4
    //-       .col-6
    //-         figure
    //-           img.img-auto.mx-auto(src='@/assets/curso/temas/tema2/img_40.svg', alt='Texto que describa la imagen')     
    //-     p.text-center Planificaciones anteriores con la introducción de los resultados de la retroalimentación (Hacer un análisis crítico de los éxitos y fracasos de las planificaciones anteriores).

    //-   .col-md.tarjeta.bg06.p-5
    //-     .row.justify-content-center.mb-4
    //-       .col-6
    //-         figure
    //-          img.img-auto.mx-auto(src='@/assets/curso/temas/tema2/img_41.svg', alt='Texto que describa la imagen')
    //-     p.text-center Recoger y analizar indicadores de eficiencia.

    //- p Consulte, a continuación, algunas de las etapas en el proceso de mantenimiento:
    //- h3.red_gear.mb-4 Requerimiento: es la demanda por servicios de mantenimiento:


    //- .row.mb-5.tarjeta.bg03.p-4.align-items-center
    //-   .col-lg-4.col-8.mx-auto.mb-3(data-aos="fade-left")
    //-     figure
    //-       img.img-t.mb-2(src='@/assets/curso/temas/tema2/img_42.png', alt='Imagen Decorativa')
    //-   .col-lg-8.col-12(data-aos="fade-right")
    //-     SlyderF(columnas="col-lg-6 col-xl-6 col-md-6")
    //-       .tarjeta.bg05.p-4.pt-5.pb-5
    //-         p.text-center.bg04 Capacidad y habilidad de la fuerza de trabajo
    //-         p.text-center El personal del mantenimiento está altamente capacitado y sus conocimientos son transmitidos.

    //-       .tarjeta.bg05.p-4.pt-5.pb-5
    //-         p.text-center.bg04 Capacidad y habilidad de la fuerza de trabajo
    //-         p.text-center Los administradores superiores son, en general, ingenieros y los demás tienen grados técnicos.

    //-       .tarjeta.bg05.p-4.pt-5.pb-5
    //-         p.text-center.bg04 Evidencia por la calidad
    //-         p.text-center El mantenimiento siempre debe buscar el alineamiento de sus servicios y procedimientos para sostener las necesidades de los equipamientos.
      
    //- p A continuación, algunos tipos de mantenimiento:
    //- p.mb-5
    //-   b Programación de trabajos: tener un programa detallado de actividades con sus recursos asignados e identificados más sus prioridades de ejecución.

    //- .bg12.p-4.mb-5
    //-   .row.p-2.mx-auto
    //-     .col.mb-3.d-flex
    //-       .tarjeta.bg02.p-3.shadow-sm
    //-           span
    //-             b.txt-red 01
    //-             img.mx-auto.img-auto.mb-3(src='@/assets/curso/temas/tema2/img_43.svg', alt='Imagen Decorativa')
    //-           p.text-center El plan de mantenimiento.
    //-     .col.mb-3.d-flex
    //-       .tarjeta.bg02.p-3.shadow-sm
    //-           span
    //-             b.txt-red 02
    //-             img.mx-auto.img-auto.mb-3(src='@/assets/curso/temas/tema2/img_44.svg', alt='Imagen Decorativa')
    //-           p.text-center Listado de personal con sus capacidades.
    //-     .col.mb-3.d-flex
    //-       .tarjeta.bg02.p-3.shadow-sm
    //-           span
    //-             b.txt-red 03
    //-             img.mx-auto.img-auto.mb-3(src='@/assets/curso/temas/tema2/img_45.svg', alt='Imagen Decorativa')
    //-           p.text-center Listado de las facilidades disponibles.
    //-     .col.mb-3.d-flex
    //-       .tarjeta.bg02.p-3.shadow-sm
    //-           span
    //-             b.txt-red 04
    //-             img.mx-auto.img-auto.mb-3(src='@/assets/curso/temas/tema2/img_46.svg', alt='Imagen Decorativa')
    //-           p.text-center Listado de procedimientos, los cuales se incluyen en las ordenes de trabajo.
    //-     .col.mb-3.d-flex
    //-       .tarjeta.bg02.p-3.shadow-sm
    //-           span
    //-             b.txt-red 05
    //-             img.mx-auto.img-auto.mb-3(src='@/assets/curso/temas/tema2/img_47.svg', alt='Imagen Decorativa')
    //-           p.text-center Programas anteriores con introducción de mejoras.


       

    //- .row.mb-5
    //-   .col-10.mx-auto
    //-     .bg10.p-3
    //-       p.mb-0.text-white
    //-         b Ejecución del trabajo: es llevar a cabo las instrucciones escritas en las ordenes de trabajo, verificando el correcto uso de las herramientas y solucionar problemas imprevistos.
    //- .row.mb-5
    //-   .col-12.col-lg-8
    //-     AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--rojo")
    //-       div(titulo="Distribución del trabajo")
    //-         .p-3
    //-           p 
    //-             b Reparación intermedia
    //-           ul.numeros 
    //-             li
    //-               span.numero 1
    //-               p Coordinar con producción el momento de intervenir;
    //-             li
    //-               span.numero 2
    //-               p El seguimiento del avance de las intervenciones.
               
    //-       div(titulo="Gestión de personal")
    //-         .p-3
    //-           p 
    //-             b Reparación intermedia
    //-           ul.numeros 
    //-             li
    //-               span.numero 1
    //-               p Movilización de recursos.
    //-             li
    //-               span.numero 2
    //-               p Consignación de las instalaciones.
    //-             li
    //-               span.numero 3
    //-               p Medidas de seguridad.
    //-             li
    //-               span.numero 4
    //-               p Intervención misma.
    //-             li
    //-               span.numero 5
    //-               p Transferencia del equipo a producción.
    //-             li
    //-               span.numero 6
    //-               p Rendición de cuentas: causa que originó la intervención, descripción de dificultades encontradas para cumplir los plazos previstos de intervención. La idea es resaltar los puntos que causan la perdida de eficiencia de la función mantenimiento.
               
    //-       div(titulo="Mantenimiento basado en la condición")
    //-         .p-3
    //-           p 
    //-             b Reparación intermedia
    //-           ul.numeros 
    //-             li
    //-               span.numero 1
    //-               p Datos para el salario (HH, bonificaciones, etc.).
    //-             li
    //-               span.numero 2
    //-               p Motivación del personal.
               
    //-   .col-8.col-lg-4
    //-     figure
    //-       img(src='@/assets/curso/temas/tema2/img_48.png', alt='Imagen Decorativa')

    //- h3.mb-4 Finalización del trabajo: son las pruebas necesarias para asegurar la confiabilidad de las maquinas. Es una etapa previa antes de entregarla al operador.
    //- .row.mb-5
    //-   .col-6.col-md-4
    //-     .tarjeta-avatar-b.mb-3
    //-       .tarjeta-avatar-b__img
    //-         img.img-t.m-auto(src='@/assets/curso/temas/tema2/img_49.svg', alt='Imagen Decorativa')
    //-       .tarjeta.bg05.row.align-items-center.bg03
    //-         p.mb-0.p-2
    //-           b Pruebas en vacío y con carga y medición de las variables de control.
    //-   .col-6.col-md-4
    //-     .tarjeta-avatar-b.mb-3
    //-       .tarjeta-avatar-b__img
    //-         img.img-t.m-auto(src='@/assets/curso/temas/tema2/img_49.svg', alt='Imagen Decorativa')
    //-       .tarjeta.bg05.row.align-items-center.bg03
    //-         p.mb-0.p-2
    //-           b Análisis del comportamiento basado en conocimientos del experto.
    //-   .col-6.col-md-4
    //-     .tarjeta-avatar-b.mb-3
    //-       .tarjeta-avatar-b__img
    //-         img.img-t.m-auto(src='@/assets/curso/temas/tema2/img_49.svg', alt='Imagen Decorativa')
    //-       .tarjeta.bg05.row.align-items-center.bg03
    //-         p.mb-0.p-2
    //-           b Fijar período de prueba, ajustes y observación.

    
    //- h3.mb-4 Control y evaluación: se refiere a comparar lo real con lo presupuestado (o valor patrón) para cada trabajo.
    //- .row.mb-5
    //-   .col-6.col-md-4
    //-     .tarjeta-avatar-b.mb-3
    //-       .tarjeta-avatar-b__img
    //-         img.img-t.m-auto(src='@/assets/curso/temas/tema2/img_49.svg', alt='Imagen Decorativa')
    //-       .tarjeta.bg05.row.align-items-center.bg03
    //-         p.mb-0
    //-           b Definición y manejo de indicadores.
    //-   .col-6.col-md-4
    //-     .tarjeta-avatar-b.mb-3
    //-       .tarjeta-avatar-b__img
    //-         img.img-t.m-auto(src='@/assets/curso/temas/tema2/img_49.svg', alt='Imagen Decorativa')
    //-       .tarjeta.bg05.row.align-items-center.bg03
    //-         p.mb-0
    //-           b Gestión de los desvíos.
    //-   .col-6.col-md-4
    //-     .tarjeta-avatar-b.mb-3
    //-       .tarjeta-avatar-b__img
    //-         img.img-t.m-auto(src='@/assets/curso/temas/tema2/img_49.svg', alt='Imagen Decorativa')
    //-       .tarjeta.bg05.row.align-items-center.bg03
    //-         p.mb-0
    //-           b Definición e implementación de acciones correctoras.

    //- h3.red_gear.mb-4 Efectividad del plan de mantenimiento:
    //- .bloque-texto-g.bg14.p-3.p-sm-4.p-md-5.mb-5
    //-   .bloque-texto-g__img(
    //-     :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img_50.jpg')})`}"
    //-   )
    //-   .bloque-texto-g__texto.p-4
    //-     p.mb-0.d-block 
    //-       b ¿Es la falla funcional evidente para el operador? (¿Alguien nota que la falla se produjo?) 
    //-     p.mb-0.d-block 
    //-       b un cuestionario estructurado ayuda a determinar si su sistema de mantención está funcionando bien.
    //-     p.mb-0.d-block - Identifica los modos de falla asociados con el componente o sistema.
    //-     p.mb-0.d-block - ¿Existe una tasa significativa de degradación por la edad de sistema? (¿Están los componentes con los materiales agotados?) ¿Los modos de falla están ocurriendo hoy en día?
    
    //- p.mb-5 Capturando y manteniendo datos históricos estos ayudarán a responder estas preguntas.

    //- h3.mb-4 3. Identificación de las fallas funcionales:
    //- p -¿Es la falla funcional evidente para el operador? (¿Alguien nota que la falla se produjo?) 
    //- p.mb-5 -Determine que tipos de tareas es usada para identificar la falla:

    //- .row.mb-5
    //-   .col-lg-4.col-md-8.mx-auto.mb-3(data-aos="fade-right")
    //-     figure
    //-       img(src='@/assets/curso/temas/tema2/img_51.png', alt='Imagen Decorativa')
    //-   .col-lg-8.col-md-12(data-aos="fade-left")
    //-     .bg15.p-3.mb-3.shadow
    //-       p.mb-0 Mantenimiento periódico: son de tareas de mantenimiento periódico sin mirar la condición. 
    //-     .bg15.p-3.mb-3.shadow
    //-       p.mb-0 Mantenimiento por condición: test o inspecciones basadas solamente en la condición del equipo.
    //-     .bg15.p-3.mb-4.shadow
    //-       p.mb-0 Ingeniería de confiabilidad: uso de tareas de mantenimiento para encontrar fallas que no son normalmente observadas.
    //-     p - Identifique y mida la característica o parámetro que con certeza refleja el estado del sistema o componente. Por ejemplo, vibraciones del ítem.
    //-     p - Defina las tolerancias aceptables e inaceptables para la medida característica.

    //- h3 4. ¿Es actualmente la actividad de mantenimiento efectiva? Cada tipo de tarea tiene diferentes medidas para determinar su efectividad.
          
    //- .row.mb-5.tarjeta.bg03.p-4.align-items-center
    //-   .col-lg-4.col-8.mx-auto.mb-3(data-aos="fade-left")
    //-     figure
    //-       img.img-t.mb-2(src='@/assets/curso/temas/tema2/img_52.png', alt='Imagen Decorativa')
    //-   .col-lg-8.col-12(data-aos="fade-right")
    //-     SlyderF(columnas="col-lg-6 col-xl-6 col-md-6")
    //-       .tarjeta.bg05.p-4.pt-5.pb-5
    //-         p.text-center Mantenimiento periódico: la probabilidad de falla aumenta en un periodo determinado de uso, una gran población sobrevive a esa edad y las tareas de mantenimiento restauran a su estado original de resistencia a la falla.

    //-       .tarjeta.bg05.p-4.pt-5.pb-5
    //-         p.text-center Mantenimiento por condición: las características correspondientes a los modos de falla pueden ser identificados, ellos pueden ser medidos con exactitud y consistencia, y las tareas proveen un amplio tiempo entre la detección y la falla.

    //-       .tarjeta.bg05.p-4.pt-5.pb-5
    //-         p.text-center Ingeniería de confiabilidad: la falla no es evidente al personal y no existen tareas preventivas. Si las tareas de mantenimiento no son efectivas, se necesita ya sea modificarla para así llegar a ser efectiva o bien eliminarla.
      

    //- h3 5. Identifique las consecuencias de la falla.
   
    //- .row.mb-5
    //-   .col-lg-8.col-md-12(data-aos="fade-left")
    //-     p Identifique si las consecuencias de la falla están relacionadas con seguridad o regulación, producción o costo del sistema o componente.
    //-     .cajon.color-primario.p-4.mb-3
    //-       p.mb-0 -¿Existen tareas de mantenimiento que agreguen valor? Para determinar si las tareas de mantenimiento agregan valor, use diferentes medidas para cada categoría que las consecuencias de la falla pueden introducir:
    //-     .bg03.p-3.mb-3.shadow
    //-       p.mb-0 Seguridad o regulación: reducir la probabilidad de falla a un nivel aceptable.
    //-     .bg03.p-3.mb-3.shadow
    //-       p.mb-0 Producción: reducir el riesgo de falla a un nivel aceptable.
    //-     .bg03.p-3.mb-3.shadow
    //-       p.mb-0 Para el resto: costo de las tareas de mantenimiento preventivo a un valor menor que el costo de una reparación imprevista más el costo de pérdida de capacidad.
    //-   .col-lg-4.col-md-8.mx-auto.mb-3(data-aos="fade-right")
    //-     figure
    //-       img(src='@/assets/curso/temas/tema2/img_53.png', alt='Imagen Decorativa')
      
    //- h3 6. Haga recomendaciones para los cambios (si son necesarios)
    //- p Identifique si las consecuencias de la falla están relacionadas con seguridad o regulación, producción o costo del sistema o componente.
    //- p - ¿Existen tareas de mantenimiento que agreguen valor? Para determinar si las tareas de mantenimiento agregan valor, use diferentes medidas para cada categoría que las consecuencias de la falla pueden introducir:

    //- .tarjeta.bg12.p-4.mb-5
    //-   .row.align-items-center    
    //-     .col-lg-8.col-md-12(data-aos="fade-left")
    //-       h3.red_gear.mb-4 Concepción del mantenimiento:
    //-       .row
           
    //-         .col-12.col-lg-6
              
    //-           ul.bullets
    //-             li
    //-               p 1. Tero – Tecnología avanzada estómago.
    //-             li
    //-               p 2. Concepción Estratégica de mantenimiento (SMC).
    //-             li
    //-               p 3. Mantenimiento Centrado en la Confiabilidad (MCC).
    //-             li
    //-               p 4. Mantenimiento Centrado en el Negocio (BCN).
    //-         .col-12.col-lg-6
    //-           ul.bullets  
    //-             li
    //-               p 5. Mantenimiento Productivo Total (TPM).
    //-             li
    //-               p 6. Apoyo Logístico Integrado/Análisis del Apoyo Logístico (ILS/LSA).
    //-             li
    //-               p 7. Mantenimiento con Calidad Total (TQMain).
    //-             li
    //-               p 8. Mantenimiento Basado en el Riesgo (RBM).
                  
    //-     .col-lg-4.col-md-8.mx-auto.mb-3(data-aos="fade-right")
    //-       figure
    //-         img(src='@/assets/curso/temas/tema2/img_54.png', alt='Imagen Decorativa')

    //- h3.red_gear.mb-4 El Ciclo Virtuoso:
    //- .bloque-texto-g.bg10.p-3.p-sm-4.p-md-5.mb-5
    //-   .bloque-texto-g__img(
    //-     :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img_55.jpg')})`}"
    //-   )
    //-   .bloque-texto-g__texto.p-4
    //-     p.mb-0  Un ciclo virtuoso es un conjunto de eventos que se refuerza a través de un circuito de retroalimentación. Un ciclo virtuoso tiene resultados favorables. Un ciclo virtuoso puede transformar en un ciclo vicioso, si se tiene en cuenta la retroalimentación negativa final.


    //- .row.mb-5.align-items-center
    //-   .col-lg-9.col-md-12(data-aos="fade-left")
    //-     p Ambos círculos son complejos de eventos con ninguna tendencia hacia el equilibrio (al menos en el corto plazo). Ambos sistemas de eventos tienen ciclos de retroalimentación en el que cada iteración del ciclo refuerza la primera (retroalimentación positiva). Estos ciclos se mantendrán en la dirección de su impulso hasta que un factor externo interviene y rompe el ciclo.
    //-     //- .cajon.color-primario.p-4.mb-3
    //-     //-   p.mb-0 Ambos círculos son complejos de eventos con ninguna tendencia hacia el equilibrio (al menos en el corto plazo). Ambos sistemas de eventos tienen ciclos de retroalimentación en el que cada iteración del ciclo refuerza la primera (retroalimentación positiva). Estos ciclos se mantendrán en la dirección de su impulso hasta que un factor externo interviene y rompe el ciclo.

    //-   .col-lg-3.col-md-8.mx-auto.mb-3(data-aos="fade-right")
    //-     figure
    //-       img(src='@/assets/curso/temas/tema2/img_56.png', alt='Imagen Decorativa')
      




    //- TabsA.color-azul.mb-5
    //-   .tarjeta.bg16.p-4(titulo="Materiales.")
    //-       h4 Materiales.
    //-       .row
    //-         .col-xl-6
    //-           p - Materia prima defectuosa 
    //-           p - Procedimiento equivocado para el trabajo (proceso, -máquina, personal) 
    //-           p - Falta de materia prima. 
    //-         .col-xl-6.mb-4
    //-           figure
    //-             img(src='@/assets/curso/temas/tema2/img_57.png', alt='Texto que describa la imagen')
            


    //-   .tarjeta.bg16.p-4(titulo="Máquina/equipamiento.")
    //-       h4 Máquina/equipamiento.
    //-       .row
    //-         .col-xl-6
    //-           p - Selección incorrecta de la herramienta. 
    //-           p - Mantenimiento o diseño deficiente. 
    //-           p - Ubicación incorrecta del equipo o de las herramientas. 
    //-           p - Equipo o herramientas defectuosas. 
    //-         .col-xl-6.mb-4
    //-           figure
    //-             img(src='@/assets/curso/temas/tema2/img_58.png', alt='Texto que describa la imagen')

    //-   .tarjeta.bg16.p-4(titulo="Medio ambiente. ")
    //-       h4 Medio ambiente. 
    //-       .row
    //-         .col-xl-6
    //-           p - Lugar de trabajo desordenado. 
    //-           p - Diseño de puestos de trabajo o layout de planta no adecuados 
    //-           p - Superficies en mal estado de conservación. 
    //-           p - Exigencias físicas de la tarea no conformes. 
    //-           p - Fuerzas de la naturaleza. 

    //-         .col-xl-6.mb-4
    //-           figure
    //-             img(src='@/assets/curso/temas/tema2/img_59.png', alt='Texto que describa la imagen')

    //-   .tarjeta.bg16.p-4(titulo="Administración.")
    //-       h4 Administración.
    //-       .row
    //-         .col-xl-6
    //-           p - Es la distribución de frecuencias de un atributo ordenados por tamaño de la frecuencia. 
    //-           p - Ayuda a definir prioridades para que el curso de las acciones sea más efectivo. 
    //-           p - Categorías incluidas: 
    //-           p - Clase A usualmente contiene el 20% del factor (causa) que están causando el 75% al 80% de los problemas. 
    //-           p - Clase B contiene alrededor del 20% del factor que causa entre el 15% al 20% de los problemas. 
    //-           p - Clase C contiene el resto de los factores los cuales son muchos. 

    //-         .col-xl-6.mb-4
    //-           figure
    //-             img(src='@/assets/curso/temas/tema2/img_60.png', alt='Texto que describa la imagen')

    //-   .tarjeta.bg16.p-4(titulo="Métodos.")
    //-       h4 Métodos.
    //-       .row
    //-         .col-xl-6
    //-           p - Ningún o procedimientos pobres. 
    //-           p - Prácticas que no son las mismas que están escritas en los procedimientos. 
    //-           p - Comunicación pobre. 
    //-         .col-xl-6.mb-4
    //-           figure
    //-             img(src='@/assets/curso/temas/tema2/img_61.png', alt='Texto que describa la imagen')

    //-   .tarjeta.bg16.p-4(titulo="Sistema de administración.")
    //-       h4 Sistema de administración.
    //-       .row
    //-         .col-xl-6
    //-           p - Falta de entrenamiento o educación. 
    //-           p - Bajo involucramiento del personal. 
    //-           p - Bajo reconocimiento del peligro. 
    //-           p - Peligros previamente identificados que no fueron eliminados.
    //-         .col-xl-6.mb-4
    //-           figure
    //-             img(src='@/assets/curso/temas/tema2/img_62.png', alt='Texto que describa la imagen')

    //-   .tarjeta.bg16.p-4(titulo="Carta de Pareto (análisis ABC).")
    //-       h4 Carta de Pareto (análisis ABC).
    //-       .row
    //-         .col-xl-6
    //-           p - Participación pobre de la gerencia. 
    //-           p - La falta de atención por la tarea.  
    //-           p - Peligros de las tareas no vigilado adecuadamente.
    //-           p - Otros (bromas, falta de atención).  
    //-           p - Trabajo estresante. 
    //-           p - Falta de procedimientos. 
    //-         .col-xl-6.mb-4
    //-           figure
    //-             img(src='@/assets/curso/temas/tema2/img_63.png', alt='Texto que describa la imagen')

    //- h3.red_gear.mb-4 Herramientas para el control de calidad y mejoramiento del mantenimiento:

    //- .tarjeta.bg01.mb-5
    //-   .tarjeta.p-5.bg02
    //-     SlyderA(tipo="b")
    //-       .row.justify-content-center.align-items-center.my-lg-4
    //-         .col-md-12.col-lg-6.mb-4.mb-md-0
    //-           p El desarrollo de un sistema de control de calidad para el mantenimiento es esencial para asegurar alta calidad de la reparación,  afinar  la  estandarización,  maximizar  la disponibilidad, extender la vida económica del activo y asegurar una alta eficiencia y tasa de producción del equipo. 
    //-         .col-md-8.col-lg-6
    //-           figure
    //-             img(src='@/assets/curso/temas/tema2/img_71.png', alt='Imagen Decorativa')

    //-       .row.justify-content-center.align-items-center.my-lg-4
    //-         .col-md-12.col-lg-6.mb-4.mb-md-0
    //-           p Una organización para el mantenimiento no puede olvidar que su participación en el logro de las metas de la empresa es crítica ya que su foco es la alta disponibilidad de sus activos. Por tanto, debe vincular sus objetivos con los de la empresa y entregarlos con la más alta calidad.

    //-         .col-md-8.col-lg-6
    //-           figure
    //-             img(src='@/assets/curso/temas/tema2/img_71.png', alt='Imagen Decorativa')

    //-       .row.justify-content-center.align-items-center.my-lg-4
    //-         .col-md-12.col-lg-6.mb-4.mb-md-0
    //-           p  La responsabilidad del grupo de control de calidad incluye el desarrollo de procedimientos para pruebas, inspecciones y ejecución del trabajo, documentación, seguimientos o monitoreo, análisis de las deficiencias, e identificación de las necesidades de entrenamiento a partir del análisis de los reportes de calidad. 
    //-         .col-md-8.col-lg-6
    //-           figure
    //-             img(src='@/assets/curso/temas/tema2/img_71.png', alt='Imagen Decorativa')


                
    //- h3.red_gear.mb-4 Herramientas para el control de calidad y mejoramiento del mantenimiento:
    //- p.mb-4 Hay que tener mucho cuidado en la recolección de los datos para que sean compatibles con el fin que se persigue y que además sean completos para la aplicación de la herramienta escogida. 
    //- .bg12.p-4.mb-5
    //-   .row.p-2.mx-auto
    //-     .col.mb-3
    //-       .tarjeta.bg02.p-3.shadow-sm
    //-           span
    //-             b.text-red 01
    //-             img.mx-auto.img-auto.mb-3(src='@/assets/curso/temas/tema2/img_64.svg', alt='Imagen Decorativa')
    //-           p.text-center Planifique todo el proceso de recolección de datos desde un comienzo.
    //-     .col.mb-3
    //-       .tarjeta.bg02.p-3.shadow-sm
    //-           span
    //-             b.text-red 02
    //-             img.mx-auto.img-auto.mb-3(src='@/assets/curso/temas/tema2/img_65.svg', alt='Imagen Decorativa')
    //-           p.text-center Aclare el propósito de la recolección de datos. 
    //-     .col.mb-3
    //-       .tarjeta.bg02.p-3.shadow-sm
    //-           span
    //-             b.text-red 03
    //-             img.mx-auto.img-auto.mb-3(src='@/assets/curso/temas/tema2/img_64.svg', alt='Imagen Decorativa')
    //-           p.text-center Especifique claramente los datos necesitados. 
    //-     .col.mb-3
    //-       .tarjeta.bg02.p-3.shadow-sm
    //-           span
    //-             b.text-red 04
    //-             img.mx-auto.img-auto.mb-3(src='@/assets/curso/temas/tema2/img_65.svg', alt='Imagen Decorativa')
    //-           p.text-center Use las técnicas correctas de ejemplificación.
    //-     .col.mb-3
    //-       .tarjeta.bg02.p-3.shadow-sm
    //-           span
    //-             b.text-red 05
    //-             img.mx-auto.img-auto.mb-3(src='@/assets/curso/temas/tema2/img_64.svg', alt='Imagen Decorativa')
    //-           p.text-center Diseñe los requerimientos de listas de chequeos por anticipado. 
       

    //- .bloque-texto-g.bg05.p-3.p-sm-4.p-md-5.mb-5
    //-   .bloque-texto-g__img(
    //-     :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img_66.jpg')})`}"
    //-   )
    //-   .bloque-texto-g__texto.p-4
    //-     p.mb-0 La obtención de datos debe ser un proceso continuo y debe ser parte del sistema de información. Como ser detenciones del equipo, productividad del trabajo, costos de mantenimiento, costo de materiales y repuestos, causas de las fallas, tiempo de reparación, ordenes atrasadas, entre otros datos.


    //- p Lista de chequeos: 
    //- p Una lista de chequeo es un conjunto simple de instrucciones usados en la recolección de datos, donde los datos pueden ser compilados fácilmente usados y analizados automáticamente. Las listas en mantenimiento pueden ser usadas para: 
 
    //- .row.bg12.p-4.mb-5
    //-   .col-8.col-md-3
    //-     figure
    //-       img(src='@/assets/curso/temas/tema2/img_67.png', alt='Imagen Decorativa')
    //-   .col-12.col-md-9
    //-     .row.p-2
    //-       .col-3.mb-3
    //-         .tarjeta.bg02.p-3.shadow-sm
    //-             span
    //-               b.text-red 01
    //-               img.mx-auto.img-auto.mb-3(src='@/assets/curso/temas/tema2/img_64.svg', alt='Imagen Decorativa')
    //-             p.text-center Recolectar datos para construir un histograma
    //-       .col-3.mb-3
    //-         .tarjeta.bg02.p-3.shadow-sm
    //-             span
    //-               b.text-red 02
    //-               img.mx-auto.img-auto.mb-3(src='@/assets/curso/temas/tema2/img_65.svg', alt='Imagen Decorativa')
    //-             p.text-center Ejecutar tareas de mantenimiento. 
    //-       .col-3.mb-3
    //-         .tarjeta.bg02.p-3.shadow-sm
    //-             span
    //-               b.text-red 03
    //-               img.mx-auto.img-auto.mb-3(src='@/assets/curso/temas/tema2/img_64.svg', alt='Imagen Decorativa')
    //-             p.text-center Preparar antes y cerrar después los trabajos de mantenimiento.
    //-       .col-3.mb-3
    //-         .tarjeta.bg02.p-3.shadow-sm
    //-             span
    //-               b.text-red 04
    //-               img.mx-auto.img-auto.mb-3(src='@/assets/curso/temas/tema2/img_65.svg', alt='Imagen Decorativa')
    //-             p.text-center Preparar antes y cerrar después los trabajos de mantenimiento. 
    //-       .col-3.mb-3
    //-         .tarjeta.bg02.p-3.shadow-sm
    //-             span
    //-               b.text-red 05
    //-               img.mx-auto.img-auto.mb-3(src='@/assets/curso/temas/tema2/img_64.svg', alt='Imagen Decorativa')
    //-             p.text-center Revisión de las partes y piezas. 
    //-       .col-3.mb-3
    //-         .tarjeta.bg02.p-3.shadow-sm
    //-             span
    //-               b.text-red 06
    //-               img.mx-auto.img-auto.mb-3(src='@/assets/curso/temas/tema2/img_65.svg', alt='Imagen Decorativa')
    //-             p.text-center Planificación de los trabajos de mantenimiento. 
    //-       .col-3.mb-3
    //-         .tarjeta.bg02.p-3.shadow-sm
    //-             span
    //-               b.text-red 07
    //-               img.mx-auto.img-auto.mb-3(src='@/assets/curso/temas/tema2/img_64.svg', alt='Imagen Decorativa')
    //-             p.text-center Inspección de los equipos. 
    //-       .col-3.mb-3
    //-         .tarjeta.bg02.p-3.shadow-sm
    //-             span
    //-               b.text-red 08
    //-               img.mx-auto.img-auto.mb-3(src='@/assets/curso/temas/tema2/img_65.svg', alt='Imagen Decorativa')
    //-             p.text-center Chequear las causas de un defecto. 
    //-       .col.mb-3
    //-         .tarjeta.bg02.p-3.shadow-sm
    //-             span
    //-               b.text-red 09
    //-               img.mx-auto.img-auto.mb-3(src='@/assets/curso/temas/tema2/img_64.svg', alt='Imagen Decorativa')
    //-             p.text-center Diagnosticar los defectos de una máquina. 
    //-       .col.mb-3
    //-         .tarjeta.bg02.p-3.shadow-sm
    //-             span
    //-               b.text-red 10
    //-               img.mx-auto.img-auto.mb-3(src='@/assets/curso/temas/tema2/img_65.svg', alt='Imagen Decorativa')
    //-             p.text-center Recolectar datos para efectuar un estudio de métodos.

    //- p.mb-5 Hay muchas formas de listas de chequeos, desde un conjunto de simples pasos hasta una larga auditoría. 

    //- .titulo_sexto.mb-4(data-aos="fade-right")
    //-   h5.mb-0 Figura 1  
    //-     span Ejemplo 1: lista de chequeo para el mantenimiento 

    //- .row.mb-5
    //-   .col-10.mx-auto
    //-     .titulo_sexto.mb-4(data-aos="fade-right")
    //-       h5.mb-0 Tabla 2. 
    //-         span 
        
    //-     .tabla-a.th_red.mb-2
    //-       table
    //-         thead
    //-           tr
    //-             th.text-center 
    //-               i Item
    //-             th 
    //-               i Instruction
    //-             th 
    //-               i Checked
    //-             th
    //-               i Maintanance
    //-         tbody
    //-           tr
    //-             td 
    //-               p Plan Decenal de Salud Pública
    //-               | (Resolución 1841 de 2013)
    //-             td 
    //-               i Inspect actuators and hoses for leaks
    //-             td(colspan="2")
    //-               i Check the valves, fittings, and hoses for any signs of leaking and repair or replace as necessary
          
    //-     p.text-center Depalleter Checklist and maintenance -100,000 Cycles

    //-     .tabla-a.th_red.mb-2
    //-       table
    //-         thead
    //-           tr
    //-             th.text-center 
    //-               i Item
    //-             th 
    //-               i Instruction
    //-             th 
    //-               i Checked
    //-             th
    //-               i Maintanance
    //-         tbody
    //-           tr
    //-             td 
    //-               p Depalleter Drive
    //-             td 
    //-               i Inspect wear and tensión on drive chain
    //-             td(colspan="2")
    //-               i Look for roller and link wear on the drive chain and tensión it so there is no more than 1/2 slack.

    //-     p.text-center Depalleter Checklist and maintenance -400,000 Cycles

    //-     .tabla-a.th_red.mb-2
    //-       table
    //-         thead
    //-           tr
    //-             th.text-center 
    //-               i Item
    //-             th 
    //-               i Instruction
    //-             th 
    //-               i Checked
    //-             th
    //-               i Maintanance
    //-         tbody
    //-           tr
    //-             td 
    //-               p Pusher Carriage
    //-             td 
    //-               i Check Camrols for wear and adjust
    //-             td(colspan="2")
    //-               i Look at the camrols for fiar spots or signs of bearing wear and adjust so that there is a slight drag when they are tight.
    //-           tr
    //-             td 
    //-               p Carriage Drive Arm
    //-             td 
    //-               i Inspect bearings and drive camrol
    //-             td(colspan="2")
    //-               i Look at the bearing of the carriage drive arm for wear and look at the camrol for signs of bearing wear and binding
              
    //-           tr
    //-             td 
    //-               p Depallerter Drive
    //-             td 
    //-               i Grease the drive shaft bearing
    //-             td(colspan="2")
    //-               i Grease the drive shaft vearings but do not overgrease and before greasing check the bearing for signs of wear.

    //-           tr
    //-             td 
    //-               p Depallerter Tumtable
    //-             td 
    //-               i Check support camrols for wear and adjust
    //-             td(colspan="2")
    //-               i Make sire that the support camrols are adjusted so that there is a slight drag when turning and look for bearing wear.

    //-           tr
    //-             td 
    //-               p Pusher Lift
    //-             td 
    //-               i Grease pusher lift bearing
    //-             td(colspan="2")
    //-               i Grease the lift bearings but do not overgrease and check for any signs of wear before greasing

    //-           tr
    //-             td 
    //-               p Side Aligners
    //-             td 
    //-               i Check aligner guide rod bushings for wear
    //-             td(colspan="2")
    //-               i check the aligner guide rods for any signs of wear and replace if necessary.



    //- h3.red_gear.mb-4 Histograma de frecuencia relativa:
    
    //- .tarjeta.p-4.mb-5
    //-   .row.align-items-center    
    //-     .col-lg-8.col-md-12(data-aos="fade-left")
    //-       p Si se piensa en un número de piezas similares de un equipo que están sujetas a fallas, no se puede esperar que todas ellas fallen a la misma cantidad de horas de funcionamiento. 
    //-       | Anotando el tiempo hasta la falla de cada ítem del equipo es posible construir un histograma en el cual el área asociada con algún período de tiempo muestra la frecuencia relativa de falla ocurrida en ese intervalo. 
    //-       | Si se desea determinar la probabilidad de que una falla ocurra en el intervalo ti-1 y ti simplemente multiplique el ordinal y por el intervalo (ti-1, ti). 
    
    //-       ul.bullets
    //-         li
    //-           p 1. La probabilidad de falla en el intervalo to y tn es igual a 1. 
    //-         li
    //-           p 2. El número de observaciones debe ser el recomendado por la teoría de probabilidades.
                  
    //-     .col-lg-4.col-md-8.mx-auto.mb-3(data-aos="fade-right")
    //-       figure
    //-         img(src='@/assets/curso/temas/tema2/img_68.png', alt='Imagen Decorativa')


    //- h3 Función densidad de probabilidad: 
    //- p En los estudios de mantenimiento se tiende a usar la función de densidad de probabilidad (f(t)) más bien que los histogramas de frecuencia relativa. Esto porque: 
    //- .bg12.p-4.mb-5
    //-   .row.p-2.mx-auto
    //-     .col.mb-3
    //-       .tarjeta.bg02.p-3.shadow-sm
    //-           span
    //-             b.text-red 01
    //-             img.mx-auto.img-auto.mb-3(src='@/assets/curso/temas/tema2/img_64.svg', alt='Imagen Decorativa')
    //-           p.text-center La variable para modelar como el tiempo para la falla es una variable continua. 
    //-     .col.mb-3
    //-       .tarjeta.bg02.p-3.shadow-sm
    //-           span
    //-             b.text-red 02
    //-             img.mx-auto.img-auto.mb-3(src='@/assets/curso/temas/tema2/img_65.svg', alt='Imagen Decorativa')
    //-           p.text-center Estas funciones son más fáciles de manipular. 
    //-     .col.mb-3
    //-       .tarjeta.bg02.p-3.shadow-sm
    //-           span
    //-             b.text-red 03
    //-             img.mx-auto.img-auto.mb-3(src='@/assets/curso/temas/tema2/img_64.svg', alt='Imagen Decorativa')
    //-           p.text-center Da una mayor claridad para el entendimiento de la verdadera distribución de fallas. 
    //-     .col.mb-3
    //-       .tarjeta.bg02.p-3.shadow-sm
    //-           span
    //-             b.text-red 04
    //-             img.mx-auto.img-auto.mb-3(src='@/assets/curso/temas/tema2/img_65.svg', alt='Imagen Decorativa')
    //-           p.text-center Son similares a los histogramas excepto que es una curva continua. 
    //-     .col.mb-3
    //-       .tarjeta.bg02.p-3.shadow-sm
    //-           span
    //-             b.text-red 05
    //-             img.mx-auto.img-auto.mb-3(src='@/assets/curso/temas/tema2/img_64.svg', alt='Imagen Decorativa')
    //-           p.text-center La probabilidad (riesgo) de que ocurra una falla en el periodo ti y tj es el área sombrada bajo la curva. 

    //- h3 Otros elementos básicos para el análisis:   
    //- p A continuación, algunos de los principales elementos para tener en cuenta para el análisis de un proceso de mantenimiento de gestión industrial:



</template>

<script>
export default {
  name: 'Tema2',
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
