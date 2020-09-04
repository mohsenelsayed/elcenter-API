const express = require('express');
const teacherController = require('../controllers/teacherController');

const router = express.Router();


router.get('/' , async (req,res) => {
    const result = await teacherController.showAll();
    res.json(result);
})

router.get('/id/:id', async (req,res) => {
    const result = await centerController.showById(req.params.id);
    res.json(result);
})

router.get('/name/:name', async (req,res) => {
    const result = await teacherController.showByName(req.params.name);
    res.json(result);
})

router.get('/course/:course', async (req,res) => {
    const result = await teacherController.showByLocation(req.params.course);
    res.json(result);
})


module.exports = router;