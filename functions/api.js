const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const serverless = require('serverless-http');
const cors = require("cors");

const router = require('./routes')

const app = express();

app.use(express.json());
app.use('/.netlify/functions/api', router);
app.use(cors({ origin: "*" }));

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports.handler = serverless(app);