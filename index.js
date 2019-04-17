const express = require('express');
const app = express();
const helmet = require('helmet');
const expectCt = require('expect-ct');
app.disable('x-powered-by');
app.use(helmet());
// app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }));
app.use(helmet.xssFilter());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.noSniff());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.referrerPolicy({policy: 'same-origin'}));
app.use(helmet.frameguard({action: 'deny'}));
app.use(helmet.hsts({maxAge: 63072000, includeSubDomains: true, preload: true}));
app.use(helmet.ieNoOpen());
app.use(expectCt({
	enforce: false,
	maxAge: 123
}));
module.exports = app;
