<template>
    <v-container fluid>
      <presentation-cmp></presentation-cmp>
      <gallery-cmp></gallery-cmp>
    </v-container>
</template>
<script>
import { mapState } from 'vuex'
import PresentationCmp from './Presentation.vue';
import GalleryCmp from './Gallery.vue';
export default {
  components : { PresentationCmp, GalleryCmp }
}
</script>



