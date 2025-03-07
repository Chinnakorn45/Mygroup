const express = require('express');
const app = express();
const PORT = 3099;

app.get("/", (req, res) => {
    res.send(`
        <html>
            <head>
                <meta charset="UTF-8">
                <title>Welcome</title>
                <style>
                    body { font-family: Arial, sans-serif; text-align: center; background-color: #f4f4f4; }
                    h1 { color: #333; }
                </style>
            </head>
            <body>
                <h1>สวัสดีวันเสาร์</h1>
            </body>
        </html>
    `);
});

app.get("/hello-world", (req, res) => {
    res.send(`
        <html>
            <head>
                <meta charset="UTF-8">
                <title>Hello World</title>
                <style>
                    body { font-family: Arial, sans-serif; text-align: center; background-color: #e3f2fd; }
                    h1 { color: #0277bd; }
                </style>
            </head>
            <body>
                <h1>Hello World!</h1>
            </body>
        </html>
    `);
});

app.get("/finalTest", (req, res) => {
    res.send(`
        <html>
            <head>
                <meta charset="UTF-8">
                <title>Final Test</title>
                <style>
                    body { font-family: Arial, sans-serif; text-align: center; background-color: #fff3e0; }
                    h1 { color: #d84315; }
                    .name-box {
                        display: inline-block;
                        border: 3px solid #d84315;
                        padding: 15px;
                        margin: 15px;
                        border-radius: 15px;
                        background: linear-gradient(135deg, #ffccbc, #ff8a65);
                        font-size: 20px;
                        color: #fff;
                        font-weight: bold;
                        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
                        transition: transform 0.3s ease-in-out;
                    }
                    .name-box:hover {
                        transform: scale(1.1);
                    }
                </style>
            </head>
            <body>
                <h1>Final Test</h1>
                <div class="name-box">ชินกร ทองสอาด 6504305001313</div><br>
                <div class="name-box">ซากีหนะต์ ปรังเจะ 6504305001354</div><br>
                <div class="name-box">ภัคพล โสตทิพย์ 6504305001322</div><br>
                <div class="name-box">กัญญาณัฐ เพชร์พวง 6504305001301</div>
            </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
