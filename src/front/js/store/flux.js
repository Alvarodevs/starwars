const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			allInformation: []
		},

		actions: {
			getInformation: () => {
				// fetching data from the backend
				fetch("https://www.swapi.tech/api/people/")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
