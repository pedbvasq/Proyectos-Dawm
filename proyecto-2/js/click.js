

function traer() {
    fetch('https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2020&sort=asc')
        .then(res => res.json())
        .then(data => {

            let contenido = document.querySelector('#contenido')
            

            let numero = getRandomInt(21)
            let id= data["data"]["standings"][numero]["team"]["name"]
            let ab=data["data"]["standings"][numero]["team"]["abbreviation"]
            let logo=data["data"]["standings"][numero]["team"]["logos"][0]["href"]

            contenido.innerHTML = `
            <img id="img" src="${logo}" width="200px" class="img-fluid rounded-circle"> 
            <p>Equipo: ${id+"("+ab+")"}</p>


            `
          


        })
} 


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }