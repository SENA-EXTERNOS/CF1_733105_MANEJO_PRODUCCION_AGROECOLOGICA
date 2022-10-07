<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 El Suelo

    .fondo-5.p-5
      .row.justify-content-center.mb-5
        .col-lg-11(data-aos="zoom-out-left")
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img.m-left(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema_2/img_1.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 El suelo, es uno de los recursos vitales que pueden sufrir mayor afectación o riesgos, debido a que esta capa que es la más superficial y visible del planeta cuenta con gran capacidad agroecológica y desempeña funciones vitales para la existencia las especies y el desarrollo ser humano; #[b posee gran variedad, diversas formas y puede ser de catalogado como rural o urbano dependiendo de la ubicación en la que se encuentre,] siendo un factor importante porque permite establecer su funcionalidad y las características que puede ofrecer para su utilización. Además, su estudio integra diversas disciplinas entre las que se encuentran la edafología, geología, ecología, agronomía, arquitectura, urbanismo, geografía, ordenamiento territorial, etc.

      .row.mb-5
        .col-lg-6.mb-4.mb-md-0(data-aos="fade-right")
          p Es un elemento esencial para la vida, ya que desarrolla funciones vitales como la producción de alimentos, moderación del ciclo hidrológico, soporte para las plantas, regulación del hábitat, fertilidad, procesamiento de la materia orgánica, retención y oferta de nutrientes; es decir, aporta no solo a la naturaleza, sino que también a la sociedad, las actividades humanas, el territorio y las culturas de las generaciones presentes y futuras.

          .cajon.color-secundario.p-4.mb-4
            p.mb-0 Su proceso de formación se da con el transcurrir de los siglos partir de la desintegración de rocas superficiales por la acción del agua, los cambios de temperatura y el viento, como también por la interacción del clima, el material orgánico, el relieve y los organismos vivos, lo que involucra diferentes variables biológicas, químicas y físicas. 
        .col-lg-6(data-aos="fade-left")
          .titulo-sexto.color-secundario
            h5 Figura 6. 
            | Capas del Suelo.

          .row.justify-content-center
            .col-lg-4
              .cajon.color-secundario.px-2.py-3.mb-4.text-center
                h4.mb-0 Perfil del Suelo

          img.img-a.mb-2(src='@/assets/curso/temas/tema_2/img_3.svg', alt='Texto que describa la imagen')(data-aos="fade-up")

    separador

    #t_2_1.titulo-segundo.color-secundario.mt-5(data-aos="fade-up")
      h2 2.1. Propiedades y composición

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

    separador

    #t_2_2.titulo-segundo.color-secundario.mt-5(data-aos="fade-up")
      h2 2.2 Perfil del Suelo

    p.mb-5(data-aos="fade-up") Todos los componentes del suelo están acomodados en zonas conocidas como horizontes, cada uno cuenta con características y propiedades propias que lo distinguen, diferenciado los tipos de horizontes y, con ello, conociendo el perfil edáfico, denominado también perfil del suelo. Estas capas identificadas en sentido vertical cuentan con un sistema propio de designación, empleando letras mayúsculas para identificar los 6 tipos de horizontes.

    .cajon_1.p-4
      .row.align-items-center
        .col-lg-6.mb-4.mb-md-0(data-aos="fade-right")
          img.img-a(src='@/assets/curso/temas/tema_2/img_4.svg', alt='Texto que describa la imagen')
        .col-lg-6(data-aos="fade-left")
          p El horizonte O es la capa más superficial y está conformada por materia orgánica proveniente de hojas, hongos, desechos animales y otros materiales total o parcialmente descompuestos. El horizonte A brinda elementos de nutrición a las plantas, se compone de una mezcla de partículas minerales con humus, raíces y organismos vivos. El horizonte E es una capa caracterizada por presentar un color claro, está compuesta por minerales y en ella ocurre el proceso de lixiviación. Por otra parte, el horizontes B, junto al C, tienen la mayor proporción de materia inorgánica y, por último, el horizonte R, en algunas ocasiones, no se considera suelo al estar formado, mayoritariamente, por roca que hace que sea difícil su penetración.

    separador

    #t_2_3.titulo-segundo.color-secundario.mt-5(data-aos="fade-up")
      h2 2.3 Problemáticas

    .cajon_2.p-5.mb-5
      .row.align-items-center
        .col-lg-8.mb-4.mb-md-0(data-aos="fade-right")
          p El suelo sufre problemáticas y afectaciones de diversas índoles u orígenes, y, pueden ser originadas por actividades tanto naturales como humanas. Las causas naturales están vinculadas con fenómenos como inundaciones, sequías, incendios, avalanchas, deslizamientos, temblores, entre otros, que generan deterioro, contaminación y pérdida de productividad. Sumado a estas, el desarrollo de las actividades de producción del ser humano como la agricultura, la ganadería, la extracción de minerales y de construcción, aportan, en mayor medida, a causar o a incrementar las problemáticas, porque al llevar a cabo prácticas agrícolas intensivas e inapropiados, procesos de deforestación, pastoreo intensivo, sobreexplotación o uso de agroquímicos, se causan daños irreparables al suelo.
        .col-lg-4(data-aos="fade-left")
          img.img-a(src='@/assets/curso/temas/tema_2/img_5.png', alt='Texto que describa la imagen')

    .fondo-6.p-4
      .row.align-items-center.justify-content-center.mb-5
        .col-lg-3.mb-4.mb-md-0(data-aos="fade-right")
          img.img-a(src='@/assets/curso/temas/tema_2/img_5.png', alt='Texto que describa la imagen')
        .col-lg-8(data-aos="fade-left")
          p Las sustancias contaminantes del suelo se acumulan y alcanzan niveles o concentraciones tóxicas para los organismos que habitan el suelo y dificultan, o imposibilitan, la realización de balances naturales, funciones regeneradoras y soporte de vida para los ecosistemas que normalmente lleva a cabo en él, inclusive, se produce una degradación física, química y biológica que se puede presentar en diversos grados que llegan a causar una pérdida total o parcial de su productividad.

      .row.justify-content-center.mb-3
        .col-lg-8
          .titulo-sexto.color-secundario(data-aos="fade-up")
            h5 Figura 7. 
            | Degradación del suelo
      img.img-a(data-aos="fade-left")(src='@/assets/curso/temas/tema_2/img_7.svg', alt='Texto que describa la imagen')



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
