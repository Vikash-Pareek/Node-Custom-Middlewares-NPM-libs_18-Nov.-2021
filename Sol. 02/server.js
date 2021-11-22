/*
2. Create Example for Buffer, Streams and pipe.
*/

const fs = require('fs');
const express = require('express');
const PORT = 3001;

const app = express();

// Buffer
const data = fs.readFileSync('userData.json');
const userData = JSON.parse(data);
// Stream
const streamFile = fs.createReadStream('userData.json');

app.get("/", (req, res) => {
    console.log("BUFFER :");
    console.log(data);
    console.log("JSON :");
    console.log(userData);
    res.send("Add '/pipe' to the url.");
});

app.get("/pipe", (req, res) => {
    // Pipe
    streamFile.pipe(res);
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});