const { getAllCards } = require('../db/database.js');

async function fetchAllCards(req, res) {
    try {
        const cards = await getAllCards();
        res.json(cards);
    } catch (error) {
        console.error('Error fetching cards:', error);
        res.status(500).send('Server error');
    }
}

module.exports = { fetchAllCards };