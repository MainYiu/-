<script setup lang="ts">
import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

const gui = new GUI();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
const controls = new OrbitControls(camera, renderer.domElement);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.PlaneGeometry(1000, 1000);
const material = new THREE.MeshLambertMaterial({ color: 0xffffff });
const plane = new THREE.Mesh(geometry, material);
scene.add(plane);
const light = new THREE.AmbientLight(0x404040, 10); // 柔和的白光
scene.add(light);
console.log(camera);

camera.position.set(0, -50, 50)
camera.lookAt(0, 0, 0);
gui.add(light, 'intensity', 0, 20.0);
const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);
function animate() {
  requestAnimationFrame(animate);

  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
  controls.update();
  renderer.render(scene, camera);
}

animate();
</script>

<template>
  <div>
  </div>
</template>

<style scoped>
h1 {
  color: red
}
</style>