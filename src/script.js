const hoursAndYear = document.querySelector("#clock");

const monthsOfTheYear = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const dayOfTheWeek = [
  "Domingo",
  "Segunda-Feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

setInterval(() => {
  const data = new Date();
  let diaDaSemana = dayOfTheWeek[data.getDay()];

  let hour = data.getHours();
  let minute = data.getMinutes();
  let second = data.getSeconds();

  let time = `${hour <= 9 ? `0${hour}` : hour}:${
    minute <= 9 ? `0${minute}` : minute
  }:${second <= 9 ? `0${second}` : second}h`;

  const day = data.getDate();
  const month = monthsOfTheYear[data.getMonth()];
  const year = data.getFullYear();

  const dataDeHoje = `${day} de ${month} de ${year}`;

  hoursAndYear.innerText = `${diaDaSemana}, ${time} - ${dataDeHoje}`;
}, 1000);

const cronometro = document.querySelector("#stopwatch");

let h = document.querySelector("#hours");
let m = document.querySelector("#minutes");
let s = document.querySelector("#seconds");

const buttonStart = document.querySelector("#btn-start");
const buttonStop = document.querySelector("#btn-stop");

let horas;
let minutos;
let segundos;

const startFunction = (e) => {
  e.preventDefault();

  horas = h.value || 0;
  minutos = m.value || 0;
  segundos = s.value || 0;

  h.value = null;
  m.value = null;
  s.value = null;

  let intervaloStart = setInterval(() => {
    // Desativa o botão assim que algum valor for inserido e iniciada a contagem:
    if (
      typeof horas === "number" ||
      typeof minutos === "number" ||
      typeof segundos === "number"
    ) {
      buttonStart.disabled = true;
      buttonStart.style.backgroundColor = "red";
    }

    // Decremento segundos:
    if (segundos >= 0 && cronometro.textContent !== "00:00:00") {
      buttonStart.disabled = true;
      buttonStart.style.backgroundColor = "red";
      segundos -= 1;
    }

    // Gerando 59 segundos:
    if (segundos < 0 || (segundos === -1 && minutos > 0)) {
      segundos = 59;
    }

    // Decremento minutos:
    if (minutos > 0 && segundos === 59) {
      minutos -= 1;
    }

    // Gerando 59 minutos:
    if (horas >= 1 && minutos === 0 && segundos === 59) {
      segundos = 59;
      minutos = 59;
    }

    // Decremento horas:
    if (horas > 0 && minutos === 59) {
      horas -= 1;
    }

    cronometro.innerText = `${horas <= 9 ? `0${horas}` : horas}:${
      minutos <= 9 ? `0${minutos}` : minutos
    }:${segundos <= 9 ? `0${segundos}` : segundos}`;

    // Ativando o botão e parando o setInterval:
    if (cronometro.textContent === "00:00:00") {
      buttonStart.disabled = false;
      buttonStart.style.backgroundColor = "rgb(5, 214, 5)";
      clearInterval(intervaloStart);
    }
  }, 1000);
};

buttonStart.addEventListener("click", startFunction);

// if (horas === 0 && minutos === 0 && segundos === 0) {
//   window.alert('Acabou!!')
//   buttonStart.style.backgroundColor = rgb(5, 214, 5);
//   buttonStart.disabled = false;
//   // Fonte: https://horadecodar.com.br/2021/04/20/como-parar-um-setinterval-em-javascript/
//   clearInterval(intervaloStart);
// }
