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

let horas = 0;
let minutos = 1;
let segundos = 1;

setInterval(() => {
  if (!horas && !minutos && !segundos) {
    horas = 0;
    minutos = 0;
    segundos = 0;
  } else {
    // Segundos decremento
    segundos -= 1;
  }
  
  // Segundos
  if (segundos === -1) {
    segundos = 59;
  }

  // Minutos decremento
  if (segundos >= 59) {
    minutos -= 1;
  }

  // Minutos
  if(minutos === -1 && horas >= 0) {
    minutos = 59;
  }

  // Horas decremento
  if (minutos >= 59 && horas >= 1) {
    horas -= 1
  }


  
  cronometro.innerText = `${horas <= 9 ? `0${horas}` : horas}:${
    minutos <= 9 ? `0${minutos}` : minutos
  }:${segundos <= 9 ? `0${segundos}` : segundos}`;
}, 1000);


