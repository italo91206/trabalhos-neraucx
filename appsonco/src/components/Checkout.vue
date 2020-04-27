<template>
    <v-app id="Checkout">
        <Menu></Menu>
        <v-layout row class="home-content">
            <v-flex xs12 sm12 md12 lg12 xl12>
                <b-row>
                    <b-col>
                        <a href="javascript: history.go(-1);" class="prev-nav">&laquo; Back to cart</a>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <h2>Checkout</h2>
                        <div class="secure_checkout">
                            Secure Checkout
                            <i class="fa fa-lock"></i>
                        </div>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="summary">
                        <div class="estimated_total">
                            <span>Estimated Total</span>
                            <span class="value">{{cartTotals.grand_total | toCurrency}}</span>
                        </div>
                        <div class="cart_link"></div>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <h2>Shipping Address</h2>
                        <Addresses ref="address_list"></Addresses>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <h2>Shipping Methods</h2>
                        <Addresses ref="address_list"></Addresses>
                    </b-col>
                </b-row>
            </v-flex>
        </v-layout>
    </v-app>
</template>

<script>
    import "@/css/home.css";
    import Menu from './Menu';
    import Addresses from './Checkout/Addresses';
    export default {
        name: 'Checkout',
        components: {
            Menu,
            Addresses
        },
        data () {
            return {
                cartData: {},
                addresses: [],
                cartTotals: [],
                totalsLoaded: false
            }
        },
        beforeMount() {
            this.loadCartData();
            this.loadAddresses();
        },
        methods: {
            loadCartData() {
                this.$http.get(
                    window.MagentoApiUrl + 'carts/' + localStorage.cart_id,
                    {
                        headers: {
                            Authorization: 'Bearer ' + window.MagentoToken
                        }
                    }
                ).then(response => {
                    this.cartData = response.data;
                    this.loadCartTotals();
                });
            },
            loadCartTotals() {
                this.$http.get(
                    window.MagentoApiUrl + 'carts/' + localStorage.cart_id + '/totals',
                    {
                        headers: {
                            Authorization: 'Bearer ' + window.MagentoToken
                        }
                    }
                ).then(response => {
                    this.cartTotals = response.data;
                    this.totalsLoaded = true;
                });
            },
            loadAddresses() {
                if (localStorage.isLoggedIn == 'true') {
                    this.$http.get(
                        window.MagentoApiUrl + 'customers/me',
                        {
                            headers: {
                                Authorization: 'Bearer ' + localStorage.MagentoToken
                            }
                        }
                    ).then(response => {
                        this.addresses = response.data.addresses;
                    });
                }
            }
        }
    }
</script>
