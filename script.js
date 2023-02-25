const downloadBtn = document.getElementById("download-btn");
const urlInput = document.getElementById("url");

downloadBtn.addEventListener("click", () => {
    const url = urlInput.value;
    const quality = document.querySelector('input[name="quality"]:checked').value;
    downloadVideo(url, quality);
});

function downloadVideo(url, quality) {
    const a = document.createElement("a");
    a.href = `https://www.y2mate.com/mates/${url}/download/${quality}`;
    a.download = "video.mp4";
    a.click();
}
