const citySelect = document.getElementById('city-select');
const timer = document.getElementById('timer');
const timeOffsets = {
  london: 0,
  moscow: 3,
  'new-york': -5,
  tokyo: 9,
};

function updateTime() {
  const now = new Date();
  const city = citySelect.value;
  const offset = timeOffsets[city];
  const cityTime = new Date(now.getTime() + offset * 60 * 60 * 1000);
  const hours = cityTime.getHours().toString().padStart(2, '0');
  const minutes = cityTime.getMinutes().toString().padStart(2, '0');
  const seconds = cityTime.getSeconds().toString().padStart(2, '0');
  timer.textContent = `${hours}:${minutes}:${seconds}`;
}

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  updateTime();
  setInterval(updateTime, 1000);
});
