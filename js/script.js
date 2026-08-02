// =============================
// GUIA DIGITAL DO HÓSPEDE
// script.js
// =============================

function abrirImagem(src){

    document.getElementById("imagemGrande").src = src;

    document.getElementById("lightbox").style.display = "flex";

}

function fecharImagem(){

    document.getElementById("lightbox").style.display = "none";

}
