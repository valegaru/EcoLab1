document.getElementById('fetchbit-button').addEventListener('click', fetchDataBit);

// function fetchData() {
// 	//mostrar loading
// 	renderLoading();
// 	// write your fetch here
// 	fetch('https://dog.ceo/api/breeds/image/random')
// 		.then((response) => {
// 			if (!response.ok) throw new Error('falló');
// 			return response.json(); //al usar llaves se debe usar un retorno explicito
// 		})
// 		.then((data) => renderData(data))
// 		.catch((error) => {
// 			renderError();
// 		});
// }

async function fetchDataBit() {
	try {
		const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
		if (!response.ok) throw new Error('falló');
		const databit = await response.json();
		renderData(databit);
	} catch (error) {
		renderError();
	}
}

function renderLoading() {
	const container = document.getElementById('bit-container');
	container.innerHTML = ''; //vaciar el contenedor
	container.innerHTML = '<p>Loading...</p>';
}

function renderError() {
	const container = document.getElementById('bit-container');
	container.innerHTML = ''; //vaciar el contenedor
	container.innerHTML = '<p>Opps, error...</p>';
}

function renderData(databit) {
	const container = document.getElementById('bit-container');
	container.innerHTML = ''; // Clear previous data

	const div = document.createElement('div');
	div.className = 'item';
	div.innerHTML = ` <p>$${databit?.bpi.USD.rate_float}</p>`;
	container.appendChild(div);
}

////

document.getElementById('fetchcat-button').addEventListener('click', fetchDataCat);

async function fetchDataCat() {
	try {
		const response = await fetch('https://catfact.ninja/fact');
		if (!response.ok) throw new Error('falló');
		const datacat = await response.json();
		renderDatacat(datacat);
	} catch (error) {
		renderErrorcat();
	}
}

function renderLoadingcat() {
	const container = document.getElementById('cat-container');
	container.innerHTML = ''; //vaciar el contenedor
	container.innerHTML = '<p>Loading...</p>';
}

function renderErrorcat() {
	const container = document.getElementById('cat-container');
	container.innerHTML = ''; //vaciar el contenedor
	container.innerHTML = '<p>Opps, error...</p>';
}

function renderDatacat(datacat) {
	const container = document.getElementById('cat-container');
	container.innerHTML = ''; // Clear previous data

	const div = document.createElement('div');
	div.className = 'item';
	div.innerHTML = ` <p>${datacat?.fact}</p>`;
	container.appendChild(div);
}

document.getElementById('fetchcat-button').addEventListener('click', fetchDataCat);

async function fetchDataCat() {
	try {
		const response = await fetch('https://catfact.ninja/fact');
		if (!response.ok) throw new Error('falló');
		const datacat = await response.json();
		renderDatacat(datacat);
	} catch (error) {
		renderErrorcat();
	}
}

function renderLoadingcat() {
	const container = document.getElementById('cat-container');
	container.innerHTML = ''; //vaciar el contenedor
	container.innerHTML = '<p>Loading...</p>';
}

function renderErrorcat() {
	const container = document.getElementById('cat-container');
	container.innerHTML = ''; //vaciar el contenedor
	container.innerHTML = '<p>Opps, error...</p>';
}

function renderDatacat(datacat) {
	const container = document.getElementById('cat-container');
	container.innerHTML = ''; // Clear previous data

	const div = document.createElement('div');
	div.className = 'item';
	div.innerHTML = ` <p>${datacat?.fact}</p>`;
	container.appendChild(div);
}

document.getElementById('fetchcat-button').addEventListener('click', fetchDataCat);

async function fetchDataCat() {
	try {
		const response = await fetch('https://catfact.ninja/fact');
		if (!response.ok) throw new Error('falló');
		const datacat = await response.json();
		renderDatacat(datacat);
	} catch (error) {
		renderErrorcat();
	}
}

function renderLoadingcat() {
	const container = document.getElementById('cat-container');
	container.innerHTML = ''; //vaciar el contenedor
	container.innerHTML = '<p>Loading...</p>';
}

function renderErrorcat() {
	const container = document.getElementById('cat-container');
	container.innerHTML = ''; //vaciar el contenedor
	container.innerHTML = '<p>Opps, error...</p>';
}

function renderDatacat(datacat) {
	const container = document.getElementById('cat-container');
	container.innerHTML = ''; // Clear previous data

	const div = document.createElement('div');
	div.className = 'item';
	div.innerHTML = ` <p>${datacat?.fact}</p>`;
	container.appendChild(div);
}

/////
// Fetch Anime
document.getElementById('fetchanime-button').addEventListener('click', () => {
	const limit = document.getElementById('limit').value;
	const query = document.getElementById('search').value;
	const type = document.getElementById('category').value;
	fetchDataAnime(limit, query, type);
});

async function fetchDataAnime(limit, query, type) {
	try {
		const response = await fetch(`https://api.jikan.moe/v4/anime?limit=${limit}&q=${query}&type=${type}`);
		if (!response.ok) throw new Error('falló');
		const dataanime = await response.json();
		renderDataAnime(dataanime);
	} catch (error) {
		renderErrorAnime();
	}
}

function renderLoadingAnime() {
	const container = document.getElementById('anime-container');
	container.innerHTML = ''; //vaciar el contenedor
	container.innerHTML = '<p>Loading...</p>';
}

function renderErrorAnime() {
	const container = document.getElementById('anime-container');
	container.innerHTML = ''; //vaciar el contenedor
	container.innerHTML = '<p>Opps, error...</p>';
}

function renderDataAnime(dataanime) {
	const container = document.getElementById('anime-container');
	container.innerHTML = ''; // Clear previous data

	dataanime.data.forEach((anime) => {
		const div = document.createElement('div');
		div.className = 'item';
		div.innerHTML = `
		<p>${anime.title}</p>
		<img src="${anime.images.jpg.image_url}" alt="${anime.title}">
	`;
		container.appendChild(div);
	});
}
