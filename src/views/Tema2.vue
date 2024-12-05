<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1(data-aos="fade-right") Elementos del mantenimiento industrial.

    .row.mb-2.align-items-center.ordenar_tarjeta
      .col-lg-9(data-aos="fade-left")
        p En el dinámico panorama industrial actual, donde la eficiencia, la productividad y la competitividad son factores críticos para el éxito, el mantenimiento ha evolucionado de una función reactiva a una estrategia proactiva fundamental. Ya no se considera simplemente como un gasto, sino como una inversión estratégica esencial para garantizar la operatividad continua, la seguridad, y la rentabilidad de las operaciones. La creciente complejidad de los sistemas de producción, la incorporación de tecnologías avanzadas, y la exigencia de una mayor eficiencia han elevado la importancia del mantenimiento a un nivel estratégico.
        p El mantenimiento industrial eficaz trasciende la simple reparación de equipos; abarca una gama compleja de actividades, recursos, y decisiones estratégicas interconectadas. Desde la planificación y la programación hasta la ejecución y la evaluación, cada elemento juega un rol crucial en la optimización de los procesos y en el logro de los objetivos de la organización. Un sistema de mantenimiento bien implementado no solo reduce los tiempos de inactividad y los costos asociados con las fallas, sino que también mejora la calidad del producto, incrementa la seguridad en el lugar de trabajo, y contribuye significativamente a la sostenibilidad de las operaciones a largo plazo.
      .col-lg-3.mx-auto.mb-3(data-aos="fade-right").pos_2
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
        .row.mb-3
          .col-lg-3.col-md-6.col-12.mb-3.d-flex
            .tarjeta.p-3.bg-gray
              p.mb-0
                strong 01
              figure
                img.img-auto.mx-auto.mb-3(src='@/assets/curso/temas/tema2/img08.svg', alt='Imagen Decorativa')
              p.text-center.mb-0 MCC (mantenimiento centrado en la confiabilidad)

          .col-lg-3.col-md-6.col-12.mb-3.d-flex
            .tarjeta.p-3.bg-gray
              p.mb-0
                strong 02
              figure
                img.img-auto.mx-auto.mb-3(src='@/assets/curso/temas/tema2/img09.svg', alt='Imagen Decorativa')
              p.text-center.mb-0 TPM (mantenimiento productivo total)
          .col-lg-3.col-md-6.col-12.mb-3.d-flex
            .tarjeta.p-3.bg-gray
              p.mb-0
                strong 03
              figure
                img.img-auto.mx-auto.mb-3(src='@/assets/curso/temas/tema2/img10.svg', alt='Imagen Decorativa')
              p.text-center.mb-0 MBC (mantenimiento centrado en la condición)
          .col-lg-3.col-md-6.col-12.mb-3.d-flex
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
          
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema2/img41.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen

            .tarjeta.color-acento-botones.p-3(x="22.75%" y="32.5%" numero="")
              .h5.mb-2 Seguridad
              p Está referida a la integridad del personal, instalaciones, equipos, sistemas, máquinas y sin dejar de lado el medio ambiente.

            .tarjeta.color-acento-botones.p-3(x="31.8%" y="68.5%" numero="")
              .h5.mb-2 Fiabilidad.
              p Es la probabilidad de que las instalaciones, máquinas o equipos, se desempeñen satisfactoriamente sin fallar, durante un período determinado, bajo condiciones específicas.

            .tarjeta.color-acento-botones.p-3(x="53.5%" y="28%" numero="")
              .h5.mb-2 Disponibilidad.
              p Es la proporción de tiempo durante la cual un sistema o equipo estuvo en condiciones de ser usado.

            .tarjeta.color-acento-botones.p-3(x="57.65%" y="40.6%" numero="")
              .h5.mb-2 Tiempo de entrega.
              p Es el cumplimiento de los plazos previstos son variables que tienen también su importancia, y para el mantenimiento, el tiempo es un factor preeminente.
          
            .tarjeta.color-acento-botones.p-3(x="80.1%" y="38.9%" numero="")
              .h5.mb-2 Mantenibilidad
              p Es la probabilidad de que una máquina, equipo o un sistema pueda ser reparado a una condición especificada en un período de tiempo dado, en tanto su mantenimiento sea realizado de acuerdo con ciertas metodologías y recursos determinados con anterioridad.


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


    h3.mb-3.titulo-imagen-izq-1 Políticas y acciones de mantenimiento:
    p.mb-4 La visión moderna del mantenimiento se centra en preservar las funciones de los activos de la empresa, cumplir las tareas que sirven para asegurar que el equipamiento puede hacer lo que le usuario desea, cuando él lo espera. 
      strong A la luz de lo anterior, se puede definir la política de mantenimiento:

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-md-12.col-lg-10
        .align-items-center.d-flex.flex-nowrap.mb-0
          img.img-auto.pr-2(src='@/assets/curso/temas/tema2/img40.svg', alt='Imagen Decorativa')
          p.mb-0 La política es una regla que especifica, dependiendo del estado de la variable, lo que hay que exactamente en una situación particular, en vista de conseguir un cierto objetivo.
        .align-items-center.d-flex.flex-nowrap.mb-0
          img.img-auto.pr-2(src='@/assets/curso/temas/tema2/img40.svg', alt='Imagen Decorativa')
          p.mb-0 En mantenimiento: es una regla que especifica que es lo que hay que hacer en una situación particular de mantenimiento para obtener el nivel deseado de eficiencia de un equipo productivo. 

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-lg-10.mx-auto
        .titulo-sexto.color-acento-botones.mb-4
          h5 Figura 2.
          span Concepto y relaciones de políticas y acciones de mantenimiento

        figure
          img(src='@/assets/curso/temas/tema2/img16.png', alt='Imagen Decorativa')

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-lg-10
        p En el siguiente esquema se pueden reconocer las distintas políticas de mantenimiento 
  
      .col-lg-10
        .tabla-a.th_red.mb-2
          table
            thead
              tr
                th Característica
                th Correctivo
                th Preventivo
                th Predictivo
                th Detectivo
            tbody
              tr
                td.text-bold Definición
                td Intervención realizada después de que se produce una falla o avería en el equipo, con el objetivo de restaurarlo a su estado operativo. Se centra en la reparación de la avería existente.
                td Intervención realizada antes de que ocurra una falla, con el objetivo de prevenirla. Se basa en la ejecución de tareas programadas para mantener el equipo en óptimas condiciones.
                td Intervención basada en la predicción de una falla potencial, utilizando técnicas de monitorización para identificar anomalías y programar la intervención antes de que ocurra la falla.
                td Intervención realizada en equipos que solo operan bajo demanda y cuyo fallo solo se detecta cuando se requiere su uso. Se basa en la inspección periódica para detectar posibles fallas.
              tr
                td.text-bold Proactividad
                td Reactivo
                td Proactivo
                td Proactivo
                td Reactivo (con chequeos periódicos)
              tr
                td.text-bold Planificación
                td Mínima, se requiere intervención inmediata
                td Alta, requiere programación detallada de tareas, adquisición de recursos y asignación de personal.
                td Alta, requiere monitoreo constante, análisis de datos, interpretación de tendencias y programación de intervenciones.
                td Media, requiere programación de chequeos periódicos y planes de contingencia.
              tr
                td.text-bold Costo Inicial
                td Bajo (solo materiales y mano de obra directamente relacionados con la reparación)
                td Medio-Alto (recursos, capacitación, implementación de programas de mantenimiento)
                td Alto (sistemas de monitoreo, sensores, software, capacitación especializada)
                td Bajo (inspecciones)
              tr
                td.text-bold Costo a Largo Plazo
                td Potencialmente alto (costos de reparación imprevista, tiempo de inactividad, posible daño a otros componentes)
                td Bajo (reduce costos de reparaciones mayores, tiempo de inactividad y pérdidas de producción)
                td Bajo (previniendo fallas costosas, maximizando la vida útil del equipo)
                td Variable, dependiendo de la frecuencia de chequeos y hallazgos en las inspecciones
              tr
                td.text-bold Riesgo de Paradas
                td Alto (paradas imprevistas frecuentes)
                td Bajo (paradas programadas y minimizadas)
                td Bajo (paradas minimizadas gracias a la predicción de fallas)
                td Medio (solo si falla durante la operación)
              tr
                td.text-bold Tiempo de Inactividad
                td Alto (reparación inmediata suele ser necesaria)
                td Bajo (planificado, tiempo de inactividad mínimo)
                td Bajo (intervenciones programadas)
                td Bajo (intervenciones programadas)
              tr
                td.text-bold Tipos de Intervención
                td Reparación de la avería, reemplazo de componentes dañados.
                td Inspección, lubricación, limpieza, ajuste, reemplazo de componentes según programa.
                td Monitoreo (vibraciones, termografía, análisis de aceite, etc.), análisis de datos, reemplazo preventivo de componentes.
                td Inspección visual, pruebas funcionales, reemplazo de componentes según necesidad.
              tr
                td.text-bold Ventajas
                td Bajo costo si se aplica correctamente, sencillo de implementar.
                td Reduce fallas, planifica el mantenimiento, mejora la calidad, la seguridad y la disponibilidad.
                td Maximiza la confiabilidad, reduce pérdidas de producción, permite análisis de fallas y optimiza el tiempo de inactividad.
                td Disponibilidad maximizada para equipos bajo demanda, reduce daños secundarios, aplicable a sistemas de seguridad.
              tr
                td.text-bold Desventajas
                td Alto riesgo de seguridad, grandes pérdidas de producción, posibles daños secundarios, poco control sobre el tiempo de la parada.
                td Costos incrementales, posibilidad de mantenimiento innecesario, riesgo de daños colaterales.
                td Costoso, requiere especialistas y tecnología avanzada. Tiempo para análisis e interpretación de datos.
                td Subjetividad en las inspecciones, complejidad, requiere personal capacitado, poco control sobre el tiempo de la parada.

          figcaption.mb-5 Fuente: Sena 2024


    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-lg-10
        .align-items-center.d-flex.flex-nowrap.mb-0
          img.img-auto.pr-2(src='@/assets/curso/temas/tema2/img39.svg', alt='Imagen Decorativa')
          h3.mb-0 Efectividad del plan de mantenimiento:
      
      .col-lg-10
        p A continuación se presenta un enfoque estructurado para evaluar y mejorar los planes de mantenimiento de componentes o sistemas. Abarca la identificación de fallas, la efectividad de las estrategias de mantenimiento y las consecuencias de las fallas. <b>Además, proporciona recomendaciones para optimizar los procedimientos de mantenimiento y minimizar riesgos operativos:</b>

      .col-lg-10
        .tabla-a.th_red.mb-2
          table
            thead
              tr
                th Paso
                th Descripción
            tbody
              tr
                td.text-bold 1. Identificación de Modos de Falla
                td 
                  span Identifica los modos de falla asociados con el componente o sistema.
              tr
                td.text-bold 2. Degradación por Edad
                td 
                  span Examina si existe una tasa significativa de degradación por edad, si los materiales están agotados, y si los modos de falla están ocurriendo actualmente. <br>
                  span Capturar y mantener datos históricos ayuda a responder estas preguntas.
              tr
                td(rowspan="5").text-bold 3. Fallas Funcionales
                td 
                  span Verificar si la falla funcional es evidente para el operador. Determine qué tipos de tareas se utilizan para identificar la falla:
              tr
                td  
                  span Mantenimiento periódico: Tareas sin considerar la condición del equipo.
              tr
                td  
                  span Mantenimiento por condición: Test o inspecciones según la condición del equipo.
              tr
                td  
                  span Ingeniería de confiabilidad: Uso de mantenimiento para detectar fallas no observadas.
              tr
                td  
                  span Identifica y mide los parámetros que reflejan el estado del sistema, como las vibraciones, y define tolerancias aceptables.
              tr
                td(rowspan="4").text-bold 4. Efectividad del Plan de Mantenimiento
                td 
                  span Evalúa la efectividad actual del mantenimiento. Identifica métodos para mantener efectividad:
              tr
                td
                  span Mantenimiento periódico: Aumenta la probabilidad de falla tras el uso y restaura al estado original.
              tr
                td
                  span Mantenimiento por condición: Características del modo de falla deben ser medibles y ofrecer amplio tiempo para intervención.
              tr
                td
                  span Ingeniería de confiabilidad: Falla no es evidente y no existen tareas preventivas. Modifica o elimina tareas no efectivas.
              tr
                td(rowspan="4").text-bold 5. Consecuencias de la Falla
                td 
                  span Identifica consecuencias relacionadas con seguridad, regulación, producción o costo, y si las tareas de mantenimiento agregan valor:
              tr
                td   
                  span Seguridad o regulación: Reducción de probabilidad de falla a nivel aceptable.
              tr
                td   
                  span Producción: Reducción del riesgo de falla a nivel aceptable.
              tr
                td   
                  span Costo: Costo de tareas preventivas menor que el costo de reparación y pérdida de capacidad.
              tr
                td(rowspan="9").text-bold 6. Recomendaciones para Cambios
                td 
                  span <b>a.</b> Realiza las siguientes acciones según los resultados del análisis:
              tr
                td    
                  span <b>b.</b> Mantener procedimiento si es efectivo.
              tr
                td    
                  span <b>c.</b> Eliminar si es inefectivo.
              tr
                td    
                  span <b>d.</b> Modificar para efectividad.
              tr
                td    
                  span <b>e.</b> Cambiar la frecuencia de pruebas.
              tr
                td    
                  span <b>f.</b> Añadir un nuevo procedimiento.
              tr
                td    
                  span <b>g.</b> Cambiar forma de medir deterioro.
              tr
                td    
                  span <b>h.</b> Combinar procedimientos.
              tr
                td    
                  span <b>i.</b> Otras sugerencias.
                

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-lg-10
        .row
          .col-md-6.col-lg-3
            figure
              img(src='@/assets/curso/temas/tema2/img17.png', alt='Imagen Decorativa')
          .col-lg-9
            p La gestión eficiente del mantenimiento industrial es crucial para la productividad, la rentabilidad y la seguridad de cualquier operación manufacturera. Este proceso es una secuencia cuidadosamente orquestada de pasos que abarcan desde la identificación proactiva de necesidades hasta la evaluación exhaustiva de los resultados. 
            p Desde la detección temprana de posibles fallos hasta la implementación de acciones correctivas, cada etapa juega un rol vital en la optimización de los recursos, la maximización de la vida útil del equipo y la minimización de los tiempos de inactividad. A continuación, se detalla un análisis paso a paso de este proceso, destacando las mejores prácticas para asegurar un mantenimiento industrial eficiente y efectivo.
    
    .row.justify-content-center
      .col-lg-10
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row
            h3 I. Identificación de Necesidades (Requerimiento)
            .col-lg-12.mb-3
              .row.align-items-center
                .col-lg-7  
                  p.mb-3 Esta etapa crucial inicia el proceso de mantenimiento. Se determina la demanda de servicios de mantenimiento a través de múltiples fuentes, identificando qué equipos o sistemas requieren atención y el tipo de mantenimiento necesario.
                .col-md-6.col-lg-5
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/tema2/img18.png', alt='').img125

            .col-lg-12
              p <b>Recopilación de datos:</b> Consultar manuales del fabricante, registros históricos de mantenimiento, reportes de operadores (quejas, sugerencias), inspecciones regulares o programadas, análisis de datos históricos (identificación de tendencias y problemas recurrentes), políticas de abastecimiento de materiales y repuestos, evaluación de actualizaciones de equipos. Priorización de necesidades.

          .row
            h3.text-start II. Planificación del Mantenimiento
            .col-lg-12.mb-3
              .row.align-items-center
                .col-md-6.col-lg-5
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/tema2/img19.png', alt='').img125
                .col-lg-7  
                  p.mb-3.text-start Se define qué tareas de mantenimiento se realizarán para satisfacer las necesidades identificadas en la etapa anterior. Se considera la disponibilidad de recursos (personal, materiales, tiempo y presupuesto) para asegurar la compatibilidad entre los requerimientos y la capacidad de ejecución.

            .col-lg-12
              p.text-start <b>Creación de un listado detallado de requerimientos de mantenimiento.</b> Análisis exhaustivo de planificaciones anteriores, incluyendo la identificación de éxitos, fracasos y áreas de mejora (retroalimentación). Definición y seguimiento de indicadores clave de rendimiento (KPIs) para medir la eficiencia del mantenimiento. Asignación de recursos (personal, materiales, presupuesto).

          .row
            h3 III. Programación del Mantenimiento
            .col-lg-12.mb-3
              .row.align-items-center
                .col-lg-7  
                  p.mb-3 Se crea un programa detallado que especifica las actividades de mantenimiento, asignando recursos, tiempos específicos y prioridades a cada tarea. Se busca optimizar la eficiencia y minimizar el tiempo de inactividad.
                .col-md-6.col-lg-5
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/tema2/img20.png', alt='').img125

            .col-lg-12
              p <b>Elaboración de un cronograma preciso.</b> Asignación específica de personal y equipos a cada tarea. Definición clara de los procedimientos a seguir para cada tarea de mantenimiento. Obtención de los materiales y herramientas necesarios. Revisión y análisis de programas de mantenimiento anteriores, e incorporación de mejoras e innovaciones.

          .row
            h3.text-start IV. Ejecución del Mantenimiento
            .col-lg-12.mb-3
              .row.align-items-center
                .col-md-6.col-lg-5
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/tema2/img21.png', alt='').img125
                .col-lg-7  
                  p.mb-3.text-start Se llevan a cabo las tareas de mantenimiento programadas. Se verifica el correcto uso de herramientas y materiales, se documentan las acciones realizadas y se resuelven los problemas imprevistos que puedan surgir durante la ejecución. Se coordina la ejecución con la producción para minimizar las interrupciones.

            .col-lg-12
              p.text-start <b>Distribución eficiente del trabajo</b> entre el personal de mantenimiento y coordinación con el área de producción para determinar el mejor momento para la intervención. Monitoreo constante del progreso del trabajo. Movilización de recursos (personal, herramientas, repuestos). Ejecución precisa de las tareas según los procedimientos establecidos. Documentación exhaustiva de todas las acciones realizadas. Resolución efectiva de problemas imprevistos.

          .row
            h3 V. Finalización y Entrega
            .col-lg-12.mb-3
              .row.align-items-center
                .col-lg-7  
                  p.mb-3 Una vez completadas las tareas, se realizan pruebas exhaustivas para asegurar la confiabilidad y el correcto funcionamiento del equipo antes de ser devuelto al operador.
                .col-md-6.col-lg-5
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/tema2/img22.png', alt='').img125

            .col-lg-12
              p <b>Realización de pruebas</b> de funcionamiento en vacío y bajo carga. Medición de variables clave para asegurar que el equipo cumple con los estándares de rendimiento. Análisis del comportamiento del equipo por personal experto. Diseño y realización de experimentos para verificar la eficiencia del equipo. Ajustes y calibraciones finales. Documentación de resultados de las pruebas y ajustes realizados. Entrega formal del equipo al operador.
                
          .row
            h3.text-start VI. Control, Evaluación y Mejora Continua
            .col-lg-12.mb-3
              .row.align-items-center
                .col-md-6.col-lg-5
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/tema2/img23.png', alt='').img125
                .col-lg-7  
                  p.mb-3.text-start Se compara el trabajo realizado con lo planificado inicialmente. Se analizan las desviaciones, se identifican las causas raíz de cualquier problema y se implementan acciones correctivas para mejorar la eficiencia y la eficacia del proceso de mantenimiento en futuras intervenciones.

            .col-lg-12
              p.text-start <b>Recopilación de datos sobre el trabajo realizado</b> (tiempo, costo, materiales utilizados, etc.). Comparación de los datos con el plan inicial. Análisis de indicadores de desempeño para identificar áreas de mejora. Identificación de las causas raíz de cualquier desviación o problema. Implementación de acciones correctivas para prevenir problemas futuros. Documentación de los resultados de la evaluación y acciones correctivas. Mejora continua del proceso.


    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-lg-10.mb-3
        .align-items-center.d-flex.flex-nowrap.mb-0
          img.img-auto.pr-2(src='@/assets/curso/temas/tema2/img39.svg', alt='Imagen Decorativa')
          h3.mb-0 El ciclo virtuoso:

      .col-lg-10.mb-3
        p.mb-2 Un ciclo virtuoso es un conjunto de eventos que se refuerza a través de un circuito de retroalimentación. Un ciclo virtuoso tiene resultados favorables. Un ciclo virtuoso puede transformar en un ciclo vicioso, si se tiene en cuenta la retroalimentación negativa final.
        p Ambos círculos son complejos de eventos con ninguna tendencia hacia el equilibrio (al menos en el corto plazo). Ambos sistemas de eventos tienen ciclos de retroalimentación en el que cada iteración del ciclo refuerza la primera (retroalimentación positiva). Estos ciclos se mantendrán en la dirección de su impulso hasta que un factor externo interviene y rompe el ciclo.

      .col-lg-10.mb-3
        h4.mb-3 A continuación, algunos de los principales elementos del ciclo virtuoso:

        ImagenInfografica.color-acento-contenido
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img24.png', alt='Texto que describa la imagen')

          .tarjeta.bg-white.p-3(x="5.7%" y="47.2%" numero="1")
            .h5.mb-2 Planificación y estrategia.
            p.mb-2  <b>Análisis de la Situación Actual:</b> Evaluar el estado actual de los procesos, equipos, recursos y resultados. Identificar áreas de mejora y problemas existentes.
            p <b>Definición de Objetivos:</b> Establecer metas claras y alcanzables basadas en el diagnóstico inicial, como mejorar la eficiencia, reducir costos, o aumentar la calidad.

          .tarjeta.bg-white.p-3(x="26%" y="30%" numero="2")
            .h5.mb-2 Planificación y estrategia.
            p.mb-2  <b>Desarrollo de Estrategias: </b> Crear un plan para abordar las áreas identificadas para la mejora. Esto puede incluir la implementación de nuevas tecnologías, cambios en los procesos o capacitación del personal.
            p <b>Asignación de Recursos:</b>  Determinar los recursos necesarios, como personal, tecnología, y materiales, para llevar a cabo las estrategias planificadas.

          .tarjeta.bg-white.p-3(x="41%" y="54%" numero="3")
            .h5.mb-2 Implementación
            p.mb-2  <b>Ejecutar el Plan:</b>  Poner en práctica las estrategias y mejoras diseñadas. Esto puede implicar la instalación de nuevos equipos, la modificación de procesos o la formación de los empleados.
            p <b>Monitoreo y Control:</b>  Supervisar la implementación para asegurar que se realice según lo planificado y que los cambios estén produciendo los resultados esperados.

          .tarjeta.bg-white.p-3(x="52%" y="29%" numero="4")
            .h5.mb-2 Evaluación de resultados.
            p.mb-2  <b>Medición del Rendimiento:</b>  Evaluar el impacto de las mejoras implementadas. Esto se realiza a través de indicadores clave de rendimiento (KPI) y otros métodos de evaluación.
            p <b>Análisis de Desviaciones:</b> Identificar cualquier desviación de los objetivos y entender las razones detrás de cualquier problema o desafío.

          .tarjeta.bg-white.p-3(x="58.7%" y="65.2%" numero="5")
            .h5.mb-2 Retroalimentación y ajuste.
            p.mb-2  <b>Revisión y Ajuste:</b>  Basado en los resultados evaluados, realizar ajustes y mejoras adicionales. Esto puede implicar corregir problemas, ajustar estrategias, o implementar nuevas medidas para optimizar aún más los procesos.
            p <b>Lecciones Aprendidas:</b>  Documentar y compartir las lecciones aprendidas para aplicar en futuros ciclos.

          .tarjeta.bg-white.p-3(x="76.7%" y="35.2%" numero="6")
            .h5.mb-2 Consolidación y Estandarización
            p.mb-2  <b>Estandarización de Mejores Prácticas:</b>  Asegurar que las mejoras efectivas se integren en los procedimientos estándar de operación.
            p <b>Consolidación de Cambios:</b> Integrar los cambios en la cultura y las prácticas operativas de la organización para mantener los beneficios alcanzados.
          .tarjeta.bg-white.p-3(x="86.7%" y="72.2%" numero="7")
            .h5.mb-2 Innovación continua.
            p.mb-2  <b>Fomentar la Innovación:</b>   Promover un entorno en el que se busque continuamente nuevas formas de mejorar y optimizar. Esto incluye mantenerse al día con las tendencias tecnológicas y las mejores prácticas de la industria
            p <b>Repetición del Ciclo:</b>  Repetir el ciclo virtuoso con una nueva ronda de diagnóstico y evaluación, continuando así el proceso de mejora continua.

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-lg-10.mb-3
        .align-items-center.d-flex.flex-nowrap.mb-0
          img.img-auto.pr-2(src='@/assets/curso/temas/tema2/img39.svg', alt='Imagen Decorativa')
          h3.mb-0 Herramientas para el control de calidad y mejoramiento del mantenimiento:

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-lg-10.mb-3
        .row
          .col-lg-10
            p.mb-3 El desarrollo de un sistema de control de calidad para el mantenimiento es esencial para asegurar alta calidad de la reparación,  afinar  la  estandarización,  maximizar  la disponibilidad, extender la vida económica del activo y asegurar una alta eficiencia y tasa de producción del equipo. 
            p La responsabilidad del grupo de control de calidad incluye el desarrollo de procedimientos para pruebas, inspecciones y ejecución del trabajo, documentación, seguimientos o monitoreo, análisis de las deficiencias, e identificación de las necesidades de entrenamiento a partir del análisis de los reportes de calidad. 
          .col-lg-2
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema2/img25.png', alt='').img125
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down").ordenar_tarjeta
      .col-lg-10.mb-3
        .row
          .col-md-6.col-lg-7
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema2/img26.png', alt='').img125
          .col-lg-5.pos_2
            p.mb-3 Una organización para el mantenimiento no puede olvidar que su participación en el logro de las metas de la empresa es crítica ya que su foco es la alta disponibilidad de sus activos. Por tanto, debe vincular sus objetivos con los de la empresa y entregarlos con la más alta calidad.
            p Hay que tener mucho cuidado en la recolección de los datos para que sean compatibles con el fin que se persigue y que además sean completos para la aplicación de la herramienta escogida. 

    
    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-lg-10.mb-3
        h4  Una guía para recolectar datos: 
      
      .col-lg-10.mb-3
        .row.mb-5.justify-content-center
          .col-xl.col-lg-4.col-md-6.col-12.d-flex.mb-3
            .crd.crd--grayGrad(data-aos="flip-left")
              .bottomCircle
                p.mb-0.text-danger
                  strong 01
                figure
                  img.img-auto.mx-auto.mb-3(src='@/assets/curso/temas/tema2/img27.svg', alt='Imagen Decorativa')
                p.text-center.mb-0 Planifique todo el proceso de recolección de datos desde un comienzo.

          
          .col-xl.col-lg-4.col-md-6.col-12.d-flex.mb-3
            .crd.crd--grayGrad(data-aos="flip-left")
              .bottomCircle
                p.mb-0.text-danger
                  strong 02
                figure
                  img.img-auto.mx-auto.mb-3(src='@/assets/curso/temas/tema2/img28.svg', alt='Imagen Decorativa')
                p.text-center.mb-0 Aclare el propósito de la recolección de datos. 
            
          .col-xl.col-lg-4.col-md-6.col-12.d-flex.mb-3
            .crd.crd--grayGrad(data-aos="flip-left")
              .bottomCircle
                p.mb-0.text-danger
                  strong 03
                figure
                  img.img-auto.mx-auto.mb-3(src='@/assets/curso/temas/tema2/img27.svg', alt='Imagen Decorativa')
                p.text-center.mb-0 Especifique claramente los datos necesitados. 
            
          .col-xl.col-lg-4.col-md-6.col-12.d-flex.mb-3
            .crd.crd--grayGrad(data-aos="flip-left")
              .bottomCircle
                p.mb-0.text-danger
                  strong 04
                figure
                  img.img-auto.mx-auto.mb-3(src='@/assets/curso/temas/tema2/img28.svg', alt='Imagen Decorativa')
                p.text-center.mb-0 Use las técnicas correctas de ejemplificación.
            
          .col-xl.col-lg-4.col-md-6.col-12.d-flex.mb-3
            .crd.crd--grayGrad(data-aos="flip-left")
              .bottomCircle
                p.mb-0.text-danger
                  strong 05
                figure
                  img.img-auto.mx-auto.mb-3(src='@/assets/curso/temas/tema2/img27.svg', alt='Imagen Decorativa')
                p.text-center.mb-0 Diseñe los requerimientos de listas de chequeos por anticipado. 

      .col-lg-10.mb-3
        p La obtención de datos debe ser un proceso continuo y debe ser parte del sistema de información. Como ser detenciones del equipo, productividad del trabajo, costos de mantenimiento, costo de materiales y repuestos, causas de las fallas, tiempo de reparación, ordenes atrasadas, entre otros datos. 


    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-down")
      .col-lg-10.mb-3
        .align-items-center.d-flex.flex-nowrap.mb-0
          img.img-auto.pr-2(src='@/assets/curso/temas/tema2/img39.svg', alt='Imagen Decorativa')
          h3.mb-0 Lista de chequeos: 

      .col-lg-10.mb-3
        p Una lista de chequeo es un conjunto simple de instrucciones usados en la recolección de datos, donde los datos pueden ser compilados fácilmente usados y analizados automáticamente.
    
    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-down")
      .col-lg-10.mb-3
        h4  Las listas en mantenimiento pueden ser usadas para: 
      
      .col-lg-10.mb-3
        .row.mb-5.justify-content-center
          .col-xl.col-lg-3.col-md-6.col-12.mb-3
            .crd.crd--grayGrad(data-aos="flip-left")
              .bottomCircle
                p.mb-0
                  strong 01
                figure
                  img.img-auto.mx-auto.mb-3(src='@/assets/curso/temas/tema2/img27.svg', alt='Imagen Decorativa')
                p.text-center.mb-0  Recolectar datos para construir un histograma. 
          
          .col-xl.col-lg-3.col-md-6.col-12.mb-3
            .crd.crd--grayGrad(data-aos="flip-left")
              .bottomCircle
                p.mb-0
                  strong 02
                figure
                  img.img-auto.mx-auto.mb-3(src='@/assets/curso/temas/tema2/img28.svg', alt='Imagen Decorativa')
                p.text-center.mb-0  Ejecutar tareas de mantenimiento. 
            
          .col-xl.col-lg-3.col-md-6.col-12.mb-3
            .crd.crd--grayGrad(data-aos="flip-left")
              .bottomCircle
                p.mb-0
                  strong 03
                figure
                  img.img-auto.mx-auto.mb-3(src='@/assets/curso/temas/tema2/img27.svg', alt='Imagen Decorativa')
                p.text-center.mb-0  Preparar antes y cerrar después los trabajos de mantenimiento. 
            
          .col-xl.col-lg-3.col-md-6.col-12.mb-3
            .crd.crd--grayGrad(data-aos="flip-left")
              .bottomCircle
                p.mb-0
                  strong 04
                figure
                  img.img-auto.mx-auto.mb-3(src='@/assets/curso/temas/tema2/img28.svg', alt='Imagen Decorativa')
                p.text-center.mb-0  Revisión de las partes y piezas. 
            
          .col-xl.col-lg-3.col-md-6.col-12.mb-3
            .crd.crd--grayGrad(data-aos="flip-left")
              .bottomCircle
                p.mb-0
                  strong 05
                figure
                  img.img-auto.mx-auto.mb-3(src='@/assets/curso/temas/tema2/img27.svg', alt='Imagen Decorativa')
                p.text-center.mb-0  Planificación de los trabajos de mantenimiento. 
            
          .col-xl.col-lg-3.col-md-6.col-12.mb-3
            .crd.crd--grayGrad(data-aos="flip-left")
              .bottomCircle
                p.mb-0
                  strong 06
                figure
                  img.img-auto.mx-auto.mb-3(src='@/assets/curso/temas/tema2/img28.svg', alt='Imagen Decorativa')
                p.text-center.mb-0  Inspección de los equipos. 
            
          .col-xl.col-lg-3.col-md-6.col-12.mb-3
            .crd.crd--grayGrad(data-aos="flip-left")
              .bottomCircle
                p.mb-0
                  strong 07
                figure
                  img.img-auto.mx-auto.mb-3(src='@/assets/curso/temas/tema2/img27.svg', alt='Imagen Decorativa')
                p.text-center.mb-0  Auditar un departamento de mantenimiento. 
            
          .col-xl.col-lg-3.col-md-6.col-12.mb-3
            .crd.crd--grayGrad(data-aos="flip-left")
              .bottomCircle
                p.mb-0
                  strong 08
                figure
                  img.img-auto.mx-auto.mb-3(src='@/assets/curso/temas/tema2/img28.svg', alt='Imagen Decorativa')
                p.text-center.mb-0  Chequear las causas de un defecto. 
            
          .col-xl.col-lg-3.col-md-6.col-12.mb-3
            .crd.crd--grayGrad(data-aos="flip-left")
              .bottomCircle
                p.mb-0
                  strong 09
                figure
                  img.img-auto.mx-auto.mb-3(src='@/assets/curso/temas/tema2/img27.svg', alt='Imagen Decorativa')
                p.text-center.mb-0  Diagnosticar los defectos de una máquina. 
            
          .col-xl.col-lg-3.col-md-6.col-12.mb-3
            .crd.crd--grayGrad(data-aos="flip-left")
              .bottomCircle
                p.mb-0
                  strong 10
                figure
                  img.img-auto.mx-auto.mb-3(src='@/assets/curso/temas/tema2/img28.svg', alt='Imagen Decorativa')
                p.text-center.mb-0  Recolectar datos para efectuar un estudio de métodos. 

      .col-lg-10.mb-3
        p Hay muchas formas de listas de chequeos, desde un conjunto de simples pasos hasta una larga auditoría. 

    .row.mb-0
      .col-10.mx-auto
        .titulo-sexto.color-acento-botones.mb-4
          h5 Tabla 3.
          span Ejemplo Lista de chequeo para el mantenimiento 

        .tabla-a.th_red.mb-2
          //- Tabla 1 
          h4.mb-3 Despaletizador - 20.000 Ciclos
          table
            thead
              tr
                th Ítem
                th Instrucción
                th Revisado
                th Fecha
                th Mantenimiento
              
            tbody
              tr
                td Actuadores y Mangueras
                td Inspeccionar actuadores y mangueras en busca de fugas
                td 
                td 
                td Revisar válvulas, conexiones y mangueras en busca de fugas; reparar o reemplazar según sea necesario.
          figcaption.mb-5 Fuente: Sena 2024
              
          //- Tabla 2 
          h4.mb-3 Despaletizador - 100.000 Ciclos
          table
            thead
              tr
                th Ítem
                th Instrucción
                th Revisado
                th Fecha
                th Mantenimiento
              
            tbody
              tr
                td Accionamiento del Despaletizador
                td Inspeccionar el desgaste y la tensión de la cadena de accionamiento
                td 
                td 
                td Buscar desgaste en los rodillos y los eslabones de la cadena de accionamiento y tensarla para que no tenga más de 1/2" de holgura.
          figcaption.mb-5 Fuente: Sena 2024
              
          //- Tabla 3 
          h4.mb-3 Despaletizador - 400.000 Ciclos
          table
            thead
              tr
                th Ítem
                th Instrucción
                th Revisado
                th Fecha
                th Mantenimiento
              
            tbody
              tr
                td Carro de Empuje
                td Revisar los rodillos en busca de desgaste y ajustarlos
                td 
                td 
                td Observar los rodillos en busca de zonas planas o señales de desgaste en los rodamientos; ajustarlos para que haya un ligero arrastre cuando estén apretados.
              
              tr
                td Brazo de Accionamiento del Carro
                td Inspeccionar los rodamientos y el rodillo de accionamiento
                td 
                td 
                td Revisar los rodamientos del brazo de accionamiento del carro en busca de desgaste; revisar el rodillo en busca de señales de desgaste y agarrotamiento.
              
              tr
                td Accionamiento del Despaletizador
                td Engrasar los rodamientos del eje de accionamiento
                td 
                td 
                td Engrasar los rodamientos del eje de accionamiento, pero no engrasar en exceso; antes de engrasar, revisar los rodamientos en busca de desgaste.
              
              tr
                td Plataforma Giratoria del Despaletizador
                td Revisar los rodillos de soporte en busca de desgaste y ajustarlos
                td 
                td 
                td Asegurarse de que los rodillos de soporte estén ajustados para que haya un ligero arrastre al girar; buscar desgaste en los rodamientos.
              
              tr
                td Plataforma Giratoria del Despaletizador
                td Revisar los componentes de accionamiento en busca de desgaste y ajustarlos
                td 
                td 
                td Revisar todos los componentes de accionamiento en busca de desgaste y realizar los ajustes necesarios.
              
              tr
                td Elevador de Empuje
                td Engrasar los rodamientos del elevador y ajustarlos
                td 
                td 
                td Engrasar los cojinetes elevadores, pero no engrasar en exceso; revisar en busca de desgaste antes de engrasar.
              
              tr
                td Alineadores Laterales
                td Revisar los casquillos de la barra guía de alineación en busca de desgaste
                td 
                td 
                td Revisar las varillas guía de alineación en busca de señales de desgaste; reemplazar si es necesario.
          figcaption.mb-5 Fuente: Sena 2024
              

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-lg-10.mb-3
        .align-items-center.d-flex.flex-nowrap.mb-0
          img.img-auto.pr-2(src='@/assets/curso/temas/tema2/img39.svg', alt='Imagen Decorativa')
          h3.mb-0 Histograma de frecuencia relativa:

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-down")
      .col-lg-10.mb-2
        p La gestión eficiente del mantenimiento industrial requiere una comprensión profunda de la fiabilidad de los equipos. A diferencia de lo que se podría suponer, las piezas de un equipo, incluso siendo similares, no presentan una vida útil idéntica. No todas fallarán al mismo tiempo ni tras el mismo número de horas de funcionamiento. Esta variabilidad es fundamental para una planificación efectiva del mantenimiento.
        
      .col-lg-10
        .row
          .col-md-6.col-lg-7.mb-2
            figure
              img.img-auto(src='@/assets/curso/temas/tema2/img29.png', alt='Imagen Decorativa')
          .col-md-12.col-lg-5.mb-2
            p Para cuantificar esta variabilidad y predecir la probabilidad de fallo, se utiliza la construcción de un histograma de frecuencia de fallas. En este histograma, el eje horizontal representa el tiempo de funcionamiento del equipo (o de un componente específico), y el eje vertical representa la frecuencia con la que se producen las fallas en cada intervalo de tiempo. Cada barra del histograma representa un intervalo de tiempo, y su altura indica la cantidad de fallas ocurridas dentro de ese intervalo. El área total bajo la curva del histograma representa la totalidad de las fallas observadas.

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-lg-10.mb-3
        p La probabilidad de que una falla ocurra dentro de un intervalo de tiempo específico (tᵢ₋₁ a tᵢ) se puede calcular multiplicando la frecuencia relativa de fallas en ese intervalo (obtenida del histograma) por la amplitud del intervalo. La frecuencia relativa, o ordinal, se calcula dividiendo el número de fallas en un intervalo específico por el número total de fallas observadas.

      .col-lg-10.mb-3
        p Es importante destacar que la suma de las probabilidades de fallo en todos los intervalos de tiempo considerados (desde el tiempo inicial t₀ hasta el tiempo final tₙ) debe ser igual a 1, lo que representa la certeza de que alguna falla ocurrirá en algún momento.

    .row.justify-content-center.align-items-center.mb-2
      .col-lg-10.mb-3
        .bloque-texto-g.bloque-texto-g.bg02.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img30.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Para obtener resultados confiables, es crucial que el número de observaciones (cantidad de fallas registradas) sea suficiente para que la distribución de frecuencias se ajuste a los modelos probabilísticos apropiados. Este número se determina mediante criterios estadísticos, garantizando así la validez del análisis.

      .col-lg-10.mb-3
        p Esta metodología, basada en datos empíricos, proporciona una estimación precisa de la probabilidad de fallo en diferentes intervalos de tiempo. Esta información resulta esencial para optimizar las estrategias de mantenimiento preventivo y predictivo, lo que permite reducir los tiempos de inactividad, minimizar los costos de reparación y mejorar la eficiencia general de la operación.

    .row.justify-content-center.align-items-center.mb-2
      .col-lg-10.mb-3
        .align-items-center.d-flex.flex-nowrap.mb-0
          img.img-auto.pr-2(src='@/assets/curso/temas/tema2/img39.svg', alt='Imagen Decorativa')
          h3.mb-0 Función densidad de probabilidad: 

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        p.mb-3 En los estudios de mantenimiento se tiende a usar la función de densidad de probabilidad (f(t)) más bien que los histogramas de frecuencia relativa. Esto porque: 
        .row.mb-3.justify-content-center
          .col-xl.col-lg-4.col-md-6.col-12.mb-3
            .crd.crd--grayGrad(data-aos="flip-left")
              .bottomCircle
                p.mb-0
                  strong.text-danger 01
                figure
                  img.img-auto.mx-auto.mb-3(src='@/assets/curso/temas/tema2/img28.svg', alt='Imagen Decorativa')
                p.text-center.mb-0 La variable para modelar como el tiempo para la falla es una variable continua. 
          
          .col-xl.col-lg-4.col-md-6.col-12.mb-3
            .crd.crd--grayGrad(data-aos="flip-left")
              .bottomCircle
                p.mb-0
                  strong.text-danger 02
                figure
                  img.img-auto.mx-auto.mb-3(src='@/assets/curso/temas/tema2/img27.svg', alt='Imagen Decorativa')
                p.text-center.mb-0 Estas funciones son más fáciles de manipular. 
            
          .col-xl.col-lg-4.col-md-6.col-12.mb-3
            .crd.crd--grayGrad(data-aos="flip-left")
              .bottomCircle
                p.mb-0
                  strong.text-danger 03
                figure
                  img.img-auto.mx-auto.mb-3(src='@/assets/curso/temas/tema2/img28.svg', alt='Imagen Decorativa')
                p.text-center.mb-0 Da una mayor claridad para el entendimiento de la verdadera distribución de fallas. 
            
          .col-xl.col-lg-4.col-md-6.col-12.mb-3
            .crd.crd--grayGrad(data-aos="flip-left")
              .bottomCircle
                p.mb-0
                  strong.text-danger 04
                figure
                  img.img-auto.mx-auto.mb-3(src='@/assets/curso/temas/tema2/img27.svg', alt='Imagen Decorativa')
                p.text-center.mb-0 Son similares a los histogramas excepto que es una curva continua. 
            
          .col-xl.col-lg-4.col-md-6.col-12.mb-3
            .crd.crd--grayGrad(data-aos="flip-left")
              .bottomCircle
                p.mb-0
                  strong.text-danger 05
                figure
                  img.img-auto.mx-auto.mb-3(src='@/assets/curso/temas/tema2/img28.svg', alt='Imagen Decorativa')
                p.text-center.mb-0 La probabilidad (riesgo) de que ocurra una falla en el periodo ti y tj es el área sombrada bajo la curva. 
                
    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-lg-10.mb-3
        .align-items-center.d-flex.flex-nowrap.mb-0
          img.img-auto.pr-2(src='@/assets/curso/temas/tema2/img39.svg', alt='Imagen Decorativa')
          h3.mb-0 Otros elementos básicos para el análisis: 

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-lg-10.mb-3
        p A continuación, algunos de los principales elementos para tener en cuenta para el análisis de un proceso de mantenimiento de gestión industrial: 

      .col-lg-10.mb-3
        .tarjeta.tarjeta--azul.p-4
          SlyderA(tipo="b").slyder_1
            .row.align-items-center
              .col-md-12.col-lg-6.mb-4.mb-md-0
                h4.mb-2 Materiales.
                lista.ul-lista--color
                  li 
                    | Materia prima defectuosa 
                  li 
                    | Procedimiento equivocado para el trabajo (proceso, -máquina, personal) 
                  li 
                    | Falta de materia prima. 
              .col-md-6.col-lg-6
                figure
                  img(src='@/assets/curso/temas/tema2/img31.png', alt='Texto que describa la imagen')
            
            .row.align-items-center
              .col-md-12.col-lg-6.mb-4.mb-md-0
                h4.mb-2 Máquina/equipamiento. 
                lista.ul-lista--color
                  li
                    | Selección incorrecta de la herramienta. 
                  li
                    | Mantenimiento o diseño deficiente. 
                  li
                    | Ubicación incorrecta del equipo o de las herramientas. 
                  li
                    | Equipo o herramientas defectuosas. 
              .col-md-6.col-lg-6
                figure
                  img(src='@/assets/curso/temas/tema2/img32.png', alt='Texto que describa la imagen')
            
            .row.align-items-center
              .col-md-12.col-lg-6.mb-4.mb-md-0
                h4.mb-2 Medio ambiente. 
                lista.ul-lista--color
                  li
                    | Lugar de trabajo desordenado. 
                  
                  li
                    | Diseño de puestos de trabajo o layout de planta no adecuados 
                  
                  li
                    | Superficies en mal estado de conservación. 
                  
                  li
                    | Exigencias físicas de la tarea no conformes. 
                  
                  li
                    | Fuerzas de la naturaleza. 
              .col-md-6.col-lg-6
                figure
                  img(src='@/assets/curso/temas/tema2/img33.png', alt='Texto que describa la imagen')
            
            .row.align-items-center
              .col-md-12.col-lg-6.mb-4.mb-md-0
                h4.mb-2 Administración.
                lista.ul-lista--color
                  li
                    | Participación pobre de la gerencia. 
                  li
                    | La falta de atención por la tarea.  
                  li
                    | Peligros de las tareas no vigilado adecuadamente.
                  li
                    | Otros (bromas, falta de atención).  
                  li
                    | Trabajo estresante. 
                  li
                    | Falta de procedimientos. 
              .col-md-6.col-lg-6
                figure
                  img(src='@/assets/curso/temas/tema2/img34.png', alt='Texto que describa la imagen')
            
            .row.align-items-center
              .col-md-12.col-lg-6.mb-4.mb-md-0
                h4.mb-2 Métodos.
                lista.ul-lista--color
                  li 
                    | Ningún o procedimientos pobres. 
                  li 
                    | Prácticas que no son las mismas que están escritas en los procedimientos. 
                  li 
                    | Comunicación pobre. 

              .col-md-6.col-lg-6
                figure
                  img(src='@/assets/curso/temas/tema2/img35.png', alt='Texto que describa la imagen')
            
            .row.align-items-center
              .col-md-12.col-lg-6.mb-4.mb-md-0
                h4.mb-2 Sistema de administración.
                lista.ul-lista--color
                  li
                    | Falta de entrenamiento o educación. 
                  li
                    | Bajo involucramiento del personal. 
                  li
                    | Bajo reconocimiento del peligro. 
                  li
                    | Peligros previamente identificados que no fueron eliminados.
              .col-md-6.col-lg-6
                figure
                  img(src='@/assets/curso/temas/tema2/img36.png', alt='Texto que describa la imagen')
            
            .row.align-items-center
              .col-md-12.col-lg-6.mb-4.mb-md-0
                h4.mb-2 Administración.
                lista.ul-lista--color
                  li
                    | Es la distribución de frecuencias de un atributo ordenados por tamaño de la frecuencia. 
                  li
                    | Ayuda a definir prioridades para que el curso de las acciones sea más efectivo. 
                  li
                    | Categorías incluidas: 
                  li
                    | Clase A usualmente contiene el 20% del factor (causa) que están causando el 75% al 80% de los problemas. 
                  li
                    | Clase B contiene alrededor del 20% del factor que causa entre el 15% al 20% de los problemas. 
                  li
                    | Clase C contiene el resto de los factores los cuales son muchos. 
              .col-md-6.col-lg-6
                figure
                  img(src='@/assets/curso/temas/tema2/img37.png', alt='Texto que describa la imagen')

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
