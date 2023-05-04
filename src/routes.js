const express = require('express');
const userController = require('./controllers/user');
const {
  getAllBudgetItems,
  createBudgetItem,
  updateBudgetItem,
  deleteBudgetItem,
} = require('./controllers/budgetController');
const addModels = require('./middleware/add-models');
const checkAuthentication = require('./middleware/check-authentication');
// const { getBudget } = require('../public/scripts/global');

const Router = express.Router();
Router.use(addModels);

Router.get('/cookieCounter', (req, res) => {
  const { session } = req;
  
  session.viewCount = (session.viewCount || 0) + 1;
  
  
  res.status(200).send({ count: session.viewCount });
});

// Create
Router.post('/users', userController.create);
Router.post('/users/login', userController.login);
Router.post('/budget/', createBudgetItem);

// Read
Router.get('/users', userController.list);
Router.get('/users/:id', userController.show);
Router.get('/me/budget', checkAuthentication, getAllBudgetItems);
Router.get('/me', userController.showMe);
// checkAuthentication middleware is applied to only to this route (and /logged-in-secret)
Router.get('/logged-in-secret', checkAuthentication, (req, res) => {
  res.send({ msg: 'The secret is: there is no secret.' });
});

// Update
Router.patch('/users/:id', checkAuthentication, userController.update);
Router.patch('/budget/:id',checkAuthentication, updateBudgetItem);

// Delete
Router.delete('/users/logout', userController.logout);
Router.delete("/budget/:id", checkAuthentication, deleteBudgetItem);

module.exports = Router;
