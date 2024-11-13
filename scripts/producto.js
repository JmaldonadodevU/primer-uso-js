// Función para procesar la reseña ingresada por el usuario
function procesarResena() {
    // Obtener el contenido de la reseña desde el textarea
    const resena = document.getElementById("reviewInput").value;
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = ""; // Limpiar resultados previos

    // 1. Mostrar la longitud de la reseña
    resultadosDiv.innerHTML += `<p><strong>Longitud de la reseña:</strong> ${resena.length} caracteres</p>`;

    // 2. Convertir la reseña a mayúsculas y minúsculas, y mostrar ambas versiones
    resultadosDiv.innerHTML += `<p><strong>Reseña en mayúsculas:</strong> ${resena.toUpperCase()}</p>`;
    resultadosDiv.innerHTML += `<p><strong>Reseña en minúsculas:</strong> ${resena.toLowerCase()}</p>`;

    // 3. Reemplazar todas las ocurrencias de "bueno" por "excelente"
    // Se utiliza una expresión regular para hacer un reemplazo global e insensible a mayúsculas
    const resenaReemplazada = resena.replace(/bueno/gi, "excelente");
    resultadosDiv.innerHTML += `<p><strong>Reseña con reemplazos:</strong> ${resenaReemplazada}</p>`;

    // 4. Dividir la reseña en frases usando el punto como delimitador y mostrar cada frase en una línea nueva
    const frases = resena.split("."); // Dividir la reseña por el delimitador "."
    resultadosDiv.innerHTML += `<p><strong>Frases de la reseña:</strong></p>`;
    frases.forEach((frase, index) => {
        if (frase.trim()) { // Verificar que la frase no esté vacía
            resultadosDiv.innerHTML += `<p>Frase ${index + 1}: ${frase.trim()}</p>`;
        }
    });

    // 5. Verificar si la reseña menciona "5 estrellas"
    const mencionaCalificacion = resena.includes("5 estrellas");
    resultadosDiv.innerHTML += `<p><strong>Mención de "5 estrellas":</strong> ${mencionaCalificacion ? 'Sí, se encontró en la reseña' : 'No, no se encontró en la reseña'}</p>`;

    // 6. Contar cuántas veces aparece la palabra clave "calidad"
    const palabraClave = "calidad";
    const coincidencias = resena.match(new RegExp(palabraClave, "gi")); // Buscar todas las coincidencias de "calidad"
    const conteoPalabraClave = coincidencias ? coincidencias.length : 0;
    resultadosDiv.innerHTML += `<p><strong>Número de veces que aparece la palabra "${palabraClave}":</strong> ${conteoPalabraClave}</p>`;
}