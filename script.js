let sec = 0;
let min = 0;
let hora = 0;
let interval;

function formatacao(valor) {
  if (valor < 10) {
    return "0" + valor;
  } else {
    return valor;
  }
}

function start() {
  interval = setInterval(function () {
    sec++;

    if (sec == 60) {
      min++;
      sec = 0;
    }

    if (min == 60) {
      hora++;
      min = 0;
    }

    document.getElementById("watch").innerText =
      formatacao(hora) + ":" + formatacao(min) + ":" + formatacao(sec);
  }, 1000);
}

function pause() {
  clearInterval(interval);
}

function reset() {
  clearInterval(interval);
  sec = 0;
  min = 0;
  hora = 0;

  document.getElementById("watch").innerText = "00:00:00";
}
