<template>
  <v-container
    id="subscribe"
    tag="section"
  >
    <base-card
      color="rgba(203, 170, 92, 0.51)"
      class="pa-3"
    >
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="5"
          >
            <base-subheading class="mb-3">
              Solicitar informacion
            </base-subheading>

            <p>
              Ingrese su mail en esta seccion y nosotros nos contactaremos con usted para brindarle mas informacion
              o envienos un correo con su consulta para recibir informacion especifica!
            </p>

            <v-row class="pa-2">
              <v-responsive
                class="overflow-visible mr-2"
                max-width="400"
              >
                <v-text-field
                  hide-details
                  label="E-mail"
                  solo
                />
              </v-responsive>

              <v-btn
                :block="$vuetify.breakpoint.xsOnly"
                class="ma-0"
                color="secondary"
                style="height: 48px"
              >
                Enviar
              </v-btn>
            </v-row>
          </v-col>

          <v-col
            cols="12"
            md="6"
            offset-md="1"
          >
            <base-subheading>contacto</base-subheading>

            <v-list class="transparent">
              <v-list-item>
                <v-list-item-avatar
                  color="primary"
                >
                  <v-icon
                    class="elevation-4"
                    dark
                  >
                    mdi-email-outline
                  </v-icon>
                </v-list-item-avatar>

                <v-list-item-title>EMAIL</v-list-item-title>
              </v-list-item>

              <v-list-item>

                <v-list-item-title>
                  lasretamasclubdecampo@gmail.com
                </v-list-item-title>

              </v-list-item>

            </v-list>

          </v-col>
        </v-row>
      </v-container>
    </base-card>
  </v-container>
</template>

<script>
  export default {
    name: 'HomeSubscribe',
  }
</script>
