"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
require('dotenv').config();
const db = require('./db');
const app = express();
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log('server started at port', PORT);
});
//# sourceMappingURL=index.js.map