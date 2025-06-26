import express from 'express'; // Import the Express framework
import swaggerJsdoc from 'swagger-jsdoc'; // Import swagger-jsdoc for generating Swagger docs from JSDoc comments
import swaggerUi from 'swagger-ui-express'; // Import swagger-ui-express to serve Swagger UI

const app = express(); // Create an Express application instance
const PORT = process.env.PORT || 3000; // Set the port from environment or default to 3000

const jokes = [ // Array of jokes to serve from the API
    "Why don't scientists trust atoms? Because they make up everything.",
    "What did the fish say when it hit the wall? Dam.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't programmers like nature? Too many bugs.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised."
];

/**
 * @swagger
 * /:
 *   get:
 *     summary: Welcome message for the Joke API
 *     tags:
 *       - General
 *     responses:
 *       200:
 *         description: Returns a welcome message
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 */
app.get('/', (req, res) => { // Define a GET endpoint at the root path
    res.send('Welcome to the Joke API! Visit /joke to get a random joke.'); // Send a welcome message
});

/**
 * @swagger
 * /joke:
 *   get:
 *     summary: Get a random joke
 *     tags:
 *       - Jokes
 *     responses:
 *       200:
 *         description: Returns a random joke
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 joke:
 *                   type: string
 *                   example: Why don't scientists trust atoms? Because they make up everything.
 */
app.get('/joke', (req, res) => { // Define a GET endpoint at /joke
    const joke = jokes[Math.floor(Math.random() * jokes.length)]; // Select a random joke from the array
    res.json({ joke }); // Respond with the joke as JSON
});

// Swagger setup
const swaggerOptions = { // Swagger configuration options
    definition: { // OpenAPI specification definition
        openapi: '3.0.0', // Specify OpenAPI version
        info: { // API information
            title: 'Joke API', // API title
            version: '1.0.0', // API version
            description: 'A simple API to get random jokes', // API description
        },
    },
    apis: ['./index.js'], // Path to the file containing Swagger annotations
};
const swaggerSpec = swaggerJsdoc(swaggerOptions); // Generate Swagger specification from JSDoc comments
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec)); // Serve Swagger UI at /api-docs

app.listen(PORT, () => { // Start the Express server
    console.log(`Joke API is running on http://localhost:${PORT}`); // Log the API URL
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`); // Log the Swagger docs URL
});
