URL = "http://localhost:8080/"

GET request to URL :
    { "message":"Hello from Vikash!" }

POST request to URL with correct {"id": 1 and "name": "Vikash Pareek"} :
    {
        "You are Logged In!!"
    }
    else {
        status: 400,
        error: "User does not exist here!"
    }