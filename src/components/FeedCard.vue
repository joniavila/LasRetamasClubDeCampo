<template>
  <v-col
    cols="12"
    :md="size === 2 ? 6 : size === 3 ? 4 : undefined"
  >
    <base-card
      :height="value.prominent ? 450 : 350"
      color="grey lighten-1"
      dark
      
    >
      <v-img
        :src="require(`@/assets/articles/${value.hero}`)"
        height="100%"
      >
        <v-row
          v-if="!value.prominent"
          class="fill-height text-right ma-0"
        >
          <v-col cols="12">
            <v-chip
              label
              class="mx-0 mb-2 text-uppercase"
              color="grey darken-3"
              text-color="white"
              small
              @click.stop=""
            >
              {{ value.category }}
            </v-chip>
          </v-col>

          <v-col align-self="end">
            <v-chip
              class="text-uppercase ma-0"
              color="primary"
              label
              small
              @click.stop="abrirImagen(value)"
            >
              Abrir
            </v-chip>
          </v-col>
        </v-row>
      </v-img>
    </base-card>
    <!-- DIALOG PARA MOSTRAR IMAGEN -->
    <v-dialog
      v-model="dialog"
      fullscreen
    >
      <v-img
        v-if="imagenAmostrar"
        contain
        :src="require(`@/assets/articles/${imagenAmostrar.hero}`)"
        :aspect-ratio="16/9"
        >
      </v-img>
      <v-btn
        color="primary"
        btn
        @click="cerrarImagen()"
      >
        CERRAR
      </v-btn>
    </v-dialog>
  </v-col>
</template>

<script>
import {mapState} from 'vuex'

  export default {
    data(){
      return {
        imagenAmostrar: null,
        dialog: false
      }
    },
    name: 'FeedCard',
    computed: {
      ...mapState(['dialogImagen']),
    },
    props: {
      size: {
        type: Number,
        required: true,
      },
      value: {
        type: Object,
        default: () => ({}),
      },
    },
    methods:{
      abrirImagen(imagen){
        this.imagenAmostrar = imagen
        this.dialog = true
      },
      cerrarImagen(){
        this.dialog = false,
        this.imagenAmostrar = ''
      }
    }
  }
</script>

<style>
.v-image__image {
  transition: .3s linear;
}
</style>
