cargarDatos = () => {
    fetch("https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2020&sort=asc")
        .then(response => response.json())
        .then(data => {

            for (let i = 0; i < 20; i++) {
                let id = data["data"]["standings"][i]["team"]["name"]
                let nombre = data["data"]["standings"][i]["team"]["name"]

                const option = document.createElement("option");
                option.setAttribute('value', id);
                option.innerHTML = nombre;
                document.querySelector('div.input-group > select').appendChild(option)
            }

            document.querySelector('div.input-group > select').addEventListener('change', (eventSelect) => {

                const arr_frases = data.data.standings.filter((datos) => {

                    return datos.team.name == eventSelect.target.value
                })

                let games = arr_frases[0]["stats"][3]["displayName"]
                let gamesN = arr_frases[0]["stats"][3]["value"]
                let win =arr_frases[0]["stats"][0]["displayName"]
                let winN =arr_frases[0]["stats"][0]["value"]
                let loses = arr_frases[0]["stats"][1]["displayName"]
                let losesN = arr_frases[0]["stats"][1]["value"]
                let tie = arr_frases[0]["stats"][2]["displayName"]
                let tieN =arr_frases[0]["stats"][2]["value"]


              
                let plantilla =
            `<div class="col-lg-3">
                <div class="test-inner ">
                     <div class="test-author-thumb d-flex">
                          <div class="test-author-info">
                                <h4>${games}</h4>                                            
                          </div>
                     </div>
                    <span>${gamesN}</span>
                    <i class="f"></i>

                     <div class="test-author-thumb d-flex">
                          <div class="test-author-info">
                                <h4>${win}</h4>                                            
                          </div>
                     </div>
                    <span>${winN}</span>
                    <i class="f"></i>
                     <div class="test-author-thumb d-flex">
                          <div class="test-author-info">
                                <h4>${loses}</h4>                                            
                          </div>
                     </div>
                    <span>${losesN}</span>
                    <i class="f"></i>
                     <div class="test-author-thumb d-flex">
                          <div class="test-author-info">
                                <h4>${tie}</h4>                                            
                          </div>
                     </div>
                    <span>${tieN}</span>
                    <i class="f"></i>



              </div>

            </div>`
                document.getElementById("frases").innerHTML = plantilla;
             

               
            })
          
        })
        .catch(console.error);
};
window.addEventListener('DOMContentLoaded', (event) => {
    cargarDatos();
});









