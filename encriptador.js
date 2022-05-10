function encriptar(){

    const frase_original = document.querySelector(".fraseOri").value;
    const frase_encriptada = frase_original.replace(/e/gi, "eXt0N@").replace(/i/gi, "iZlP5").replace(/a/gi, "a-9 TbS&8").replace(/o/gi, "o@Lm Jh65%").replace(/u/gi, "uZg1 K5Hdc");
    document.querySelector(".fraseEnc").value = frase_encriptada;
    document.querySelector(".fraseEnc").value;
    
}	

boton1 = document.querySelector("#encriptar"); 
boton1.onclick = encriptar;

function desencriptar(){
    const frase_original = document.querySelector(".fraseOri").value;
    const frase_encriptada = frase_original.replace(/eXt0N@/gi, "e").replace(/iZlP5/gi, "i").replace(/a-9 TbS&8/gi, "a").replace(/o@Lm Jh65%/gi, "o").replace(/uZg1 K5Hdc/gi, "u");
    document.querySelector(".fraseEnc").value = frase_encriptada;
    document.querySelector(".fraseEnc").value;
}

boton2 = document.querySelector("#desencriptar"); 
boton2.onclick = desencriptar;

function copiar(){
    let texto = document.getElementById("fraseEncriptada")
    texto.select();
    texto.setSelectionRange(0, 999999);
    document.execCommand('copy');
}

boton3 = document.querySelector("#copiar"); 
boton3.onclick = copiar;