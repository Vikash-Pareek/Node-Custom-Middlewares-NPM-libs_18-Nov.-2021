/*
4.Child Process execFile(); example.
*/

const { execFile } = require('child_process');
const express = require('express');
const PORT = 5001;

const app = express();

execFile('node', ['someMsg.js'], (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error}`);
        return;
    } else if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    } else {
        console.log(`stdout: ${stdout}`);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
