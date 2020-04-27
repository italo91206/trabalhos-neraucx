<template>
    <v-app id="Home" >
        <Menu></Menu>
        <v-layout row class="home-content">
            <v-flex xs12 sm12 md12 lg12 xl12>
                <b-row>
                    <b-col>
                        <img src="@/assets/home/banner1.jpg" alt="" />
                        <p>
                            Create the biggest advertising impact by utilizing
                            Sonco products for branding purposes. Custom
                            barricade covers turn barrier into billboards that
                            facilitate brand-new revenue screens.
                        </p>
                        <div class="buttons">
                            <a href="#" class="btn bkg-red text-white border-rounded" @click="goToPage('Register',{})">Join now</a>
                            <a @click="goToPage('Subcategory', {caturl: 'barricade-covers'})" class="btn bkg-white border-red border-rounded text-red">Learn more</a>
                        </div>
                    </b-col>
                </b-row>
                <v-divider></v-divider>
                <b-row>
                    <b-col>
                        <img src="@/assets/home/banner_stop_covid.jpg" alt="" @click="goToPage('Promotion',{promourl: 'open-for-business'})" />
                        <p></p>
                        <div class="buttons">
                            <a href="#" class="btn bkg-blue border-rounded text-white" @click="goToPage('Promotion',{promourl: 'open-for-business'})">Let's go</a>
                        </div>
                    </b-col>
                </b-row>
            </v-flex>
        </v-layout>
        <Footer></Footer>
    </v-app>
</template>

<script>
    import "@/css/home.css";
    import Menu from './Menu';
    import Footer from './FooterHome';
    export default {
        name: 'Home',
        components: {
            Menu,
            Footer
        },
        methods: {
            goToPage(route, params) {
                this.$router.push({
                    name: route,
                    params: params
                });
            }
        }
    }
</script>
