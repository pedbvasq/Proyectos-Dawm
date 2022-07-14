
cargarDatos = () => {
    fetch("https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2020&sort=asc")
        .then(response => response.json())
        .then(data => {
            console.log(data)

            for (let i = 0; i < 3; i++) {
                let id= data["data"]["standings"][0]["stats"][i]["displayName"]
              
                

                const option = document.createElement("option");
                option.setAttribute('value', id);
                option.innerHTML = id;
                document.querySelector('div.input-group > select').appendChild(option)
            }

            document.querySelector('div.input-group > select').addEventListener('change', (eventSelect) => {
                let condicion 
                let election
                if(eventSelect.target.value=="Wins"){
                    condicion = 0;
                    let election = eventSelect.target.value
                }
                if(eventSelect.target.value=="Losses"){
                   
                    condicion = 1;
                    let election = eventSelect.target.value
                }
                if(eventSelect.target.value=="Draws"){
                    condicion = 2;
                    let election = eventSelect.target.value
                }

              
                let plantilla =` `
                for (let i = 0; i < 20; i++) {
                    let id = data["data"]["standings"][i]["team"]["abbreviation"]
                    let valores= data["data"]["standings"][i]["stats"][condicion]["displayValue"]
                    
                    plantilla +=`<tr>
                    <th scope="row"> ${id} </th>
                    <td class="${i}" style="--size: calc( ${valores}/ 38)" > ${valores}</td></tr>`
                 

        
                }
                document.getElementById("data").innerHTML=plantilla
                
                

        
 
            })
          
        })
        .catch(console.error);
};
window.addEventListener('DOMContentLoaded', (event) => {
    cargarDatos();
});
