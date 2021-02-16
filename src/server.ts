import 'reflect-metadata';

import express from 'express';
import routes from './routes';
import './database';

const app = express();

app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
  return res.json({ message: 'Hello blablabla' });
});

app.listen(3333, () => {
  console.log('server started on port 3333.');
});
