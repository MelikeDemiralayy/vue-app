<template>
  <div v-if="character" class="card" @click="navigateToDetail">
    <img :src="character.image" alt="Character Image" />
    <h3>{{ character.name }}</h3>
    <button class="favorite-btn" @click.stop="toggleFavorite">
      <i :class="isFavorite ? 'fas fa-heart' : 'far fa-heart'"></i>
    </button>
    
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  character: {
    type: Object,
    required: true
  }
});

const router = useRouter();
const isFavorite = ref(false);

const toggleFavorite = (event) => {
  event.stopPropagation();
  
  const favorites = getFavorites();
  if (isFavorite.value) {
    const updatedFavorites = favorites.filter(fav => fav.id !== props.character.id);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  } else {
    favorites.push(props.character);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  isFavorite.value = !isFavorite.value;
};
const getFavorites = () => {
  const storedFavorites = localStorage.getItem('favorites');
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

const checkIfFavorite = () => {
  const favorites = getFavorites();
  isFavorite.value = favorites.some(fav => fav.id === props.character.id);
};

const navigateToDetail = () => {
  router.push({ name: 'DetailCard', params: { id: props.character.id } });
};

onMounted(() => {
  checkIfFavorite();
});
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  max-width: 200px;
  margin: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
}

.card:hover {
  transform: translateY(-10px); 
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); 
}

.card img {
  width: 100%;
  border-radius: 8px;
}

.favorite-btn {
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: #e02942;
}

.favorite-btn i {
  font-size: 20px;
}
</style>
