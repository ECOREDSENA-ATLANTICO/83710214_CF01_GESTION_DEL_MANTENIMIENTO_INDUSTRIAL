<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1(data-aos="fade-right") Matrices y tablas de tiempos


      .row.mb-2.align-items-center
        .col-lg-6.col-md-12(data-aos="fade-left")
          p La determinación de la duración de cada actividad debe ser calculada por personas con suficientes conocimientos sobre cada tipo de actividad y de acuerdo con los recursos de que se disponga tanto en equipos como en personal y capital.
          p.mb-0 Hasta este punto del proceso se ha planificado el proyecto. Ahora, se inicia la fase de la programación basados en fechas. Debajo de la descripción de cada actividad en el diagrama de flechas, se anota la duración que le corresponde.
        .col-lg-6.col-md-8.mx-auto.mb-3(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/tema4/img_1.png', alt='Imagen Decorativa')
      

      .row.justify-content-center.align-items-center.mb-2  
        .col-lg-10.col-md-12
          .titulo-sexto.color-acento-botones.mb-4
            h5 Figura 4.
            span Fecha más temprana de iniciación de la actividad.

          .bg08.p-5.mb-4
            img.mx-auto.img-auto(src='@/assets/curso/temas/tema4/img_2.svg', alt='Imagen Decorativa')

      .row.justify-content-center.align-items-center.mb-2  
        .col-lg-12.col-md-12

          p Es importante que la unidad de tiempo escogida sea la misma en todo el proceso. De acuerdo con el diagrama de la figura 8, se calculará la fecha más temprana de iniciación de la actividad o primera fecha de realización del evento.
          p Primero se divide cada círculo en tres partes, el cuadrante izquierdo representa la fecha más temprana de iniciación de las actividades (PFI) o primera fecha de realización del evento, el cuadrante de la derecha representa la fecha más tardía de terminación de la actividad o última fecha de realización del evento (UFT), en la parte superior del semicírculo se localiza la numeración de los nodos, el proceso principia en el nodo cero, asignándole la fecha cero arbitrariamente y se coloca en el cuadrante izquierdo del nodo así:

          .bg09.p-3.mb-4
            img.mx-auto.img-auto(src='@/assets/curso/temas/tema4/img_3.svg', alt='Imagen Decorativa')

          p Como solamente una actividad llega al nodo uno se suma la duración de la actividad 0-1 y se obtiene que la actividad A termina en la fecha 4. Este número se coloca en el cuadrante izquierdo del nodo final de la actividad A.
          p Como el nodo 1 es origen de dos actividades B y C estas terminarán en la fecha 4 + 2 = 6 y 4 + 3 = 7 respectivamente y se coloca en los cuadrantes izquierdos de los nodos 2 y 3. 

      
      .row.justify-content-center.align-items-center.mb-4  
        .col-lg-10.col-md-12
          .titulo-sexto.color-acento-botones.mb-4
            h5 Figura 5.
            span Nodos

          figure
            img.mx-auto.img-auto(src='@/assets/curso/temas/tema4/img_3.png', alt='Imagen Decorativa')

      .row.mb-4.align-items-center.justify-content-center
        .col-lg-10
          .row.align-items-center.justify-content-center
            .col-lg-8.col-md-12(data-aos="fade-left")
              p Al nodo 4 llegan las actividades D y F y terminarán en la fecha 6 + 2 = 8 y 7 + 2 = 9 respectivamente, para averiguar la fecha más temprana de iniciación de la actividad G se escoge la fecha 9 por ser la mayor, marcada por la actividad 3-4 y no la fecha 8 dada por la actividad 2-4. Esta fecha 9 se ubica en el cuadrante izquierdo del nodo 4. Se observa que al nodo 5 sólo llega la actividad 4-5, así la actividad H sólo se puede iniciar en la fecha 12.
            .col-lg-4.col-md-8.mx-auto.mb-3(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/tema4/img_4.png', alt='Imagen Decorativa')
      
      .row.justify-content-center.align-items-center.mb-4  
        .col-lg-10.col-md-12.mb-3
          .titulo-sexto.color-acento-botones.mb-4
            h5 Figura 6.
            span Relación actividad - fecha.
          
          figure
            img.mx-auto.img-auto(src='@/assets/curso/temas/tema4/img_5.png', alt='Imagen Decorativa')

        .col-lg-10.col-md-12.mb-2
          p Al nodo 4 llegan las actividades D y F y terminarán en la fecha 6 + 2 = 8 y 7 + 2 = 9 respectivamente, para averiguar la fecha más temprana de iniciación de la actividad G se escoge la fecha 9 por ser la mayor, marcada por la actividad 3-4 y no la fecha 8 dada por la actividad 2-4. Esta fecha 9 se ubica en el cuadrante izquierdo del nodo 4. Se observa que al nodo 5 sólo llega la actividad 4-5, así la actividad H sólo se puede iniciar en la fecha 12. 
        
      
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-10.mb-0
          .bg07.tarjeta.p-5.mb-0
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center.my-lg-4.p-4
                .col-md-12.col-lg-8.mb-4.mb-md-0
                  h3 
                    strong Fecha tardía de terminación de la actividad.
                  p Por consiguiente, para determinar la primera fecha de realización de un evento que corresponde al tiempo de iniciación de la actividad, se empieza por el nodo inicial del proceso. Se suma la duración de cada actividad y cuando a un nodo llega más de una actividad se toma la cantidad mayor.

                .col-12.col-lg-4
                    img.img-auto.mx-auto(src='@/assets/curso/temas/tema4/img_6.png', alt='Imagen Decorativa')

              .row.justify-content-center.align-items-center.my-lg-4.p-4
                .col-md-12.col-lg-9.mb-4.mb-md-0
                  h3 
                    strong Fecha más tardía de terminación de la actividad.
                  p Para que el proyecto termine en la fecha 14, la actividad I (Ver Fig.12) debe empezar por más tardar en la fecha 14-1 = 13, que se coloca en el cuadrante derecho del nodo 6
                .col-12.col-lg-3
                    img.img-auto.mx-auto(src='@/assets/curso/temas/tema4/img_7.png', alt='Imagen Decorativa')

              .row.justify-content-center.align-items-center.my-lg-4.p-4
                .col-md-12.col-lg-9.mb-4.mb-md-0
                  h3 
                    strong Fecha más tardía de terminación de la actividad H.
                  p La fecha última en que se puede empezar la actividad H es 13-1 = 12, que se coloca en el nodo 5, cuadrante derecho.

                .col-12.col-lg-3
                  img.img-auto.mx-auto(src='@/assets/curso/temas/tema4/img_8.png', alt='Imagen Decorativa')

              .row.justify-content-center.align-items-center.my-lg-4.p-4
                .col-md-12.col-lg-9.mb-4.mb-md-0
                  h3 
                    strong Fechas y actividades entre nodos actividad H y F.
                  p La fecha última del nodo 4 es 12-3 = 9 mientras que al analizar el nodo 3 se ve que hay dos actividades que salen F y E la fecha más tarde que debe empezar esas actividades para no retrasar el proyecto debe ser la fecha 9-2 = 7, puesto que la actividad F tiene una duración de 2, no obstante, que por la actividad E la última fecha de iniciación de la actividad, es 13-4 = 9, es decir, se ha escogido la menor de las fechas, si se escogiera 9 retrasaría la actividad F y por consiguiente la duración total del proyecto
                  
                .col-12.col-lg-3
                  img.img-auto.mx-auto(src='@/assets/curso/temas/tema4/img_9.png', alt='Imagen Decorativa')

              .row.justify-content-center.align-items-center.my-lg-4.p-4
                .col-md-12.col-lg-9.mb-4.mb-md-0
                  h3 
                    strong Ruta crítica red de actividades.
                  p Se puede definir la ruta crítica como la curva de mayor duración a través de la red o como la "curva de menor holgura". En la figura se resalta en color rojo la ruta crítica del caso estudiado.
                .col-12.col-lg-3
                  img.img-auto.mx-auto(src='@/assets/curso/temas/tema4/img_10.png', alt='Imagen Decorativa')


      .row.justify-content-center.align-items-center.mb-2
        .col-lg-10.mb-2
          p Las actividades no críticas, tales como la 1-2, 2-4 y 3-6 pueden retrasarse dentro de ciertos límites sin afectar la duración total del proyecto, es decir, que tienen cierta margen de holgura o de retraso. Existen tres tipos de holgura llamado también tiempo flotante:

          .align-items-start.d-flex.flex-nowrap.mb-1
            img.img-auto.pr-2(src='@/assets/curso/temas/tema2/img40.svg', alt='Imagen Decorativa')
            p.mb-0.lh-sm Holgura total (total float): es el tiempo que se le permite a la actividad retrasarse, sin que esto afecte la duración total del proyecto.

          .align-items-start.d-flex.flex-nowrap.mb-1
            img.img-auto.pr-2(src='@/assets/curso/temas/tema2/img40.svg', alt='Imagen Decorativa')
            p.mb-0.lh-sm Holgura libre (free float): es la cantidad de tiempo que se puede retrasar una actividad sin perjudicar la primera fecha de iniciación de las actividades posteriores.

          .align-items-start.d-flex.flex-nowrap.mb-1
            img.img-auto.pr-2(src='@/assets/curso/temas/tema2/img40.svg', alt='Imagen Decorativa')
            p.mb-0.lh-sm Holgura independiente (independiente float): es el tiempo que puede retrasarse una actividad, sin que afecte la primera fecha de iniciación de las actividades siguientes y la última fecha de las actividades anteriores.


      .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          .row.justify-content-center.align-items-center.ordenar_tarjeta
            .col-lg-8.col-md-12(data-aos="fade-left")
              p La holgura independiente está enmarcada en el rango negativo, en cuyo caso, si la actividad se inicia en su fecha última, se debe acortar la duración de la actividad en una cantidad igual a la holgura independiente para conservar la primera fecha de iniciación de las actividades posteriores.
              p.mb-0 Utilizar toda la holgura total, es muy peligroso, porque todas las actividades se convierten en críticas. Esto no sucede con las holguras libres e independientes que por ser menores se pueden usar totalmente sin afectar la duración del proyecto.
            .col-lg-4.col-md-8.mx-auto.mb-3(data-aos="fade-right").pos_2
              figure
                img(src='@/assets/curso/temas/tema4/img_11.png', alt='Imagen Decorativa')
        

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          .row.justify-content-center.align-items-center
            .col-lg-4.col-md-8.mx-auto.mb-3(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/tema4/img_12.png', alt='Imagen Decorativa')
            .col-lg-8.col-md-12(data-aos="fade-left")
              p Antes de expresar las fórmulas para determinar los cuatro tipos de fecha para cada actividad es necesario numerar los nodos de manera que las actividades puedan ser definidas por su nodo inicial y su nodo final. Al evento inicial se le denomina i y j al evento final. Al tiempo de duración de la actividad la se expresa como.
              p.mb-0 Hay que observar que la letra j de la actividad precedente es igual a la letra i de la actividad posterior, excepto en los nodos inicial y final de la red. Es importante conservar en la mente que la numeración de los nodos nunca se repite.


      .row.justify-content-center.align-items-center.mb-2
        .col-lg-10.mb-2
          p.mb-0 Ahora se calculan los cuatro tipos de tiempo para una actividad dada: 


      .row.mb-5.tarjeta.p-4.align-items-center
        .col-lg-8.col-12(data-aos="fade-right")
          SlyderF(columnas="col-lg-6 col-xl-6 col-md-6")
            .tarjeta.bg02.p-4.pt-5.pb-5
              p.text-center PFI: Primera fecha de iniciación de la actividad fecha más temprana de iniciación de la actividad. Se observa que esta fecha coincide con la primera fecha de realización de un evento cuya fórmula es:
              figure
                img.mx-auto.img-auto(src='@/assets/curso/temas/tema4/img_14_1.png', alt='Imagen Decorativa')
            .tarjeta.bg02.p-4.pt-5.pb-5
              p.text-center UFT: Última fecha de terminación de la actividad (fecha más tarde de terminación) coincide con la última fecha de realización de un evento y está expresada así:
              figure
                img.mx-auto.img-auto(src='@/assets/curso/temas/tema4/img_15_1.png', alt='Imagen Decorativa')
            .tarjeta.bg02.p-4.pt-5.pb-5
              p.text-center PFT: Primera fecha de terminación de la actividad (fecha más temprana de terminación) se expresa mediante la siguiente fórmula:
              figure
                img.mx-auto.img-auto(src='@/assets/curso/temas/tema4/img_16_1.png', alt='Imagen Decorativa')
            .tarjeta.bg02.p-4.pt-5.pb-5
              p.text-center UFT: Última fecha de iniciación de la actividad (fecha más tarde de iniciación) la cual puede ser definida así:
                img.mx-auto.img-auto(src='@/assets/curso/temas/tema4/img_17_1.png', alt='Imagen Decorativa')

        .col-lg-4.col-8.mx-auto.mb-3(data-aos="fade-left")
          figure
            img.img-t.mb-2(src='@/assets/curso/temas/tema4/img_13.png', alt='Imagen Decorativa')

      .row.justify-content-center.align-items-center.mb-2
        .col-lg-10.mb-2
          p.mb-2 Se traslada los resultados a la Tabla 3. Matriz de tiempos. Así por ejemplo la PFI de las actividades A y D localizada en el cuadrante izquierdo del nodo 0 y 2 respectivamente tienen un valor de cero y seis, cuyas cifras están ubicadas en la columna 4 de la Tabla 3, el mismo proceso se usa para las demás actividades.
          p Ahora la UFT de las actividades A y D son cuatro y nueve localizadas en el cuadrante derecho de los nodos 1 y 4. Estos valores son colocados en la columna 7 de la Tabla 3, el mismo procedimiento se utiliza en las otras actividades.


      .row.justify-content-center.align-items-center.mb-2
        .col-lg-10
          .row.justify-content-center.align-items-center
            .col-lg-8.col-md-8.mx-auto.mb-3(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/tema4/img_14.png', alt='Imagen Decorativa')
            .col-lg-4.col-md-12(data-aos="fade-left")
              p.mb-2 La fecha primera en la cual puede determinarse así: una actividad (PFT) es igual a la fecha primera de iniciación (columna 4) más la duración de las actividades (columna 3); entonces, la columna 5 se obtiene sumando los valores de las columnas 3 y 4 (No debe sacarse de la malla).
              p.mb-0 Puesto que la última fecha en la cual puede iniciarse una actividad es igual a la última fecha donde terminó la actividad menos el tiempo de duración de dicha actividad, se obtiene la columna 6 restando a la columna 7 los valores de la columna 3. Este valor tampoco se debe sacar de la malla.
          
      
      .row.justify-content-center.align-items-center.mb-2
        .col-lg-10
          .titulo-sexto.color-acento-botones.mb-4
            h5 Tabla 7.
            span Matriz de tiempos.
          .tabla-a.th_red.mb-2
            table.mb-5.text-center(border="0", cellpadding="0", cellspacing="0", style="border-collapse: collapse; table-layout: fixed;")
              colgroup
                col(span="3")
                col
                col(span="9")
              tbody
                tr
                  td(colspan="2") 1
                  td 2
                  td 3
                  td 4
                  td 5
                  td 6
                  td 7
                  td 8
                  td 9
                  td 10
                  td 11
                  td 12
                tr
                  td(colspan="3") ACTIVIDAD
                  td(rowspan="2") Duración TIJ
                  td(colspan="2") Prim. Fecha
                  td(colspan="2") Ult. Fecha
                  td(colspan="3") Holgura
                  td(rowspan="2") PFIA P
                  td(rowspan="2") UFT AA
                tr
                  td i
                  td j
                  td Descrip.
                  td Inic.
                  td Term.
                  td Inic.
                  td Term.
                  td Tot.
                  td Libre
                  td Indep
                tr
                  td 0
                  td 1
                  td A
                  td 4
                  td 0
                  td 4
                  td 0
                  td 4
                  td 0
                  td 0
                  td 0
                  td 4
                  td 0
                tr
                  td 1
                  td 2
                  td B
                  td 2
                  td 4
                  td 6
                  td 5
                  td 7
                  td 1
                  td 0
                  td 0
                  td 6
                  td 4
                tr
                  td 1
                  td 3
                  td C
                  td 3
                  td 4
                  td 7
                  td 4
                  td 7
                  td 0
                  td 0
                  td 0
                  td 7
                  td 4
                tr
                  td 2
                  td 4
                  td D
                  td 2
                  td 6
                  td 8
                  td 7
                  td 9
                  td 1
                  td 1
                  td 0
                  td 9
                  td 7
                tr
                  td 3
                  td 6
                  td E
                  td 2
                  td 7
                  td 9
                  td 7
                  td 9
                  td 0
                  td 0
                  td 0
                  td 9
                  td 7
                tr
                  td 3
                  td 4
                  td F
                  td 4
                  td 7
                  td 11
                  td 9
                  td 13
                  td 2
                  td 2
                  td 2
                  td 13
                  td 7
                tr
                  td 4
                  td 5
                  td G
                  td 3
                  td 9
                  td 13
                  td 9
                  td 12
                  td 0
                  td 0
                  td 0
                  td 12
                  td 9
                tr
                  td 5
                  td 6
                  td H
                  td 1
                  td 12
                  td 14
                  td 12
                  td 13
                  td 0
                  td 0
                  td 0
                  td 13
                  td 12
                tr
                  td 6
                  td 7
                  td I
                  td 1
                  td 13
                  td 14
                  td 13
                  td 14
                  td 0
                  td 0
                  td 0
                  td 14
                  td 13


      .row.justify-content-center.align-items-center.mb-2
        .col-lg-10.mb-2
          p El análisis de redes de proyectos utiliza matrices y tablas de tiempo para gestionar la planificación y el control de las actividades. Dos conceptos clave en este análisis son la holgura total (HT) y la holgura libre (HL).


      .row.justify-content-center.align-items-center.mb-2
        .col-lg-10
          .row.justify-content-center.align-items-center.ordenar_tarjeta
            .col-lg-8.mb-2
              .align-items-start.d-flex.flex-nowrap.mb-3
                img.img-auto.pr-2(src='@/assets/curso/temas/tema2/img40.svg', alt='Imagen Decorativa')
                p.mb-0.lh-sm La holgura total (HT) representa el tiempo máximo disponible adicional sobre la duración de una actividad sin afectar la fecha de finalización del proyecto. Se calcula restando la fecha más temprana de finalización de la actividad de la fecha más tardía de finalización (Columna 7 - Columna 5 en la Tabla 3, o Columna 6 - Columna 4). Los valores resultantes se registran en la columna 8 de la Tabla 3.

              .align-items-start.d-flex.flex-nowrap.mb-3
                img.img-auto.pr-2(src='@/assets/curso/temas/tema2/img40.svg', alt='Imagen Decorativa')
                p.mb-0.lh-sm La holgura libre (HL) de una actividad i-j se define como la diferencia entre la fecha más temprana de inicio de la actividad siguiente y la fecha más temprana de finalización de la actividad i-j (Ec. 8). Esta holgura representa el tiempo disponible para la actividad i-j sin afectar el inicio de la actividad sucesora.

            .col-lg-4.mb-2.pos_2
              figure
                img(src='@/assets/curso/temas/tema4/img_15.png', alt='Imagen Decorativa')
                

      .row.justify-content-center.align-items-center.mb-2
        .col-lg-10
          .row.justify-content-center.align-items-center
            .col-lg-4.col-md-8.mx-auto.mb-3(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/tema4/img_16.png', alt='Imagen Decorativa')
            .col-lg-8.col-md-12(data-aos="fade-left")
              .align-items-start.d-flex.flex-nowrap.mb-3
                img.img-auto.pr-2(src='@/assets/curso/temas/tema2/img40.svg', alt='Imagen Decorativa')
                p.mb-0.lh-sm Por último, la holgura independiente (HI) de una actividad i-j se calcula como la diferencia entre la fecha más temprana de inicio de la actividad y la última fecha de terminación de las actividades precedentes (UFTAA) (Ec. 9). La UFTAA es equivalente a la última fecha de realización del evento inicial (i) de la actividad considerada. Esta holgura representa el tiempo que se puede retrasar la actividad i-j sin afectar el inicio de ninguna otra actividad. <br>Las ecuaciones (7), (8) y (9) detallan los cálculos precisos para cada tipo de holgura. La aplicación de estos conceptos permite identificar actividades críticas y no críticas dentro del proyecto y facilita una gestión óptima del tiempo y los recursos.

              .align-items-start.d-flex.flex-nowrap.mb-3
                img.img-auto.pr-2(src='@/assets/curso/temas/tema2/img40.svg', alt='Imagen Decorativa')
                p.mb-0.lh-sm Representación gráfica de los tiempos y sus holguras: <br> Los tiempos PFI, PFT, UFI, UFT y las holguras: total, libre e independiente se pueden representar por puntos en un eje de tiempos, como se muestra en la siguiente figura. En este eje la actividad i-j puede dibujarse mediante una barra recta cuya longitud es   a la escala del eje. En la figura 9, se muestra la representación gráfica de los tiempos y holguras.

      .row.justify-content-center.align-items-center.mb-0
        .col-lg-10.col-md-12
          .titulo-sexto.color-acento-botones.mb-4
            h5 Figura 7.
            span Representación gráfica de tiempos y holguras

          .bg08.p-5.mb-0
            img.mx-auto.img-auto(src='@/assets/curso/temas/tema4/img_17.png', alt='Imagen Decorativa')

  </template>

<script>
export default {
  name: 'Tema4',
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
