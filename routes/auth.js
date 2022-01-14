const express = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../models/user');
const Comic = require('../models/comic');


const saltRounds = 10;
// const mongoose = require('mongoose');

function authRoutes() {
  const router = express.Router();

  router.get('/login', (req, res) => {
    res.render('auth/login', { name: 'Log in' });
  });

  router.post('/login', async (req, res, next) => {
    const { email, password } = req.body;
    try {
      if (!email || !password) {
        return res.render('auth/login', {
          errorMessage: 'Complete all fields',
        });
      }
      const dbUser = await User.findOne({ email });
      if (!dbUser) {
        return res.render('auth/login', { errorMessage: 'User not found' });
      }
      const passwordUser = await bcryptjs.compare(password, dbUser.hashedPassword);
      if (passwordUser) {
        req.session.currentUser = dbUser;
        return res.redirect('/profile');
      }
      return res.render('./auth/login', { errorMessage: 'Authentication failed. Try again' });
    } catch (e) {
      next(e);
    }
  });

  router.get('/signup', (req, res) => {
    res.render('auth/signup', { name: 'Sign up' });
  });

  router.post('/signup', async (req, res, next) => {
    const { email, password, username } = req.body;
    try {
      if (!email || !password || !username) {
        return res.render('auth/signup', {
          errorMessage: 'Complete all fields',
        });
      }
      const userRepeat = await User.findOne({ email });
      if (userRepeat) {
        return res.render('auth/sign-up', { errorMessage: 'User already taken' });
      }
      const salt = bcryptjs.genSaltSync(saltRounds);
      const newPassword = bcryptjs.hashSync(password, salt);
      const newUser = await User.create({ email, hashedPassword: newPassword, username });
      res.redirect('/login');
    } catch (e) {
      next(e);
    }
  });

  router.get('/profile', (req, res) => {
    const user = req.session.currentUser;
    //const comicList = await Comic.find({})
    Comic.find({}, function(err, comics) {
      res.render('users/user-profile', {user, comics });
        });

    //res.render('users/user-profile', { user, comicList });
  
  });

  router.post('/logout', async (req, res, next) => {
    if (req.session) {
      req.session.auth = null;
      res.clearCookie('auth');
      req.session.destroy();
    }
    res.redirect('/login');
  });
  return router;
}

module.exports = authRoutes;
