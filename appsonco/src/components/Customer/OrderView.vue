<template>
    <v-app id="OrderView" class="dashboard">
        <Menu></Menu>
        <v-layout row class="home-content">
            <v-flex xs12 sm12 md12 lg12 xl12>
                <b-row>
                    <b-col>
                        <h1>Order # {{order.increment_id}}</h1>
                        <div class="label_status">{{order.status}}</div>
                        <div class="order_date">{{order.created_at | toDate}}</div>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="data_container">
                        <h2 class="section_title">Items Ordered</h2>
                        <div v-for="(item,index) in order.items" :key="index" class="order_data">
                            <div class="line"><b>Product Name:</b> {{item.name}}</div>
                            <div class="line"><b>SKU:</b> {{item.sku}}</div>
                            <div class="line"><b>Price:</b> {{item.price | toCurrency}}</div>
                            <div class="line"><b>Quantity:</b> {{item.qty_ordered}}</div>
                            <div class="line"><b>Subtotal:</b> {{item.row_total | toCurrency}}</div>
                        </div>
                        <div class="totals">
                            <div class="line"><b>Subtotal</b> {{order.subtotal | toCurrency}}</div>
                            <div class="line"><b>Shipping & Handling</b> {{order.shipping_amount | toCurrency}}</div>
                            <div class="line"><b>Grand Total (Excl.Tax)</b> {{(order.subtotal+order.shipping_amount) | toCurrency}}</div>
                            <div class="line"><b>Tax:</b> {{order.tax_amount | toCurrency}}</div>
                            <div class="line"><b>Grand Total (Inlc.Tax):</b> {{order.grand_total | toCurrency}}</div>
                        </div>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <div class="title">
                            <h2>Order Information</h2>
                        </div>
                        <div class="address subsection data_container">
                            <div class="subtitle">Shipping Address</div>
                            <div class="line">{{shipping_address.firstname + ' ' + shipping_address.lastname}}</div>
                            <div class="line">{{showStreet(shipping_address.street)}}</div>
                            <div class="line">{{shipping_address.city + ', ' + shipping_address.region + ', ' + shipping_address.postcode}}</div>
                            <div class="line">{{shipping_address.country}}</div>
                            <div class="line">T: {{shipping_address.telephone}}</div>
                        </div>
                        <div class="shipping_method subsection data_container">
                            <div class="subtitle">Shipping Method</div>
                            <div class="line">{{shipping_method}}</div>
                        </div>
                        <div class="address subsection data_container">
                            <div class="subtitle">Billing Address</div>
                            <div class="line">{{billing_address.firstname + ' ' + billing_address.lastname}}</div>
                            <div class="line">{{showStreet(billing_address.street)}}</div>
                            <div class="line">{{billing_address.city + ', ' + billing_address.region + ', ' + billing_address.postcode}}</div>
                            <div class="line">{{billing_address.country}}</div>
                            <div class="line">T: {{billing_address.telephone}}</div>
                        </div>
                        <div class="payment_method subsection data_container">
                            <div class="subtitle">Payment Method</div>
                            <div class="line">{{payment_method}}</div>
                        </div>
                    </b-col>
                </b-row>
            </v-flex>
        </v-layout>
        <Footer></Footer>
    </v-app>
</template>

<script>
import "@/css/dashboard.css";
import Menu from '../Menu';
import Footer from '../FooterOrder';
export default {
    name: 'OrderView',
    components: {
        Menu,
        Footer
    },
    props:['order_id'],
    data () {
        return {
            order: {},
            billing_address: {},
            shipping_address: {},
            shipping_method: {},
            payment_method: {}
        }
    },
    beforeMount () {
        this.loadOrder();
    },
    methods: {
        loadOrder() {
            this.$http
                .get(this.myconfigs.api.url + 'orders/' + this.order_id,{
                    headers: {
                        Authorization: 'Bearer ' + window.MagentoToken
                    }
                })
                .then(response => {
                    this.order = response.data;
                    this.billing_address = this.order.billing_address;
                    this.shipping_address = this.order.extension_attributes.shipping_assignments[0].shipping.address;
                    this.shipping_method = this.order.shipping_description;
                    this.payment_method = this.order.extension_attributes.payment_additional_info[0].value;
                });
        },
        showStreet(streetData) {
            return streetData.join(',');
        },
    }
}
</script>
