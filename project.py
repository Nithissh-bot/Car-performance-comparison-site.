import http.server
import socketserver
from pathlib import Path

PORT = 8000
DIRECTORY = Path(__file__).resolve().parent


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(DIRECTORY), **kwargs)

    def log_message(self, format, *args):
        pass


with socketserver.TCPServer(("127.0.0.1", PORT), Handler) as httpd:
    print(f"Car comparison site running at http://127.0.0.1:{PORT}")
    httpd.serve_forever()
