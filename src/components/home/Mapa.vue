<template>
  <v-container id="mapa" tag="section">
     <v-img
     :src="require(`@/assets/imagenes/Las Retamas_Planimetria_001.jpg`)"
     contain
     >
        <v-row
          class="fill-height text-right ma-0"
        >
         <v-col align-self="end">
            <v-chip
              class="text-uppercase ma-0"
              color="primary"
              label
              small
              @click.stop=""
            >
              Abrir
            </v-chip>
          </v-col>
        </v-row>
     </v-img>
    
  </v-container>
</template>

<script>


export default {
    name: 'mapa',
    components:{
    }
}
</script>

<style>

</style>