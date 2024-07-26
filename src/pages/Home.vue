<script setup>
import { ref, onMounted } from 'vue';
import Navbar from '../components/Navbar.vue';
import Card from '../components/card/Card.vue'; 
import { fetchCharacters } from '../api/api.js';

const characters = ref([]);

const loadCharacters = async () => {
  try {
    characters.value = await fetchCharacters();
  } catch (error) {
    console.error('Error loading characters:', error);
  }
};

onMounted(() => {
  loadCharacters();
});
</script>

<template>
  <div>
    <Navbar />
    <h1>Rick and Morty Characters</h1>
    <div class="card-container">
      <Card v-for="character in characters" :key="character.id" :character="character" />
    </div>
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
