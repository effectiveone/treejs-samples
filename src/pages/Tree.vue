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
    data() {
      return {
        trees: [], // Tablica przechowująca współrzędne drzew
        treeGeometry: new THREE.CylinderGeometry(0.5, 0.5, 5, 32), // Geometria pnia drzewa
        trunkMaterial: new THREE.MeshBasicMaterial({ color: 0x8B4513 }), // Materiał pnia drzewa
        crownGeometry: new THREE.SphereGeometry(4, 32, 32), // Geometria korony drzewa
        crownMaterial: new THREE.MeshBasicMaterial({ color: 0x228B22 }), // Materiał korony drzewa
      }
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
  
        // Dodawanie drzew po lewej, gdy indeks jest parzysty i po prawej, gdy jest nieparzysty
        for (let i = 0; i < 5; i++) {
          const x = i % 2 === 0 ? -i * 10 : i * 10;
          const y = Math.random() * (3 - (-8)) + (-8); // Ustawianie losowej wysokości drzewa w przedziale od -8 do 3
          const z = 0;
          const tree = this.createTree();
          tree.position.set(x, y, z);
          scene.add(tree);
          this.trees.push({ x, y, z });
        }
  
        camera.position.z = 15;
  
        const animate = () => {
          requestAnimationFrame(animate);
          renderer.render(scene, camera);
        };
  
        animate();
      },
      createTree() {
        // Tworzenie pnia drzewa
        const trunk = new THREE.Mesh(this.treeGeometry, this.trunkMaterial);
        trunk.position.y = 1.5;
  
        // Tworzenie korony drzewa
        const crown = new THREE.Mesh(this.crownGeometry, this.crownMaterial);
        crown.position.y = 6;
  
        // Grupowanie pnia i korony
        const tree = new THREE.Group();
        tree.add(trunk);
        tree.add(crown);
  
        return tree;
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
  