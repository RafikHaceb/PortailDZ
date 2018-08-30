<template>
<div class="header elevation-3" hidden-sm-and-down>
    <v-layout>
        <v-flex md6 x12 class="logo-center">
            <router-link :to="'/' + this.profile.ID" class="logo" :class="{smallLogo:$vuetify.breakpoint.xsOnly}">
                <img alt="raison sociale"
                     :class="{smallLogo:$vuetify.breakpoint.xsOnly}"
                     :src="profile.logo">
            </router-link>
        </v-flex>
        <v-flex md3 hidden-sm-and-down>
            <v-layout align-left column>
                <p class="caption text-xs-left"><v-icon small>phone</v-icon> {{ profile.phone }}</p>
                <p class="caption text-xs-left"><v-icon small>print</v-icon> {{ profile.fax }}</p>
                <p class="caption text-xs-left"><v-icon small>email</v-icon> {{ profile.email }}</p>
                <p class="caption text-xs-left"><v-icon small>location_on</v-icon> {{ fullAddress }}</p>
            </v-layout>
        </v-flex>
        <v-flex md3 hidden-xs-only>
            <v-layout align-left column>
                <div v-for="timeSheet in profile.timeSheets" :key="timeSheet.name">
                    <p class="caption"><strong>{{ timeSheet.name }} :</strong></p>
                    <p class="caption text-xs-left">{{ timeSheet.value }}</p>
                </div>
            </v-layout>
        </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
    props : ['profile'],
    computed : {
        fullAddress: function () {
            if (!this.profile.address.number) {
                return '';
            }
            return this.profile.address.number +
                   ' ' +
                   this.profile.address.street +
                   ', '
                   + this.profile.address.town +
                   ', '
                   + this.profile.address.wilaya;
        }
    }
}
</script>

<style scoped>
p {
    margin-bottom: 5px; 
}
.header {
    height: 150px;
    max-height: 150px;
    margin-bottom: 10px;
    padding: 15px;
    background-color: #fff;
}
.header .layout {
    height: 100%;
}
.logo-center {
    display: flex;
}
.logo {
    display: flex;
}
.logo.smallLogo {
    margin-left: auto;
    margin-right: auto;
}
.logo img {
    height: 100px;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 20px;
}
.logo img.smallLogo {
    height: 75px;
    margin-left: auto;
    margin-right: auto;
}
</style>
