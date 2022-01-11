const express = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../models/user');

const saltRounds = 10;
// const mongoose = require('mongoose');

function authRoutes() {
  const router = express.Router();

  router.get('/login', async (req, res, next) => {
    try {
      res.render('auth/login', { name: 'Log in' });
    } catch (e) {
      next(e);
    }
  });

  router.post('/login', async (req, res, next) => {
    try {
      console.log('The form data: ', req.body);
      /* .then(userFromDB => {
    res.redirect('/userProfile');          (redirigir usuario a su perfil?)
}) */
    } catch (e) {
      next(e);
    }
  });

  router.get('/signup', async (req, res, next) => {
    try {
      res.render('auth/signup', { name: 'Sign up' });
    } catch (e) {
      next(e);
    }
  });

  router.post('/signup', async (req, res, next) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.render('auth/signup', {
        errorMessage: 'All fields are mandatory. Please provide your username, email and password.',
      });
    }
    /* .catch(error => {
      // copy the following if-else statement
      if (error instanceof mongoose.Error.ValidationError) {
          res.status(500).render('auth/signup', { errorMessage: error.message });
      } else {
          next(error);
      } */ /* ----> El último paso es asegurarse de que este mensaje de error sea visible para los usuarios.(form validation) */
    try {
      const salt = bcryptjs.genSalt(saltRounds);
      const hashedPassword = await bcryptjs.hash(password, salt);
      const newUser = await User.create({
        username,
        email,
        hashedPassword,
      });
      console.log('Newly created user is: ', newUser);
      res.redirect('/login');
    } catch (e) {
      console.error('Could not create new user ', e);
    }
  });

  router.get('/userProfile', (req, res) => {
    res.render('users/user-profile');
  });

  router.post('auth/logout', async (req, res, next) => {
    try {
      res.render('auth/logout.hbs', { name: 'Log out' });
    } catch (e) {
      next(e);
    }
  });
  return router;
}

module.exports = authRoutes;
