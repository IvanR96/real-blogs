import express from "express";

// create port use express also
const app = express();
const port = 3000;

// use public folder for css
app.use(express.static('public'));

//render ejs file
app.get('/', (req, res)=>{
    res.render('index.ejs');
});

// make sure port is running successfully
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});