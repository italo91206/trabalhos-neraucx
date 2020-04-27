<template>
    <v-app id="NotFound">
        <v-content>
            <img src="@/assets/logo_1.png" alt="Sonco Crowd Control" style="margin-top:30px" class="logo">
            <br /><br /><br />
            <v-layout align-center justify-center>
                <h2 class="text-center">Ooops!</h2>
            </v-layout>
            <v-layout align-center justify-center>
                <p class="text-center">Sorry, this page is not available yet.</p>
            </v-layout>
        </v-content>
        <v-layout align-center justify-center>
            <v-btn text @click="backHome()">Back to Home</v-btn>
        </v-layout>
    </v-app>
</template>

<script>
    export default {
        name: 'NotFound',
        methods:{
            backHome() {
                this.$router.push({name: 'Home', params: {}});
            }
        }
    }
</script>
<style lang="scss">
    .btn__content{
        margin-top:-5px!important;
    }
    #NotFound {
        margin: 0;
    }
</style>
