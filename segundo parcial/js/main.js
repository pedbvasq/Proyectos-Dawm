
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
                let nombre = document.getElementsByTagName('option')[eventSelect.target.selectedIndex].innerHTML;
                let games = arr_frases[0]["stats"][3]["displayName"].innerHTML
                let gamesN = arr_frases[0]["stats"][3]["value"]
                let win = arr_frases[0]["stats"][0]["displayName"]
                let winN = arr_frases[0]["stats"][0]["value"]
                let loses = arr_frases[0]["stats"][1]["displayName"]
                let losesN = arr_frases[0]["stats"][1]["value"]
                let tie = arr_frases[0]["stats"][2]["displayName"]
                let tieN = arr_frases[0]["stats"][2]["value"]



                let plantilla =
                    `<div class="col-lg-3">
                <div class="test-inner ">
                     <table>

                  <caption> estadisticas del ${nombre} </caption>

                        <thead>
                             <tr>

                                 <th scope="col"> ${win + "|"}<spam></spam> </th>
                                  <th scope="col"> ${loses + "|"} </th>
                                 <th scope="col"> ${tie}</th>
                                </tr>
                      </thead>

                 <tbody>
                        <tr>
                        <td> ${winN} </td>
                         <td> ${losesN} </td>
                       <td> ${tieN} </td>
                      </tr>
                </tbody>

             </table>


              </div>

            </div>`

                let charC = `<div class="">
                <div class="">
                     <table class ="charts-css bar multiple show-labels show-primary-axis ">

                  <caption> estadisticas del ${nombre} </caption>

                        <thead>
                             <tr>

                                 <th scope="col"> ${win + "|"}<spam></spam> </th>
                                  <th scope="col"> ${loses + "|"} </th>
                                 <th scope="col"> ${tie}</th>
                                </tr>
                      </thead>

                 <tbody>
                        <tr>
                        <td  style="--size: calc( ${winN}/ 38)"> ${winN} </td>
                         <td style="--size: calc( ${losesN}/ 38)" > ${losesN} </td>
                       <td style="--size: calc( ${tieN}/ 38)"> ${tieN} </td>
                      </tr>
                </tbody>

             </table>


              </div>

            </div>`
                document.getElementById("frases").innerHTML = plantilla;
                document.getElementById("char").innerHTML = charC;
             

               
            })
          
        })
        .catch(console.error);
};
window.addEventListener('DOMContentLoaded', (event) => {
    cargarDatos();
});









