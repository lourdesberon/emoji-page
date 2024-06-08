console.log("El archivo app.js se ha cargado correctamente");
console.log("El archivo app.js se ha cargado correctamente");

// Lista de emojis
const emojis = ['😀', '😂', '🥰', '😎', '😭', '🤔', '😍', '👍', '🎉', '🤖'];
console.log("Lista de emojis:", emojis);

// Selecciona el contenedor de emojis
const emojiContainer = document.getElementById('emojiContainer');
if (emojiContainer) {
    console.log("Contenedor de emojis encontrado");
} else {
    console.log("Contenedor de emojis no encontrado");
}

// Función para crear y añadir emojis al contenedor
function loadEmojis() {
    console.log("Cargando emojis...");
    emojis.forEach(emoji => {
        const emojiElement = document.createElement('span');
        emojiElement.classList.add('emoji');
        emojiElement.textContent = emoji;
        emojiElement.addEventListener('click', () => {
            alert(`Seleccionaste el emoji: ${emoji}`);
        });
        emojiContainer.appendChild(emojiElement);
    });
    console.log("Emojis cargados");
}

// Cargar los emojis cuando la página se haya cargado
window.onload = loadEmojis;
// Función para copiar un texto al portapapeles
function copyToClipboard(text) {
    // Crear un elemento de texto temporal
    const tempInput = document.createElement('textarea');
    tempInput.value = text;
    document.body.appendChild(tempInput);

    // Seleccionar y copiar el texto al portapapeles
    tempInput.select();
    document.execCommand('copy');

    // Eliminar el elemento temporal
    document.body.removeChild(tempInput);
}


    
    // Agregar más emojis a la matriz existente
    emojis.push('😊', '😋', '😜', '😘', '🤗', '🤩', '🤯', '😇', '😈', '👿');
    emojis.push('💩', '👻', '👽', '🤖', '👾', '👑', '🎩', '🧢', '👒', '🎓');
    emojis.push('🕶️', '👓', '🥽', '👔', '👕', '👖', '🧣', '🧤', '🧥', '🧦');
    emojis.push('👗', '👘', '🥼', '🩱', '🩲', '🩳', '👙', '🩱', '👚', '👛');
    // Agrega más emojis aquí...
 
 // Función para copiar un texto al portapapeles
function copyToClipboard(text) {
    // Código para copiar al portapapeles...
}

// Función para copiar un texto al portapapeles
function copyToClipboard(text) {
    // Código para copiar al portapapeles...
}

// Función para crear y añadir emojis al contenedor
function loadEmojis() {
    // Código para cargar emojis...

    // Obtener emojis favoritos del almacenamiento local
    const favoriteEmojis = JSON.parse(localStorage.getItem('favoriteEmojis')) || [];

    emojis.forEach(emoji => {
        const emojiElement = document.createElement('span');
        emojiElement.classList.add('emoji');
        emojiElement.textContent = emoji;

        // Verificar si el emoji actual está en la lista de favoritos
        if (favoriteEmojis.includes(emoji)) {
            emojiElement.classList.add('favorite'); // Agregar clase de estilo para indicar favorito
        }

        // Agregar evento click para copiar el emoji al hacer clic en él y agregar/quitar de favoritos
        emojiElement.addEventListener('click', () => {
            copyToClipboard(emoji);
            alert(`El emoji ${emoji} ha sido copiado al portapapeles.`);

            // Alternar estado de favorito al hacer clic
            if (favoriteEmojis.includes(emoji)) {
                // Si el emoji ya está en favoritos, quitarlo
                const index = favoriteEmojis.indexOf(emoji);
                favoriteEmojis.splice(index, 1);
                emojiElement.classList.remove('favorite');
            } else {
                // Si el emoji no está en favoritos, agregarlo
                favoriteEmojis.push(emoji);
                emojiElement.classList.add('favorite');
            }

            // Guardar emojis favoritos en el almacenamiento local
            localStorage.setItem('favoriteEmojis', JSON.stringify(favoriteEmojis));
        });

        emojiContainer.appendChild(emojiElement);
    });
}

// Cargar los emojis cuando la página se haya cargado
window.onload = loadEmojis;
// Función para copiar un texto al portapapeles
function copyToClipboard(text) {
    // Código para copiar al portapapeles...
}

// Función para crear y añadir emojis al contenedor
function loadEmojis() {
    // Código para cargar emojis...

    // Obtener emojis favoritos del almacenamiento local
    const favoriteEmojis = JSON.parse(localStorage.getItem('favoriteEmojis')) || [];

    emojis.forEach(emoji => {
        const emojiElement = document.createElement('span');
        emojiElement.classList.add('emoji');
        emojiElement.textContent = emoji;

        // Verificar si el emoji actual está en la lista de favoritos
        if (favoriteEmojis.includes(emoji)) {
            emojiElement.classList.add('favorite'); // Agregar clase de estilo para indicar favorito
        }

        // Agregar evento click para copiar el emoji al hacer clic en él y agregar/quitar de favoritos
        emojiElement.addEventListener('click', () => {
            copyToClipboard(emoji);
            alert(`El emoji ${emoji} ha sido copiado al portapapeles.`);

            // Alternar estado de favorito al hacer clic
            if (favoriteEmojis.includes(emoji)) {
                // Si el emoji ya está en favoritos, quitarlo
                const index = favoriteEmojis.indexOf(emoji);
                favoriteEmojis.splice(index, 1);
                emojiElement.classList.remove('favorite');
            } else {
                // Si el emoji no está en favoritos, agregarlo
                favoriteEmojis.push(emoji);
                emojiElement.classList.add('favorite');
            }

            // Guardar emojis favoritos en el almacenamiento local
            localStorage.setItem('favoriteEmojis', JSON.stringify(favoriteEmojis));
        });

        emojiContainer.appendChild(emojiElement);
    });
}

// Cargar los emojis cuando la página se haya cargado
window.onload = loadEmojis;



