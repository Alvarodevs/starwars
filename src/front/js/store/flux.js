const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			characters: [],
			planets: [],
			starships: [],
			favorites: [],
			fill: false
		},

		actions: {
			getCharacters: () => {
				// fetching data from the backend
				fetch("https://www.swapi.tech/api/people/")
					.then(resp => resp.json())
					.then(data => setStore({ characters: data.results }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			getPlanets: () => {
				// fetching data from the backend
				fetch("https://www.swapi.tech/api/planets/")
					.then(resp => resp.json())
					.then(data => setStore({ planets: data.results }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			getStarships: () => {
				// fetching data from the backend
				fetch("https://www.swapi.tech/api/starships/")
					.then(resp => resp.json())
					.then(data => setStore({ starships: data.results }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			// getNextPage: () => {
			//     // fetching data from the backend
			// 	fetch("https://www.swapi.tech/api/")
			// 		.then(resp => resp.json())
			// 		.then(data => setStore({ result: data.result.next }))
			// 		.catch(error => console.log("Error loading message from backend", error));
			// },
			addFavs: favorite => {
				//introduce el parametro
				//get the store
				let store = getStore(); //traes store disponible
				store.favorites.push(favorite);
				setStore({ favorites: store.favorites });
			},
			deleteFavs: favorite => {
				let store = getStore();
				let newStore = store.favorites.filter(element => element != favorite);
				setStore({
					favorites: newStore
					//fill: false
				});
			}
		}
	};
};

export default getState;
