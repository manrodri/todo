const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    PORT = process.env.PORT || 3000;

// require routes from routes module
var todoRoutes = require('./routes/todo');

app.get("/", (req, res) => {
    res.send("HELLO FROM THE ROOT ROUTE");
});

// use prefix for routes from routes module
app.use("/api/todos", todoRoutes);
// use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// start the server
app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));

