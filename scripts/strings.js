function realizarActividad() {
    // Limpiar los resultados anteriores
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = "";

    // Solicitar cadena de texto al usuario
    let cadena = prompt("Ingresa una cadena de texto:");
    if (!cadena) {
        alert("Por favor, ingresa una cadena de texto.");
        return;
    }

    // 1. Mostrar la longitud de la cadena
    mostrarResultado(`Longitud de la cadena: ${cadena.length}`);

    // 2. Convertir la cadena a mayúsculas y minúsculas, y mostrar ambas versiones
    mostrarResultado(`Cadena en mayúsculas: ${cadena.toUpperCase()}`);
    mostrarResultado(`Cadena en minúsculas: ${cadena.toLowerCase()}`);

    // 3. Reemplazar todas las ocurrencias de un carácter específico con otro carácter
    let caracterAReemplazar = prompt("Ingresa el carácter que deseas reemplazar:");
    let nuevoCaracter = prompt("Ingresa el nuevo carácter:");
    if (caracterAReemplazar && nuevoCaracter) {
        let cadenaReemplazada = cadena.split(caracterAReemplazar).join(nuevoCaracter);
        mostrarResultado(`Cadena con reemplazos: ${cadenaReemplazada}`);
    } else {
        mostrarResultado("No se realizó el reemplazo debido a caracteres faltantes.");
    }

    // 4. Dividir la cadena en palabras y mostrar cada palabra en una línea nueva
    let palabras = cadena.split(" ");
    mostrarResultado("Palabras de la cadena:");
    palabras.forEach((palabra) => {
        mostrarResultado(palabra);
    });

    // 5. Verificar si la cadena contiene una subcadena específica y mostrar un mensaje
    let subcadena = prompt("Ingresa la subcadena que deseas buscar:");
    if (subcadena) {
        if (cadena.includes(subcadena)) {
            mostrarResultado(`La cadena contiene la subcadena "${subcadena}".`);
        } else {
            mostrarResultado(`La cadena no contiene la subcadena "${subcadena}".`);
        }
    } else {
        mostrarResultado("No se ingresó ninguna subcadena para buscar.");
    }

    // 6. Contar cuántas veces aparece una subcadena específica en la cadena
    let subcadenaContar = prompt("Ingresa la subcadena que deseas contar:");
    if (subcadenaContar) {
        let ocurrencias = cadena.split(subcadenaContar).length - 1;
        mostrarResultado(`La subcadena "${subcadenaContar}" aparece ${ocurrencias} veces en la cadena.`);
    } else {
        mostrarResultado("No se ingresó ninguna subcadena para contar.");
    }
}

// Función auxiliar para mostrar los resultados en la página
function mostrarResultado(mensaje) {
    const div = document.getElementById("resultados");
    const p = document.createElement("p");
    p.textContent = mensaje;
    div.appendChild(p);
}