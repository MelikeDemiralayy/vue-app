import axios from 'axios';

const baseUrl = 'https://rickandmortyapi.com/api';
const axiosInstance = axios.create({
  baseURL: baseUrl,
});

export const fetchCharacters = async () => {
  try {
    const response = await axiosInstance.get('/character');
    return response.data.results || [];
  } catch (error) {
    console.error('Error fetching characters:', error);
    return [];
  }
};

export const fetchCharacter = async (characterId) => {
  try {
    const response = await axiosInstance.get(`/character/${characterId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching character:', error);
    throw error;
  }
};

// export const fetchLocations = async () => {
//   try {
//     const response = await axiosInstance.get('/location');
//     return response.data.results || [];
//   } catch (error) {
//     console.error('Error fetching locations:', error);
//     return [];
//   }
// };

// export const fetchEpisodes = async () => {
//   try {
//     const response = await axiosInstance.get('/episode');
//     return response.data.results || [];
//   } catch (error) {
//     console.error('Error fetching episodes:', error);
//     return [];
//   }
// };
