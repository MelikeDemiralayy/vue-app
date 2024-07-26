<template>
    <div v-if="character" class="detail-card">
      <img :src="character.image" alt="Character Image" />
      <h3>{{ character.name }}</h3>
      <p>Status: {{ character.status }}</p>
      <p>Species: {{ character.species }}</p>
      <p>Gender: {{ character.gender }}</p>
      <p>Origin: {{ character.origin.name }}</p>
      <p>Location: {{ character.location.name }}</p>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { fetchCharacter } from '../../api/api.js';
  
  const route = useRoute();
  const character = ref(null);
  
  const loadCharacter = async () => {
    try {
      character.value = await fetchCharacter(route.params.id);
    } catch (error) {
      console.error('Error loading character:', error);
    }
  };
  
  onMounted(() => {
    loadCharacter();
  });
  </script>
  
  <style scoped>
  .detail-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    max-width: 400px;
    margin: 10px auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .detail-card img {
    width: 100%;
    border-radius: 8px;
  }
  </style>
  