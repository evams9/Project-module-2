const express = require('express');
const isLoggedIn = require('../middlewares');

function baseRoutes() {
  const router = express.Router();

  router.get('/', isLoggedIn, async (req, res, next) => {
    try {
      res.redirect('/profile');
    } catch (e) {
      next(e);
    }
  });

  return router;
}

module.exports = baseRoutes;
