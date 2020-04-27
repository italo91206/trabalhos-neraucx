<template>
    <div id="Orders">
        <div v-for="(order,index) in orders" :key="index" class="order_data">
            <div class="line"><b>Order #:</b> {{order.increment_id}}</div>
            <div class="line"><b>Date:</b> {{order.created_at}}</div>
            <div class="line"><b>Ship To:</b> {{order.customer_firstname + ' ' + order.customer_lastname}}</div>
            <div class="line"><b>Amount:</b> {{order.grand_total | toCurrency}}</div>
            <div class="line"><b>Status:</b> {{order.status}}</div>
            <div class="actions"><a @click="goToOrder(order.entity_id)">View Order</a> | <a @click="doReorder(order.entity_id)">Reorder</a></div>
        </div>
        <div class="no_orders" v-if="orders.length == 0">
            You have no orders registered.
        </div>
    </div>
</template>

<script>
export default {
    name: 'Orders',
    beforeMount() {
        this.loadOrders();
    },
    data () {
        return {
            orders: []
        }
    },
    methods: {
        goToOrder(order_id) {
            this.$router.push({
                name: 'OrderView',
                params: {
                    order_id: order_id
                }
            })
        },
        doReorder(order_id) {
            //TODO: reorder
        },
        loadOrders() {
            this.$http.get(
                window.MagentoApiUrl + 'orders?' +
                'searchCriteria[filterGroups][0][filters][0][field]=customer_id' +
                '&searchCriteria[filterGroups][0][filters][0][value]=' + localStorage.customer_id +
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
