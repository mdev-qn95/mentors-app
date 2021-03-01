<template>
    <button v-if="!link" :class="mode">
        <slot></slot>
    </button>
    <router-link v-else :to="to" :class="mode">
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    props: {
        mode: {
            type: String,
            required: false,
            default: null
        },
        link: {
            type: Boolean,
            required: false,
            default: false
        },
        to: {
            type: String,
            required: false,
            default: '/'
        }
    }
}
</script>

<style scoped>
button, a{
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    background-color: #039be5;
    border: 1px solid #039be5;
    color: white;
    cursor: pointer;
    border-radius: 30px;
    margin-right: 0.5rem;
    display: inline-block;
    /* 0984e3 */
}
a:hover,
a:active,
button:hover,
button:active{
    background-color: #0984e3;
    border-color: #0984e3;
}
.flat{
    background-color: transparent;
    color: #039be5;
    border: none;
}
.outline{
    background-color: transparent;
    border-color: #039be5;
    color: #039be5;
}
.flat:hover,
.flat:active,
.outline:hover,
.outline:active{
    background-color: #039be5;
    color: white;
}
</style>