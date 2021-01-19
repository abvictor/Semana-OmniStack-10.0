const { Router } = require('express')
const axios = require('axios');

const DevController = require('./controllers/DevControllers')
const SearchController = require('./controllers/SearchController')

const routes = Router();


routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);



routes.get('/search', SearchController.index)


module.exports = routes;