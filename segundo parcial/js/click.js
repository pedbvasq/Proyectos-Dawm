

function traer() {
    fetch('https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2020&sort=asc')
        .then(res => res.json())
        .then(data => {
            let contenido = document.querySelector('#contenido')
            for (let i = 0; i < 20; i++) {
                console.log(data)
            }
            
        })
} 
