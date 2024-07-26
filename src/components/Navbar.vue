<template>
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <router-link to="/" class="navbar-item">Home</router-link>
          <router-link to="/favorites" class="navbar-item">Favorites</router-link>
        </div>
        <div class="navbar-menu">
         
          <div class="navbar-end">
            <input 
            type="text" 
            class="search-input" 
            v-model="searchQuery" 
            @keyup.enter="searchCharacters"
            placeholder="Search..." 
          />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const searchQuery = ref('');
const router = useRouter();

const searchCharacters = () => {
  router.push({ name: 'Home', query: { search: searchQuery.value } });
};
</script>

<style scoped>
.navbar {
  background-color: #989ea1;
  color: #fff;
  padding: 1rem;
}
.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar .navbar-item {
  color: #fff;
  margin-right: 1rem;
  text-decoration: none;
}
.navbar .navbar-item:hover {
  text-decoration: underline;
}
.search-input {
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
}
</style>