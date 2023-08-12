// Токен доступа к Google Sheets API
const SHEET_TOKEN = 'AIzaSyA6kKS7TQOor0NNEeJbsCzzoTnfczX9FT8'; 

// ID таблицы Google Sheets для записи данных
const SHEET_ID = '1bB7k9FwNd6Iyu2EmIOketZiRxxMdatfLQYyWl5cjKMs';

// Показываем только первый вопрос
document.getElementById('question1').style.display = 'block';

// Переход к следующему вопросу
const nextButtons = document.querySelectorAll('[id^=next]');

nextButtons.forEach(button => {

  button.addEventListener('click', () => {
    // Код перехода к следующему вопросу   
  });

});


// Сохранение ответов в Google Sheet
function saveAnswer(questionId, answer) {

  // Добавляем новую строку в таблицу
  fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1:append?valueInputOption=USER_ENTERED`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${SHEET_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      range: 'Sheet1',
      majorDimension: 'ROWS',
      values: [[questionId, answer]]
    })
  });

}

// Отправка формы 
// ...
