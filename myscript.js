let simpsons;

        const url = 'https://apisimpsons.fly.dev/api/personajes?limit=50';

        fetch(url)
        .then(response => response.json())
        .then(data => {
            simpsons = data.docs;
            console.log(simpsons);
        });

        function generarNro() {
            // Generar un número aleatorio dentro del rango, use floor para redondear el resultado
            let numeroAleatorio = Math.floor(Math.random() * 50);

            // Obtener el objeto del personaje aleatorio
            const simpson = simpsons[numeroAleatorio];

            // Actualizar la imagen en la página
            document.getElementById("tarjetaSimpson").innerHTML = `
              <div>
                <h2>${simpson.Nombre}</h2>
                <img src="${simpson.Imagen}" />
              </div>
            `;
        }

        document.getElementById("btn").addEventListener("click", generarNro);
