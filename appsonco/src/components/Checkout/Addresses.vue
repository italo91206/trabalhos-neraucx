<template>
    <div id="Addresses">
        <div v-for="(address,index) in addresses" :key="index" class="address_data">
            <div class="line">{{address.firstname + ' ' + address.lastname}}</div>
            <div class="line">{{showStreet(address.street)}}</div>
            <div class="line">{{address.city + ', ' + address.region.region + ', ' + address.postcode}}</div>
            <div class="line">{{address.country_id}}</div>
            <div class="line">{{address.telephone}}</div>
            <button class="selectAddress" @click="selectAddress(address.id, index)">Ship here</button>
        </div>
        <div>
            <v-btn color="warning" large class="add-cart-button" @click="selectA()">+ New Address</v-btn>
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
            selectAddress(address_id, index) {
                var div = '.address_data:nth-child(' + index+1 + ')';
                if(jQuery(div).hasClass('selected-address'))
                    jQuery(div).removeClass('selected-address');
                else
                    jQuery(div).addClass('selected-address');
                console.log('Selecionado!');
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

<style>
    .selectAddress {
        float: none;
        margin-top: 10px;
        width: 100%;
        padding: 7px 15px;
        font-size: 1.4rem;
        line-height: 1.6rem;
        box-sizing: border-box;
        vertical-align: middle;
        background: #a1a1a1;
        color: #FFFFFF;
        cursor: pointer;
        display: inline-block;
        font-weight: 600;
    }
    button.add-cart-button.v-btn.v-btn--large.theme--light.warning {
        background-color: #032e5a !important;
        border: 0px !important;
        height: 41px !important;
        width: 100%;
        margin: 0 0 20px;
    }
    .address_data.selected-address {
        border-color: #bf2932 !important;
        border: 2px solid;
        border-bottom-width: 2px;
        padding: 15px 35px 15px 18px;
    }
</style>