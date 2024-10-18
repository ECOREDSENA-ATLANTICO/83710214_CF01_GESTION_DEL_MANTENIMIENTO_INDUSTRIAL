<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1(data-aos="fade-right") Matrices y Tablas de Tiempos:


      .row.mb-5.align-items-center
        .col-lg-8.col-md-12(data-aos="fade-left")
          p La determinación de la duración de cada actividad debe ser calculada por personas con suficientes conocimientos sobre cada tipo de actividad y de acuerdo con los recursos de que se disponga tanto en equipos como en personal y capital.
          .cajon.color-acento-contenido.p-4.mb-3
            p.mb-0 Hasta este punto del proceso se ha planificado el proyecto. Ahora, se inicia la fase de la programación basados en fechas. Debajo de la descripción de cada actividad en el diagrama de flechas, se anota la duración que le corresponde.
        .col-lg-4.col-md-8.mx-auto.mb-3(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/tema3/img_01.png', alt='Imagen Decorativa')
      
      .titulo_sexto.mb-2(data-aos="fade-right")
        h5.mb-0 Figura 3. 
          span Fecha más temprana de iniciación de la actividad.

      .bg08.p-5.mb-4
        img.mx-auto.img-auto(src='@/assets/curso/temas/tema4/img_01.svg', alt='Imagen Decorativa')

      p Es importante que la unidad de tiempo escogida sea la misma en todo el proceso. De acuerdo con el diagrama de la figura 8, se calculará la fecha más temprana de iniciación de la actividad o primera fecha de realización del evento.
      p Primero se divide cada círculo en tres partes, el cuadrante izquierdo representa la fecha más temprana de iniciación de las actividades (PFI) o primera fecha de realización del evento, el cuadrante de la derecha representa la fecha más tardía de terminación de la actividad o última fecha de realización del evento (UFT), en la parte superior del semicírculo se localiza la numeración de los nodos, el proceso principia en el nodo cero, asignándole la fecha cero arbitrariamente y se coloca en el cuadrante izquierdo del nodo así:

      .bg09.p-3.mb-4
        img.mx-auto.img-auto(src='@/assets/curso/temas/tema4/img_02.svg', alt='Imagen Decorativa')

      p Como solamente una actividad llega al nodo uno se suma la duración de la actividad 0-1 y se obtiene que la actividad A termina en la fecha 4. Este número se coloca en el cuadrante izquierdo del nodo final de la actividad A.
      p Como el nodo 1 es origen de dos actividades B y C estas terminarán en la fecha 4 + 2 = 6 y 4 + 3 = 7 respectivamente y se coloca en los cuadrantes izquierdos de los nodos 2 y 3. 

      .bg08.p-5.mb-4
        img.mx-auto.img-auto(src='@/assets/curso/temas/tema4/img_03.svg', alt='Imagen Decorativa')

      p Al nodo 4 llegan las actividades D y F y terminarán en la fecha 6 + 2 = 8 y 7 + 2 = 9 respectivamente, para averiguar la fecha más temprana de iniciación de la actividad G se escoge la fecha 9 por ser la mayor, marcada por la actividad 3-4 y no la fecha 8 dada por la actividad 2-4. Esta fecha 9 se ubica en el cuadrante izquierdo del nodo 4. Se observa que al nodo 5 sólo llega la actividad 4-5, así la actividad H sólo se puede iniciar en la fecha 12. 

      .titulo_sexto.mb-3(data-aos="fade-right")
        h5.mb-0 Figura 5. 
          span Relación actividad - fecha.

      .bg09.p-3.mb-4
        img.mx-auto.img-auto(src='@/assets/curso/temas/tema4/img_04.svg', alt='Imagen Decorativa')

      p Al nodo 6 llegan las actividades 5-6 y 3-6 que terminan en la fecha 13 y 11 respectivamente, se coloca en el cuadrante izquierdo del nodo el mayor tiempo que llega a este nodo que es 13. A continuación, se podrán evidenciar diferentes tipos de secuencias que tienen relación con la definición de actividades y las fechas en sus métodos:

      p Las actividades no críticas, tales como la 1-2, 2-4 y 3-6 pueden retrasarse dentro de ciertos límites sin afectar la duración total del proyecto, es decir, que tienen cierta margen de holgura o de retraso. Existen tres tipos de holgura llamado también tiempo flotante:
  
      .row.mb-5
        .col-lg-4.col-10.mx-auto.mb-4
          figure
            img.img-auto.mx-auto(src='@/assets/curso/temas/tema4/img_11.png', alt='Imagen Decorativa')
        .col-lg-8.col-12.mb-3
          LineaTiempoD.color-acento-botones
            .row(numero="1" titulo="Holgura total (total float):")
                p Es el tiempo que se le permite a la actividad retrasarse, sin que esto afecte la duración total del proyecto

            .row(numero="2" titulo="Holgura libre (free float):")
                p Es la cantidad de tiempo que se puede retrasar una actividad sin perjudicar la primera fecha de iniciación de las actividades posteriores.

            .row(numero="3" titulo="Holgura independiente (independiente float):")
                p Las soluciones en general deben ser definidas y afinadas mediante un proceso iterativo y deben sustentarse sobre evaluaciones y procesos de verificación.

      .row.mb-5.align-items-center
        .col-lg-8.col-md-12(data-aos="fade-left")
          p La holgura independiente está enmarcada en el rango negativo, en cuyo caso, si la actividad se inicia en su fecha última, se debe acortar la duración de la actividad en una cantidad igual a la holgura independiente para conservar la primera fecha de iniciación de las actividades posteriores.
          p Utilizar toda la holgura total, es muy peligroso, porque todas las actividades se convierten en críticas. Esto no sucede con las holguras libres e independientes que por ser menores se pueden usar totalmente sin afectar la duración del proyecto.

          .bg06.p-4.mb-3
            p.mb-0 Antes de expresar las fórmulas para determinar los cuatro tipos de fecha para cada actividad es necesario numerar los nodos de manera que las actividades puedan ser definidas por su nodo inicial y su nodo final. Al evento inicial se le denomina i y j al evento final. Al tiempo de duración de la actividad la se expresa como.
            p Hay que observar que la letra j de la actividad precedente es igual a la letra i de la actividad posterior, excepto en los nodos inicial y final de la red. Es importante conservar en la mente que la numeración de los nodos nunca se repite
        .col-lg-4.col-10.mx-auto.mb-3(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/tema4/img_12.png', alt='Imagen Decorativa')

      .row.mb-5.tarjeta.bg07.p-4.align-items-center
        .col-lg-4.col-8.mx-auto.mb-3(data-aos="fade-left")
          figure
            img.img-t.mb-2(src='@/assets/curso/temas/tema4/img_13.png', alt='Imagen Decorativa')
        .col-lg-8.col-12(data-aos="fade-right")
          SlyderF(columnas="col-lg-6 col-xl-6 col-md-6")
            .tarjeta.bg02.p-4.pt-5.pb-5
              p.text-center
                b PFI
              p.text-center Primera fecha de iniciación de la actividad fecha más temprana de iniciación de la actividad. Se observa que esta fecha coincide con la primera fecha de realización de un evento cuya fórmula es:
              figure
                img.mx-auto.img-auto(src='@/assets/curso/temas/tema4/img_14.png', alt='Imagen Decorativa')
            .tarjeta.bg02.p-4.pt-5.pb-5
              p.text-center
                b UFT
              p.text-center Última fecha de terminación de la actividad (fecha más tarde de terminación) coincide con la última fecha de realización de un evento y está expresada así:
              figure
                img.mx-auto.img-auto(src='@/assets/curso/temas/tema4/img_15.png', alt='Imagen Decorativa')
            .tarjeta.bg02.p-4.pt-5.pb-5
              p.text-center
                b PFT
              p.text-center Primera fecha de terminación de la actividad (fecha más temprana de terminación) se expresa mediante la siguiente fórmula:
              figure
                img.mx-auto.img-auto(src='@/assets/curso/temas/tema4/img_16.png', alt='Imagen Decorativa')
            .tarjeta.bg02.p-4.pt-5.pb-5
              p.text-center
                b UFT
              p.text-center Última fecha de iniciación de la actividad (fecha más tarde de iniciación) la cual puede ser definida así:
                img.mx-auto.img-auto(src='@/assets/curso/temas/tema4/img_17.png', alt='Imagen Decorativa')
        
  
      .row.mb-5.align-items-center
        .col-lg-8.col-md-12(data-aos="fade-left")
          p se traslada los resultados a la Tabla 3. Matriz de tiempos. Así por ejemplo la PFI de las actividades A y D localizada en el cuadrante izquierdo del nodo 0 y 2 respectivamente tienen un valor de cero y seis, cuyas cifras están ubicadas en la columna 4 de la Tabla 3, el mismo proceso se usa para las demás actividades. 
          p Ahora la UFT de las actividades A y D son cuatro y nueve localizadas en el cuadrante derecho de los nodos 1 y 4. Estos valores son colocados en la columna 7 de la Tabla 3, el mismo procedimiento se utiliza en las otras actividades.


          .bg06.p-4.mb-3
            p La fecha primera en la cual puede determinarse así: una actividad (PFT) es igual a la fecha primera de iniciación (columna 4) más la duración de las actividades (columna 3); entonces, la columna 5 se obtiene sumando los valores de las columnas 3 y 4 (No debe sacarse de la malla). 
            p Puesto que la última fecha en la cual puede iniciarse una actividad es igual a la última fecha donde terminó la actividad menos el tiempo de duración de dicha actividad, se obtiene la columna 6 restando a la columna 7 los valores de la columna 3. Este valor tampoco se debe sacar de la malla.

        .col-lg-4.col-10.mx-auto.mb-3(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/tema4/img_18.png', alt='Imagen Decorativa')

      .titulo_sexto.mb-4(data-aos="fade-right")
        h5.mb-0 Tabla 3. 
          span Matriz de tiempos.

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


      .titulo_sexto.mb-4(data-aos="fade-right")
        h5.mb-0 Figura 6. 
          span Representación gráfica de tiempos y holguras.
      figure
        img.img-auto.mx-auto(src='@/assets/curso/temas/tema4/img_20.svg', alt='Imagen Decorativa')

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
