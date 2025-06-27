const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // parse JSON bodies

const jokes = [
    "Why don't scientists trust atoms? Because they make up everything.",
    "What did the fish say when it hit the wall? Dam.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't programmers like nature? Too many bugs.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised."
];

// Load the Swagger YAML file
const swaggerDocument = YAML.load(path.join(__dirname, 'swagger.yaml'));

// Serve Swagger docs at /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Joke API! Visit /joke to get a random joke.');
});

app.get('/joke', (req, res) => {
    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    res.json({ joke });
});

app.post('/joke', (req, res) => {
    const { joke } = req.body;
    if (!joke || typeof joke !== 'string') {
        return res.status(400).json({ error: 'Joke is required and must be a string.' });
    }
    jokes.push(joke);
    res.json({ message: 'Joke added!' });
});

app.listen(PORT, () => {
    console.log(`Joke API is running on http://localhost:${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
