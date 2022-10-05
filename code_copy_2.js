const inputMensaje = document.querySelector("#mensaje")
const inputResultado = document.querySelector("#resultado")

const btnEncriptar = document.querySelector("#encriptar")
const btnDesencriptar = document.querySelector("#desencriptar")
const btnCopiar = document.querySelector("#copiar")
const btnEscuchar = document.querySelector("#escuchar")

document.getElementById("salida_2").style.display = "none"; // para que no aparezca la salida 2

function validar(){
    var encontrado = false;
    let invalid_characters =["!",'"',"'","#","$","%","^","&","*","(",")","-","_","=","+","[","]","{","}",";",":",",",",","<",".",">","/","?",'\\',"|","`","~","à", "è", "ì", "ò", "ù", "À", "È", "Ì", "Ò", "Ù"]
    invalid_characters.push("á", "é", "í", "ó", "ú", "ý", "Á", "É", "Í", "Ó", "Ú", "Ý")
    invalid_characters.push("â", "ê", "î", "ô", "û","Â", "Ê", "Î", "Ô", "Û")
    invalid_characters.push("ã", "õ", "Ã", "Õ")
    invalid_characters.push("ä", "ë", "ï", "ö", "ü", "ÿ", "Ä", "Ë", "Ï", "Ö", "Ü", "Ÿ")
    invalid_characters.push("å", "Å", "æ", "Æ", "œ", "Œ", "ç", "Ç", "ð", "Ð", "ø", "Ø", "¿", "¡", "ß" )

    // if ( $("#mensaje").val().trim().length > 0 ) {
    //     alert("El campo contiene un string válido que no son espacios");
    //   }
    //   else {
    //     alert("El campo contiene espacios y está vacío");
    //   }

    for(let i = 0; i<invalid_characters.length; i++){

        if(inputMensaje.value.includes(invalid_characters[i])){
            alert("No son permitidos carácteres especiales o carácteres con acento");
            inputMensaje.focus(); // esta es para que el cursor se ponga de forma automatica en la casilla vacia de entrada, para que no tengamos que volver a colocar el cursor de forma manual

            encontrado = true;
            break;
        }    
    }
    console.log(encontrado)
    return encontrado;
}


function encriptar(){
    let validacion = validar();
    
    if (validacion == false) {
        var mensaje = inputMensaje.value.toLowerCase();
        console.log(mensaje)
        var mensajeEncriptado = mensaje
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("o", "ober")
        .replaceAll("a", "ai")
        .replaceAll("u", "ufat");
        
        inputResultado.value = mensajeEncriptado;

        document.getElementById("salida_1").style.display = "none"; // para que dezaparesca el mensaje de salida_1 y darle paso a la salida 2
        document.getElementById("salida_2").style.display = ""; // para que aparezca la salida 2
    
        inputMensaje.value = ""; //sirve para que nuestro input anterior se borre luego de clickear y recibir una respuesta por parte del programa, para que podamos introducir otra entrada.
        inputMensaje.focus(); // esta es para que el cursor se ponga de forma automatica en la casilla vacia de entrada, para que no tengamos que volver a colocar el cursor de forma manual
    }
    
    
}

function desencriptar(){
    var mensajeEncriptado = inputMensaje.value;
    var mensaje = mensajeEncriptado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");   

    inputResultado.value = mensaje;

    document.getElementById("salida_1").style.display = "none"; // para que dezaparesca el mensaje de salida_1 y darle paso a la salida 2
    document.getElementById("salida_2").style.display = ""; // para que aparezca la salida 2    

    inputMensaje.value = ""; //sirve para que nuestro input anterior se borre luego de clickear y recibir una respuesta por parte del programa, para que podamos introducir otra entrada.
	inputMensaje.focus(); // esta es para que el cursor se ponga de forma automatica en la casilla vacia de entrada, para que no tengamos que volver a colocar el cursor de forma manual
}

function copiar(){
    document.getElementById("salida_2").style.display = "none"; // para que no aparezca la salida 2 y dar paso a la desencriptación
    document.getElementById("salida_1").style.display = ""; // para que aprezca el mensaje de salida_1 y darle paso a la desencriptación

    var mensajeEncriptado = inputResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
}

// function escuchar(){
//     var mensajeEncriptado = inputResultado.value;
//     let msg = new SpeechSynthesisUtterance();
//     msg.text = mensajeEncriptado;
//     msg.lang = "es.Es";
//     window.speechSynthesis.speak(msg)
// }



btnEncriptar.onclick = encriptar;

btnDesencriptar.onclick = desencriptar;

btnCopiar.onclick = copiar;

/*btnEscuchar.onclick = escuchar;*/
