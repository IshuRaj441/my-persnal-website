import http.server
import socketserver
import os
import webbrowser
import socket
from contextlib import closing

# Configuration
DEFAULT_PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        # Set the directory to serve files from
        super().__init__(*args, directory=DIRECTORY, **kwargs)
        self.extensions_map.update({
            '.js': 'application/javascript',
            '.css': 'text/css',
            '.json': 'application/json',
            '.webmanifest': 'application/manifest+json',
            '.webp': 'image/webp',
            '.svg': 'image/svg+xml',
            '.woff2': 'font/woff2',
            '.woff': 'font/woff',
            '.ttf': 'font/ttf',
            '.eot': 'application/vnd.ms-fontobject',
            '.otf': 'font/otf',
        })
    
    def do_GET(self):
        # If the path ends with a slash, try to serve index.html
        if self.path.endswith('/'):
            self.path = 'index.html'
        
        # Send response code first
        self.send_response(200)
        
        # Set cache control headers
        if self.path.endswith(('.js', '.css', '.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.woff2', '.woff', '.ttf', '.eot')):
            self.send_header('Cache-Control', 'public, max-age=31536000, immutable')
        else:
            self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        
        # Set security headers
        self.send_header('X-Content-Type-Options', 'nosniff')
        self.send_header('X-Frame-Options', 'SAMEORIGIN')
        self.send_header('X-XSS-Protection', '1; mode=block')
        self.send_header('Referrer-Policy', 'strict-origin-when-cross-origin')
        
        # Handle MIME types for modern file formats
        if self.path.endswith('.js'):
            self.send_header('Content-Type', 'application/javascript')
        elif self.path.endswith('.css'):
            self.send_header('Content-Type', 'text/css')
        
        return http.server.SimpleHTTPRequestHandler.do_GET(self)

def find_available_port(start_port, max_attempts=10):
    """Find and return an available port number."""
    for port in range(start_port, start_port + max_attempts):
        try:
            with closing(socket.socket(socket.AF_INET, socket.SOCK_STREAM)) as s:
                s.bind(('', port))
                return port
        except OSError:
            if port == start_port + max_attempts - 1:
                raise
            continue
    raise OSError(f"No available ports in range {start_port}-{start_port + max_attempts - 1}")

def run_server():
    # Find an available port
    try:
        port = find_available_port(DEFAULT_PORT)
        
        # Create server with our custom handler
        with socketserver.TCPServer(("", port), Handler) as httpd:
            print(f"\n{'='*60}")
            print(f"Serving website at http://localhost:{port}")
            print(f"Directory: {DIRECTORY}")
            print(f"Press Ctrl+C to stop the server")
            print(f"{'='*60}\n")
            
            # Try to open the browser automatically
            try:
                webbrowser.open_new_tab(f'http://localhost:{port}')
            except Exception as e:
                print(f"Could not open browser automatically: {e}")
                print(f"Please open http://localhost:{port} manually.")
            
            # Start the server
            try:
                httpd.serve_forever()
            except KeyboardInterrupt:
                print("\nShutting down server...")
                httpd.server_close()
                print("Server stopped.")
                
    except OSError as e:
        print(f"\nError: {e}")
        print("Please close any other servers that might be using the same port.")
    except Exception as e:
        print(f"\nAn unexpected error occurred: {e}")

if __name__ == "__main__":
    print(f"Starting server in directory: {DIRECTORY}")
    run_server()
