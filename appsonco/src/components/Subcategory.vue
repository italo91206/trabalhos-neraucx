<template>
    <v-app id="Category" >
        <Menu></Menu>
        <v-layout row>
            <v-flex xs12 sm12 md12 lg12 xl12>
                <b-col>
                    <a href="javascript: history.go(-1);" class="prev-nav">Previous</a>
                    <br />
                    <h2 class="category-page-title">
                      <span class="category" @click="goToCategory(this.parent.id)">{{this.parent.title}}</span>
                      &gt;
                      <span class="subcategory">{{this.category.title}}</span>
                    </h2>
                </b-col>
                <v-container fluid>
                    <b-row>
                        <b-col xs6 sm6 md6 lg6 xl6 class="category_product text-center" @click="goToProduct(p)" v-for="(p,index) in products" :key="index">
                            <div class="product_image">
                                <img :src="getThumb(p)" alt="">
                            </div>
                            <h2 class="product_name">{{p.name}}</h2>
                            <!--div class="product_price">{{p.price | toCurrency}}</div-->
                        </b-col>
                    </b-row>
                </v-container>
            </v-flex>
        </v-layout>
        <FooterOrder></FooterOrder>
    </v-app>
</template>

<script>
import '@/css/order.css';
import Menu from './Menu';
import FooterOrder from './FooterOrder';
import Breadcrumb from './Breadcrumb';
export default {
    name: 'Subcategory',
    components: {
        Menu,
        FooterOrder,
        Breadcrumb
    },
    data () {
        return {
            products: [],
            category: {},
            parent: {},
            currentPage: 0,
            canLoadMore: true,
            totalProducts: 0,
            totalLoaded: 0
        }
    },
    props: ['caturl'],
    beforeMount:function(){
        this.loadCategoryData();
        this.loadProducts();
    },
    mounted: function() {
        this.scroll();
    },
    methods: {
        loadCategoryData() {
            var found = false;
            for (var category in this.categories.categories) {
                var children = this.categories.categories[category].children;
                for (var child in children) {
                    if (this.caturl == children[child].url) {
                        this.category = children[child];
                        found = true;
                        break;
                    }
                }

                if (found) {
                    this.parent = this.categories.categories[category];
                    break;
                }
            }
        },
        findAttribute(product, attributeName) {
            var productUrl = '';
            for (var attr of product.custom_attributes) {
                if (attr.attribute_code == attributeName) {
                    productUrl = attr.value;
                    break;
                }
            }
            return productUrl;
        },
        getUrl(product) {
            return this.findAttribute(product, 'url_key');
        },
        goToProduct(product) {
            this.$router.push({
                name: 'Product',
                params: {
                    prodsku: product.sku
                }
            })
        },
        getThumb(product) {
            var thumb = this.findAttribute(product, 'thumbnail');
            if (thumb) {
                thumb = MagentoMediaUrl + thumb;
            } // TODO: else para imagem placeholder

            return thumb;
        },
        goToCategory(categoryId) {
            this.$router.push({
                name: 'Category',
                params:{
                    caturl: categoryId
                }
            });
        },
        loadProducts() {
            this.currentPage += 1;
            this.$http.get(
                window.MagentoApiUrl + 'products?' +
                    'searchCriteria[filterGroups][0][filters][0][field]=category_id' +
                    '&searchCriteria[filterGroups][0][filters][0][value]=' + this.category.id +
                    '&searchCriteria[filterGroups][0][filters][0][conditionType]=eq' +
                    '&searchCriteria[filterGroups][0][filters][1][field]=visibility' +
                    '&searchCriteria[filterGroups][0][filters][1][value]=4' +
                    '&searchCriteria[filterGroups][0][filters][1][conditionType]=eq' +
                    '&searchCriteria[filterGroups][0][filters][2][field]=status' +
                    '&searchCriteria[filterGroups][0][filters][2][value]=1' +
                    '&searchCriteria[filterGroups][0][filters][2][conditionType]=eq' +
                    '&searchCriteria[filterGroups][0][filters][3][field]=store_id' +
                    '&searchCriteria[filterGroups][0][filters][3][value]=' + window.MagentoStoreId +
                    '&searchCriteria[filterGroups][0][filters][3][conditionType]=eq' +
                    '&searchCriteria[sortOrders][0][field]=created_at' +
                    '&searchCriteria[sortOrders][0][direction]=DESC' +
                    '&searchCriteria[pageSize]=10' +
                    '&searchCriteria[currentPage]=' + this.currentPage,
                {
                    headers: {
                        Authorization: 'Bearer ' + window.MagentoToken
                    }
                }
            ).then(response => {
                response.data.items.forEach(item => this.products.push(item));
                this.totalProducts = response.data.total_count;
                this.totalLoaded = this.products.length;
                if (this.totalLoaded >= this.totalProducts) {
                    this.canLoadMore = false;
                }
            });
        },
        scroll() {
            window.onscroll = () => {
                let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

                if (bottomOfWindow && this.canLoadMore) {
                    this.loadProducts();
                }
            };
        }
    }
}
</script>
