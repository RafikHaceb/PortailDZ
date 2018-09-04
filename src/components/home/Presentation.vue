<template>
    <v-card>
        <v-card-title primary-title>
            <div>
                <h4 class="headline mb-0 px-3">
                    {{ clientProfile.name | uppercase}}
                </h4>
                <read-more class="subheading pa-3 text-xs-justify" :text="formattedPresentation" :maxChars="calculatedChars" :height="'188px'"></read-more>
            </div>
        </v-card-title>
    </v-card>    
</template>
<script>
import { mapState } from 'vuex'
import readMore from './../utilities/readMore.vue'
export default {
    components : { readMore },
    computed: {
        formattedPresentation () {
            return this.clientProfile.presentation.replace(/\n/g, "<br />")
        },
        calculatedChars () {
            return this.$vuetify.breakpoint.mdAndUp ? 560 : 260
        },
        ...mapState(['clientProfile'])
    }
}
</script>

