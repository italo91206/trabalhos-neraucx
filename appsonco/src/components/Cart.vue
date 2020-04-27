<template>
    <v-app id="Cart">
        <Menu></Menu>
        <v-layout row class="home-content">
            <v-flex xs12 sm12 md12 lg12 xl12 v-if="cartData.items_qty > 0">
                <b-row>
                    <b-col>
                        <h2>Shopping Cart</h2>
                    </b-col>
                </b-row>
                <b-row v-for="(p,index) in cartTotals.items" :key="index">
                    <b-row class="item_data">
                        <b-col class="item_image col-4">
                            <img :src="getThumb(p)" alt="" v-if="thumbsLoaded" @click="goToProduct(p)">
                        </b-col>
                        <b-col xs9 sm9 md8 class="item_info col-8">
                            <h2 class="product_name" @click="goToProduct(p)">{{p.name}}</h2>
                            <div class="line"><b>SKU:</b> {{p.sku}}</div>
                            <div class="line" v-for="(option, optIndex) in p.options" :key="optIndex">
                                <b>{{option.label}}:</b> {{option.value}}
                            </div>
                        </b-col>
                    </b-row>
                    <b-row class="item_prices">
                        <b-col class="col-4">
                            <div class="line"><b>Price:</b> <span class="price">{{p.price | toCurrency}}</span></div>
                        </b-col>
                        <b-col class="col-3">
                            <div class="line"><b>Quantity:</b></div>
                            <div class="product_qty">
                                <span class="qty_control">
                                    <span class="plus" @click="increaseQty(p)"><i class="fa fa-plus"></i></span>
                                    <span class="minus" @click="decreaseQty(p)"><i class="fa fa-minus"></i></span>
                                </span>
                                <input type="text" id="qty" v-model="p.qty" />
                            </div>
                        </b-col>
                        <b-col class="col-4">
                            <div class="line"><b>Subtotal:</b> <span class="price">{{p.row_total | toCurrency}}</span></div>
                        </b-col>
                        <b-col class="col-1 item_actions">
                            <i class="fa fa-trash" @click="deleteItem(p)"></i>
                        </b-col>
                    </b-row>
                </b-row>
                <v-divider></v-divider>
                <b-row>
                    <b-col class="text-center">
                        <v-btn color="secondary" large class="update-cart" @click="updateCart()">Update Shopping Cart</v-btn>
                    </b-col>
                </b-row>
                <v-divider></v-divider>
                <b-row class="shipping_calculation">
                    <b-col class="col-12">
                        <h2 class="subtitle">Estimate shipping and taxes</h2>
                    </b-col>
                    <b-col class="col-12">
                        <b-row>
                            <b-col>
                                <v-select
                                    :items="countries"
                                    v-model="address.country_id"
                                    item-text="full_name_english"
                                    item-value="id"
                                    label="Country"
                                    flat
                                    @change="loadRegions()"
                                ></v-select>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <v-select
                                    :items="regions"
                                    v-model="address.region_id"
                                    item-text="name"
                                    item-value="id"
                                    label="Region"
                                    flat
                                ></v-select>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <v-text-field
                                    v-model="address.postcode"
                                    label="ZipCode"
                                    flat
                                ></v-text-field>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col class="col-12 text-center">
                                <v-btn color="secondary" large class="calculate-shipping" @click="calculateShipping()">Calculate Shipping</v-btn>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col class="col-12 shipping_result" v-if="shipping_rates.length > 0">
                        <b-row>
                            <b-col class="col-12">
                                <v-radio-group>
                                    <v-radio
                                        v-for="(rate,index) in shipping_rates"
                                        :key="index"
                                        :label="rate.carrier_title + ' - ' + toCurrency(rate.amount)"
                                        :value="rate.carrier_code"
                                        @click="saveShippingMethod(rate)"
                                    ></v-radio>
                                </v-radio-group>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
                <v-divider></v-divider>
                <b-row class="dicount_coupon">
                    <b-col class="col-12">
                        <h2 class="subtitle">Apply discount code</h2>
                    </b-col>
                    <b-col class="col-12 row">
                        <b-col class="col-8">
                            <v-text-field
                                v-model="coupon_code"
                                label="Coupon Code"
                                flat
                            ></v-text-field>
                        </b-col>
                        <b-col class="col-4">
                            <v-btn color="secondary" large class="apply-coupon" @click="applyCoupon()">Apply</v-btn>
                        </b-col>
                    </b-col>
                </b-row>
                <v-divider></v-divider>
                <b-row class="cart-totals totals" v-if="totalsLoaded">
                    <b-col>
                        <div class="line"
                             v-for="(total, index) in cartTotals.total_segments"
                             :key="index"
                             v-if="total.value && total.code != 'grand_total'"
                        >
                            <b>{{total.title}}</b>
                            {{total.value | toCurrency}}
                        </div>
                        <v-divider></v-divider>
                        <div class="line"><b>Order Total:</b> {{cartTotals.grand_total | toCurrency}}</div>
                    </b-col>
                    <b-col class="text-center">
                        <v-btn color="success" large class="add-cart-button" @click="goToCheckout()">Proceed to checkout</v-btn>
                    </b-col>
                </b-row>
            </v-flex>
            <v-flex xs12 sm12 md12 lg12 xl12 v-if="cartData.items_qty == 0">
                <b-row>
                    <b-col>
                        <h2>Shopping Cart</h2>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <div class="cart-empty">
                            <p>You have no items in your shopping cart.</p>
                            <p>Click <span @click="goToOrder()">here</span> to continue shopping.</p>
                        </div>
                    </b-col>
                </b-row>
            </v-flex>
        </v-layout>
        <Footer ref="footer"></Footer>
    </v-app>
