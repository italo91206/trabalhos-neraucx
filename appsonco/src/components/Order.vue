<template>
    <v-app id="Order" class="order-navigation">
        <Menu></Menu>
        <v-layout row>
            <v-flex xs12 sm12 md12 lg12 xl12>
                <b-col>
                    <a href="javascript: history.go(-1);" class="prev-nav">Previous</a>
                    <br />
                    <h2 class="category-page-title">Categories</h2>
                </b-col>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12 sm12 md12 lg12 xl12>
                <b-col>
                    <v-list class="pt-0 category-infos" dense v-for="(c,ci) in categories.categories" :key="ci">
                        <v-list-tile @click="switchCategory(c.url)">
                            <v-list-tile-action class="category-icon">
                                <img :src="getIconUrl(c.icon)" alt="">
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>{{c.title}}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </b-col>
            </v-flex>
        </v-layout>
        <br><br><br><br>
        <FooterOrder></FooterOrder>
    </v-app>
</template>

<script>
import '@/css/order.css';
import Menu from './Menu';
import FooterOrder from './FooterOrder';
export default {
    name: 'Order',
    components: {
        Menu,
        FooterOrder
    },
    beforeMount: function(){
        if (!localStorage.cart_id) {
            this.$http.post(
                window.MagentoApiUrl + 'carts/',
                {},
                {
                    headers: {
                        Authorization: 'Bearer ' + window.MagentoToken
                    }
                }
            ).then(response => {
                localStorage.cart_id = response.data;
            });
        }
    },
    methods: {
        getIconUrl(filename) {
            return require("@/assets/categories/" + filename);
        },
        switchCategory(categoryId) {
            this.$router.push({
                name: 'Category',
                params:{
                    caturl: categoryId
                }
            });
        },
    }
};
</script>
