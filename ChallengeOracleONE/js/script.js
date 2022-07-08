function codificar() {
  var texto = document.getElementById("inputTexto").value.toLowerCase();
  var textCodi = texto.replace(/e/igm, "enter");
  var textCodi = textCodi.replace(/o/igm, "ober");
  var textCodi = textCodi.replace(/i/igm, "imes");
  var textCodi = textCodi.replace(/a/igm, "ai");
  var textCodi = textCodi.replace(/u/igm, "ufat");

  document.getElementById("imgDir").style.display = "none";
  document.getElementById("texto").style.display = "none";
  document.getElementById("texto2").innerHTML = textCodi;
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
}

function decodificar() {
  var texto = document.getElementById("inputTexto").value.toLowerCase();
  var textCodi = texto.replace(/enter/igm, "e");
  var textCodi = textCodi.replace(/ober/igm, "o");
  var textCodi = textCodi.replace(/imes/igm, "i");
  var textCodi = textCodi.replace(/ai/igm, "a");
  var textCodi = textCodi.replace(/ufat/igm, "u");

  document.getElementById("imgDir").style.display = "none";
  document.getElementById("texto").style.display = "none";
  document.getElementById("texto2").innerHTML = textCodi;
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
}

function copiar() {
  var conteudo = document.querySelector("#texto2");
  conteudo.select();
  document.execCommand("copy");
  alert("Texto copiado!");
}



