function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  // Exercicio 1
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  function createDaysOfTheMonth () {
      for (let i = 0; i < dezDaysList.length; i++){
          const li = document.createElement('li');
          li.classList.add('day');

          if (i == 25 || i == 26 || i == 32){
            li.classList.add('holiday');
          }

          if (i == 5 || i == 12 || i == 19 || i == 26) {
            li.classList.add('friday')
          }
          
          li.innerHTML = dezDaysList[i];
          document.querySelector('#days').appendChild(li)
      }
      for (let i = 0; i < dezDaysList.length; i++){

      }
  }
  createDaysOfTheMonth();

  // Exercicio2
  function createButtonHolidays(texto){
    let button1 = document.createElement('button');
    button1.id = 'btn-holiday';
    button1.innerText = texto;
    document.querySelector('.buttons-container').appendChild(button1);
  }
  createButtonHolidays('Feriados');

  // Exercicio 3
  function btnHolidaysClick(){
    document.getElementById('btn-holiday').addEventListener('click', function(){
      let days = document.querySelectorAll('.holiday');

      for (let i = 0; i < days.length; i++){
        let day = days[i];
        if (day.style.backgroundColor == 'rgb(100, 220, 100)') {
          day.style.backgroundColor = 'rgb(238, 238, 238)';
        } else {
          day.style.backgroundColor = 'rgb(100, 220, 100)';
        }
      }
    });
  }
  btnHolidaysClick();
