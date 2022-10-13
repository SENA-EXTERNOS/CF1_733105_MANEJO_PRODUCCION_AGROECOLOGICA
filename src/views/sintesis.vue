<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-5.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.color-adicional-1.mb-5
          h5 Manejo de la producción agroecológica.
          br
          | Síntesis: CF1_ Conocimientos de los agroecosistemas y conservación de suelos.
      .col-lg-2
        img.img-a(src="@/assets/curso/temas/img_sin.png", alt="alt")

    p.mb-5 Aprendiz, a continuación, se presenta un mapa conceptual en donde podrá encontrar un resumen de lo visto en este componente.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      

</template>

<script>
export default {
  name: 'Sintesis',
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
