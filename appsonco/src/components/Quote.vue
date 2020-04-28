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
                <div v-if="isEmpty(cartData)">
                    <p class="alert alert-danger">You have no items in your quote.</p>
                    <p>Click here to continue shopping</p>   
                </div>
                <div v-else>
                    <div class="cart-item" v-for="(item, index) in cartData.items">
                        <!-- <b-col><img :href="item.imageURL"/><b-col/> -->
                        <b-row>
                            <b-col>
                                <p>{{item.name}}</p>
                                <textarea>Insert any comments here....</textarea>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>Price<br/><span class="price">{{item.price | toCurrency}}</span></b-col>
                            <b-col>Quantity<br/><input type="text" v-bind:value="item.qty" /></b-col>
                        </b-row>
                    </div>
                    <button class="clear-quote">Clear Quote</button>
                </div>
                <b-row>
                    <div class="remarks">
                        <p>Remarks</p>
                        <textarea>Insert any comments here....</textarea>
                        <button class="submit-quote" @click="goNextStep()">Submit quote</button>
                    </div>
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
        },
        data() {
            return {
                cartData: {"id":15453,"created_at":"2020-04-28 11:43:44","updated_at":"2020-04-28 11:49:30","is_active":true,"is_virtual":false,"items":[{"item_id":14960,"sku":"SGBTL36","qty":1,"name":"Safeguard 36 Barrier Truckload Bundle","price":24900,"product_type":"simple","quote_id":"15453","extension_attributes":{"section":{"section_item_id":null,"section_id":null,"item_id":14960,"sort_order":null}}}],"items_count":1,"items_qty":1,"customer":{"email":null,"firstname":null,"lastname":null},"billing_address":{"id":31482,"region":null,"region_id":null,"region_code":null,"country_id":null,"street":[""],"telephone":null,"postcode":null,"city":null,"firstname":null,"lastname":null,"email":null,"same_as_billing":0,"save_in_address_book":0},"orig_order_id":0,"currency":{"global_currency_code":"USD","base_currency_code":"USD","store_currency_code":"USD","quote_currency_code":"USD","store_to_base_rate":0,"store_to_quote_rate":0,"base_to_global_rate":1,"base_to_quote_rate":1},"customer_is_guest":false,"customer_note_notify":true,"customer_tax_class_id":3,"store_id":4,"extension_attributes":{"shipping_assignments":[{"shipping":{"address":{"id":31483,"region":"Alberta","region_id":66,"region_code":"AB","country_id":"CA","street":[""],"telephone":null,"postcode":"T5J 0N3","city":null,"firstname":null,"lastname":null,"email":null,"same_as_billing":1,"save_in_address_book":0},"method":null},"items":[{"item_id":14960,"sku":"SGBTL36","qty":1,"name":"Safeguard 36 Barrier Truckload Bundle","price":24900,"product_type":"simple","quote_id":"15453","extension_attributes":{"section":{"section_item_id":null,"section_id":null,"item_id":14960,"sort_order":null}}}]}]}},
                cartTotals: [],
            }
        },
        beforeMout(){
            this.loadCartData();
        },
        methods: {
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
            isEmpty(obj) {
                for(var key in obj) {
                    if(obj.hasOwnProperty(key))
                        return false;
                }
                return true;
            },
            goNextStep(){
                this.$router.push({name: 'QuoteSuccess'});
            }
        }
    }
</script>

<style>
    .cart-item {
        border-bottom: 1px solid #c2c2c2;
        border-top: 1px solid #c2c2c2;
        padding: 10px 10px;
        margin: 10px 10px;
    }
    div.cart-item input[type="text"] {
        height: 36px;
        text-align: center;
        width: 45px;
        border: 1px solid #c2c2c2;
    }
    textarea {
        background: #fff;
        background-clip: padding-box;
        border: 1px solid #c2c2c2;
        border-radius: 1px;
        font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-size: 14px;
        height: auto;
        line-height: 1.42857143;
        margin: 0;
        padding: 10px;
        vertical-align: baseline;
        width: 100%;
        box-sizing: border-box;
        resize: vertical;
    }
    div.cart-item span.price{
        font-weight: 700;
    }
    button.clear-quote {
        background-color: #959595;
        width: 181px;
        height: 45px;
        border: 0px;
        color: #ffffff;
        font-size: 14px;
        font-weight: 700;
        line-height: 22px;
        text-align: center;
        text-transform: uppercase;
        margin-left: 205px;
    }

    .remarks {
        width: 100%;
        padding: 15px 15px;
        background: #f5f5f5;
        margin-top: 25px;
    }

    button.submit-quote{
        background: #7cc576;
        border: 1px solid #7cc576;
        color: #ffffff;
        cursor: pointer;
        display: inline-block;
        padding: 7px 15px;
        font-size: 1.4rem;
        box-sizing: border-box;
        vertical-align: middle;
        width: 100%;
        text-transform: uppercase;
        font-weight: 700;
    }
    
</style>
