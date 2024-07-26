<template>
  <div v-if="character" class="card" @click="navigateToDetail" >
    <img :src="character.image" alt="Character Image" />
    <h3>{{ character.name }}</h3>
    <!-- <p>Status: {{ character.status }}</p>
    <p>Species: {{ character.species }}</p>
    <p>Gender: {{ character.gender }}</p>
    <p>Origin: {{ character.origin.name }}</p>
    <p>Location: {{ character.location.name }}</p> -->
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import {useRouter}  from "vue-router";

const props = defineProps({
  character: {
    type: Object,
    required: true
  }
});

const router = useRouter();
const navigateToDetail = () => {
  router.push({ name: 'DetailCard', params: { id: props.character.id } });
};

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
}

.card:hover {
  transform: translateY(-10px); 
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); 
}
.card img {
  width: 100%;
  border-radius: 8px;
}
</style>
