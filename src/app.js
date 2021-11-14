import express from 'express';
import config from './config.js';

import routes from './routes/routes.js';

const app = express();

app.set('port', config.port);

app.use(routes);

export default app;