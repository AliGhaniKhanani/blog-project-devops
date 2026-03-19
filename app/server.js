app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Blog Platform</title>
        <style>
            body {
                margin: 0;
                padding: 0;
                font-family: Arial, sans-serif;
                background: linear-gradient(135deg, #1e3c72, #2a5298);
                color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }

            .container {
                text-align: center;
                background: rgba(255, 255, 255, 0.1);
                padding: 40px;
                border-radius: 12px;
                box-shadow: 0 8px 20px rgba(0,0,0,0.3);
            }

            h1 {
                font-size: 36px;
                margin-bottom: 10px;
            }

            p {
                font-size: 18px;
                opacity: 0.9;
            }

            .btn {
                margin-top: 20px;
                padding: 10px 20px;
                border: none;
                border-radius: 6px;
                background-color: #00c6ff;
                color: white;
                font-size: 16px;
                cursor: pointer;
                transition: 0.3s;
            }

            .btn:hover {
                background-color: #0072ff;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🚀 Blog Platform Running</h1>
            <p>Your backend service is live and ready.</p>
            <button class="btn" onclick="window.location.href='/health'">
                Check Health Status
            </button>
        </div>
    </body>
    </html>
    `);
});

