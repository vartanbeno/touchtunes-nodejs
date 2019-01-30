import express from 'express';
import api from './api/api';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api', api);

app.listen(PORT);
