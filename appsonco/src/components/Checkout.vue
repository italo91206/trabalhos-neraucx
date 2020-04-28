<template>
    <v-app id="Checkout">
        <Menu></Menu>
        <v-layout row class="home-content">
            <v-flex xs12 sm12 md12 lg12 xl12>
                <b-row>
                    <b-col>
                        <a href="javascript: history.go(-1);" class="prev-nav">&laquo; Back to cart</a>
                    </b-col>
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
                        <ShippingMethods/>
                    </b-col>
                </b-row>
                <b-row>
                    <button class="red-button" v-on:click="goNextStep()">
                        <span>Next</span>
                    </button>
                </b-row>
            </v-flex>
        </v-layout>
    </v-app>
</template>

<script>
    import "@/css/home.css";
    import Menu from './Menu';
    import Addresses from './Checkout/Addresses';
    import ShippingMethods from './Checkout/ShippingMethods';

    export default {
        name: 'Checkout',
        components: {
            Menu,
            Addresses,
            ShippingMethods
        },
        data () {
            return {
                cartData: {},
                addresses: [],
                cartTotals: [],
                totalsLoaded: false,
                methodSelected: true,
                addressSelected: true
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
            },
            goNextStep(){
                if(this.methodSelected && this.addressSelected){
                    console.log('OK!');
                    this.$router.push({name: 'CheckoutSuccess'});
                }
            }
        }
    }
</script>


<style>
    .summary.col {
        background: #f4f4f4;
        border-bottom: 1px solid #ccc;
        border-top: 1px solid #ccc;
        padding: 18px 15px;
        margin: 15px 0;
    }
    .address_data {
        border-bottom: 1px solid #ccc;
        padding: 0 0 15px;
        width: 100%;
        font-size: 14px;
        line-height: 30px;
        transition: .3s border-color;
        display: inline-block;
        position: relative;
        vertical-align: top;
        word-wrap: break-word;
    }
    button.red-button {
        background-color: #e62332 !important;
        border: none !important;
        width: 194px !important;
        height: 52px !important;
        margin-bottom: 20px !important;
    }
    button.red-button>span {
        text-transform: uppercase;
        font-family: "Open Sans", Helvetica, Arial;
        color: #ffffff;
        font-size: 17px;
        font-weight: 700;
        line-height: 25px;
        text-align: center;
    }
</style>