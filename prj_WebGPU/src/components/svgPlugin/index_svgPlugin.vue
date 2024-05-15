<script setup lang='ts'>
defineProps({
    name: String,
    prefix: {
        type: String,
        default: "#icon-"
    },
    color: {
        type: String,
        default: ''
    },
    width: {
        type: String,
        default: '16px'
    },
    height: {
        type: String,
        default: '16px'
    },
})
</script>

<template>
    <svg :style="{ width, height }">
        <use :xlink:herf="prefix + name" :color />
    </svg>
</template>

<style scoped></style>