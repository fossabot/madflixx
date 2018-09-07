const apiRouter = require('./apiRouter');

module.exports = app => {
  app.get('/', (req, res) => {
    res.render('index');
  });

  app.get('/movies/:category/', (req, res) => {
    res.render('index');
  });

  app.get('/movie/:id/:title?/', (req, res) => {
    res.render('detail');
  });

  app.use('/api', apiRouter);
};
