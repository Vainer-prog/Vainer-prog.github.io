from flask import Flask, request, jsonify
import youtube_dl

app = Flask(__name__)

@app.route('/download', methods=['POST'])
def download():
    url = request.form.get('url')
    quality = request.form.get('quality')
    ydl_opts = {'format': quality}
    with youtube_dl.YoutubeDL(ydl_opts) as ydl:
        info_dict = ydl.extract_info(url, download=False)
        video_url = info_dict['url']
        title = info_dict['title']
        return jsonify({'url': video_url, 'title': title})

if __name__ == '__main__':
    app.run(debug=True)
