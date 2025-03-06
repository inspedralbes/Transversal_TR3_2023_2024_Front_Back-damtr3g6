import express from 'express';
import cors from 'cors';
import { testSequelizeConnection } from './database.js';

const app = express();
const port = 4000;

// Enable CORS
app.use(cors());

// Test the Sequelize connection
testSequelizeConnection();

// Basic route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
