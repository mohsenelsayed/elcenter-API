const express = require('express');
const centerController = require('../controllers/centerController.js');

const router = express.Router();
router.get('/' , async (req,res) => {
    const result = await centerController.showAll();
    res.json(result);
})

router.get('/id/:id', async (req,res) => {
    const result = await centerController.showById(req.params.id);
    res.json(result);
})

router.get('/name/:name', async (req,res) => {
    const result = await centerController.showByName(req.params.name);
    res.json(result);
})

router.get('/location/:location', async (req,res) => {
    const result = await centerController.showByLocation(req.params.name);
    res.json(result);
})

router.post('/new', async (req,res) => {
    const result = await centerController.addNew(req.body);
    res.json(result);
})

router.put('/update', async (req,res) => {
    const result = await centerController.update(req.body);
    res.json(result);
})

router.delete('/delete', async (req,res) => {
    const result = await centerController.del(req.body.id);
    res.json(result);
})

module.exports = router;