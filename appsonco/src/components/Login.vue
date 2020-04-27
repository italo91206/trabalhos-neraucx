<template>
    <v-app id="Login">
        <Menu></Menu>
        <v-layout row class="home-content">
            <v-flex xs12 sm12 md12 lg12 xl12>
                <b-row>
                    <b-col>
                        <h2>Sign in</h2>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <v-text-field
                            v-model="email"
                            :rules="[rules.required]"
                            label="E-mail"
                        ></v-text-field>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <v-text-field
                            :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="showPass ? 'text' : 'password'"
                            v-model="password"
                            :rules="[rules.required]"
                            label="Password"
                            @click:append="showPass = !showPass"
                        ></v-text-field>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="text-center">
                        <a @click="signIn()" class="btn bkg-red border-rounded text-white">Sign in</a>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <v-divider></v-divider>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="text-center">
                        <a @click="joinNow()" class="btn bkg-white border-red text-red border-rounded">Join now</a>
                    </b-col>
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
        name: 'Login',
        components: {
            Menu,
            Footer
        },
        data () {
            return {
                email: '',
                password: '',
                rules: {
                    required: value => !!value || 'Required.'
                },
                showPass: false
            }
        },
        methods: {
            signIn() {
                this.$http
                    .post(window.MagentoApiUrl + 'integration/customer/token',{
                        username: this.email,
                        password: this.password
                    })
                    .then(response => {
                        localStorage.isLoggedIn = true;
                        localStorage.MagentoToken = response.data;
                        this.loadCustomer();
                        this.$router.push({name: 'Home',params:{}});
                    });
            },
            joinNow() {
                this.$router.push({name: 'Register',params:{}});
            },
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
                    });
            }
        }
    }
</script>
