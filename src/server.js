const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(require("./application/user.router"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server is running by '${PORT}' port`));
