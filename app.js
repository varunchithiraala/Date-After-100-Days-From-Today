const express = require("express");
const app = express();
const addDays = require("date-fns/addDays");

app.get("/",(request,response) => {
    let date = new Date();
    const result = addDays(new Date(date.getFullYear(),date.getMonth(),date.getDate()),100);
    response.send(`${result.getDate()}/${result.getMonth()+1}/${result.getFullYear()}`);
});

module.exports = app;