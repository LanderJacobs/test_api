const express = require('express');
const router = express.Router();
const Review = require('./models/hatreview');
const Hats = require('./models/hats.json');

//MAIN PAGE

router.get('/', (req, res) => {
    console.log("called /");
    res.send(
        '<h1>welcome to api, shit works here</h1>'
        +'<br/>'
        +'<h2>/reviews</h2>'
        +'think about it'
        
        +'<hr/>'
        +'<h2>/reviews/hat/:hatid</h2>'
        +'you can find every review belonging to a specific hat'
        
        +'<hr/>'
        +'<h2>/review/:id</h2>'
        +"You'll find what you're looking for"
        
        +'<hr/>'
        +'<h2>/review/create</h2>'
        +'please add a body without id'
        
        +'<hr/>'
        +'<h2>/review/update/:id</h2>'
        +'please add a body and the id in the link'
        +'\n'
        +'you do not have to add everything in the body, only the things you want to change'
        
        +'<hr/>'
        +'<h2>/review/delete/:id</h2>'
        +'only id is enough, then it is GONE'
        
        +'<hr/>'
        +'<h2>/hats</h2>'
        +'hats');
});

//GET

router.get("/reviews", async (req, res) => {
    console.log("/reviews kunnen gelezen worden");
    try {
        res.json(await Review.find());
    } catch(e) {
        console.log(`oepsie-poepsie: ${e}`);
        res.sendStatus(500);
    }
});

router.get("/review/:id", async (req,res) => {
    console.log("looking specifically for a review");
    try {
        res.send(await Review.findById(req.params.id));
    } catch (e) {
        console.log(`oh no: ${e}`);
        res.sendStatus(500);    
    }
});

router.get("/reviews/hat/:hatid", async (req, res) => {
    console.log("/reviews kunnen gelezen worden");
    try {
        res.json(await Review.find({hatid: req.params.hatid}));
    } catch(e) {
        console.log(`oepsie-poepsie: ${e}`);
        res.sendStatus(500);
    }
})

//POST

router.post('/review/create', async (req, res) => {
    console.log("another one");
    const data = JSON.parse(req.body);
    try{
        res.send(await Review.create(data));
    } catch (e) {
        console.log(`why no post: ${e}`);
        res.sendStatus(500);
    }
});

//PUT

router.put('/review/update/:id', async (req, res) => {
    console.log("time for change");
    const data = JSON.parse(req.body);
    try{
        res.send(await Review.findByIdAndUpdate(req.params.id, { $set: data}));
    } catch (e) {
        console.log(`no-one wants to change: ${e}`);
        res.sendStatus(500);
    }
});

//DELETE

router.delete('/review/delete/:id', async (req,res) => {
    console.log("leave and never come back");
    try {
        res.send(await Review.findByIdAndDelete(req.params.id))
    } catch (e) {
        console.log(`You can never delete me: ${e}`);
        res.send(500);
    }
});

//GET hats, it is a special boy

router.get('/hats', async (req, res) => {
    console.log("there goes the hats");
    try{
        res.json(await Hats);
    }
    catch (e) {
        console.log(`NOOOOOO: ${e}`);
        res.send(500);
    }
});

module.exports = router;