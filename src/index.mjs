import express from 'express';
import bodyParser from 'body-parser';
import api from './api/api';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', api);

app.listen(PORT);
