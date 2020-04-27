<template>
    <div id="FooterOrder">
        <v-layout>
            <v-flex xs9 sm9 md9 class="search-box">
                <input type="text"
                       placeholder="Type here and find your product"
                       id="q"
                       v-model="searchterm"
                       @blur="sendSearch()" />
                <button @click="sendSearch()">
                    <img src="@/assets/icons/magnifier.png" />
                </button>
            </v-flex>
            <v-flex xs3 sm3 md3 text-center>
                <span class="miniquote" @click="goToPage('Quote', {})">
                    <img src="@/assets/icons/calculator.png">
                    <span class="counter">[{{miniquoteCount}}]</span>
                </span>
                <span class="minicart" @click="goToPage('Cart', {})">
                    <img src="@/assets/icons/cart-icon.png">
                    <span class="counter">[{{minicartCount}}]</span>
                </span>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import '@/css/footer_order.css';
export default {
    name: 'FooterOrder',
    data () {
        return {
            minicartCount: 0,
            miniquoteCount: 0,
            searchterm: '',
            addedToCart: false
        }
    },
    beforeMount() {
        if (localStorage.minicartCount) {
            this.minicartCount = localStorage.minicartCount;
        }

        this.updateMinicartCount();
        this.updateMiniquoteCount(0);
    },
    methods: {
        backToOrder() {
            this.$router.push({
                name: 'Order',
                params:{}
            });
        },
        sendSearch() {
            if (this.searchterm != '') {
                this.$router.push({
                    name: 'Search',
                    params:{
                        searchterm: this.searchterm
                    }
                });
            }
        },
        updateMinicartCount() {
            this.$http.get(
                window.MagentoApiUrl + 'carts/' + localStorage.cart_id,
                {
                    headers: {
                        Authorization: 'Bearer ' + window.MagentoToken
                    }
                }
            ).then(response => {
                this.minicartCount = response.data.items_qty;
                localStorage.minicartCount = this.minicartCount;
            });
        },
        updateMiniquoteCount(qty) {
            this.miniquoteCount = qty;
        },
        goToPage(route, params) {
            this.$router.push({
                name: route,
                params: params
            });
        },
    }
}
</script>
