import express from 'express';
import bodyParser from 'body-parser';
import users from './routes/users.js';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CONNECTION_URL = process.env.MONGODB_CONNECTION_URL;

app.use(bodyParser.json());
app.use(cors());

app.use('/users', users);

app.get('/', (req, res) => {
    res.send('Hello from Homepage.');
});

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));
