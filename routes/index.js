const router = require('express').Router();

const commRouter = require('./comm');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/comm', commRouter);

module.exports = router;
