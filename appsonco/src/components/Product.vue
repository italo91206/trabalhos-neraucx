<template>
    <v-app id="Product" >
        <Menu></Menu>
        <v-layout row>
            <v-flex xs12 sm12 md12 lg12 xl12>
                <v-container fluid>
                    <b-row>
                        <b-col xs12 sm12 md12 lg12 xl12 class="product_view text-center">
                            <div class="product_image">
                                <Media :images="this.product.media_gallery_entries"></Media>
                            </div>
                        </b-col>
                    </b-row>
                    <Breadcrumb :product="this.product"></Breadcrumb>
                    <b-row>
                        <b-col xs12>
                            <h1 class="product_name">{{this.product.name}}</h1>
                            <v-divider light></v-divider>
                            <div class="product_price">{{this.product.price | toCurrency}}</div>
                            <div class="product_qty">
                                <span class="qty_control">
                                    <span class="plus" @click="increaseQty()"><i class="fa fa-plus"></i></span>
                                    <span class="minus" @click="decreaseQty()"><i class="fa fa-minus"></i></span>
                                </span>
                                <input type="text" id="qty" v-model="addToCartInfo.qty" />
                            </div>
                            <div class="clearfix"></div>
                            <v-divider light></v-divider>
                            <Options :product="this.product" v-on:setOptionValue="setOptionValue" v-if="this.hasOptions"></Options>
                            <ConfigurableOptions :product="this.product" v-on:setConfigurableOptionValue="setOptionValue" v-if="this.isConfigurable"></ConfigurableOptions>
                            <div class="product_description" v-html="this.parseHtml(this.description)"></div>
                        </b-col>
                    </b-row>
                </v-container>
            </v-flex>
        </v-layout>
        <v-btn color="success"
               large
               class="add-cart-button"
               :loading="loadingCart"
               :disabled="loadingCart"
               @click="addToCart()">
            Add to cart
            <template v-slot:loader>
                <span class="custom-loader">
                    <v-icon light>cached</v-icon>
                </span>
            </template>
        </v-btn>
        <v-btn color="success"
               large
               class="add-quote-button"
               :loading="loadingQuote"
               :disabled="loadingQuote"
               @click="addToQuote()">
            Add to quote
            <template v-slot:loader>
                <span class="custom-loader">
                    <v-icon light>cached</v-icon>
                </span>
            </template>
        </v-btn>
        <FooterOrder ref="footer"></FooterOrder>
    </v-app>
</template>

