var express = require('express');
var router = express.Router();

const mainControllers = require('../controllers/mainControllers')



/* GET home page. */
router.get('/', mainControllers.root);


router.post('/', mainControllers.behindPost);


router.get('/color', mainControllers.color);


router.get('/borrar', mainControllers.delete);






module.exports = router;


