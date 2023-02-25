const downloadForm = document.getElementById('download-form');
const videoPlayer = document.getElementById('video-player');

downloadForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const url = document.getElementById('url').value;
    const quality = document.getElementById('quality').value;
    fetch('/download', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `url=${url}&quality=${quality}`
    })
    .then(response => response.json())
    .then(data => {
        videoPlayer.src = data.url;
        videoPlayer.poster = '';
        videoPlayer.play();
    })
    .catch(error => console.error(error));
});
