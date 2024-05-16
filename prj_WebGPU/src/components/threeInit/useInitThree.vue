<script setup lang="ts">
import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { ref, onMounted } from "vue";

const container = ref()
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
const controls = new OrbitControls(camera, renderer.domElement);
const geometry = new THREE.PlaneGeometry(1000, 1000);
const material = new THREE.MeshLambertMaterial({ color: 0xffffff });
const plane = new THREE.Mesh(geometry, material);
const light = new THREE.AmbientLight(0x404040, 10); // 柔和的白光

onMounted(() => {

  renderer.setSize(window.innerWidth, window.innerHeight);
  container.value.appendChild(renderer.domElement);

  scene.add(plane);
  scene.add(light);

  camera.position.set(-4, 4, 2)

  renderer.render(scene, camera);
  controls.update();
})

defineExpose({ scene })
</script>

<template>
  <div ref="container"></div>
</template>