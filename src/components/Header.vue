<template>
<div class="header elevation-3" hidden-sm-and-down>
    <v-layout>
        <v-flex md6 x12 class="logo-center">
            <router-link to="/">
                <img class="logo" alt="raison sociale" :class="{smallLogo:$vuetify.breakpoint.xsOnly}" src="./../assets/logo.png">
            </router-link>
        </v-flex>
        <v-flex md3 hidden-sm-and-down>
            <v-layout align-left column>
                <p class="caption text-xs-left"><v-icon small>phone</v-icon> +xx xxx xx xx xx</p>
                <p class="caption text-xs-left"><v-icon small>print</v-icon> +xx xxx xx xx xx</p>
                <p class="caption text-xs-left"><v-icon small>email</v-icon> xxxxxx@gmail.com</p>
                <p class="caption text-xs-left"><v-icon small>location_on</v-icon> n° rue xxxxx xxxxx , commune, wilaya</p>
            </v-layout>
        </v-flex>
        <v-flex md3 hidden-xs-only>
            <v-layout align-left column>
                <p class="caption"><strong>Dimanche - Jeudi :</strong></p>
                <p class="caption text-xs-left">08h - 12h | 13h - 17h</p>
                <p class="caption"><strong>Samedi :</strong></p>
                <p class="caption text-xs-left">09h - 12h</p>
            </v-layout>
        </v-flex>
    </v-layout>
  </div>
</template>
<style scoped>
p {
    margin-bottom: 5px; 
}
.header {
    height: 150px;
    max-height: 150px;
    margin-bottom: 10px;
    padding: 15px;
}
.header .layout {
    height: 100%;
}
.logo-center {
    display: flex;
}
.logo {
    height: 120px;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 20px;
}
.smallLogo {
    height: 75px;
    margin-left: auto;
    margin-right: auto;
}
</style>
