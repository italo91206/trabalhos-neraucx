<template>
    <div id="Addresses">
        <div v-for="(address,index) in addresses" :key="index" class="address_data" @click="">
            <div class="line">{{address.firstname + ' ' + address.lastname}}</div>
            <div class="line">{{showStreet(address.street)}}</div>
            <div class="line">{{address.city + ', ' + address.region.region + ', ' + address.postcode}}</div>
            <div class="line">{{address.country_id}}</div>
            <div class="line">{{address.telephone}}</div>
        </div>
        <div>
            <v-btn color="warning" large class="add-cart-button" @click="addAddress()">+ New Address</v-btn>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Addresses',
        data() {
            return {
                addresses: []
            }
        },
        beforeMount() {
            this.loadAddresses();
        },
        methods: {
            selectAddress(address_id) {

            },
            showStreet(streetData) {
                return streetData.join(',');
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
            newAddress() {
                this.$router.push({
                    name: 'NewAddress',
                    params: {
                        inCheckout: 1
                    }
                })
            }
        }
    }
</script>
