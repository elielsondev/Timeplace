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
  "Sábado"
];

setInterval(() => {
  const data = new Date();

  let diaDaSemana = dayOfTheWeek[data.getDay()];

  let hour = data.getHours();
  let minute = data.getMinutes();
  let second = data.getSeconds();

  if (hour <= 9) {
    hour = `0${data.getHours()}`;
  }

  if (minute <= 9) {
    minute = `0${data.getMinutes()}`;
  }

  if (second <= 9) {
    second = `0${data.getSeconds()}`;
  }

  let time = `${hour}:${minute}:${second}h`;

  const day = data.getDate();
  const month = monthsOfTheYear[data.getMonth()];
  const year = data.getFullYear();

  const dataDeHoje = `${day} de ${month} de ${year}`;

  hoursAndYear.innerText = `${diaDaSemana}, ${time} - ${dataDeHoje}`;
}, 1000);
