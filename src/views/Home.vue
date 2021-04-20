<template>
  <div id="home">
    <banner />
    <about />
    <articles>
    </articles>

    <subscribe />
    
  </div>
</template>

<script>
  export default {
    name: 'Home',

    components: {
      About: () => import('@/components/home/About'),
      Articles: () => import('@/components/home/Articles'),
      Banner: () => import('@/components/home/Banner'),
      Social: () => import('@/components/home/Social'),
      Subscribe: () => import('@/components/home/Subscribe'),
      Mapa: () => import('@/components/home/Mapa')
    },
  }
</script>
