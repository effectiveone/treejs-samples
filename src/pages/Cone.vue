<template>
    <div id="app">
      <div ref="threeContainer" style="width: 100%; height: 100vh"></div>
    </div>
  </template>
  
  <script>
  import * as THREE from 'three';
  
  export default {
    name: 'App',
    mounted() {
      this.initThree();
    },
    methods: {
      initThree() {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
          75,
          this.$refs.threeContainer.clientWidth / this.$refs.threeContainer.clientHeight,
          0.1,
          1000
        );
  
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(
          this.$refs.threeContainer.clientWidth,
          this.$refs.threeContainer.clientHeight
        );
        this.$refs.threeContainer.appendChild(renderer.domElement);
  
        const geometry = new THREE.ConeGeometry(1, 2, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cone = new THREE.Mesh(geometry, material);
        scene.add(cone);
  
        camera.position.z = 5;
  
        const animate = () => {
          requestAnimationFrame(animate);
          cone.rotation.x += 0.01;
          cone.rotation.y += 0.01;
          renderer.render(scene, camera);
        };
  
        animate();
      },
    },
  };
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  </style>
  