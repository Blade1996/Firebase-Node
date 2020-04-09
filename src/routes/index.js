const { Router } = require('express');
const router = Router();
const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
}

let init = firebase.initializeApp(config);
let db = init.database().ref('doctors');


router.get('/', (req, res) => {
    res.render('index');
});

router.post('/new-doctor', (req, res) => {
    console.log(req.body);
    const newDoctor = {
        names: req.body.names,
        lastNames: req.body.lastNames,
        phone: req.body.phone,
        cmp: req.body.cmp,
        specialty: req.body.specialty, 
        connTime: req.body.connTime,
        aveConTime: req.body.aveConTime,
        email: req.body.email
    }
    db.push(newDoctor);
    res.send('Registro Exitoso');
});

module.exports =router;