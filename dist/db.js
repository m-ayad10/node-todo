"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongooose = require('mongoose');
require('dotenv').config();
const DATABASE_URL = process.env.DATABASE_URL;
mongooose.connect(DATABASE_URL);
const db = mongooose.connection;
db.on('connected', () => {
    console.log('MongoDB connected');
});
db.on('disconnected', () => {
    console.log("MongoDB disconnected");
});
db.on('error', (error) => {
    console.error("MongoDb connection error:", error);
});
module.exports = db;
//# sourceMappingURL=db.js.map