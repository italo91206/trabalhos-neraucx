<template>
    <div id="Options">
        <div v-for="(option,index) in product.options" :key="index" class="option_container">
            <Option :option="option" v-on:setOptionValue="setOptionValue"></Option>
        </div>
        <v-divider light></v-divider>
    </div>
</template>

<script>
import Option from './Option';
export default {
    name: 'Options',
    components: {
        Option
    },
    props:['product'],
    methods: {
        setOptionValue(data) {
            this.$emit('setOptionValue', {option_id: data.option_id, value_id: data.value_id});
        }
    },
}
</script>
