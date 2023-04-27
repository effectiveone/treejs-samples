<template>
    <div id="app">
      <div ref="threeContainer" style="width: 100%; height: 100vh"></div>
    </div>
  </template>
  
  <script>
  import * as THREE from 'three';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
  
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
  
        const material = new THREE.MeshPhongMaterial({ color: 0xffffff });
        const letters = ['H', 'O', 'L', 'L', 'Y', 'W', 'O', 'O', 'D'];
        const letterWidth = 1.5;
        const letterSpacing = 0.5;
  
        for (let i = 0; i < letters.length; i++) {
          const letter = this.createLetter(letters[i]);
          const letterMesh = new THREE.Mesh(letter, material);
          letterMesh.position.set(
            (i - (letters.length - 1) / 2) * (letterWidth + letterSpacing),
            0,
            0
          );
          scene.add(letterMesh);
        }
  
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
  
        const pointLight = new THREE.PointLight(0xffffff, 1, 100);
        pointLight.position.set(0, 0, 10);
        scene.add(pointLight);
  
        camera.position.z = 20;
  
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.enableZoom = true;
  
        const animate = () => {
          requestAnimationFrame(animate);
          controls.update();
          renderer.render(scene, camera);
        };
  
        animate();
      },
      createLetter(letter) {
  const letterHeight = 2;
  const letterDepth = 0.5;
  const geometry = new THREE.BufferGeometry();

  switch (letter) {
    case 'H':
      const hPart1 = new THREE.BoxBufferGeometry(letterWidth, letterHeight, letterDepth);
      const hPart2 = new THREE.BoxBufferGeometry(letterWidth, letterHeight / 2, letterDepth);
      const hPart3 = new THREE.BoxBufferGeometry(letterWidth, letterHeight, letterDepth);
      hPart1.translate(0, 0, 0);
      hPart2.translate(0, -letterHeight / 4, 0);
      hPart3.translate(-letterWidth, 0, 0);

      geometry.merge(hPart1);
      geometry.merge(hPart2);
      geometry.merge(hPart3);
      break;
    // Dodaj pozostałe litery
  }

  return geometry;
}

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
  