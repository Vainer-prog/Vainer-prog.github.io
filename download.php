<?php
if (isset($_POST['url']) && isset($_POST['quality'])) {
	$url = $_POST['url'];
	$quality = $_POST['quality'];
	
	// Выполните загрузку видео с помощью youtube-dl, указав выбранное качество.
	exec("youtube-dl -f $quality -o 'downloads/%(title)s.%(ext)s' $url");
	
	// Выведите ссылку на загруженное видео.
	$filename = exec("youtube-dl -f $quality --get-filename -o 'downloads/%(title)s.%(ext)s' $url");
	echo "<a href='$filename'>Скачать видео</a>";
} else {
	echo "Введите URL-адрес и выберите качество.";
}
?>
