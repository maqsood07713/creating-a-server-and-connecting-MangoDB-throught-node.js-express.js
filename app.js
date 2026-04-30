const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./models/user.js');
const mongoose = require('mongoose');


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// CREATE USER
app.get('/create', async (req, res) => {
    const newUser = await userModel.create({
        name: "Maqsood Ahmed",
        age: 21,
        city: "Quetta"
    });

    res.send(newUser);
});

app.get('/create02', async (req, res) => {
    const newUser = await userModel.create({
        name: "Maqsood ",
        age: 25,
        city: "Karachi"
    });

    res.send(newUser);
});

//UPDATE USER
app.get('/update', async (req, res) => {
    const newUser = await userModel.findOneAndUpdate(
        {name : "Maqsood Ahmed"},
        {name : "Maqsood siddiqui"},
        {new : true});

    res.send(newUser);
});


//READ USER
app.get('/read', async (req, res) => {
    const newUser = await userModel.find();

    res.send(newUser);
});

//DELETE USER
app.get('/delete', async (req, res) => {
    const newUser = await userModel.findOneAndDelete({name : "Maqsood siddiqui"});

    res.send(newUser);
});

app.listen(3000, () => {
    console.log('Server is running..');
});