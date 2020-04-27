<template>
    <v-app id="Quote">
        <Menu></Menu>
        <v-layout row class="home-content">
            <v-flex xs12 sm12 md12 lg12 xl12>
                <b-row>
                    <b-col>
                        <h2>Request Quote</h2>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>

                    </b-col>
                </b-row>
            </v-flex>
        </v-layout>
        <Footer ref="footer"></Footer>
    </v-app>
</template>

<script>
    import "@/css/home.css";
    import Menu from './Menu';
    import Footer from './FooterOrder';
    export default {
        name: 'Quote',
        components: {
            Menu,
            Footer
        }
    }
</script>
