<template>
    <div id="app">
      <div class="three-container" ref="threeContainer"></div>
    </div>
  </template>
  
  <script>
  import * as THREE from "three";
  
  export default {
    name: "App",
    mounted() {
      this.init();
    },
    methods: {
      init() {
        const container = this.$refs.threeContainer;
  
        const camera = new THREE.PerspectiveCamera(
          60,
          container.clientWidth / container.clientHeight,
          1,
          10000
        );
        camera.position.set(0, 0, 600);
  
        const scene = new THREE.Scene();
  
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);
  
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(-1, 2, 4);
        scene.add(light);
  
        const geometry = new THREE.TorusKnotGeometry(200, 40, 64, 8, 3, 4);
        const material = new THREE.MeshStandardMaterial({
          color: 0xffa500,
          roughness: 0.8,
          metalness: 0.2,
        });
        const knot = new THREE.Mesh(geometry, material);
        scene.add(knot);
  
        const animate = () => {
          requestAnimationFrame(animate);
          knot.rotation.x += 0.01;
          knot.rotation.y += 0.01;
          renderer.render(scene, camera);
        };
  
        window.addEventListener("resize", () => {
          camera.aspect = container.clientWidth / container.clientHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(container.clientWidth, container.clientHeight);
        });
  
        animate();
      },
    },
  };
  </script>
  
  <style scoped>
  .three-container {
    width: 100%;
    height: 100%;
    background-color: #000;
  }
  </style>
  