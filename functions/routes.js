const express = require('express');
const router = express.Router();
const Review = require('./models/hatreview');
const Hats = require('./models/hats.json');

//MAIN PAGE

router.get('/', (req, res) => {
    console.log("called /");
    res.send(
        '<h1>welcome to the hats-api</h1>'
        +'<br/>'
        +'<hr/>'
        +'<h2>/reviews</h2>'
        +'This gets all the reviews.'
        
        +'<hr/>'
        +'<h2>/reviews/hat/:hatid</h2>'
        +'You can find every review belonging to a specific hat.'
        
        +'<hr/>'
        +'<h2>/review/:id</h2>'
        +"You'll find a specific review using the correct id."
        
        +'<hr/>'
        +'<h2>/review/create</h2>'
        +'To use this one, you can add a body without id.'
        
        +'<hr/>'
        +'<h2>/review/update/:id</h2>'
        +'please add a body and the id in the link'
        +'\n'
        +'You do not have to add everything in the body, only the values you want to change.'
        
        +'<hr/>'
        +'<h2>/review/delete/:id</h2>'
        +'Only the id is enough.'
        
        +'<hr/>'
        +'<h2>/hats</h2>'
        +'Gets a list of the hats.');
});

//GET

router.get("/reviews", async (req, res) => {
    console.log("/reviews has been called");
    try {
        res.json(await Review.find());
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get("/review/:id", async (req,res) => {
    console.log("/review/:id has been called");
    try {
        res.send(await Review.findById(req.params.id));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);    
    }
});

router.get("/reviews/hat/:hatid", async (req, res) => {
    console.log("/reviews/hat/:hatid has been called");
    try {
        res.json(await Review.find({hatid: req.params.hatid}));
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

//POST

router.post('/review/create', async (req, res) => {
    console.log("/review/create has been called");
    const data = JSON.parse(req.body);
    try{
        res.send(await Review.create(data));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

//PUT

router.put('/review/update/:id', async (req, res) => {
    console.log("/review/update/:id has been called");
    const data = JSON.parse(req.body);
    try{
        res.send(await Review.findByIdAndUpdate(req.params.id, { $set: data}));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

//DELETE

router.delete('/review/delete/:id', async (req,res) => {
    console.log("/review/delete/:id has been called");
    try {
        res.send(await Review.findByIdAndDelete(req.params.id))
    } catch (e) {
        console.log(e);
        res.send(500);
    }
});

//GET hats, it is a special boy

router.get('/hats', async (req, res) => {
    console.log("/hats has been called");
    try{
        res.json(await Hats);
    }
    catch (e) {
        console.log(e);
        res.send(500);
    }
});

module.exports = router;