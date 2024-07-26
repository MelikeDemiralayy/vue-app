<template>
  <div>
    <Navbar />
    <h1>Rick and Morty Characters</h1>
    <div class="card-container">
      <Card v-for="character in characters" :key="character.id" :character="character" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from '../components/Navbar.vue';
import Card from '../components/card/Card.vue';
import { fetchCharacters, searchCharactersByName } from '../api/api.js';

const characters = ref([]);
const route = useRoute();

const loadCharacters = async () => {
  try {
    const searchQuery = route.query.search;
    if (searchQuery) {
      characters.value = await searchCharactersByName(searchQuery);
    } else {
      characters.value = await fetchCharacters();
    }
  } catch (error) {
    console.error('Error loading characters:', error);
  }
};

onMounted(() => {
  loadCharacters();
});

watch(() => route.query.search, loadCharacters);
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
