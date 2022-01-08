const express = require('express');

function authRoutes() {
  const router = express.Router();

  router.get('/login', async (req, res, next) => {
    try {
      res.render('home.hbs', { name: 'Ironhack' });
    } catch (e) {
      next(e);
    }
  });

    router.post('/login', async (req, res, next) => {
    try {
      res.render('home.hbs', { name: 'Ironhack' });
    } catch (e) {
      next(e);
    }
  });

    router.get('/signup', async (req, res, next) => {
    try {
      res.render('home.hbs', { name: 'Ironhack' });
    } catch (e) {
      next(e);
    }
  });

    router.post('/login', async (req, res, next) => {
    try {
      res.render('home.hbs', { name: 'Ironhack' });
    } catch (e) {
      next(e);
    }
  });
  
  router.get('/logout', async (req, res, next) => {
    try {
      res.render('home.hbs', { name: 'Ironhack' });
    } catch (e) {
      next(e);
    }
  });


  return router;
}

module.exports = authRoutes;
