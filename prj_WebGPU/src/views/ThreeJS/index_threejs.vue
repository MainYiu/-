<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const canvas = ref(null)
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const controls = new OrbitControls(camera, renderer.domElement);
const loader = new GLTFLoader();
window.addEventListener( 'resize', onWindowResize );

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

}
</script>

<template>
  <div id="container">
    <div class="left_item">
      <div ref="root" id="root">
        <canvas id="webgpu" ref="canvas" style="background-color: white" width="700" height="500"></canvas>
      </div>
    </div>
    <div class="right_item">
      <div class="codeSpace">11111111</div>
    </div>
  </div>
</template>

<style scoped>
#container {
  padding: 0;
  margin: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: row dense;
}

#container div {
  width: 100%;
  height: 90vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

#root {}

.codeSpace {
  width: 90%;
  background-color: rgba(244, 255, 240, 0.657);
}
</style>
