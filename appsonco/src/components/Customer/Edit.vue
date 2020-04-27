<template>
    <v-app id="Login">
        <Menu></Menu>
        <v-layout row class="home-content">
            <v-flex xs12 sm12 md12 lg12 xl12>
                <b-row>
                    <b-col>
                        <h2>Edit Informations</h2>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <input type="text" v-model="firstname" placeholder="Firstname" />
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <input type="text" v-model="lastname" placeholder="Lastname" />
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <input type="text" v-model="email" placeholder="E-mail" />
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
        name: 'EditAccount',
        components: {
            Menu,
            Footer
        },
        data () {
            return {
                firstname: '',
                lastname: '',
                email: '',
                website_id: 0,
                store_id: 0
            }
        },
        beforeMount () {
            this.loadCustomer();
        },
        methods: {
            loadCustomer() {
                this.$http
                    .get(window.MagentoApiUrl + 'customers/me',{
                        headers: {
                            Authorization: 'Bearer ' + localStorage.MagentoToken
                        }
                    })
                    .then(response => {
                        localStorage.customer_id = response.data.id;
                        localStorage.customer_firstname = response.data.firstname;
                        localStorage.customer_lastname = response.data.lastname;
                        this.firstname = response.data.firstname;
                        this.lastname = response.data.lastname;
                        this.email = response.data.email;
                        this.website_id = response.data.website_id;
                        this.store_id = response.data.store_id;
                    });
            },
            save() {
                this.$http
                    .put(
                        window.MagentoApiUrl + 'customers/me',
                        {
                            customer: {
                                email: this.email,
                                firstname: this.firstname,
                                lastname: this.lastname,
                                website_id: this.website_id,
                                store_id: this.store_id
                            }
                        },
                        {
                            headers: {
                                Authorization: 'Bearer ' + localStorage.MagentoToken
                            }
                        }
                    )
                    .then(response => {
                        this.$router.push({
                            name: 'Dashboard',
                            params: {}
                        })
                    });
            },
            cancel() {
                this.$router.push({name: 'Dashboard', params: {}});
            }
        }
    }
</script>
