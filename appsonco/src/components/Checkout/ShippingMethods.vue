<template>
    <div id="methods">
        <b-row>
            <b-col>Select</b-col>
            <b-col>Values</b-col>
            <b-col>Shipping Rates</b-col>
        </b-row>
        <div v-for="(shipping,index) in shipping_dummy">
            <b-row>
                <b-col><input type="checkbox" :id="'checkbox'+index" @click="selected()"></b-col>
                <b-col>{{shipping.value}}</b-col>
                <b-col>{{shipping.companyName}}</b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ShippingMethods',
        data(){
            return {
                shipping_dummy: [
                    {value: 49.90, companyName: 'Sedex'},
                    {value: 25.90, companyName: 'PAC'},
                    {value: 190.90, companyName: 'Atentado ao estado'}
                ]
            }
        },
        methods: {
            selected(){
                console.log('Selecionado!');
            }
        }
    }
</script>

<style>
    div#methods {
        background: #f4f4f4;
        margin: 20px -15px 15px;
        padding: 20px 15px;
    }
</style>