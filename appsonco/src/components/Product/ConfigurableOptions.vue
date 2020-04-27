<template>
    <div id="ConfigurableOptions">
        <div v-for="(option,index) in product.extension_attributes.configurable_product_options" :key="index">
            <span>{{option.label}}</span>
            <div class="option_values">
                <span v-for="(value,iValue) in option.values" :key="iValue" @click="setOptionValue(option.option_id, value.option_type_id)"
                      :class="{highlight:value.option_type_id == selected}">
                    {{value.title}}
                </span>
            </div>
        </div>
        <v-divider light></v-divider>
    </div>
</template>

<script>
export default {
    name: 'ConfigurableOptions',
    props:['product'],
    data () {
        return {
            selected: 0
        };
    },
    methods: {
        setOptionValue(option_id, value_id) {
            this.selected = value_id;
            this.$emit('setOptionValue', {option_id: option_id, value_id: value_id});
        }
    },
}
</script>
