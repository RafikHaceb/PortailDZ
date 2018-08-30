<template>
  <v-app v-if="clientProfile">
    <header-cmp :profile="clientProfile"></header-cmp>
    <menu-cmp :profile="clientProfile"></menu-cmp>
    <main-cmp></main-cmp>
    <footer-cmp></footer-cmp>
  </v-app>
  <v-app v-else>
    <v-container>
      <v-flex column md12 class="flex-full-height">
        <v-layout column class="text-md-center layout-full-height">
          <v-progress-circular
            :size="70"
            :width="7"
            color="success"
            indeterminate
            class="progress-center"
          ></v-progress-circular>
        </v-layout>
      </v-flex>
    </v-container>
  </v-app>
</template>

<script>
import HeaderCmp from './Header.vue';
import MenuCmp from './Menu.vue';
import MainCmp from './Main.vue';
import FooterCmp from './Footer.vue';

import { mapState } from 'vuex'

export default {
    components: { HeaderCmp, MenuCmp, FooterCmp, MainCmp },
    computed: mapState([
      'clientProfile'
    ]),
    created () {
        const client = this.$route.params.clientID;
        this.$store.dispatch('LOAD_CLIENT_PROFILE', client)
    }
}
</script>

<style>
.application--wrap {
  padding: 20px 20px 0 20px;
}
.flex-full-height, .layout-full-height {
  height: 100%;
}
.progress-center {
  margin: auto;
}
</style>
