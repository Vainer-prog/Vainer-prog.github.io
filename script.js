// Загружаем промокоды из файла data.txt
const promocodes = [];
fetch('data.txt')
  .then(response => response.text())
  .then(text => {
    const lines = text.split('\n');
    lines.forEach(line => {
      const [promocode, image, link] = line.split('|');
      promocodes.push({
        promocode,
        image,
        link
      });
    });
  })
  .then(() => {
    // Создаем рамки для промокодов
    promocodes.forEach((promocode, index) => {
      const promocodeElement = document.createElement('div');
      promocodeElement.classList.add('promocode');
      promocodeElement.id = `promocode-${index + 1}`;

      // Добавляем кнопку "Показать промокод"
      const showPromocodeButton = document.createElement('button');
      showPromocodeButton.classList.add('show-promocode');
      showPromocodeButton.textContent = 'Показать промокод';
      showPromocodeButton.addEventListener('click', () => {
        promocodeElement.querySelector('.promocode-content').style.display = 'block';
      });
      promocodeElement.appendChild(showPromocodeButton);

      // Добавляем содержимое промокода
      const promocodeContentElement = document.createElement('div');
      promocodeContentElement.classList.add('promocode-content');

      const promocodeHeadingElement = document.createElement('h2');
      promocodeHeadingElement.textContent = promocode.promocode;
      promocodeContentElement.appendChild(promocodeHeadingElement);

      const promocodeParagraphElement = document.createElement('p');
      promocodeParagraphElement.textContent = promocode.image;
      promocodeContentElement.appendChild(promocodeParagraphElement);

      const promocodeImageElement = document.createElement('img');
      promocodeImageElement.src = promocode.link;
      promocodeContentElement.appendChild(promocodeImageElement);

      // Добавляем кнопку "Скопировать промокод"
      const copyPromocodeButton = document.createElement('button');
      copyPromocodeButton.classList.add('copy-promocode');
      copyPromocodeButton.textContent = 'Скопировать промокод';
      copyPromocodeButton.addEventListener('click', () => {
        navigator.clipboard.writeText(promocode.promocode);
      });
      promocodeContentElement.appendChild(copyPromocodeButton);

      // Добавляем кнопку "Использовать промокод"
      const usePromocodeButton = document.createElement('a');
      usePromocodeButton.classList.add('use-promocode');
      usePromocodeButton.textContent = 'Использовать промокод';
      usePromocodeButton.href = promocode.link;
      usePromocodeButton.target = '_blank';
      promocodeContentElement.appendChild(usePromocodeButton);

      promocodeElement.appendChild(promocodeContentElement);

      document.querySelector('.promocodes').appendChild(promocodeElement);
    });
  });