<script>
import "@/css/product.css";
import Menu from './Menu';
import FooterOrder from './FooterOrder';
import Breadcrumb from './Breadcrumb';
import Media from './Product/Media';
import Options from './Product/Options';
import ConfigurableOptions from './Product/ConfigurableOptions';
export default {
    name: 'Product',
    components: {
        Menu,
        FooterOrder,
        Breadcrumb,
        Media,
        Options,
        ConfigurableOptions
    },
    data () {
        return {
            product: {},
            description: '',
            addToCartInfo: {},
            initialPrice: 0,
            price: 0,
            hasOptions: false,
            isConfigurable: false,
            addToCartResponse: {},
            min_sale_qty: 0,
            max_sale_qty: 0,
            loader: null,
            loadingCart: false,
            loadingQuote: false
        }
    },
    props: ['prodsku'],
    beforeMount:function(){
        this.$http
            .get(window.MagentoApiUrl + 'products/' + this.prodsku, {})
            .then(response => {
                this.initProduct(response.data);
                if (response.data.type_id == 'configurable') {
                    this.loadConfigurableProduct(this.prodsku);
                }
            });
    },
    watch: {
        loader() {
            const l = this.loader
            this[l] = !this[l]

            setTimeout(() => (this[l] = false), 3000)

            this.loader = null
        }
    },
    methods: {
        initProduct(data) {
            this.product = data;
            this.addToCartInfo = {
                sku: this.product.sku,
                product_id: this.product.id,
                qty: 1,
                options: [],
                configurable_options: []
            };

            this.min_sale_qty = this.product.extension_attributes.stock_item.min_sale_qty;
            this.max_sale_qty = this.product.extension_attributes.stock_item.max_sale_qty;

            if (this.min_sale_qty > 0) {
                this.addToCartInfo.qty = this.min_sale_qty;
            }

            if (this.product.options.length > 0) {
                this.hasOptions = true;
            }

            if (this.product.type_id == 'configurable') {
                this.isConfigurable = true;
            }

            this.description = this.findAttribute(this.product, 'description');
        },
        loadConfigurableProduct(sku) {
            this.$http
                .get(window.MagentoApiUrl + 'configurable-products/' + this.prodsku + '/children')
                .then(response => {
                    this.product.children = response.data;
                    this.updatePrice();
                });
        },
        findAttribute(product, attributeName) {
            var productUrl = '';

            if (typeof product.custom_attributes != 'undefined') {
                for (var attr of product.custom_attributes) {
                    if (attr.attribute_code == attributeName) {
                        productUrl = attr.value;
                        break;
                    }
                }
            }

            return productUrl;
        },
        getImage(product) {
            var image = this.findAttribute(product, 'image');
            if (image) {
                image = MagentoMediaUrl + image;
            } // TODO: else para imagem placeholder

            return image;
        },
        setOptionValue(data) {
            var found = false;
            for(var option of this.addToCartInfo.options){
                if (option.option_id == data.option_id){
                    option.option_value = data.value_id;
                    found = true;
                    break;
                }
            }

            if (!found) {
                this.addToCartInfo.options.push({option_id: data.option_id, option_value: data.value_id});
            }
        },
        setConfigurableOptionValue(data) {
            var found = false;
            for(var option of this.addToCartInfo.configurable_options){
                if (option.option_id == data.option_id){
                    option.option_value = data.value_id;
                    found = true;
                    break;
                }
            }

            if (!found) {
                this.addToCartInfo.configurable_options.push({option_id: data.option_id, option_value: data.value_id});
            }
        },
        increaseQty() {
            if ((this.addToCartInfo.qty+1) <= this.max_sale_qty) {
                this.addToCartInfo.qty++;
            }
        },
        decreaseQty() {
            if(this.addToCartInfo.qty > 1 && (this.addToCartInfo.qty - 1) >= this.min_sale_qty) {
                this.addToCartInfo.qty--;
            }
        },
        addToCart() {
            this.loader = 'loadingCart';
            this.$http.post(
                window.MagentoApiUrl + 'carts/' + localStorage.cart_id + '/items',
                {
                    cartItem: {
                        quote_id: localStorage.cart_id,
                        qty: this.addToCartInfo.qty,
                        sku: this.addToCartInfo.sku,
                        name: this.product.name,
                        price: this.product.price,
                        product_type: this.product.type_id,
                        product_option: {
                            extension_attributes: {
                                custom_options: this.addToCartInfo.options,
                                configurable_item_options: this.addToCartInfo.configurable_options
                            }
                        }
                    }
                },
                {
                    headers: {
                        Authorization: 'Bearer ' + window.MagentoToken
                    }
                }
            ).then(response => {
                this.addToCartResponse = response.data;
                this.$refs.footer.updateMinicartCount();
            });
        },
        addToQuote() {
            this.loader = 'loadingQuote';
            this.$refs.footer.updateMiniquoteCount(this.addToCartInfo.qty);
        },
        updatePrice() {
            if (this.product.price == 0) {
                var minValue = 999999;
                var children = this.product.children;
                for (var child of children) {
                    if (child.price < minValue) {
                        minValue = child.price;
                    }
                }

                if (minValue != 999999) {
                    this.product.price = minValue;
                }
            }
        },
        parseHtml(str) {
            var finalHtml = str;
            finalHtml = finalHtml.replace(/&lt;/g,'<');
            finalHtml = finalHtml.replace(/&gt;/g,'>');
            finalHtml = finalHtml.replace(/{{media url=/g, this.myconfigs.api.mediaBaseUrl);
            finalHtml = finalHtml.replace(/}}/g, '');

            return finalHtml;
        }
    }
}
</script>
