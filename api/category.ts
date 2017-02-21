import * as express from 'express';
import Place from '../models/category';

let router = express.Router();

// GET all animals
router.get('/', (req, res) => {
  Place.find().then((types)=> {
      res.json(types);
  }).catch((err) => {
      res.status(500);
      console.error(err);
  })
});

// Get a single animal by id
router.get('/:id', (req, res) => {
  Place.findById(req.params['id']).then((type) => {
    res.json(type);
  });
});

// Create new animal
router.post('/', (req, res) => {

  let place = new Place();
  place.type = req.body.type;
  place.name = req.body.name;
  place.rating = req.body.rating;
  place.food = req.body.food;
  place.service = req.body.service;
  place.decor = req.body.decor;
  place.comment = req.body.comment;
  place.style = req.body.style;

  // save new animal
  place.save().then((newType) => {
    res.json(newType);
  }).catch((err) => {
    res.status(400).json(err);
  });
});

// Update existing animal
router.post('/:id', (req, res) => {
  let typeId = req.params.id;

  Place.findById(typeId).then((place) => {
    place.type = req.body.type;
    place.name = req.body.name;
    place.rating = req.body.rating;
    place.food = req.body.food;
    place.service = req.body.service;
    place.decor = req.body.decor;
    place.comment = req.body.comment;
    place.style = req.body.style;

    // save updated animal
    place.save().then((updatedType) => {
      res.json(updatedType);
    }).catch((err) => {
      res.status(400).json(err);
    });

  }).catch(() => {
    res.sendStatus(404);
  });

});


// Delete animal
router.delete('/:id', (req, res) => {
  let typeId = req.params.id;
  Place.remove({_id:typeId}).then(() => {
    res.sendStatus(200);
  }).catch((err) => {
    res.status(500);
    console.log(err);
  });
});

export default router;
