const Budget = require('../db/models/budget');

const getAllBudgetItems = async (req, res) => {
  const { userId } = req.session;
  try {
    const budgetItems = await Budget.getAllByUserId(userId);
    res.status(200).json(budgetItems);
  } catch (err) {
    res.status(500).json({ error: 'Unable to fetch budget items.' });
  }
};

const createBudgetItem = async (req, res) => {
  const { userId } = req.session;
  const { date, description, amount, type } = req.body;
  

  try {
    const newBudgetItem = await Budget.create(userId, date, description, amount, type);
    res.status(201).json(newBudgetItem);
  } catch (err) {
    res.status(500).json({ error: 'Unable to create budget item.' });
  }
};

const updateBudgetItem = async (req, res) => {
  const { id } = req.params;
  const { date, description, amount, type } = req.body;

  try {
    const updatedBudgetItem = await Budget.update(id, date, description, amount, type);
    if (!updatedBudgetItem) {
      res.status(404).json({ error: 'Budget item not found.' });
    } else {
      res.status(200).json(updatedBudgetItem);
    }
  } catch (err) {
    res.status(500).json({ error: 'Unable to update budget item.' });
  }
};

const deleteBudgetItem = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const deletedCount = await Budget.delete(id);
    if (!deletedCount) {
      res.status(404).json({ error: 'Budget item not found.' });
    } else {
      res.status(200).json({ message: 'Budget item deleted.' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Unable to delete budget item.' });
  }
};

module.exports = {
  getAllBudgetItems,
  createBudgetItem,
  updateBudgetItem,
  deleteBudgetItem,
};
