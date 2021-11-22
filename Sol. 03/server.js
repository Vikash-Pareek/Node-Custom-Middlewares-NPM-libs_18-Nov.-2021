/*
3. Create API using Async/Await or Promises, fetch github profile and followers. 
(https://api.github.com/users/<username>)
*/

const express = require('express');
const axios = require('axios');

const PORT = 8001;

const app = express();

// const urlEndpoint = axios.get('https://api.github.com/users');

app.get("/", (req, res) => {
    res.send("<h3>Add '/users' to the URL to get all the Github users profile.</h3><h3>Add '/users/--username--' to the URL to get the Github profile of that user.</h3>");
});

app.get("/users", async(req, res) => {
    try {
		const responseResult = await axios.get('https://api.github.com/users');
		const githubResponseData = responseResult.data;
		res.status(200).json(githubResponseData);
	} catch (err) {
        console.log(err);
        res.send(err.message);
	}
});

app.get("/users/:username", async(req, res) => {
	const { username } = req.params;
	try {
		const { data: { name, html_url, followers } } = await axios.get(`https://api.github.com/users/${username}`);
		const githubResponseData = { name, html_url, followers };
		res.status(200).json(githubResponseData);
	} catch (err) {
        console.log(err);
        res.send(err.message);
	}
});


app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
