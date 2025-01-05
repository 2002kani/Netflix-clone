require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 5002;

// Middleware
app.use(cors());
app.use(express.json());

const apiKey = process.env.API_KEY;

app.get('/movies/:category', async (req, res) => {
    const category = req.params.category || "now_playing";
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${apiKey}`,
            }
        });
        res.json(response.data.results);
    } catch (err) {
        console.error('API Fehler:', err.message);  // Besseres Error-Logging
        res.status(500).json({ message: 'Fehler beim Abrufen der Daten' });
    }
});

app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});