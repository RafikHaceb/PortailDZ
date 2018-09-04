<template>
  <v-container fluid>
    <v-layout row wrap class="mb-2">
      <v-flex sm8 xs12>
        <presentation-cmp></presentation-cmp>
      </v-flex>
      <v-flex sm4 xs12 v-if="this.$vuetify.breakpoint.mdAndUp">
        <login-cmp></login-cmp>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="my-3">
      <v-flex sm8 xs12>
        <gallery-cmp></gallery-cmp>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import PresentationCmp from './Presentation.vue';
import GalleryCmp from './Gallery.vue';
import LoginCmp from './Login.vue';
export default {
  components : { PresentationCmp, GalleryCmp, LoginCmp }
}
</script>



