from http.server import BaseHTTPRequestHandler, HTTPServer

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.end_headers()
        self.wfile.write(b"Hello from QA Branch - Python App")

HTTPServer(('',3000),handler).serve_forever()
FROM python:3.9
WORKDIR /app
COPY . .
EXPOSE 3000
CMD ["python", "app.py"]

