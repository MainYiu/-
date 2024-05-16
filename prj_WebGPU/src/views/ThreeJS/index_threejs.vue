<script setup lang="ts">
import UseInitThree from '@/components/threeInit/useInitThree.vue'
import { ref, onMounted } from 'vue';
import * as THREE from "three";

onMounted(() => {
  const scene = getScene()
  const camera = getCamera()
  const animate = getAnimate()

  let floorMesh
console.log(camera.position.set);

  camera.position.set(2, 2, 0.5)
  floorSet(floorMesh, scene)
  lightSet(scene)

})
const initThree = ref()
const getScene = () => {
  return initThree.value.scene
}
const getAnimate = () => {
  return initThree.value.animate
}
const getCamera = () => {
  return initThree.value.camera
}
const floorSet = (floorMesh: object, scene: object) => {
  const floorGeometry = new THREE.PlaneGeometry(20, 20)
  const floorMat = new THREE.MeshStandardMaterial({

    roughness: 0.8,
    color: 0xffffff,
    metalness: 0.2,
    bumpScale: 1,
    side: THREE.DoubleSide

  });
  const textureLoader = new THREE.TextureLoader();
  textureLoader.load('/src/assets/textures/hardwood2_diffuse.jpg', function (map) {

    map.wrapS = THREE.RepeatWrapping;
    map.wrapT = THREE.RepeatWrapping;
    map.anisotropy = 4;
    map.repeat.set(10, 24);
    map.colorSpace = THREE.SRGBColorSpace;
    floorMat.map = map;
    floorMat.needsUpdate = true;

  });
  textureLoader.load('/src/assets/textures/hardwood2_bump.jpg', function (map) {

    map.wrapS = THREE.RepeatWrapping;
    map.wrapT = THREE.RepeatWrapping;
    map.anisotropy = 4;
    map.repeat.set(10, 24);
    floorMat.bumpMap = map;
    floorMat.needsUpdate = true;

  });
  textureLoader.load('/src/assets/textures/hardwood2_roughness.jpg', function (map) {

    map.wrapS = THREE.RepeatWrapping;
    map.wrapT = THREE.RepeatWrapping;
    map.anisotropy = 4;
    map.repeat.set(10, 24);
    floorMat.roughnessMap = map;
    floorMat.needsUpdate = true;
  });

  floorMesh = new THREE.Mesh(floorGeometry, floorMat)
  scene.add(floorMesh)
}
const lightSet = (scene: object) => {
  const pointLight = new THREE.PointLight(0x404040, 30, 0, 1);
  pointLight.position.set(0, 0, 2);
  scene.add(pointLight);
}
</script>

<template>
  <UseInitThree ref="initThree" />
</template>

<style scoped>
h1 {
  color: red
}
</style>