<template>
    <v-app id="Dashboard" class="dashboard">
        <Menu></Menu>
        <v-layout row class="home-content">
            <v-flex xs12 sm12 md12 lg12 xl12>
                <b-row>
                    <b-col>
                        <h1>My Account</h1>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="data_container">
                        <h2 class="section_title">Account Information</h2>
                        <div class="subtitle">Contact Information</div>
                        <div class="data">
                            {{this.customer.firstname + ' ' + this.customer.lastname}}
                        </div>
                        <div class="data">
                            {{this.customer.email}}
                        </div>
                        <div class="actions">
                            <a @click="goToPage('EditAccount', {})">Edit</a> | <a @click="goToPage('ChangePassword',{})">Change Password</a>
                        </div>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <div class="title">
                            <h2>Address Book</h2>
                            <a @click="goToPage('AddressBook',{})" class="view_all">Manage Addresses</a>
                        </div>
                        <Addresses ref="address_list"></Addresses>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <div class="title">
                            <h2>Recent Orders</h2>
                            <a @click="goToPage('MyOrders',{})" class="view_all">View All</a>
                        </div>
                        <Orders ref="orders_list" :orders="this.orders"></Orders>
                    </b-col>
                </b-row>
            </v-flex>
        </v-layout>
        <Footer></Footer>
    </v-app>
</template>

<script>
    import "@/css/dashboard.css";
    import Menu from './Menu';
    import Footer from './FooterOrder';
    import Addresses from './Dashboard/Addresses';
    import Orders from './Dashboard/Orders';
    export default {
        name: 'Dashboard',
        components: {
            Menu,
            Footer,
            Addresses,
            Orders
        },
        data () {
            return {
                customer: {},
                orders: []
            }
        },
        beforeMount: function(){
            if (localStorage.isLoggedIn == 'true') {
                this.$http.get(
                    window.MagentoApiUrl + 'customers/me',
                    {
                        headers: {
                            Authorization: 'Bearer ' + localStorage.MagentoToken
                        }
                    }
                ).then(response => {
                    this.customer = response.data;
                    this.loadOrders();
                });
            }
        },
        methods: {
            goToPage(route, params) {
                this.$router.push({
                    name: route,
                    params: params
                });
            },
            loadOrders() {
                this.$http.get(
                    window.MagentoApiUrl + 'orders?' +
                    'searchCriteria[filterGroups][0][filters][0][field]=customer_id' +
                    '&searchCriteria[filterGroups][0][filters][0][value]=' + this.customer.id +
                    '&searchCriteria[filterGroups][0][filters][0][conditionType]=eq' +
                    '&searchCriteria[sortOrders][0][field]=created_at' +
                    '&searchCriteria[sortOrders][0][direction]=DESC' +
                    '&searchCriteria[pageSize]=10' +
                    '&searchCriteria[currentPage]=1'
                ).then(response => {
                    this.orders = response.data.items;
                });
            }
        }
    }
</script>
