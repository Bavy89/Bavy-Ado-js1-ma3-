// Question 2

const APIkey = "5daa735e5ac94639a7dfa778f35105a8";

const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${APIkey}`;

const resultContainer = document.querySelector(".results");

async function getGames() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    resultContainer.innerHTML = "";

    for (let i = 0; i < results.length; i++) {
      var dataList = results[i];

      var name = dataList.name;
      var rating = dataList.rating;
      var numberOfTags = dataList.tags.length;

      resultContainer.innerHTML += `<ul class="result">
      <li><b>Name:</b> ${name}</li>
      <li><b>Rating:</b> ${rating}</li>
      <li><b>Number of tags:</b> ${numberOfTags}</li></ul>`;

      if (i === 7) {
        break;
      }
    }
  } catch (error) {
    console.log("something went wrong", error);
    resultContainer.innerHTML = "error";
  }
}

getGames();