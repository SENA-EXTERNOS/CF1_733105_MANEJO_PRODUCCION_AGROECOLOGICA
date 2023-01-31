<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p Apreciado aprendiz, bienvenido a este componente formativo, donde podrá apropiarse de los conceptos y acciones claves del conocimiento de los agroecosistemas y la conservación de los suelos. 

    p Realice un estudio responsable de todas las temáticas y potencie sus habilidades y saberes que le favorecerán en su experticia para la aplicación de prácticas de manejo ambiental, cultural, técnico y empresarial, del recurso “suelo”.

    p.mb-5 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:


    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
