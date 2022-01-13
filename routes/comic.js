const express = require('express');
const isLoggedIn = require('../middlewares');

function comicRoutes() {
  const router = express.Router();

  // Ruta para ver todos los comics
  router.get('/comics/all', isLoggedIn, async (req, res) => {
    // Do stuff
    res.render('comic/list-comics');
  });

  // Ruta para ver el formulario de crear un nuevo comic
  router.get('/comics/new', isLoggedIn, async (req, res) => {
    res.render('comic/new-comic');
  });

  // Ruta POST para crear el nuevo comic
  router.post('/comics/new', isLoggedIn, async (req, res, next) => {
    const {title} = req.body;
    try{
      console.log(req.body);
      const newComic = await Comic.create(title);
      
      res.redirect(`/comics/detail/${newComic.id}`);
     } catch (e) {
      next(e)

    }

        const {volumeNumber} = req.body;
    try{
      console.log(req.body);
      const newComic = await Comic.create(volumeNumber);
      
      res.redirect(`/comics/detail/${newComic.id}`);
     } catch (e) {
      next(e)

    }

    const {editorial} = req.body;
    try{
      console.log(req.body);
      const newComic = await Comic.create(editorial);
      
      res.redirect(`/comics/detail/${newComic.id}`);
     } catch (e) {
      next(e)

    }

    const {genre} = req.body;
    try{
      console.log(req.body);
      const newComic = await Comic.create(genre);
      
      res.redirect(`/comics/detail/${newComic.id}`);
     } catch (e) {
      next(e)

    }

    const {numberPages} = req.body;
    try{
      console.log(req.body);
      const newComic = await Comic.create(numberPages);
      
      res.redirect(`/comics/detail/${newComic.id}`);
     } catch (e) {
      next(e)

    }

        const {description} = req.body;
    try{
      console.log(req.body);
      const newComic = await Comic.create(description);
      
      res.redirect(`/comics/detail/${newComic.id}`);
     } catch (e) {
      next(e)

    }

        const {opinion} = req.body;
    try{
      console.log(req.body);
      const newComic = await Comic.create(opinion);
      
      res.redirect(`/comics/detail/${newComic.id}`);
     } catch (e) {
      next(e)

    }

    // Do stuff
  });

  // Ruta para ver el detalle de un comic
  router.get('/comics/detail/:id', isLoggedIn, async (req, res) => {
    const comicId = req.params.id;
    // Do stuff
    res.render('comic/comic-detail');
  });

  // Ruta para ver el formulario para editar un comic
  router.get('/comics/edit/:id', isLoggedIn, async (req, res) => {
    const comicId = req.params.id;
    // Do stuff
    res.render('comic/edit-comic');
  });

  // Ruta para editar un comic
  router.post('/comics/edit/:id', isLoggedIn, async (req, res) => {
    const comicId = req.params.id;
    // Do stuff
  });

  // Ruta para borrar un comic
  router.post('/comics/delete/:id', isLoggedIn, async (req, res) => {
    const comicId = req.params.id;
    // Do stuff
  });

  return router;
}

module.exports = comicRoutes;
