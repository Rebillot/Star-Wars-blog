
const getGlobalData = ({ getStore, getActions, setStore }) => {
  const store = {
    personajes: [],
    vehicles: [],
    planets: [],
    films: [],
    favoritos: [],
  };

  const actions = {
    fetchCharacters: async () => {
      try {
        const response = await fetch("https://swapi.tech/api/people?page=1&limit=10");
        const data = await response.json();
        console.log(data,"<-----fetchflux caracter")
        setStore({ personajes: data.results });
      } catch (error) {
        console.error(error);
      }
    },
    fetchVehicles: async () => {
      try {
        const response = await fetch("https://www.swapi.tech/api/vehicles?page=1&limit=10");
        const data = await response.json();
        setStore({ vehicles: data.results });
      } catch (error) {
        console.error(error);
      }
    },
    fetchPlanets: async () => {
      try {
        const response = await fetch("https://swapi.tech/api/planets?page=1&limit=10");
        const data = await response.json();
        setStore({ planets: data.results });
      } catch (error) {
        console.error(error);
      }
    },
    addToFavorites: (item) => {
      const updatedFavorites = [...getStore().favoritos, item];
      setStore({ favoritos: updatedFavorites });
    },
    removeFromFavorites: (item) => {
      const updatedFavorites = getStore().favoritos.filter(
        (favoriteItem) => favoriteItem !== item
      );
      setStore({ favoritos: updatedFavorites });
    },
    fetchDetalles: async (type, number) =>{
      try{
        const response = await fetch(`https://swapi.tech/api/${type}/${number}`);
        const data = await response.json();
        console.log(data,"<--------data")
        return data;
      } catch (error) {
        console.error(error);
      } 
    }
    
  };
  
  return { store, actions };
};

export default getGlobalData;
















// import axios from 'axios';

// const getGlobalData = ({ getStore, getActions, setStore }) => {
//   const store = {
//     personajes: [],
//     vehicles: [],
//     planets: [],
//     films: [],
//     favoritos: [],
//   };

//   const actions = {
//     fetchCharacters: async () => {
//       try {
//         const response = await axios.get("https://swapi.tech/api/people/");
//         setStore({ personajes: response.data.results });
//       } catch (error) {
//         console.error(error);
//       }
//     },
//     fetchVehicles: async () => {
//       try {
//         const response = await axios.get("https://www.swapi.tech/api/vehicles?page=1&limit=10");
//         setStore({ vehicles: response.data.results });
//       } catch (error) {
//         console.error(error);
//       }
//     },
//     fetchPlanets: async () => {
//       try {
//         const response = await axios.get("https://swapi.tech/api/planets/");
//         setStore({ planets: response.data.results });
//       } catch (error) {
//         console.error(error);
//       }
//     },
//     fetchFilms: async () => {
//       try {
//         const response = await axios.get("https://swapi.tech/api/films/");
//         setStore({ films: response.data.results });
//       } catch (error) {
//         console.error(error);
//       }
//     },
//     addToFavorites: (item) => {
//       const updatedFavorites = [...getStore().favoritos, item];
//       setStore({ favoritos: updatedFavorites });
//     },
//     removeFromFavorites: (item) => {
//       const updatedFavorites = getStore().favoritos.filter(
//         (favoriteItem) => favoriteItem !== item
//       );
//       setStore({ favoritos: updatedFavorites });
//     },
//     fetchDetalles: async (type, number) =>{
//       try{
//         const response = await axios.get(`https://swapi.tech/api/${type}/${number}`);
//         return response.data;
//       } catch (error) {
//         console.error(error);
//       } 
//     }
    
//   };
  
//   return { store, actions };
// };

// export default getGlobalData;



