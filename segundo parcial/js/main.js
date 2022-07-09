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

                const arr_Datos = data.data.standings.filter((datos) => {

                    return datos.team.name == eventSelect.target.value
                })


               
            })
          
        })
        .catch(console.error);
};
window.addEventListener('DOMContentLoaded', (event) => {
    cargarDatos();
});









