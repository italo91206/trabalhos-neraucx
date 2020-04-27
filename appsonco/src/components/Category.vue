<template>
    <v-app id="Order" class="order-navigation">
        <Menu></Menu>
        <v-layout row class="category-top">
            <v-flex xs12 sm12 md12 lg12 xl12>
                <b-col>
                    <a href="javascript: history.go(-1);" class="prev-nav">Previous</a>
                    <br />
                    <h2 class="category-page-title">{{this.category.title}}</h2>
                </b-col>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12 sm12 md12 lg12 xl12>
                <v-container fluid>
                    <b-row class="subcategory-row">
                        <b-col class="text-center col-6 subcategory" v-for="(sc,sci) in this.category.children" :key="sci">
                            <a @click="switchCategory(sc.url)">
                                <img :src="getIconUrl(sc.icon)" alt="">
                            </a>
                        </b-col>
                    </b-row>
                </v-container>
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
    data () {
        return {
            category: {}
        }
    },
    props: ['caturl'],
    beforeMount: function() {
        this.loadCategoryData();
    },
    methods: {
        loadCategoryData() {
            var found = false;
            for (var category in this.categories.categories) {
                if (this.caturl == this.categories.categories[category].url) {
                    this.category = this.categories.categories[category];
                    found = true;
                    break;
                }
            }
        },
        getIconUrl(filename) {
            return require("@/assets/categories/" + filename);
        },
        switchCategory(categoryId) {
            this.$router.push({
                name: 'Subcategory',
                params:{
                    caturl: categoryId
                }
            });
        },
    }
};
</script>
