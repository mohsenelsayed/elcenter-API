const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/' , async (req,res) => {
    const result = await userController.showAll();
    res.json(result);
})

router.get('/id/:id', async (req,res) => {
    const result = await userController.showById(req.params.id);
    res.json(result);
})

router.get('/name/:name', async (req,res) => {
    const result = await userController.showByName(req.params.name);
    res.json(result);
})

router.post('/new', async (req,res) => {
    const result = await userController.register(req.body);
    res.json(result);
})

router.put('/update', async (req,res) => {
    const result = await userController.update(req.body);
    res.json(result);
})

module.exports = router;