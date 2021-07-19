const express = require('express');
const fs = require('fs');

const app = express();
//sconst router = express.Router();

// //setup for multer for storing uploaded files
// const multer = require('multer');
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/')
//     }
// });

// const upload = multer( { storage: storage });

// router.route('/img_data')
// .post(upload.single('file'), function(req, res){
//     const newCard = new Card;
//     newCard.img.data = fs.readFileSync(req.file.path)
//     newCard.img.contentType = 'image/png';
//     newCard.save();
    
//     res.json({ message: 'New image added to the db!'});
// }).get = (req, res) => {
//     Card.findOne({}, 'img createdAt', (err, items) => {
//         if(err)
//             res.send(err);
//             res.contentType('json');
//             res.send(img);
//     }).sort({ createdAt: 'desc'});
// }

// const cardModel = require('./server/models/card.model');

// app.get('/', (req, res) => {
//     cardModel.find({}, (err, items) => {
//         if(err) {
//             console.log(err);
//             res.status(500).send('An Error occurred', err);
//         } else {
//             res.render('imagesPage', { items: item });
//         }
//     });
// });

// app.post('/', upload.single('image'), (req, res, next) => {
//     const cardObj = {
//         name:req.body.name,
//         // type: req.body.type,
//         // rating: req.body.rating,
//         // flavor: req.body.flavor,
//         artwork: {
//             data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)), 
//             contentType: 'image/png'
//         }
//     }
//     cardModel.create(obj, (err, item) => {
//         if(err) {
//             console.log(err);
//         } else {
//             //item.save();
//             res.redirect('/');
//         }
//     })
// })

const port = 8000;
app.listen(port, err => {
    if(err) 
        throw err
    console.log('Server listening on port', port);
})