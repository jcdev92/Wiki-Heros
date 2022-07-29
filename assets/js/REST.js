const heroe = document.querySelector("#heroe");

let link = "https://akabab.github.io/superhero-api/api/all.json";

async function getData() {
  const response = await fetch(link);
  const data = await response.json();
  return data;
}

(async () => {
  const data = await getData();
  
// ten random heroes
    let randomArr = Array.from({length: 9}, () => Math.floor(Math.random() * data.length));

  const heroCard = randomArr.map((heroe) => {
    let element = data[heroe]
    return    `
            <div class="hero__card">
                <img src="${element.images.sm}" alt="">
                <h1>${element.name}</h1>
                <ul>
                    <li><span>Full Name: </span>${element.biography.fullName}</li>
                    <li><span>Alias: </span>${element.biography.aliases[0]}</li>
                    <li><span>Alter Ego: </span>${element.biography.alterEgos[0]}</li>
                    <li><span>Publisher: </span>${element.biography.publisher}</li>
                    <li><span>Race: </span>${element.appearance.race}</li>
                    <li><span>Gender: </span>${element.appearance.gender}</li>
                    <li><span>Height: </span>${element.appearance.height[1]}</li>
                    <li><span>Weight: </span>${element.appearance.weight[1]}</li>
                    <li><span>Occupation: </span>${element.work.occupation}</li>
                </ul>
            </div>
        `;
  });

  heroe.innerHTML = heroCard.join("");
    
})();
