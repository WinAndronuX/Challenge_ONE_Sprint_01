// Luis Daniel Salazar Sanchez

// Se declara un diccionario para el cual las claves son las vocales y su valor lo que significa cada vocal
const dicVocalesTextoEncriptado = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat",
};
const mensaInputInvalido = "Solo letras minusculas, no se permiten acentos ni caracteres especiales.";

const inputText = document.getElementById("inputText");
const inputResult = document.getElementById("inputResult");

const encriptarTexto = () => {
    const texto = inputText.value;
    
    if (validarInput(texto)) {
        // Separar el texto a encriptar en una lista de caracteres
        const listaCaracteres = texto.split("");

        let resultado = "";

        // Iterar la lista de caracteres, verifica si el caracter existe como cleve en dicVocalesTextoEncriptado si es asi significa
        // que es una vocal y agrega a la variable resultado su valor correspondiente, si no entonces es una consonante y simplemete
        // la agrega a resultado.
        for (const x in listaCaracteres) {
            const caracter = listaCaracteres[x];

            if (dicVocalesTextoEncriptado.hasOwnProperty(caracter)) {
                resultado += dicVocalesTextoEncriptado[caracter];
            } else {
                resultado += caracter;
            }
        }

        // Retorna el texto encriptado
        inputResult.value = resultado;
    } else {
        alert(mensaInputInvalido);
        inputText.value = "";
    }
};

const desencriptarTexto = () => {
    let texto = inputText.value;

    if (validarInput(texto)) {
        // Se iteran los valores de el diccionario dicVocalesTextoEncriptado y simplemente se reemplaza el valor por la clave del diccionario
        for (const vocal in dicVocalesTextoEncriptado) {
            texto = texto.replaceAll(dicVocalesTextoEncriptado[vocal], vocal);
        }

        inputResult.value = texto;
    } else {
        alert(mensaInputInvalido);
        inputText.value = "";
    }
};

const validarInput = (text) => {
    const regex = /^[a-z]+$/;
    return regex.test(text);
};

const copearResultado = async () => {
    await navigator.clipboard.writeText(inputResult.value);
    alert("Texto copeado exitosamente!!");
};

const reset = () => {
    inputText.value = "";
    inputResult.value = "";
};