<template>
    <v-card>
        <v-card-title primary-title>
            <div>
            <h4 class="headline mb-0 px-3">
                {{ clientProfile.name | uppercase}}
            </h4>
            <p class="subheading pa-3 text-xs-justify" v-html="formattedPresentation"></p>
            </div>
        </v-card-title>
    </v-card>    
</template>
<script>
import { mapState } from 'vuex'
export default {
    computed: {
        formattedPresentation () {
            return this.clientProfile.presentation.replace(/\n/g, "<br />")
        },
        ...mapState(['clientProfile'])
    },
    filters: {
        uppercase: function (value) {
            return value.toUpperCase();
        }
    }
}
</script>

