<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Agroecología

    .fondo-1.p-4
      p.mb-5 La agricultura tradicional e industrial desencadena consecuencias e impactos negativos en el medio ambiente, la salud y la equidad social, generados principalmente por la implementación de monocultivos, el uso indiscriminado de agroquímicos que producen simplificación biológica, uniformidad genética y con ello pérdida de biodiversidad y servicios naturales.

      .row.mb-5.mt-5
        .col-lg-6
          figure
            img(src='@/assets/curso/temas/tema_1/img_8.png', alt='')
          .row.contenedor.z_in
            .col-lg-12
              a(@click="mostrarDiv(1); mostrarIndicador2 = true;" @mouseover="mostrarIndicador1 = false; ")
                div.boton1
                .indicador--click(style="left:55%, top:5%" v-if="mostrarIndicador1" )         
              a.indicador__containe.ind_2(@click="mostrarDiv(2); mostrarIndicador2 = true;" @mouseover="mostrarIndicador2 = false; ")        
                div.boton2
                .indicador--click(style="left:80%" v-if="mostrarIndicador2" )  
              a.indicador__containe(@click="mostrarDiv(3); mostrarIndicador3 = true;" @mouseover="mostrarIndicador3 = false; ")        
                div.boton3
                .indicador--click(style="left:80%" v-if="mostrarIndicador3" )  
              a.indicador__containe(@click="mostrarDiv(4); mostrarIndicador4 = true;" @mouseover="mostrarIndicador4 = false; ")        
                div.boton4
                .indicador--click(style="left:80%" v-if="mostrarIndicador4" ) 
              a.indicador__containe(@click="mostrarDiv(5); mostrarIndicador5 = true;" @mouseover="mostrarIndicador5 = false; ")        
                div.boton5
                .indicador--click(style="left:80%" v-if="mostrarIndicador5" ) 
  
      .row.z_in
        .col-auto.bot_1
          .div(id="myDiv1" ref="myDiv1" style="display:inline")
            h5 Ancestralidad
            p.text-small La agroecología se encarga de dar una orientación a la agricultura basada en técnicas y métodos ancestrales, criterios ambientales, sostenibilidad y soberanía alimentaria, debido a que no se focaliza solo en la producción la cual debe ser más amigable con el medio ambiente, sino que va más allá e incluye toda la cadena y sistema agroalimentario, es decir, desde la producción hasta la comercialización y consumo, comprendiendo la compleja interacción que existe entre procesos y puntos de vista social, económico y ambiental que pueden darse.
      .row.z_in
        .col-auto.bot_2
          .div(id="myDiv2" ref="myDiv2" style="display:none")
            h5 Biodiversidad y conservación
            p.text-small Su finalidad no busca maximizar el rendimiento del cultivo, sino que centra en la estabilización a largo plazo, siendo vital mantener, incrementar y restaurar la biodiversidad de los agroecosistemas, y así impulsar cultivos en escala pequeña, económicamente viables, autosuficientes y diversificados, que se manejan con adaptaciones tecnológicas propios a los ambientes de cada ubicación. 
      .row.z_in
        .col-auto.bot_3
          .div(id="myDiv3" ref="myDiv3" style="display:none")
            h5 Agricultura orgánica y sostenible
            p.text-small Además, como lo indica Le Coq, J., Patrouilleau, M. M., Sabourin, E., & Niederle, P. A. (2018, September), difiere no sólo de la agricultura tradicional, sino que también de otros modelos agrícolas alternativos como la agricultura orgánica y sostenible, en criterios como el uso de insumos (abonos, productos fitosanitarios, etc.), en la diversificación de la producción agrícola, en la siembra de variedades genéticamente modificadas.
      .row.z_in
        .col-auto.bot_4
          .div(id="myDiv4" ref="myDiv4" style="display:none")
            h5 Recursos naturales 
            p.text-small Lo que conlleva a obtener beneficios importantes en los ecosistemas, pues la intervención antrópica altera la disponibilidad de recursos, las características del suelo, el clima, la estructura social, las dinámicas económicas y la historia del territorio, al aumentar la degradación ambiental, originando consecuencias negativas y, con la agroecología se busca promover el manejo de los agroecosistemas bajo estrategias como el uso responsable de los recursos naturales y la conservación de la biodiversidad.
      .row.z_in
        .col-auto.bot_5
          .div(id="myDiv5" ref="myDiv5" style="display:none")
            h5 Agroecosistemas
            p.text-small Por medio de la producción a largo plazo donde la velocidad de degradación debe ser inferior o en su defecto igual a la tasa de reposición, es decir se debe hacer de forma eficiente y rentable; también a través de la reducción del impacto del suelo y conservación de su fertilidad mediante prácticas como la rotación de cultivos, la minimización de la contaminación ambiental al no emplear agroquímicos, la producción de alimentos más naturales y de mejor calidad nutritiva y el aporte al compromiso para con las generaciones futuras de alcanzar un desarrollo económico sostenible, donde exista seguridad alimentaria y se asegure la conservación y protección del medio ambiente. 

    separador
    #t_1_1.titulo-segundo.color-secundario.mt-5
      h2 1.1  Enfoques sistémicos

    .fondo-2.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-8.py-5.text-small(data-aos="fade-down-right") 
          p La agroecología cuenta con diversos enfoques, lo que conlleva a la diferenciación de las ciencias agrícolas tradicionales, porque al surgir distintos orígenes filosóficos y al tener diferentes raíces, hay gran variedad de técnicas, metodologías, consecuencias sociales y ambientales, que difieren trascendentalmente de la agricultura convencional, logrando construir y comprender una nueva forma de implementación de prácticas agrícolas sustentables a través de la recuperación del conocimiento y saberes tradiciones y la aplicación de metodologías participativas de investigación social y las técnicas agrícolas, que añade valor y establece las condiciones y reglas del mercado, además logran un equilibrio ecológico, político, social, económico y de los servicios ecosistémicos.

        .col-lg-4(data-aos="fade-down-left")
          img.img-a(src='@/assets/curso/temas/tema_1/img_9.png', alt='Texto que describa la imagen')


    PasosA.color-secundario.mb-5(tipo="n")
      .row.align-items-center(data-aos="fade-left")
        .col-md-8.mb-4.mb-md-0
          h3 Enfoque Diferencial
          p Diferencial reconoce las particularidades de género, edad, etnia, discapacidad, etc., y garantiza sus derechos.
        .col-md-4
          figure
            img.img-a(src='@/assets/curso/temas/tema_1/img_11.png', alt='Texto que describa la imagen')

      .row.align-items-center(data-aos="fade-right")
        .col-md-4.mb-4.mb-md-0
          figure
            img.img-a(src='@/assets/curso/temas/tema_1/img_12.png', alt='Texto que describa la imagen')
        .col-md-8.text-left
          h3 Enfoque Integral - Holístico
          p Entre los enfoques que tiene la agroecología se encuentran como lo indica Guzmán Casado et al. (2000), citado por García, D. (2017), un enfoque integral u holístico debido a que contempla la realidad como un todo indisoluble, que para ser comprendida y más aún transformada requiere de varias perspectivas. 
          

      .row.align-items-center(data-aos="fade-left")
        .col-md-8.mb-4.mb-md-0
          h3 Enfoque Multifuncional
          p Multifuncional porque el concepto en el entorno agrícola se emplea para indicar el carácter heterogéneo y complejo de la agricultura en el que refiere que los diversos elementos que componen el agroecosistema no solo están próximos, sino que interactúan de forma constante. Esta visión ha permitido entender y describir la naturaleza compleja de los agroecosistemas y su interacción continua con los ecosistemas naturales. Transformando la visión reduccionista de la agricultura. 
      
        .col-md-4
          figure
            img.img-a(src='@/assets/curso/temas/tema_1/img_13.png', alt='Texto que describa la imagen')

      .row.align-items-center(data-aos="fade-right")
        .col-md-4.mb-4.mb-md-0
          figure
            img.img-a(src='@/assets/curso/temas/tema_1/img_14.png', alt='Texto que describa la imagen')
        .col-md-8.text-left
          h3 Enfoque Multidisciplinaria y Transdiciplinario
          p También es multidisciplinaria y transdisciplinaria porque abarca y aplica el conocimiento de diversas áreas y disciplinas como la ecología, agronomía, botánica, geografía, antropología, sociología, entre otras. 

      .row.align-items-center(data-aos="fade-left")
        
        .col-md-8.mb-4.mb-md-0.text-left
          h3 Enfoque Territorial
          p Además, cuenta con un enfoque territorial, pues tiene en cuenta las particularidades tanto geográficas como la de los actores de los territorios, con el fin de potencializar las capacidades 

        .col-md-4.mb-4.mb-md-0
          figure
            img.img-a(src='@/assets/curso/temas/tema_1/img_15.png', alt='Texto que describa la imagen')

      .row.align-items-center(data-aos="fade-right")
        .col-md-4.mb-4.mb-md-0
          figure
            img.img-a(src='@/assets/curso/temas/tema_1/img_16.png', alt='Texto que describa la imagen')
        .col-md-8.text-left
          h3 Enfoque Multidimensional
          p Multidimensional porque se incorpora la agricultura y el ambiente con diferentes dimensiones, entre las que se encuentran la económica, social, cultural, ecológica y sociopolítica, las cuales requieren estar articuladas y permiten transformar los procesos agrícolas insostenibles a procesos agroecológicos, mediante el empleo de propuestas de acción. 

      .row.align-items-center(data-aos="fade-left")
        .col-md-8.mb-4.mb-md-0.text-left
          h3 Enfoque de Sostenibilidad
          p Y de sostenibilidad porqué busca la gestión sostenible de los recursos naturales, permite analizar la crisis mundial que atraviesa la agricultura y buscar soluciones mediante la creación de modelos alternativos que cuenten con la organización del sector y la articulación intersectorial.
        .col-md-4
          figure
            img.img-a(src='@/assets/curso/temas/tema_1/img_17.png', alt='Texto que describa la imagen')
      .row.align-items-center(data-aos="fade-right")
        .col-md-4.mb-4.mb-md-0
          figure
            img.img-a(src='@/assets/curso/temas/tema_1/img_18.png', alt='Texto que describa la imagen')
        .col-md-8.text-left
          h3 Enfoque Participativo
          p Participativo ya que reconoce e incluye los saberes tradicionales y ancestrales, los cuales mediante procesos participativos en conjunto con el conocimiento científico generan un contexto apropiado. 

    separador
    #t_1_2.titulo-segundo.color-secundario.mt-5
      h2 1.2 Aportes a los objetivos de desarrollo sostenible

    .row.justify-content-center.mb-5
      .col-lg-11(data-aos="zoom-out-left")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.m-left(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema_1/img_19.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0  La agroecología por medio de los diversos enfoques y adicionalmente a través de cinco ejes temáticos, logra aportar de forma directa a los objetivos del desarrollo sostenible establecidos por la ONU en la agenda 2030, por tanto, #[b es una herramienta que juega un papel fundamental para alcanzarlos], debido a que los enfoques agroecológicos están direccionados afrontar los orígenes y causales de problemáticas como la pobreza, el hambre, la desigualdad.

    p.mb-5(data-aos="zoom-out-right") Las cuales paradójicamente se presentar en mayor proporción en la comunidades y población que se encarga de la agricultura familiar y campesina, por medio la transformación de la agricultura y los sistemas alimentarios, la unión del conocimiento científico y los saberes locales, minimizando los intermediarios en la cadena de producción y comercialización y así lograr aportar a satisfacer las necesidades actuales y futuras.

    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-f.color-secundario.pt-4.px-5.mb-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          h4.text-regular.bloque-texto-f__texto.text-center Teniendo presente que se plantearon 17 objetivos de desarrollo sostenible y se caracterizan por ser universales, transformadores y civilizatorios; están enfocados a lograr porvenir sostenible, para lo cual contemplan e incluyen acciones para combatir problemáticas globales que se sufren la humanidad diariamente como son la pobreza, la desigualdad, la degradación ambiental, la violencia, las injusticias, entre otras.
      
        .titulo-sexto.color-secundario(data-aos="fade-up")
          h5 Figura 2. 
          | Objetivos de desarrollo sostenible
        img.img-a.mb-2(src='@/assets/curso/temas/tema_1/img_20.svg', alt='Texto que describa la imagen')(data-aos="fade-up")
        figcaption(data-aos="fade-up") 
          p.mb-0 Nota. La figura muestra los objetivos de pobreza, desigualdad, degradación ambiental, relacionadas con la agroecología. Organización de Naciones Unidas. (s.f.).

    h4(data-aos="fade-up") Ejes de la agroecología y relación con los ODS
    .fondo-3.p-5
      .row.justify-content-center.mb-5
        .col-lg-4.mb-4.mb-md-0(data-aos="fade-left")
          img.img-a(src='@/assets/curso/temas/tema_1/img_22.png', alt='Texto que describa la imagen')
        .col-lg-8(data-aos="fade-right")
          .bloque-texto-b.color-secundario.p-4
            .bloque-texto-b__texto
              p.mb-0 La agroecología por medio de los diversos enfoques y adicionalmente a través de cinco ejes temáticos, logra aporta de forma directa a los objetivos del desarrollo sostenible establecidos por la ONU en la agenda 2030, por tanto, es una herramienta que juega un papel fundamental para alcanzarlos, debido a que los enfoques agroecológicos están direccionados afrontar los orígenes y causales de problemáticas como la pobreza, el hambre, la desigualdad las cuales paradójicamente se presentar en mayor proporción en la comunidades y población que se encarga de la agricultura familiar y campesina,  por medio la transformación de la agricultura y los sistemas alimentarios, la unión del conocimiento científico y los saberes locales, minimizando los intermediarios en la cadena de producción y comercialización y así lograr aportar a satisfacer las necesidades actuales y futuras.

      p.mb-5 De forma específica, los cinco ejes temáticos de la agroecología contribuyen a diversos objetivos de desarrollo sostenible, al impulsar acciones encaminadas a la conservación y preservación de la biodiversidad, los recursos naturales (el agua, el suelo,), la aplicación de metodologías ecológicas y la mitigación de impactos ambientales, el  fomento de proceso cortos de comercialización, el aumento de mercados campesinos y de productos orgánicos lo que favorece la  seguridad alimentaria, la inclusión del enfoque diferencial, de género, la importancia de la mujer, la generación de valor agregado de los sistemas productivos, recuperación de prácticas y saberes ancestrales, entre otros.
      .titulo-sexto.color-secundario(data-aos="fade-up")
        h5 Figura 3. 
        | Ejes de la agroecología y relación con los ODS. Eje 1, eje 2, eje3.
      img.img-a.mb-2(src='@/assets/curso/temas/tema_1/img_23.svg', alt='Texto que describa la imagen')(data-aos="fade-up")
      separador

    #t_1_3.titulo-segundo.color-secundario.mt-5(data-aos="fade-up")
      h2 1.3  Procesos de transición o reconversión

    p.mb-5(data-aos="fade-up") Los enormes desafíos que plantea el desarrollo sostenible exigen que en los sistemas agroalimentarios comunes y predominantes se den grandes transformaciones porque, como lo indica Gliessman, S. (2018), están relacionados con la pérdida de servicios ecosistémicos, la degradación medio ambiental, la disminución de la seguridad alimentaria, los efectos nocivos en la salud y el aumento de las desigualdades sociales y económicas.

    .titulo-sexto.color-secundario(data-aos="fade-up")
      h5 Figura 4. 
      | 10 elementos de la agroecología.

    ImagenInfografica.color-primario.mb-5(data-aos="fade-up")
      template(v-slot:imagen)
        figure
          img.mb-3(src='@/assets/curso/temas/tema_1/img_24.svg', alt='Texto que describa la imagen')
          figcaption 
            p.mb-0 Nota. La imagen expone los 10 elementos de la agroecología planteados por Gliessman. Gliessman, S. (2018).

      .tarjeta.color-acento-botones.p-3.text-center.tarjeta_1(x="5%" y="2%" numero="+")
        .h5.mb-2 Diversidad: 
        p En la transformación agroecológica que permita asegurar la nutrición y seguridad alimentaria, como también proteger, cuidar y optimizar los recursos naturales.

      .tarjeta.color-acento-botones.p-3.text-center.tarjeta_1(x="24%" y="2%" numero="+")
        .h5.mb-2 Creación conjunta e intercambio de conocimientos:
        p Lo que permite mejores las innovaciones agrícolas, debido a que la creación se lleva a cabo a través de procesos participativos.

      .tarjeta.color-acento-botones.p-3.text-center.tarjeta_1(x="44%" y="2%" numero="+")
        .h5.mb-2 Sinergias: 
        p Estas permiten potencializar las funciones vitales de los sistemas alimentarios y los servicios ecosistémicos.

      .tarjeta.color-acento-botones.p-3.text-center.tarjeta_1(x="65%" y="2%" numero="+")
        .h5.mb-2 Eficiencia: 
        p Por medio de las prácticas agroecológicas se logra producir más empleando menos recursos.

      .tarjeta.color-acento-botones.p-3.text-center.tarjeta_1(x="84%" y="2%" numero="+")
        .h5.mb-2 Reciclaje: 
        p Permite alcanzar una producción con menores costos económicos y ambientales. 

      .tarjeta.color-acento-botones.p-3.text-center.tarjeta_1(x="14%" y="49%" numero="+")
        .h5.mb-2 Resiliencia:
        p A nivel de las personas, comunidades y ecosistemas, permite alcanzar sostenibilidad en los sistemas alimentarios y agrícolas.

      .tarjeta.color-acento-botones.p-3.text-center.tarjeta_1(x="33%" y="49%" numero="+")
        .h5.mb-2 Valores humanos y sociales:
        p Son fundamentales para obtener y mejorar los medios de vida, la equidad y el bienestar social y, a su vez alcanzar sistemas alimentarios y agrícolas sostenibles.

      .tarjeta.color-acento-botones.p-3.text-center.tarjeta_1(x="54%" y="49%" numero="+")
        .h5.mb-2 Cultura y tradiciones alimentarias:
        p Se aporta a la seguridad alimentaria y la nutrición al mismo tiempo que se mantiene la salud de los ecosistemas.

      .tarjeta.color-acento-botones.p-3.text-center.tarjeta_1(x="75%" y="49%" numero="+")
        .h5.mb-2 Gobernanza: 
        p Se debe gobernar de manera responsable y eficaz en todos los niveles (local, nacional y mundial)

      .tarjeta.color-acento-botones.p-3.text-center.tarjeta_1(x="94%" y="49%" numero="+")
        .h5.mb-2 Economía circular y solidaria: 
        p Permite obtener soluciones innovadoras para lograr vivir dentro de los límites de nuestro planeta y, al mismo tiempo, afianzar las bases sociales para el desarrollo inclusivo y sostenible. 

    h5.mb-5 Dimensiones y niveles del cambio y transición agroecológica

    p.mb-5 Es de resaltar, que existen como lo establece Gliessman, S. (2018), cuatro dimensiones y cinco niveles que son claves para la transición, los cuales están fundamentados en la visión multidimensional y holística de la agroecológica y, buscan lograr cambios en diferentes ámbitos que permitan aumentar la eficiencia y construir el sistema alimentario de forma más participativa, justa y amigable con el medio ambiente. Teniendo en cuenta que a la hora de evaluar la evolución no siempre es necesario avanzar de forma secuencial, debido a que estos niveles dependen del contexto del agroecosistema y del sistema agroalimentario. 

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-secundario(data-aos="fade-up")
          h5 Figura 5. 
          | Dimensiones y niveles del cambio y transición agroecológica.

    .fondo-4.p-4
      img.img-a.mb-2(src='@/assets/curso/temas/tema_1/img_26.svg', alt='Texto que describa la imagen')(data-aos="fade-up")

    separador

    #t_1_4.titulo-segundo.color-secundario.mt-5(data-aos="fade-up")
      h2 1.4 Cartografía

    p.mb-5(data-aos="fade-up") En los procesos de transición, la cartografía es una herramienta importante porque permite obtener una caracterización del territorio, con la finalidad identificar el potencial agrícola y productivo del suelo, mediante una evaluación cuantitativa y cualitativa por medio de una superposición de variables y el análisis de los servicios ecosistémicos, de las propiedades y componentes físicos (inclinación, temperatura, precipitación), socioeconómicos (avalúos del territorio, clasificación de predios por área) y legales, para luego tomar decisiones que permitan brindar un manejo sostenible a este recurso.

    .row.mb-5.justify-content-center
      .col-sm-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
        .tarjeta.tarjeta-slide.izquierda.color-secundario.tarjeta_1(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-4
              h2 Mapa del suelo
              p Nota. La imagen muestra los suelos del territorio colombiano. Servicio Geológico Colombiano (2020). 
            .tarjeta-slide__img.img-a(:style="{'background-image': `url(${require('@/assets/curso/temas/tema_1/img_27.svg')})`}")

      .col-sm-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-left")
        .tarjeta.tarjeta-slide.abajo.color-secundario.tarjeta_1(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema_1/img_29.svg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-4
              h2 Sistemas de Información Geográfica (SIG)
              p  En los procesos de transición, la cartografía es una herramienta importante porque permite obtener una caracterización del territorio, con la finalidad identificar el potencial agrícola y productivo del suelo, mediante una evaluación cuantitativa y cualitativa por medio de una superposición de variables y el análisis de los servicios ecosistémicos, de las propiedades y componentes físicos (inclinación, temperatura, precipitación), socioeconómicos (avalúos del territorio, clasificación de predios por área) y legales, para luego tomar decisiones que permitan brindar un manejo sostenible a este recurso. <br><br>Nota. Mapa de conflictos de uso del suelo. Hernández, A. Rojas, R. Sánchez, F. (2013). 

      .col-sm-6.col-xl-4.mb-4.mb-sm-0(data-aos="fade-left")
        .tarjeta.tarjeta-slide.derecha.color-secundario.tarjeta_1(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema_1/img_28.svg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-4
              h2 Cartografía de usos del suelo.
              p A la hora de realizar el proceso de cartografía del suelo, existen diversas metodologías y procedimientos, siendo la zonificación agroecológica un instrumento de gran importancia, porque como lo establece Alarcón Trujillo, V. F. (2021), está permite establecer el potencial del terreno o zona geográfica, lo que a su vez permite un óptimo aprovechamiento del suelo. La forma de realizar la zonificación incluye actividades que pueden ser clasificadas en 3 grupos, que son registro del uso de las tierras, la compilación de los registros e inventarios de tierras y la evaluación de aptitudes. <br><br>Nota. Gis&Beers. (2019). 

    separador

    #t_1_5.titulo-segundo.color-secundario.mt-5(data-aos="fade-up")
      h2 1.5  Análisis de riesgos

    .row.justify-content-center.mb-5
      .col-lg-11(data-aos="zoom-out-left")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.m-left(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema_1/img_30.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La agroecología por medio de la caracterización del territorio, logra identificar todas las problemáticas que se presentan, con el fin de minimizarlas, porque de acuerdo a la vulnerabilidad de los ecosistemas y el conflicto de los procesos geofísicos con la población, se  convierten en riesgos, los cuales pueden ser de diversos orígenes, entre los que se destacan afectaciones del clima y de las condiciones meteorológicas, desastres naturales, daños físicos, locativos, afectaciones económicas y financieras derivadas de fluctuaciones en los precios y procesos de mercadeo.

    .row.mb-5.mt-5
      .col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        img.img-a.mb-2(src='@/assets/curso/temas/tema_1/img_31.png', alt='Texto que describa la imagen')(data-aos="fade-up")
      .col-lg-8(data-aos="fade-left")
        p.mb-3 Existen medidas para reducir y controlar los riesgos, por medio de la minimización de la pérdida de activos físicos y capital ambiental, como también por medio de la implementación de instrumentos de planificación, como la zonificación ambiental, el ordenamiento territorial y los adecuados usos del suelo. Además, el proceso de análisis de los riesgos lo conforman tres fases que va desde el análisis de los factores de riesgo, para luego realizar una evaluación y por último diseñar medidas de mitigación. 

        .cajon.color-primario.p-4.mb-4.align-items-center
          p.mb-0 Por tanto, el proceso de gestión de riesgos empieza con la identificación de las amenazas y vulnerabilidades, las cuales ponen en riesgo la funcionalidad y estabilidad de las unidades funcionales del territorio; debido a que son una serie de eventos de origen natural vinculados con fenómenos atmosféricos, hidrológicos, geológicos, volcánicos, sísmicos, como por ejemplo huracanes, tornados, inundaciones, tsunamis, avalanchas, hundimientos, erupciones, sequías, lluvias o vientos intensos, temblores, terremotos, incendios, etc.

    .row.mb-5
      
      .col-lg-8.mb-4.mb-md-0(data-aos="fade-left")
        p.mb-3 Como también pueden ser de origen antrópico resultado de la sobreexplotación y/o degradación del medio ambiente y en general de la inapropiada relación con el entorno, lo que ocasiona deforestación, desertificación, deslizamientos, salinización de suelos, pérdida de biodiversidad, etc.

        .cajon.color-primario.p-4.mb-4
          p.mb-0 Luego de realizar el proceso adecuado de identificación, se requiere establecer el impacto generado por el evento en términos de área afectada, intensidad o número de víctimas, es decir la severidad, como también la frecuencia o número de veces que ocurre el evento en un determinado período de tiempo. Para con ello, lograr establecer acciones de carácter preventivo y correctivo que permitan no solo reducir la vulnerabilidad, sino que también anticiparse a su probabilidad de ocurrencia y a sus posibles consecuencias.

      .col-lg-4(data-aos="fade-right")
        img.img-a.mb-2(src='@/assets/curso/temas/tema_1/img_32.png', alt='Texto que describa la imagen')(data-aos="fade-up")



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    mostrarIndicador1: false,
    mostrarIndicador2: true,
    mostrarIndicador3: true,
    display1: true,
    display2: false,
    display3: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
  methods: {
    mostrarDiv(p) {
      if (p == 1) {
        this.$refs.myDiv1.style.display = 'inline'
        this.$refs.myDiv2.style.display = 'none'
        this.$refs.myDiv3.style.display = 'none'
        this.$refs.myDiv4.style.display = 'none'
        this.$refs.myDiv5.style.display = 'none'
      } else {
        if (p == 2) {
          this.$refs.myDiv1.style.display = 'none'
          this.$refs.myDiv2.style.display = 'inline'
          this.$refs.myDiv3.style.display = 'none'
          this.$refs.myDiv4.style.display = 'none'
          this.$refs.myDiv5.style.display = 'none'
        } else {
          if (p == 3) {
            this.$refs.myDiv1.style.display = 'none'
            this.$refs.myDiv2.style.display = 'none'
            this.$refs.myDiv3.style.display = 'inline'
            this.$refs.myDiv4.style.display = 'none'
            this.$refs.myDiv5.style.display = 'none'
          } else {
            if (p == 4) {
              this.$refs.myDiv1.style.display = 'none'
              this.$refs.myDiv2.style.display = 'none'
              this.$refs.myDiv3.style.display = 'none'
              this.$refs.myDiv4.style.display = 'inline'
              this.$refs.myDiv5.style.display = 'none'
            } else {
              this.$refs.myDiv1.style.display = 'none'
              this.$refs.myDiv2.style.display = 'none'
              this.$refs.myDiv3.style.display = 'none'
              this.$refs.myDiv4.style.display = 'none'
              this.$refs.myDiv5.style.display = 'inline'
            }
          }
        }
      }
    },
  },
}
</script>

<style lang="sass"></style>
