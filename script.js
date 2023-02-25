const form = document.getElementById("download-form");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const videoUrl = document.getElementById("video-url").value;
  const videoQuality = document.getElementById("video-quality").value;
  resultDiv.innerHTML = "Загрузка видео...";
  fetch(`/download?video_url=${videoUrl}&video_quality=${videoQuality}`)
    .then((response) => response.text())
    .then((data) => {
      resultDiv.innerHTML = data;
    });
});
