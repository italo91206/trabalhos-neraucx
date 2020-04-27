<template>
    <div id="Option">
        <span>{{option.title}}</span>
        <div class="option_values">
            <span v-for="(value,iValue) in option.values" :key="iValue" @click="setOptionValue(option.option_id, value.option_type_id)"
                  :class="{highlight:value.option_type_id == selected}">
                {{value.title}}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Option',
    props:['option'],
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
