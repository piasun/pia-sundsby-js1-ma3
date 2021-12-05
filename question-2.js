const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=cb0ecd023b5f4312bca8f4466a167752";

const gamesContainer = document.querySelector(".games");

async function showGames() {

    const response = await fetch(url);
    
    const results = await response.json();

    const games = results.results;

    gamesContainer.innerHTML = "";

    for(let i = 0; i <= 7; i++ ) {
        console.log(games[i]);

        gamesContainer.innerHTML += `
        <div>${games[i].name}</div>
        <div>${games[i].rating}</div>
        <div>${games[i].tags.length}</div>`;
    }

}

showGames();