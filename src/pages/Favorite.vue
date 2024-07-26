<template>
     <Navbar />
    <div class="favorite-page">
      <h1>Favorites</h1>
      <div class="card-container">
        <Card v-for="character in favoriteCharacters" :key="character.id" :character="character" />
        <p v-if="favoriteCharacters.length === 0">No favorites added yet.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import Card from '../components/card/Card.vue'; 
  import Navbar from "../components/Navbar.vue"
  
  const favoriteCharacters = ref([]);
  
  const getFavorites = () => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  };
  
  onMounted(() => {
    favoriteCharacters.value = getFavorites();
  });
  </script>
  
  <style scoped>
  .favorite-page {
    padding: 20px;
  }
  
  .card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .card-container > * {
    flex: 1 1 200px;
  }
  </style>
  