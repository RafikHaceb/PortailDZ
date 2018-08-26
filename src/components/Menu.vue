<template>
    <v-toolbar color="success" height="50px">
      <v-toolbar-items :class="{smallBtns:$vuetify.breakpoint.xsOnly}" class="toolbar-center">
        <v-btn
           v-for="menuItem in menuItems"
           :key="menuItem.name"
           :to="menuItem.link"
           flat
           :large="$vuetify.breakpoint.mdAndUp">
          <span class="hidden-xs-only">{{ menuItem.name }}</span>
          <v-tooltip bottom class="hidden-sm-and-up">
            <v-icon slot="activator">{{ menuItem.icon }}</v-icon>
            <span>{{ menuItem.name }}</span>
          </v-tooltip>
        </v-btn>
      </v-toolbar-items>
  </v-toolbar>
</template>
<script>
export default {
  data () {
    return {
      menuItems: [
        { name : 'ACCUEIL', icon: 'home', link: '/' },
        { name : 'SERVICES', icon: 'list', link: '/services' },
        { name : 'MON ESPACE', icon: 'person', link: '/mon-espace' },
        { name : 'PRISE DE RDV', icon: 'event', link: '/rdv'  },
        { name : 'CONTACT', icon: 'contact_phone', link: '/contact' },
      ]
    };
  }
}
</script>

<style scoped>
.toolbar-center {
  margin-left: auto;
  margin-right: auto;
}
.smallBtns .v-btn {
  min-width: 48px;
}
.v-btn--active {
  border-bottom: 2px solid #FFF;
  color: #FFF;
}
</style>


