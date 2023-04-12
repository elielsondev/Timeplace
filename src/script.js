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

// _____________________________________________________
// Cronometro, inputs e botões:

const stopwatch = document.querySelector("#stopwatch");

const buttonStop = document.querySelector("#btn-stop");

let stopCount = false;

const stopCounting = () => {
  if (stopCount === false) {
    stopCount = true;
    window.alert('Clique novamente em STOP, para zerar o cronometro.')
  } else {
    stopCount = false;
  }
  stopwatch.textContent = "00:00:00";
  buttonStart.disabled = false;
  buttonStart.style.backgroundColor = "rgb(5, 214, 5)";
  return stopCount;
};

buttonStop.addEventListener("click", stopCounting);

let inputHour = document.querySelector("#hours");
let inputMinutes = document.querySelector("#minutes");
let inputSeconds = document.querySelector("#seconds");

const buttonStart = document.querySelector("#btn-start");

const startCounting = (e) => {
  e.preventDefault();

  let hours;
  let minutes;
  let seconds;

  hours = inputHour.value || 0;
  minutes = inputMinutes.value || 0;
  seconds = inputSeconds.value || 0;

  inputHour.value = null;
  inputMinutes.value = null;
  inputSeconds.value = null;

const startInterval = setInterval(() => {
  if (stopCount === true  && stopwatch !== '00:00:00') {
    clearInterval(startInterval);
  }

  // Desativa o botão assim que algum valor for inserido e iniciada a contagem:
  if (
    typeof hours === "number" ||
    typeof minutes === "number" ||
    typeof seconds === "number"
  ) {
    buttonStart.disabled = true;
    buttonStart.style.backgroundColor = "rgb(192, 192, 192)";
  }

  // Decremento segundos:
  if (seconds >= 0 && stopwatch.textContent !== "00:00:00") {
    buttonStart.disabled = true;
    buttonStart.style.backgroundColor = "rgb(192, 192, 192)";
    seconds -= 1;
  }

  // Gerando 59 segundos:
  if (seconds < 0 || (seconds === -1 && minutes > 0)) {
    seconds = 59;
  }

  // Decremento minutos:
  if (minutes > 0 && seconds === 59) {
    minutes -= 1;
  }

  // Gerando 59 minutos:
  if (hours >= 1 && minutes === 0 && seconds === 59) {
    seconds = 59;
    minutes = 59;
  }

  // Decremento horas:
  if (hours > 0 && minutes === 59 && seconds === 59) {
    segundos = 59;
    minutes = 59;
    hours -= 1;
  }

  stopwatch.innerText = `${hours <= 9 ? `0${hours}` : hours}:${
    minutes <= 9 ? `0${minutes}` : minutes
  }:${seconds <= 9 ? `0${seconds}` : seconds}`;

  // Ativando o botão e parando o setInterval:
  if (stopwatch.textContent === "00:00:00") {
    buttonStart.disabled = false;
    buttonStart.style.backgroundColor = "rgb(5, 214, 5)";
    clearInterval(startInterval);
  }
}, 1000);
};

buttonStart.addEventListener("click", startCounting);
