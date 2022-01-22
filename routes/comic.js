const express = require('express');
const isLoggedIn = require('../middlewares');
const Comic = require('../models/comic');

function comicRoutes() {
  const router = express.Router();

  // Ruta para ver todos los comics
  router.get('/comics/all', isLoggedIn, async (req, res) => {
    const user = req.session.currentUser;
    try {
      const comics = await Comic.find({});
      res.render('users/otherComics', { user, comics });
    } catch (e) {
      next(e);
    }
  });

  // Ruta para ver el formulario de crear un nuevo comic
  router.get('/comics/new', isLoggedIn, async (req, res) => {
    res.render('comic/new-comic');
  });

  // Ruta POST para crear el nuevo comic
  router.post('/comics/new', isLoggedIn, async (req, res, next) => {
    const user = req.session.currentUser;
    const { title, volumeNumber, editorial, genre, numberPages, description, opinion, author, image } = req.body;
    try {
      const newComic = await Comic.create({
        title,
        volumeNumber,
        editorial,
        genre,
        numberPages,
        description,
        opinion,
        image,
        author,
        user: user._id,
      });
      res.redirect(`/comics/detail/${newComic._id}`);
    } catch (e) {
      next(e);
    }
  });

  // Ruta para ver mis comics
  router.get('/comics/mine', isLoggedIn, async (req, res, next) => {
    const user = req.session.currentUser;
    try {
      const comics = await Comic.find({ user: user._id });
      res.render('users/yourComics', { user, comics });
    } catch (e) {
      next(e);
    }
  });

  // Ruta para ver el detalle de un comic
  router.get('/comics/detail/:id', isLoggedIn, async (req, res, next) => {
    const comicId = req.params.id;
    try {
      const comic = await Comic.findById(comicId);

      res.render('comic/comic-detail', { comic });
    } catch (e) {
      next(e);
    }
  });

  // Ruta para ver el formulario para editar un comic
  router.get('/comics/edit/:id', isLoggedIn, async (req, res, next) => {
    const { id } = req.params;
    try {
      const comic = await Comic.findById(id);
      res.render('comic/edit-comic', { comic });
    } catch (e) {
      next(e);
    }
  });

  // Ruta para editar un comic
  router.post('/comics/edit/:id', isLoggedIn, async (req, res, next) => {
    const comicId = req.params.id;
    const { title, volumeNumber, editorial, genre, numberPages, description, opinion, author, image } = req.body;
    try {
      const comic = await Comic.findByIdAndUpdate(
        comicId,
        {
          title,
          volumeNumber,
          editorial,
          genre,
          numberPages,
          description,
          opinion,
          image,
          author,
        },
        { new: true },
      );
      console.log('Updated', comic);
      res.redirect(`/comics/detail/${comicId}`);
    } catch (e) {
      next(e);
    }
  });

  // Ruta para borrar un comic
  router.get('/comics/delete/:id', isLoggedIn, async (req, res, next) => {
    const comicId = req.params.id;
    try {
      await Comic.findByIdAndDelete(comicId);
      res.redirect('/');
    } catch (e) {
      next(e);
    }
  });

  return router;
}

module.exports = comicRoutes;
