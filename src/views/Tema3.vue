<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1(data-aos="fade-right") Actividades de mantenimiento.
    
    //- .row.mb-5.align-items-center
    //-   .col-lg-8.col-md-12(data-aos="fade-left")
    //-     h3.red_gear.mb-4 Métodos CPM y PERT:
    //-     .cajon.color-acento-contenido.p-4.mb-3
    //-       p.mb-0 Existen diversos métodos y operaciones de análisis de los diversos problemas que debe afrontar el departamento de mantenimiento de una empresa al tiempo que profundizará en las soluciones a través del uso de estrategias claves a través de la organización de las actividades y el dominio de tablas y matrices de tiempos.
    //-     p La implementación de los diversos métodos de mantenimiento como: método de la ruta crítica (CPM) y el método PERT (Program Evaluation and Review Technique) crean responsabilidades compartidas tanto para el equipo de mantenimiento como para el equipo de producción de una empresa. Esto unido a una lista de actividades y manejo de matrices y tablas de tiempos ofrecen una ventaja de la empresa y sus integrantes en el entorno competitivo regional y nacional.
    //-   .col-lg-4.col-md-8.mx-auto.mb-3(data-aos="fade-right")
    //-     figure
    //-       img(src='@/assets/curso/temas/tema3/img_01.png', alt='Imagen Decorativa')
     
    //- .bloque-texto-g.bg05.p-3.p-sm-4.p-md-5.mb-5
    //-   .bloque-texto-g__img(
    //-     :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img_02.jpg')})`}"
    //-   )
    //-   .bloque-texto-g__texto.p-4
    //-     p.mb-0 El conocimiento que debe tener el personal encargado del mantenimiento industrial se proyecta más allá de poseer una base teórica sólida que le permita abordar las diversas problemáticas presentadas por el departamento de mantenimiento de una organización. 

    //- .row.mb-5.align-items-center
    //-   .col-lg-8.col-md-12(data-aos="fade-left")
    //-     p Los buenos métodos de mantenimiento están enfocados en brindar seguridad y fiabilidad para los activos personales y materiales de la empresa.
    //-     .cajon.color-primario.p-4.mb-3
    //-       p.mb-0 El principal objetivo del mantenimiento industrial es el de evitar pérdidas económicas al hacer o escoger malas técnicas de mantenimiento trae como resultado desperdicio de tiempo, dinero y recursos a la organización.
    //-   .col-lg-4.col-md-8.mx-auto.mb-3(data-aos="fade-right")
    //-     figure
    //-       img(src='@/assets/curso/temas/tema3/img_03.png', alt='Imagen Decorativa')
     
    //- .row.mb-5.bg03.p-3.align-items-center
    //-   .col-8.col-lg-4.mx-auto
    //-     figure
    //-       img.mb-4(src='@/assets/curso/temas/tema3/img_04.png', alt='Imagen Decorativa')
    //-   .col-12.col-lg-8
    //-     p Las ventajas de los métodos (CPM y PERT) sobre el diagrama convencional de barras o de Gantt están en que usan un diagrama de flechas para representar las actividades asociadas con la operación de una secuencia lógica y ordenada de la ejecución del proyecto, indicando a la vez qué actividades preceden y cuáles siguen o pueden ejecutarse al tiempo, además indica las fechas de iniciación y terminación de cada actividad. 
    //-     p Como consecuencia de lo anterior, estas técnicas señalan qué actividades son críticas y cuáles no tienen problemas para su ejecución éstas últimas, son fuente de recursos aprovechables en las actividades críticas.
    //-     p A continuación, se enuncian características, ventajas y desventajas de los diferentes dos métodos de mantenimiento.


    //- .row.mb-4.p-3.align-items-center
    //-   .col-12.col-lg-9
    //-     p Las ventajas de los métodos (CPM y PERT) sobre el diagrama convencional de barras o de Gantt están en que usan un diagrama de flechas para representar las actividades asociadas con la operación de una secuencia lógica y ordenada de la ejecución del proyecto, indicando a la vez qué actividades preceden y cuáles siguen o pueden ejecutarse al tiempo, además indica las fechas de iniciación y terminación de cada actividad. 
    //-     p Como consecuencia de lo anterior, estas técnicas señalan qué actividades son críticas y cuáles no tienen problemas para su ejecución éstas últimas, son fuente de recursos aprovechables en las actividades críticas.
    //-     p A continuación, se enuncian características, ventajas y desventajas de los diferentes dos métodos de mantenimiento.
      
    //-     .row
    //-       .mx-auto.col-xs-6.col-md-6
    //-         .tarjeta-avatar-b.mb-5
    //-           .tarjeta-avatar-b__img
    //-             img.img-t.m-auto(src='@/assets/curso/temas/tema2/img_49.svg', alt='Imagen Decorativa')
    //-           .tarjeta.bg05.row.align-items-center.bg03
    //-             p.mb-0
    //-               b Método de la Ruta Crítica (CPM)
    //-       .mx-auto.col-xs-6.col-md-6
    //-         .tarjeta-avatar-b.mb-5
    //-           .tarjeta-avatar-b__img
    //-             img.img-t.m-auto(src='@/assets/curso/temas/tema2/img_49.svg', alt='Imagen Decorativa')
    //-           .tarjeta.bg05.row.align-items-center.bg03
    //-             p.mb-0
    //-               b Método PERT (Program Evaluation and Review Technique)
    //-   .col-8.col-lg-3.mx-auto
    //-       img(src='@/assets/curso/temas/tema3/img_05.png', alt='Imagen Decorativa')

    //- h3.red_gear.mb-4 Mantenimiento
    //- p Con el objetivo de organizar y hacer una buena gestión de mantenimiento a nivel industrial se deben establecer los objetivos y las políticas mantenimiento pues esto permite determinar las funciones, crear los documentos para realizar archivos técnicos, planificar tareas de mantenimiento: preventivo, correctivo y predictivo y, por último, realizar análisis recomendaciones y planes de acción para la mejora de los procesos de mantenimiento.
    
    //- .tarjeta.mb-5.bg03.p-4
    //-   .row.align-items-center
    //-     .col-12.col-md-8.mb-4
    //-       p
    //-         b Lista de actividades:
    //-       p El mantenimiento está compuesto por un conjunto de actividades que se ejecuta según un orden determinado y en un lapso (evento). La lista de actividades es construida al desarrollar tres fases:
    //-       .row
    //-         .col-12.col-md-4.mb-3
    //-           .tarjeta.bg02.p-3
    //-             span
    //-               b.text-red 01
    //-               img.mx-auto.img-auto.mb-3(src='@/assets/curso/temas/tema3/img_07.svg', alt='Imagen Decorativa')
    //-             p.text-center Planificación
    //-         .col-12.col-md-4.mb-3
    //-           .tarjeta.bg02.p-3
    //-             span
    //-               b.text-red 02
    //-             img.mx-auto.img-auto.mb-3(src='@/assets/curso/temas/tema3/img_08.svg', alt='Imagen Decorativa')
    //-             p.text-center Programación
    //-         .col-12.col-md-4.mb-3
    //-           .tarjeta.bg02.p-3
    //-             span
    //-               b.text-red 03
    //-             img.mx-auto.img-auto.mb-3(src='@/assets/curso/temas/tema3/img_09.svg', alt='Imagen Decorativa')
    //-             p.text-center Construcción de la red
        
    //-     .col-8.col-md-4.mx-auto
    //-       figure
    //-         img.mx-auto.img-auto.mb-3(src='@/assets/curso/temas/tema3/img_10.png', alt='Imagen Decorativa')

    //- h3.red_gear.mb-4 1. Planificación
    
    //- .row.mb-5.align-items-center.bg06.p-4.tarjeta
    //-   .col-10.col-lg-3.mx-auto.mb-3(data-aos="fade-right")
    //-       img.img-auto.mx-auto(src='@/assets/curso/temas/tema3/img_11.png', alt='Imagen Decorativa')
    //-   .col-12.col-lg-9(data-aos="fade-left")
    //-     p Listado de tareas: siguiendo el orden secuencial de ejecución se recomienda realizar un listado de las tareas y actividades. Definiendo estás de acuerdo con el grado de detalle con que se quiere realizar el análisis teniendo en cuenta la precisión esperada y la posibilidad de control, además se recomienda tener presente que las unidades de tiempo empleadas deben ser las mismas: horas, días, años.
    //-     .cajon.bg05.p-4.mb-3
    //-       p.mb-0 Asignación de prioridades: requiere el estudio minucioso sobre la relación existente entre las actividades o tareas, teniendo en cuenta las actividades que se deben realizar secuencial o simultáneamente.
     
    //- h3.red_gear.mb-4 2. Programación
    //- .row
    //-   .col-12.col-md-8
    //-     p Se basa principalmente en la asignación de tiempos a las tareas, para lo cual se hace necesario estimar los tiempos de las tareas que se incluirán en la construcción de la red. Para ello, se podrá disponer de sistemas de estudio y medición del trabajo, estadísticas históricas o de datos de ejecución y tareas iguales, similares o comparables.
    //-     p Entre el método CPM y PERT existe una diferencia la cual radica en que para el método CPM el tiempo de cada actividad o tarea se determina basado en la experiencia de ejecución de la actividad, mientras que en el método PERT; se considera que no existe un tiempo único para una tarea y que por consiguiente es necesario realizar un estudio probabilístico de los tiempos que puede tomar su ejecución. Estos se representan de la siguiente manera:
    //-     .row
    //-       .mx-auto.col-xs-6.col-md-6
    //-         .tarjeta-avatar-b.mb-4
    //-           .tarjeta-avatar-b__img
    //-             img.img-auto.m-auto(src='@/assets/curso/temas/tema2/img_49.svg', alt='Imagen Decorativa')
    //-           .tarjeta.bg06.row.align-items-center.bg03
    //-             p.mb-0
    //-               b Tiempo optimista (to): se conoce como el mínimo valor de tiempo en que la actividad puede ser culminada.

    //-       .mx-auto.col-xs-6.col-md-6
    //-         .tarjeta-avatar-b.mb-4
    //-           .tarjeta-avatar-b__img
    //-             img.img-auto.m-auto(src='@/assets/curso/temas/tema2/img_49.svg', alt='Imagen Decorativa')
    //-           .tarjeta.bg06.row.align-items-center.bg03
    //-             p.mb-0
    //-               b Tiempo pesimista (tp): se conoce como el tiempo máximo en que la actividad puede ser culminada.
    //-     .tarjeta-avatar-b.mb-5
    //-       .tarjeta-avatar-b__img
    //-         img.img-auto.m-auto(src='@/assets/curso/temas/tema2/img_49.svg', alt='Imagen Decorativa')
    //-       .tarjeta.bg06.row.align-items-center.bg03
    //-         p.mb-0
    //-           b Tiempo probable (tm): es el tiempo que se considera más probable, determinado como el de mayor frecuencia o el que más se repite al momento de culminar la actividad.

    //-   .col-8.col-md-4.mx-auto
    //-     img.img-auto.mx-auto(src='@/assets/curso/temas/tema3/img_12.png', alt='Imagen Decorativa')

    //- h3.red_gear.mb-4 3. Construcción de la red
    //- p A continuación, algunos de los principales aspectos de la construcción de la red:

    //- .bg07.tarjeta.p-5.mb-5
    //-   SlyderA(tipo="b")
    //-     .row.justify-content-center.align-items-center.my-lg-4
    //-       .col-md-12.col-lg-9.mb-4.mb-md-0
    //-         h3 
    //-           strong Bitácora.
    //-         p Para la construcción de las redes de actividades existen dos alternativas, uno es el método tarea/flecha (americano) y el método de los potenciales.
    //-         p Método tarea - flecha (americano): este método se caracteriza por una serie de principios y lineamientos para la representación de la red de actividades. A continuación, se mostrarán las reglas implementadas por el método:
    //-         p Las tareas se encuentran representadas por una línea o arco entre dos puntos o nodos. Los sucesos se ilustran usando círculos y las actividades o tareas con flechas.

    //-       .col-12.col-lg-3
    //-           img.img-auto.mx-auto(src='@/assets/curso/temas/tema3/img_17.svg', alt='Imagen Decorativa')

    //-     .row.justify-content-center.align-items-center.my-lg-4
    //-       .col-md-12.col-lg-9.mb-4.mb-md-0
    //-         h3 
    //-           strong Suceso inicial.
    //-         p Lubricación, inspección, limpieza. 
    //-         | En la gestión del mantenimiento industrial se refiere a un conjunto de prácticas esenciales para asegurar el funcionamiento eficiente y prolongado de los equipos y maquinarias, aplicando lubricantes, evaluando los equipos y eliminando la suciedad.
    //-       .col-12.col-lg-3
    //-           img.img-auto.mx-auto(src='@/assets/curso/temas/tema3/img_18.svg', alt='Imagen Decorativa')

    //-     .row.justify-content-center.align-items-center.my-lg-4
    //-       .col-md-12.col-lg-9.mb-4.mb-md-0
    //-         h3 
    //-           strong Suceso final.
    //-         p Gestión, programación y control del trabajo.
    //-         | En la gestión del mantenimiento industrial se refiere al conjunto de procesos y prácticas destinados a planificar, organizar y supervisar las actividades de mantenimiento para asegurar su eficacia y eficiencia. Administrando los recursos y planificando las tareas.
    //-       .col-12.col-lg-3
    //-         img.img-auto.mx-auto(src='@/assets/curso/temas/tema3/img_19.svg', alt='Imagen Decorativa')

    //-     .row.justify-content-center.align-items-center.my-lg-4
    //-       .col-md-12.col-lg-9.mb-4.mb-md-0
    //-         h3 
    //-           strong Sucesión.
    //-         p Disminuir trabajos no planificados.
    //-         | En la gestión del mantenimiento industrial se refiere a la estrategia y prácticas destinadas a reducir la frecuencia y el impacto de las intervenciones de mantenimiento que no han sido programadas previamente. Realizando mantenimiento preventivo, análisis de datos y capacitación de personal.
    //-       .col-12.col-lg-3
    //-         img.img-auto.mx-auto(src='@/assets/curso/temas/tema3/img_20.svg', alt='Imagen Decorativa')

    //-     .row.justify-content-center.align-items-center.my-lg-4
    //-       .col-md-12.col-lg-9.mb-4.mb-md-0
    //-         h3 
    //-           strong Método de potenciales.
    //-         p Participar en la ingeniería.
    //-         | En la gestión del mantenimiento industrial se refiere al proceso de diseñar, planificar y desarrollar soluciones técnicas que optimicen el rendimiento, la confiabilidad y la seguridad de los equipos y sistemas industriales con diseño de soluciones e integración de tecnologías.
    //-       .col-12.col-lg-3
    //-         img.img-auto.mx-auto(src='@/assets/curso/temas/tema3/img_21.svg', alt='Imagen Decorativa')


    //- .bloque-texto-g.bloque-texto-g--inverso.bg05.p-3.p-sm-4.p-md-5.mb-5
    //-   .bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img_22.jpg')})`}")
    //-   .bloque-texto-g__texto.p-4
    //-     p La actividad A tiene un tiempo de tres días, mientras que la B dos días, es decir la A no es más corta que la actividad B, aunque las longitudes de las flechas lo sean. La actividad C tiene una duración aproximada de 6 días lo que la hace rígida, mientras que el camino AB tiene holgura. 
    //-     br 
    //-     br 
    //-     | Una actividad debe ser terminada antes de empezar la subsiguiente. El suceso inicial de la actividad subsiguiente es el suceso final de la actividad precedente. Sin embargo, en todo proyecto hay un suceso inicial que no tiene actividades precedentes y un evento o suceso final que no tiene actividades subsiguientes. En el citado ejemplo los círculos de izquierda y derecha son los sucesos inicial y final respectivamente del proyecto.
    //-     br
    //-     br
    //-     | Es conveniente enumerar los sucesos para facilitar los cálculos en el computador. Por ejemplo, está numerada así: Actividad A = (10,20); Actividad B = (20,30); Actividad C = (10,30).

    //- .row.mb-5.align-items-center
    //-   .col-8.col-lg-4.mx-auto.mb-3(data-aos="fade-right")
    //-     figure
    //-       img(src='@/assets/curso/temas/tema3/img_23.png', alt='Imagen Decorativa')
    //-   .col-lg-8.col-md-12(data-aos="fade-left")

    //-     .align-items-center.d-flex.flex-nowrap.mb-3
    //-       img.img-auto(src='@/assets/curso/temas/tema3/img_24.png', alt='Imagen Decorativa')
    //-       h3.mb-0 Definir el objetivo del proyecto.
    //-     .align-items-center.d-flex.flex-nowrap.mb-3
    //-       img.img-auto(src='@/assets/curso/temas/tema3/img_24.png', alt='Imagen Decorativa')
    //-       h3.mb-0 Hacer lista de las actividades: esta permite saber cuántas personas están encargadas del proyecto
    //-     .align-items-center.d-flex.flex-nowrap.mb-3
    //-       img.img-auto(src='@/assets/curso/temas/tema3/img_24.png', alt='Imagen Decorativa')
    //-       h3.mb-0 Elaborar una tabla secuencia: donde se identifica:
    //-     p.mb-1 - Qué actividad(es) puede preceder a otras (secuenciales).
    //-     p.mb-1 - Qué actividad(es) puede ser concurrentes.
    //-     p.mb-3 - Qué actividad(es) se realizan paralelamente.
    //-     p Por ejemplo, se desea fabricar un nuevo producto cuya planificación se realiza en el Departamento de Control de Producción. Se tienen nueve actividades: A, B, C, D, E, F, G, H, I, cuyas relaciones de precedencias están dadas en la Tabla 1.

    //- .row.mb-5
    //-   .col-10.mx-auto
    //-     .titulo_sexto.mb-4(data-aos="fade-right")
    //-       h5.mb-0 Tabla 2. 
    //-         span 
    //-     .tabla-a.th_red
    //-       table
    //-         caption Fuente: (Herrara, 2014).
    //-         thead
    //-           tr
    //-             th.text-center Actividad
    //-             th Descripción de la actividad
    //-             th Prerequisito
    //-             th Lista de restricción
    //-             th.text-center Duración
    //-         tbody
    //-           tr
    //-             td.text-center A
    //-             td Diseño
    //-             td ---------------------------------
    //-             td ---------------------------------
    //-             td.text-center 4

    //-           tr
    //-             td.text-center B
    //-             td Ordenar pieza A
    //-             td Diseño
    //-             td B < A
    //-             td.text-center 2
                

    //-           tr
    //-             td.text-center C
    //-             td Dibujar
    //-             td Diseño
    //-             td  C < A
    //-             td.text-center 3
                  
    //-           tr
    //-             td.text-center D
    //-             td Entregar pieza A
    //-             td Ordenar pieza
    //-             td D < B
    //-             td.text-center 2

    //-           tr
    //-             td.text-center E
    //-             td Preparar manuales
    //-             td Dibujar
    //-             td E < C
    //-             td.text-center 4

    //-           tr
    //-             td.text-center F
    //-             td Manofacturar pieza B
    //-             td Dibujar
    //-             td F < C
    //-             td.text-center 2

    //-           tr
    //-             td.text-center G
    //-             td Ensamblar
    //-             td Entregar pieza A, Manufacturar pieza B
    //-             td G < D, F
    //-             td.text-center 3
                
    //-           tr
    //-             td.text-center H
    //-             td Probar producto
    //-             td Ensamblar
    //-             td H < G
    //-             td.text-center 1

    //-           tr
    //-             td.text-center I
    //-             td Transportar
    //-             td Probar pieza, preparar manuales
    //-             td I < H, E
    //-             td.text-center 1


    //- .bloque-texto-g.bg05.p-3.p-sm-4.p-md-5.mb-4
    //-   .bloque-texto-g__img(
    //-     :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img_25.jpg')})`}"
    //-   )
    //-   .bloque-texto-g__texto.p-4
    //-     p.mb-0 Consiste en mostrar gráficamente la secuencia de las actividades por medio de flechas, tanto la longitud y dirección de ellas no tienen ningún significado vectorial. 

    //- p La forma para dibujar una red depende del planificador, pero el éxito del sistema está relacionado con una buena elaboración del diagrama de actividades, representado en la tabla secuencial.

    //- .row.mb-5.align-items-center
    //-   .col-lg-8.col-md-12(data-aos="fade-left")
    //-     .cajon.bg06.p-4.mb-3
    //-       p.mb-0 Para dibujar la red correctamente se debe tener en cuenta las siguientes reglas: resumidas en la Tabla 2. Dos actividades que parten de un mismo nodo no pueden llegar a otro nodo igual debido que crearían confusión en el análisis computacional, entonces como se puede ver en la Tabla 2, esto se corrige por medio de una actividad virtual.
    //-     p Un diagrama siempre debe empezar con un nodo inicial y terminar con un nodo final, esto significa que las actividades que salen del nodo inicial no le anteceden a ninguna otra, y las que llegan al nodo traducen que no hay actividades posteriores. En un diagrama de barras no debe haber rizos o cortocircuitos (looping).
    //-   .col-8.col-lg-4.mx-auto.mb-3(data-aos="fade-right")
    //-     figure
    //-       img(src='@/assets/curso/temas/tema3/img_26.png', alt='Imagen Decorativa')


    //- .row.mb-5
    //-   .col-10.mx-auto
    //-     .titulo_sexto.mb-4(data-aos="fade-right")
    //-       h5.mb-0 Tabla 3. 
    //-         span Reglas para dibujar red de actividades.
    //-     .tabla-a.th_red
    //-       table
    //-         caption Fuente: (Herrara, 2014).
    //-         thead
    //-           tr
    //-             th.text-center Actividad
    //-             th Descripción de la actividad
    //-             th Prerequisito
    //-             th B no es un prerrequisito de H.
    //-         tbody
    //-           tr
    //-             td.text-center A > L
    //-               br
    //-               | B > E
    //-               br
    //-               | L > H, E 
    //-             td 
    //-             td 
    //-             td A no es un prerrequisito de F, debido a la actividad virtual 1-2.


    //-           tr
    //-             td.text-center A > H, E
    //-               br
    //-               | B > E, F
    //-               br
    //-               | L > F 
    //-             td
    //-             td 
    //-             td Es innecesaria la actividad virtual 3-4 propiamente no es un error.
    

    //-           tr
    //-             td.text-center A > L
    //-               br
    //-               | B > D
    //-               br
    //-               | L > D 
    //-             td 
    //-             td 
    //-             td Es innecesaria la actividad virtual 3-4 propiamente no es un error.

                  
    //-           tr
    //-             td.text-center A 60%
    //-               br
    //-               | A 100%
    //-               br
    //-               | A 60% > B 
    //-             td 
    //-             td 
    //-             td Dos actividades A y C que parten del mismo nodo no pueden llegar al mismo nodo.


    //-           tr
    //-             td.text-center A > L
    //-               br
    //-               | B > E
    //-               br
    //-               | L > H, E 
    //-             td 
    //-             td 
    //-             td Una flecha, la actividad A, no puedo ser partida.

    //-           tr
    //-             td.text-center A > E
    //-               br
    //-               | C > A
    //-               br
    //-               | B > C 
    //-             td 
    //-             td 
    //-             td Se tiene un circuito cerrado de las actividades A, B y C que al hacer los cálculos de tiempo se establece un circulo vicioso.

    //- p A continuación, la representación de un diagrama de flechas:

    //- .titulo_sexto.mb-2(data-aos="fade-right")
    //-   h5.mb-0 Figura 2. 
    //-     span Diagrama de flechas.
    //- img.mx-auto.img-auto(src='@/assets/curso/temas/tema3/img_27.svg', alt='Imagen Decorativa')


</template>

<script>
export default {
  name: 'Tema3',
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
