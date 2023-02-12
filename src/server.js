import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

const handleHome = (req, res) => {
    return res.send("<h1>WooJin</h1>");
};

app.use(logger);
app.get("/",logger ,handleHome);


const handleListening = () => console.log(`Server lisening on Port http://localhost:${PORT} 😃`);

app.listen(PORT, handleListening);