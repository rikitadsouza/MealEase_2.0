const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

router.post('/search', async (req, res) => {
  const { ingredients } = req.body;
  try {
    const recipes = await Recipe.find({
      ingredients: {
        $in: ingredients.map(ingredient => new RegExp(ingredient, 'i'))
      }
    });
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching recipes' });
  }
});

module.exports = router;