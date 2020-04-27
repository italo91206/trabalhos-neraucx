<template>
    <div id="AddressBook" class="dashboard">
        <Menu></Menu>
        <v-layout row class="home-content">
            <v-flex xs12 sm12 md12 lg12 xl12>
                <b-row>
                    <b-col>
                        <a href="javascript: history.go(-1);" class="prev-nav">Previous</a>
                        <br />
                        <h1>My Address Book</h1>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <Addresses ref="address_list"></Addresses>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="text-center">
                        <v-btn @click="newAddress()" class="btn bkg-red border-rounded text-white">New Address</v-btn>
                    </b-col>
                </b-row>
            </v-flex>
        </v-layout>
        <Footer></Footer>
    </div>
</template>

<script>
    import "@/css/dashboard.css";
    import Menu from '../Menu';
    import Footer from '../FooterOrder';
    import Addresses from '../Dashboard/Addresses';
    export default {
        name: 'AddressBook',
        components: {
            Menu,
            Footer,
            Addresses
        },
        methods: {
            newAddress() {
                this.$router.push({
                    name: 'NewAddress',
                    params: {}
                })
            }
        }
    }
</script>
