<script setup lang="ts">
import UseInitThree from '@/components/threeInit/useInitThree.vue'
import { ref,onMounted } from 'vue';
import * as THREE from "three";

onMounted(()=>{
  scene()

})
const initThree = ref()
const scene = () => {
  const scene = initThree.value.scene
  return scene
}
const box = new THREE.BoxGeometry(10,10,10)
const material = new THREE.MeshLambertMaterial({color: 0xffffff})
</script>

<template>
  <UseInitThree ref="initThree" />
</template>

<style scoped>
h1 {
  color: red
}
</style>