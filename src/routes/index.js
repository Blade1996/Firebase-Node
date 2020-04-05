const { Router } = require('express');
const router = Router();
const admin = require('firebase-admin');

var serviceAccount = require('../../fir-node-9b683-firebase-adminsdk-ibu58-3664d90a9e.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://fir-node-9b683.firebaseio.com/'
})

const db = admin.database();


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
    db.ref('doctors').push(newDoctor);
    res.send('received');
});

module.exports =router;