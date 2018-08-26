<template>
<v-app>
  <header-cmp></header-cmp>
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
export default {
    components: { HeaderCmp, MenuCmp, FooterCmp, MainCmp }
}
</script>

<style>
.application--wrap {
  padding: 20px 20px 0 20px;
}
</style>
