<template>
  <div id="mapa">
      <mapa />

  </div>
</template>

<script>
export default {
    name: 'App',

    components: {
      Mapa: () => import('@/components/home/Mapa')
    },
  }
</script>

<style>

</style>