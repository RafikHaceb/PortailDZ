<template>
    <v-card class="pa-2 ml-3">
        <v-toolbar dark color="success" height="40px">
            <v-toolbar-title>{{ title | uppercase }}</v-toolbar-title>
        </v-toolbar>
        <v-card-text class="pa-2">
            <v-form>
                <v-text-field prepend-icon="person" name="login" label="Identifiant" color="success" type="text"></v-text-field>
                <v-text-field prepend-icon="lock" name="password" label="Mot de passe" color="success" type="password"></v-text-field>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success">Connexion</v-btn>
        </v-card-actions>
    </v-card> 
</template>
<script>
export default {
    data () {
        return {
            title : 'mon espace'
        }
    }
}
</script>
