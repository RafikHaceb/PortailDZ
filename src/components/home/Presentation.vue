<template>
    <v-layout row wrap class="mb-2">
        <v-flex sm8 xs12>
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
        </v-flex>
        <v-flex sm4 xs12>
            <v-card>
            </v-card>
        </v-flex>
    </v-layout>
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

