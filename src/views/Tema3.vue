<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Manejo ecológico del suelo

    .row.mb-5
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema_3/img_1.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-4.text-center.tarjeta_2
              h4 Manejo ecológico del suelo
              p El manejo ecológico del suelo hace referencia a los cuidados y medidas necesarias para un uso apropiado e idóneo de este recurso natural. A través del empleo eficiente de los recursos naturales y humanos, del capital y de la producción disponibles, se espera preservar y minimizar los impactos negativos que causan las actividades agrícolas, pecuarias y demás intervenciones antrópicas, e ,igualmente, se pretende conservar y mantener condiciones óptimas que favorezcan la fertilidad o que ofrezcan condiciones propicias para la vida de diversas especies. 

      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema_3/img_2.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-4.text-center.tarjeta_3
              h4 Desarrollo sostenible del suelo
              p Los cuidados y los buenos manejos logran un manejo ecológico y un desarrollo sostenible del suelo, estos se basan en aspectos sociales, ecológicos, ambientales, políticos, pero incorporan, a su vez, prácticas y saberes ancestrales, alcanzando así una producción agropecuaria sustentable y equilibrada que aporta significativamente al bienestar del ser humano y de los ecosistemas. Al realizar un adecuado manejo ecológico, se obtiene beneficios que se ven reflejados en la calidad de los suelos, cultivos con mayores rendimientos y más saludables, reducción de los efectos negativos generados al medio ambiente derivados de prácticas como la deforestación, el uso de agroquímicos y demás métodos empleados en la agricultura convencional e industrial.

      .col-sm-6.col-xl-4.mb-4.mb-sm-0
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema_3/img_3.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-4.text-center.tarjeta_4
              h4 Diversificación de sistemas agroecológicos
              p Con el manejo ecológico de los suelos se logra la diversificación de los sistemas agroecológicos, la sustitución de fertilizantes, de plaguicidas, de insecticidas y demás insumos químicos, se reemplazan por prácticas y materiales ecológicos, obteniendo producciones sostenibles que favorecen la seguridad alimentaria y garantizan la restauración de los suelos y el medioambiente.

    separador

    #t_3_1.titulo-segundo.color-secundario.mt-5(data-aos="fade-up")
      h2 3.1 Técnicas culturales 

    .row.justify-content-center.mb-5
      .col-lg-11(data-aos="zoom-out-left")
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.m-left(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema_3/img_4.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 A lo largo del proceso de producción agrícola, se requiere realizar actividades que van desde la preparación del terreno y la siembra, hasta acciones de carácter preventivo, de manejo y control, para el desarrollo fisiológico, para el manejo de poblaciones asociadas o para el manejo de plagas y enfermedades. Para realizar estas actividades se deben tener en cuenta los procedimientos y buenas prácticas agrícolas, el empleo de métodos, herramientas y equipos adecuados, lograr y la implementación de un manejo agroecológico idóneo, estableciendo prácticas agrícolas sostenibles en diferentes ecosistemas.

    p.mb-5(data-aos="zoom-out-right") Estas técnicas están enfocadas a lograr la conservación y protección del suelo, siendo un factor importante para la agricultura debido a que un suelo en óptimas condiciones garantizara un rendimiento ideal de los cultivos instalados en él. El efecto de la conservación de los suelos, a menudo, no genera resultados inmediatos, sin embargo, a largo plazo, se reflejan efectos como mantenimiento de la fertilidad, minimización de la contaminación y la erosión, entre otros.

    .row.justify-content-center.mb-3
      .col-lg-8
        .titulo-sexto.color-secundario(data-aos="fade-up")
          h5 Figura 8. 
          | Beneficios de las técnicas culturales y manejo ecológico del suelo
    img.img-a(data-aos="fade-left")(src='@/assets/curso/temas/tema_3/img_5.svg', alt='Texto que describa la imagen')


    separador

    #t_3_2.titulo-segundo.color-secundario.mt-5(data-aos="fade-up")
      h2 3.2 Prácticas de conservación 

    p Es importante resaltar que el éxito en la conservación de los suelos radica en la utilización de materias orgánicas, un factor primordial que determina la productividad mediante los procesos de descomposición y humedad requeridos para que los microorganismos proporcionen nutrientes necesarios a los suelos. 

    p.mb-5 Estas actividades se pueden realizar de forma que no generen grandes impactos negativos con la aplicación de técnicas como:

    .row.justify-content-center
      .col-lg-6.mb-4.mb-md-0(data-aos="fade-right")
        ul.lista-ul
          li 
            i.fas.fa-angle-right
            | Rotación de cultivos.
            li 
              i.fas.fa-angle-right
              | Labranza mínima o de conservación.
            li 
              i.fas.fa-angle-right
              | Siembra directa.
            li 
              i.fas.fa-angle-right
              | Reemplazo de fertilizantes, plaguicidas, insecticidas y demás agroquímicos.
            li 
              i.fas.fa-angle-right
              | Uso de controladores biológicos.
            li 
              i.fas.fa-angle-right
              | Conservación de la biodiversidad y organismos del suelo.
            li 
              i.fas.fa-angle-right
              | Manejo ecológico de plagas.
            li 
              i.fas.fa-angle-right
              | Comprensión del rol ecológico de las malezas.
            li 
              i.fas.fa-angle-right
              | Uso de variedades de alta competitividad.
            li 
              i.fas.fa-angle-right
              | Adecuados arreglos espaciales y densidad de siembra.
            li 
              i.fas.fa-angle-right
              | Policultivos o cultivos asociados.
            li 
              i.fas.fa-angle-right
              | Cultivos de cobertura.

      .col-lg-4
        img.img-a(data-aos="fade-left")(src='@/assets/curso/temas/tema_3/img_6.png', alt='Texto que describa la imagen')

    p Aprendiz, se le aconseja indagar más sobre las prácticas de conservación, para ello puede ver el siguiente video:

    .row.mb-5
      .col-lg-7
        a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=ptMa9zKxUzA" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto.txt_link
            p.txt_link #[b.txt_link Enlace web]. Conservación del suelo: Conozca una propuesta basada en la agricultura regenerativa - La finca de Hoy.

    separador

    #t_3_3.titulo-segundo.color-secundario.mt-5(data-aos="fade-up")
      h2 3.3 Formatos y registros

    .row.justify-content-center
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img(data-aos="fade-rigth")
            img(src='@/assets/curso/temas/tema_3/img_7.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.tar_1(data-aos="fade-left")
            .p-4
              p  A través del diligenciamiento de formatos y registros, es posible llevar a cabo la trazabilidad de procesos que pueden ser consultados para realizar evaluaciones o controles a las actividades efectuadas. 

              p.mb-0 La información resultante de cada punto de intervención en campo debe ser registrada en los formatos que hayan sido elaborados por la parte administrativa para llevar un control de las acciones y de los tiempos de cada actividad, así, se pueden establecer los indicadores de cumplimiento y de efectividad necesarios para evaluar la eficacia del proceso. 


    .fondo-7.p-4.mb-5
      .row.justify-content-center 
        .col-lg-10
          p.mb-5 Los tipos de formatos pueden ser abiertos o cerrados, el primero dispone la información al público, no es de carácter privado y la información registrada es básica y precisa. El segundo, contiene información más detallada de carácter privado (costos, cantidades) y es de dominio directivo, se suele utilizar para evaluaciones y controles internos de las empresas. Es importante mencionar que esta información puede ser requerida por entes de control y la empresa estará en obligación de suministrarla.

          .row.justify-content-center.mb-3
            .col-lg-11
              .titulo-sexto.color-secundario(data-aos="fade-up")
                h5 Figura 9. 
                | Ejemplos formato y registro de actividades
          .row.justify-content-center.mb-5
            .col-lg-10
              img.img-a.mb-3(data-aos="fade-left")(src='@/assets/curso/temas/tema_3/img_9.svg', alt='Texto que describa la imagen')
              figcaption.fig
                p.mb-0 Nota. La imagen ejemplifica un formato de registro de actividades. Cacao Móvil (s.f.).

    .row.justify-content-center 
        .col-lg-10
          .cajon.color-secundario.p-4.mb-4
            p.mb-0 Para concluir el componente formativo denominado “Conocimientos de los agroecosistemas y conservación de suelos.”  donde se abordaron temas como son, enfoques, elementos, principios, prácticas ancestrales o de manejo, procesos de transición componentes del suelo, así como manejo de cartografía y sistemas de información, que nos permite conocer y  entender los conceptos básicos de los agroecosistemas y las prácticas de conservación de suelos para el manejo de la producción agroecológica. De esta manera damos fin al componente e invitamos a los aprendices a leer detenidamente el capítulo y realizar las actividades incluidas para evaluar sus conocimientos.



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
