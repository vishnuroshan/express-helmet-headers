const express = require('express');
const app = express();
const helmet = require('helmet');

app.use(helmet())

app.use(helmet.xssFilter());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.noSniff());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.referrerPolicy({policy: 'same-origin'}));
app.use(helmet.frameguard({action: 'deny'}));

module.exports = app;