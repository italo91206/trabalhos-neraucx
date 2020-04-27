<template>
    <v-app id="Login">
        <Menu></Menu>
        <v-layout row class="home-content">
            <v-flex xs12 sm12 md12 lg12 xl12>
                <b-row>
                    <b-col>
                        <h2>Change Password</h2>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <input type="password" v-model="current" placeholder="Current Password" />
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <input type="password" v-model="newpassword" placeholder="New Password" />
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <input type="password" v-model="confirmation" placeholder="Confirm Password" />
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
        name: 'ChangePassword',
        components: {
            Menu,
            Footer
        },
        data () {
            return {
                current: '',
                newpassword: '',
                confirmation: '',
                hasError: false,
                errorMsg: ''
            }
        },
        methods: {
            save() {
                if (this.newpassword != this.confirmation) {
                    this.hasError = true;
                    this.errorMsg = 'Passwords do not match!';
                    return false
                }
                this.$http
                    .put(
                        window.MagentoApiUrl + 'customers/me/password',
                        {
                            currentPassword: this.current,
                            newPassword: this.newpassword
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
