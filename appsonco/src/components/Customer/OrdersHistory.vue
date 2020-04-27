<template>
    <div id="AddressBook" class="dashboard">
        <Menu></Menu>
        <v-layout row class="home-content">
            <v-flex xs12 sm12 md12 lg12 xl12>
                <b-row>
                    <b-col>
                        <a href="javascript: history.go(-1);" class="prev-nav">Previous</a>
                        <br />
                        <h1>My Orders</h1>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <Orders ref="orders_list"></Orders>
                    </b-col>
                </b-row>
            </v-flex>
        </v-layout>
        <Footer></Footer>
    </div>
</template>

<script>
import "@/css/dashboard.css";
import Menu from '../Menu';
import Footer from '../FooterOrder';
import Orders from '../Dashboard/Orders';
export default {
    name: 'MyOrders',
    components: {
        Menu,
        Footer,
        Orders
    }
}
</script>
