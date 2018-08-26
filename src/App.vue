<template>
  <v-app v-if="!clientProfile">
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
  <v-app v-else>
    <header-cmp :profile="clientProfile"></header-cmp>
    <menu-cmp></menu-cmp>
    <main-cmp></main-cmp>
    <footer-cmp></footer-cmp>
  </v-app>
</template>

<script>
import HeaderCmp from './components/Header.vue';
import MenuCmp from './components/Menu.vue';
import MainCmp from './components/Main.vue';
import FooterCmp from './components/Footer.vue';

import { mapState } from 'vuex'

export default {
    components: { HeaderCmp, MenuCmp, FooterCmp, MainCmp },
    computed: mapState([
      'clientProfile'
    ])
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
