 // Lista de amigos secretos
    let amigoSecreto = [];

    // Elementos del DOM referenciados
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    const inputAmigo = document.getElementById("amigo");

    // Función que genera y agrega el nombre a la lista HTML
    function generalista() {
      const li = document.createElement('li');
      li.innerText = amigoSecreto[amigoSecreto.length - 1];
      listaAmigos.appendChild(li);
    }

    // Función para guardar el nombre en el array y agregarlo a la lista HTML
    function guardarNombre() {
      const nombre = inputAmigo.value.trim();

      if (nombre === "") {
        alert("Ingrese un nombre válido");
        return;
      }

      amigoSecreto.push(nombre);  // Guardar el nombre en el array
      generalista();  // Agregar el nombre a la lista visible
      inputAmigo.value = '';  // Limpiar el input
    }

    // Función que sortea un nombre aleatorio de la lista
    function sortearNombre() {
      if (amigoSecreto.length === 0) {
        alert("No hay amigos para sortear.");
        return;
      }

      const ganador = amigoSecreto[Math.floor(Math.random() * amigoSecreto.length)];
      listaVisible(resultado, ganador);  // Mostrar el ganador
    }

    // Función para mostrar el resultado en la lista
    function listaVisible(lista, ganador) {
      lista.innerHTML = '';  // Limpiar la lista antes de mostrar el nuevo ganador
      const li = document.createElement("li");
      li.textContent =  ganador;
      lista.appendChild(li);
    }