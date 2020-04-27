<template>
    <v-app id="Register">
        <Menu></Menu>
        <v-layout row class="home-content">
            <v-flex xs12 sm12 md12 lg12 xl12>
                <b-row>
                    <b-col>
                        <h2>Create an account</h2>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b class="section_title">Personal Information</b>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <v-text-field
                            v-model="customer.firstname"
                            :rules="[rules.required('your firstname')]"
                            label="First Name"
                        ></v-text-field>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <v-text-field
                            v-model="customer.lastname"
                            :rules="[rules.required('your lastname')]"
                            label="Last Name"
                        ></v-text-field>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col>
                        <b class="section_title">Account Security</b>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <v-text-field
                            v-model="customer.email"
                            :rules="[rules.required('your e-mail')]"
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
                            :rules="[rules.required('a password')]"
                            label="Password"
                            @click:append="showPass = !showPass"
                        ></v-text-field>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <v-text-field
                            :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="showConfirmPass ? 'text' : 'password'"
                            v-model="confirmPass"
                            :rules="[rules.required('a password confirmation'), rules.matchPass(password)]"
                            label="Confirm Password"
                            @click:append="showConfirmPass = !showConfirmPass"
                        ></v-text-field>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col class="text-center">
                        <a @click="save()" class="btn bkg-red border-rounded text-white">Create account</a>
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
        name: 'Register',
        components: {
            Menu,
            Footer
        },
        data() {
            return {
                customer: {},
                password: '',
                confirmPass: '',
                showPass: false,
                showConfirmPass: false,
                rules: {
                    required(element){
                        return value => value && value.length > 0 || `You must input ${element}`

                    },
                    matchPass(elementToMatch) {
                        return value => value && value == elementToMatch || `Passwords must be the same`;
                    }
                },
            }
        },
        beforeMount() {
            if (localStorage.isLoggedIn) {
                this.$router.push({
                    name: 'Dashboard',
                    params: {}
                });
            }
        },
        methods: {
            save() {
                this.$http
                    .post(
                        window.MagentoApiUrl + 'customers',
                        {
                            customer: this.customer,
                            password: this.password
                        },
                        {
                            headers: {
                                Authorization: 'Bearer ' + window.MagentoToken
                            }
                        }
                    )
                    .then(response => {
                        this.signIn();
                    });
            },
            signIn() {
                this.$http
                    .post(window.MagentoApiUrl + 'integration/customer/token',{
                        username: this.customer.email,
                        password: this.password
                    })
                    .then(response => {
                        localStorage.isLoggedIn = true;
                        localStorage.MagentoToken = response.data;
                        this.$router.push({name: 'Dashboard',params:{}});
                    });
            }
        }
    }
</script>