</template>

<script>
    import "@/css/cart.css";
    import Menu from './Menu';
    import Footer from './FooterOrder';
    export default {
        name: 'Cart',
        components: {
            Menu,
            Footer
        },
        data() {
            return {
                cartData: {},
                cartTotals: {},
                thumbs: {},
                thumbsLoaded: false,
                countThumbsLoaded: 0,
                totalsLoaded: false,
                changedItems: [],
                countries: [],
                regions: [],
                address: {},
                shipping_rates: [],
                coupon_code: ''
            }
        },
        beforeMount() {
            this.address = {
                country_id: 0,
                region_id: 0,
                postcode: ''
            }
            this.loadCountries();
            this.loadCartData();
        },
        methods: {
            goToCheckout() {
                this.$router.push({
                    name: 'Checkout'
                });
            },
            goToOrder() {
                this.$router.push({
                    name: 'Order'
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
                    this.address = this.cartData.extension_attributes.shipping_assignments[0].shipping.address;
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
                    this.loadItemsData(response.data);
                    this.cartTotals = response.data;
                    this.totalsLoaded = true;
                });
            },
            loadItemsData(data) {
                for (var item of data.items) {
                    for (var cartItem of this.cartData.items) {
                        if (cartItem.item_id == item.item_id) {
                            item.sku = cartItem.sku;
                            break;
                        }
                    }
                    item.options = JSON.parse(item.options);
                    this.loadThumb(item);
                }
            },
            loadThumb(item) {
                this.$http.get(
                    window.MagentoApiUrl + 'products/' + item.sku + '/media',
                    {
                        headers: {
                            Authorization: 'Bearer ' + window.MagentoToken
                        }
                    }
                ).then(response => {
                    for (var thumb of response.data) {
                        if (thumb.types.includes('thumbnail')) {
                            this.thumbs[item.item_id] = thumb.file;
                            this.countThumbsLoaded++;
                            if (this.countThumbsLoaded == this.cartData.items.length) {
                                this.thumbsLoaded = true;
                            }
                            break;
                        }
                    }
                });
            },
            getThumb(product) {
                return window.MagentoMediaUrl + this.thumbs[product.item_id];
            },
            deleteItem(item) {
                this.$http.delete(
                    window.MagentoApiUrl + 'carts/' + localStorage.cart_id + '/items/' + item.item_id,
                    {
                        headers: {
                            Authorization: 'Bearer ' + window.MagentoToken
                        }
                    }
                ).then(response => {
                    this.loadCartData();
                });
            },
            increaseQty(item) {
                item.qty++;
                this.markAsChanged(item);
            },
            decreaseQty(item) {
                if(item.qty > 1) {
                    item.qty--;
                    this.markAsChanged(item);
                }
            },
            markAsChanged(item) {
                var found = false;
                for (var change of this.changedItems) {
                    if (change.item_id == item.item_id) {
                        change.qty = item.qty;
                        found = true;
                        break;
                    }
                }

                if (!found) {
                    this.changedItems.push({item_id: item.item_id, qty: item.qty});
                }
            },
            updateCart() {
                var changeCount = 0;
                for (var item of this.changedItems) {
                    this.$http.put(
                        window.MagentoApiUrl + 'carts/' + localStorage.cart_id + '/items/' + item.item_id,
                        {
                            cartItem: {
                                qty: item.qty,
                                quote_id: localStorage.cart_id,
                                item_id: item.item_id
                            }
                        },
                        {
                            headers: {
                                Authorization: 'Bearer ' + window.MagentoToken
                            }
                        }
                    ).then(response => {
                        changeCount++;
                        if (changeCount == this.changedItems.length) {
                            this.loadCartData();
                        }
                    });
                }
            },
            loadCountries() {
                this.$http
                    .get(this.myconfigs.api.url + 'directory/countries',{
                        headers: {
                            Authorization: 'Bearer ' + window.MagentoToken
                        }
                    })
                    .then(response => {
                        this.countries = response.data;
                        this.loadRegions();
                    });
            },
            loadRegions() {
                for (var countryIndex in this.countries) {
                    var country = this.countries[countryIndex];
                    if (country.id == this.address.country_id) {
                        this.regions = country.available_regions;
                        break;
                    }
                }
            },
            calculateShipping() {
                this.$http
                    .post(
                        this.myconfigs.api.url + 'carts/' + localStorage.cart_id + '/estimate-shipping-methods',
                        {
                            address: this.address
                        },
                        {
                        headers: {
                            Authorization: 'Bearer ' + window.MagentoToken
                        }
                    })
                    .then(response => {
                        this.shipping_rates = response.data;
                    });
            },
            applyCoupon() {

            },
            toCurrency(value) {
                if (typeof value !== "number") {
                    return value;
                }

                var formatter = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 2
                });

                return formatter.format(value);
            },
            saveShippingMethod(rate) {
                this.$http
                    .post(
                        this.myconfigs.api.url + 'carts/' + localStorage.cart_id + '/shipping-information',
                        {
                            addressInformation: {
                                shipping_address: this.address,
                                billing_address: this.address,
                                shipping_method_code: rate.method_code,
                                shipping_carrier_code: rate.carrier_code
                            }
                        },
                        {
                            headers: {
                                Authorization: 'Bearer ' + window.MagentoToken
                            }
                        })
                    .then(response => {
                        this.loadCartData();
                    });
            }
        }
    }
</script>
