let historial = [];
let indiceHistorial = -1;
let URL = document.getElementById("url");
let iframe = document.getElementById("navigator");

function showPage() {
  URL = document.getElementById("url").value;
  if (!URL.startsWith("http")) URL = "https://" + URL;

  iframe.src = URL;

  if (indiceHistorial === -1 || historial[indiceHistorial] !== url) {
    historial = historial.slice(0, indiceHistorial + 1);
    historial.push(URL);
    indiceHistorial++;
  }
}

function goBack() {
  if (indiceHistorial > 0) {
    indiceHistorial--;
    iframe.src = historial[indiceHistorial];
    document.getElementById("url").value = iframe.src;
  }
}

function goAhead() {
  if (indiceHistorial < historial.length - 1) {
    indiceHistorial++;
    iframe.src = historial[indiceHistorial];
    document.getElementById("url").value = iframe.src;
  }
}

function Reload() {
  iframe.src = iframe.src;
}
