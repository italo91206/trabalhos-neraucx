<template>
    <v-app id="Login">
        <Menu></Menu>
        <v-layout row class="home-content form-container">
            <v-flex xs12 sm12 md12 lg12 xl12>
                <b-row>
                    <b-col>
                        <h2>Edit Address</h2>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <v-text-field
                            v-model="address.firstname"
                            label="Firstname"
                            flat
                        ></v-text-field>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <v-text-field
                            v-model="address.lastname"
                            label="Lastname"
                            flat
                        ></v-text-field>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <v-text-field
                            v-model="address.street[0]"
                            label="Street"
                            flat
                        ></v-text-field>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <v-text-field
                            v-model="address.street[1]"
                            label="Street"
                            flat
                        ></v-text-field>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <v-text-field
                            v-model="address.city"
                            label="City"
                            flat
                        ></v-text-field>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <v-text-field
                            v-model="address.telephone"
                            label="Telephone"
                            flat
                        ></v-text-field>
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
                            v-model="address.region_id.toString()"
                            item-text="name"
                            item-value="id"
                            label="Region"
                            flat
                        ></v-select>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="text-center">
                        <a @click="save()" class="btn bkg-red border-rounded text-white">Save</a>
                        <a @click="cancel()" class="btn bkg-white border-red text-red border-rounded">Cancel</a>
                    </b-col>
                </b-row>
            </v-flex>
        </v-layout>
        <Footer ref="footer"></Footer>
    </v-app>
</template>

<script>
    import "@/css/home.css";
    import Menu from '../Menu';
    import Footer from '../FooterOrder';
    export default {
        name: 'EditAddress',
        components: {
            Menu,
            Footer
        },
        props: ['addressid'],
        data () {
            return {
                address: {},
                addressIndex: 0,
                customer: {},
                countries: [],
                regions: []
            }
        },
        beforeMount () {
            this.loadCountries();
            this.loadAddress();
        },
        methods: {
            loadAddress() {
                this.$http
                    .get(this.myconfigs.api.url + 'customers/me',{
                        headers: {
                            Authorization: 'Bearer ' + localStorage.MagentoToken
                        }
                    })
                    .then(response => {
                        this.customer = response.data;
                        for (var addressIndex in this.customer.addresses) {
                            var address = this.customer.addresses[addressIndex];
                            if (address.id == this.addressid) {
                                this.address = address;
                                this.addressIndex = parseInt(addressIndex);
                                break;
                            }
                        }
                    });
            },
            save() {
                this.customer.addresses[this.addressIndex] = this.address;
                this.$http
                    .put(
                        this.myconfigs.api.url + 'customers/me',
                        {
                            customer: this.customer
                        },
                        {
                            headers: {
                                Authorization: 'Bearer ' + localStorage.MagentoToken
                            }
                        }
                    )
                    .then(response => {
                        this.$router.push({
                            name: 'AddressBook',
                            params: {}
                        })
                    });
            },
            cancel() {
                this.$router.push({name: 'AddressBook', params: {}});
            },
            loadCountries() {
                this.$http
                    .get(this.myconfigs.api.url + 'directory/countries',{
                        headers: {
                            Authorization: 'Bearer ' + localStorage.MagentoToken
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
            }
        }
    }
</script>
