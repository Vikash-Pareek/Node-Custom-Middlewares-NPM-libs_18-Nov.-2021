/*
1.Create on custom middleware to validate the session of user if valid session 
allow to access request otherwise send back.
*/

const fs = require('fs');
const express = require('express');
const PORT = 8080;

const app = express();

// checks if the incoming request is JSON object.
app.use(express.json());

const loggerMiddleware = (req, res, next) => {
    if (req.body.name === "Vikash Pareek" && req.body.id === 1) {
        next();
    } else {
        res.json({
            status: 400,
            error: "User does not exist here!"
        });
    }
}

app.get("/", (req, res) => {
    res.json({
        message: "Hello from Vikash!"
    });
    res.send();
});

app.post("/", loggerMiddleware, (req, res) => {
    res.send("You are Logged In!!");
});


app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`);
});
