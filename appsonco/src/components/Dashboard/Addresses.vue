<template>
    <div id="Addresses">
        <div v-for="(address,index) in addresses" :key="index" class="address_data">
            <div class="line">{{address.firstname + ' ' + address.lastname}}</div>
            <div class="line">{{showStreet(address.street)}}</div>
            <div class="line">{{address.city + ', ' + address.region.region + ', ' + address.postcode}}</div>
            <div class="line">{{address.country_id}}</div>
            <div class="line">{{address.telephone}}</div>
            <div class="line" v-if="address.default_billing"><b>Default Billing Address</b></div>
            <div class="line" v-if="address.default_shipping"><b>Default Shipping Address</b></div>
            <div class="actions"><a @click="editAddress(address.id)">Edit Address</a></div>
        </div>
        <div class="no_addresses" v-if="addresses.length == 0">
            You have no addresses registered.
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
            editAddress(address_id) {
                this.$router.push({
                    name: 'EditAddress',
                    params: {
                        addressid: address_id
                    }
                })
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
            }
        }
    }
</script>
