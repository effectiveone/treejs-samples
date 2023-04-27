<template>
  <div class="grid">
    <div class="grid-item" @click="goToPortfolio('solarsystem')">
      <img :src="solarImage" alt="Solar-system">
      <div class="overlay">
        <p>Solar system</p>
      </div>
    </div>
    <div class="grid-item" @click="goToPortfolio('rubic')">
      <img :src="rubicImage" alt="Rubic">
      <div class="overlay">
        <p>Rubic</p>
      </div>
    </div>
  </div>
</template>

<script>
import solarImage from '@/assets/solar.png';
import rubicImage from '@/assets/rubic.png';

export default {
  data() {
    return {
      solarImage,
      rubicImage,
    };
  },
  methods: {
    goToPortfolio(game) {
      this.$router.push(`/${game}`);
    },
  },
};
</script>



<style>
.grid {

  display: grid;
  place-items: center;
  padding-top: 1rem;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.grid-item {
  position: relative;
  width: 400px;
  height: 400px;
  cursor: pointer;
  overflow: hidden;
}

.grid-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}

.grid-item:hover .overlay {
  opacity: 1;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.overlay p {
  font-size: 2rem;
}
</style>
