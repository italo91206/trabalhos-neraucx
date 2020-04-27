<template>
    <div id="Breadcrumb">
        <span @click="goToOrder()">Menu</span> /
        <span @click="goToCategory()">{{this.category.title}}</span> /
        <span>{{this.product.name}}</span>
    </div>
</template>

<script>
export default {
    name: 'Breadcrumb',
    props:['product'],
    data () {
        return {
            categories: {},
            category: {},
        }
    },
    beforeMount: function() {
        this.loadCategories();
        this.loadCategoryData();
    },
    methods: {
        goToOrder() {
            this.$router.push({name:'Order',params:{}});
        },
        goToCategory() {
            this.$router.push({name:'Category',params:{caturl: this.category.url}});
        },
        loadCategories() {
            if (typeof this.product.extension_attributes != 'undefined') {
                this.categories = this.product.extension_attributes.category_link;
            }
        },
        loadCategoryData() {
            var allowedCategories = ['262','265','267','268','269'];
            for(var category in this.categories) {
                if (allowedCategories.includes(this.categories[category].category_id)) {
                    var found = false;
                    for (var wcat in window.categories) {
                        children = window.categories[wcat].children;
                        for (var child in children) {
                            if (children[child].id == this.categories[category].category_id) {
                                this.category = children[child];
                                found = true;
                                break;
                            }
                        }

                        if (found) {
                            break;
                        }
                    }
                    break;
                }
            }
        }
    },
}
</script>

<style>
  body{
    overflow-x:hidden;
  }
  div#Breadcrumb {
    display: block;
    padding: 5px 15px;
    font-family: 'Camber-Rg';
    font-weight: 600;
    color: #6d6d6f;
  }
</style>
