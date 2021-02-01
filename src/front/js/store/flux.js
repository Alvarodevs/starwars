const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			characters: [],
			planets: [],
			starships: [],
			favorites: [],
			fill: false,
			characters2: []
		},

		actions: {
			getCharacters: () => {
				// for (i = 0, i < results.uid.length, i++) {
				//     var characters = characters2.next};

				var url = "https://www.swapi.tech/api/people/";

				fetch(url)
					.then(resp => resp.json())
					.then(data => setStore({ characters: data.results, characters2: data.next }))
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
			// 	var url = "https://www.swapi.tech/api/people/";
			// 	fetch(url)
			// 		.then(resp => resp.json())
			// 		.then(() => setStore(characters == characters2))
			// 		.catch(error => console.log("Error loading message from backend", error));
			// },
			addFavs: favorite => {
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
				});
			}
		}
	};
};

export default getState;
