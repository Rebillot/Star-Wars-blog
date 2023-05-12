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
        const response = await fetch("https://swapi.dev/api/people/");
        const data = await response.json();
        console.log(data, "fetchCharacters")
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
        const response = await fetch("https://swapi.dev/api/planets/");
        const data = await response.json();
        setStore({ planets: data.results });
      } catch (error) {
        console.error(error);
      }
    },
    fetchFilms: async () => {
      try {
        const response = await fetch("https://swapi.dev/api/films/");
        const data = await response.json();
        setStore({ films: data.results });
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
  };

  return { store, actions };
};

export default getGlobalData;
