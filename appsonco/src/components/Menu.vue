<template>
    <div id="Menu" class="border-red">
        <v-toolbar class="bkg-white" light>
            <v-toolbar-title><img src="@/assets/logo.png" @click="goToPage('Home', {})" style="max-height: 40px"/> Sonco
                Perimeter Security
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-side-icon @click.stop="drawer = !drawer" class="text-red"></v-toolbar-side-icon>
        </v-toolbar>

        <v-navigation-drawer
            v-model="drawer"
            :mini-variant="mini"
            temporary
            light
            absolute
        >
            <v-list class="pt-0" dense>
                <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            <span v-if="this.isLoggedIn()">Welcome {{getCustomerName()}}!</span>
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="goToPage('Order', {})">
                    <v-list-tile-action>
                        <v-icon class="bkg-red text-white">fas fa-file-alt</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Order</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="goToPage('Stores', {})">
                    <v-list-tile-action>
                        <v-icon class="bkg-red text-white">fas fa-map-marker-alt</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Locations</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile class="signin-tile" v-if="!this.isLoggedIn()">
                    <v-list-tile-content>
                        <v-list-tile-title class="signin-title">
                            <a @click="goToPage('Login', {})" class="btn bkg-red border-rounded text-white">Sign In</a>
                            <a @click="goToPage('Register', {})" class="btn bkg-white border-red text-red border-rounded">Join
                                now</a>
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-divider v-if="this.isLoggedIn()"></v-divider>
                <v-list-tile @click="goToPage('Dashboard', {})" v-if="this.isLoggedIn()" class="logged_menu">
                    <v-list-tile-action>
                        <v-icon class="bkg-red text-white">fas fa-user</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>My Account</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="goToPage('MyOrders', {})" v-if="this.isLoggedIn()" class="logged_menu">
                    <v-list-tile-action>
                        <v-icon class="bkg-red text-white">fas fa-copy</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>My Orders</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="goToPage('MyQuotes', {})" v-if="this.isLoggedIn()" class="logged_menu">
                    <v-list-tile-action>
                        <v-icon class="bkg-red text-white">fas fa-calculator</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>My Quotes</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="goToPage('AddressBook', {})" v-if="this.isLoggedIn()" class="logged_menu">
                    <v-list-tile-action>
                        <v-icon class="bkg-red text-white">fas fa-route</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>My Addresses</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="doLogout()" v-if="this.isLoggedIn()" class="logged_menu">
                    <v-list-tile-action>
                        <v-icon class="bkg-red text-white">fas fa-door-open</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Sign Out</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

    </div>
</template>

<script>
    export default {
        name: 'Menu',
        props: ['title', 'cliente'],
        data() {
            return {
                drawer: null,
                mini: null
            }
        },
        methods: {
            goToPage(route, params) {
                this.$router.push({
                    name: route,
                    params: params
                });
            },
            isLoggedIn() {
                return (localStorage.isLoggedIn == 'true') ? true : false;
            },
            getCustomerName() {
                var name = '';
                if (this.isLoggedIn()) {
                    name = localStorage.customer_firstname;
                }

                return name;
            },
            doLogout() {
                localStorage.isLoggedIn = false;
                localStorage.MagentoToken = '';
                localStorage.customer_id = 0;
                localStorage.customer_firstname = '';
                localStorage.customer_lastname = '';
                this.$router.push({name: 'Home', params: {}});
            }
        }
    }
</script>
