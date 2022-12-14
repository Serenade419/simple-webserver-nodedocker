'use strict';

const express = require('express');
const app = express();
const port = 8080;
const host = "0.0.0.0";

app.use(express.static(__dirname + '/public'));

app.listen(port, host);
console.log(`Listening on port ${port}`);