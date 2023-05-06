/* eslint-disable import/extensions */
import {
  fetchLoggedInUser,
  logOutHandler,
  updateUsernameHandler,
  createBudgetHandler,
  deleteBudgetItem,
  getBudget,
} from './global.js';

const isAuthError = (err) => (err.status === 401 || err.status === 403);
const redirectToLogin = () => window.location.assign('/login.html');
const renderUsername = (username) => {
  document.querySelector('#username').textContent = username;
};

const renderBudget = (budget) => {
  
  const budgetTable = document.querySelector('#budget-table');
  
  budget.forEach((budgetItem) => {
    const row = document.createElement('tr');
    const name = document.createElement('td');
    const amount = document.createElement('td');
    const type = document.createElement('td');
    const date = document.createElement('td');
    const edit = document.createElement('td');
    const deleteButton = document.createElement('button');
    const budgetTableBody = document.querySelector('#budget-table-body')
   
    budgetTableBody.innerHTML = '';
    name.textContent = budgetItem.description;
    amount.textContent = budgetItem.amount;
    type.textContent = budgetItem.type;
    date.textContent = new Date(budgetItem.date).toLocaleDateString('en-US');
    deleteButton.textContent = 'Delete';
    
    
    //delete button event listener 
    //removes the corresponding row from the table
    deleteButton.addEventListener('click', async (event) => {
      event.preventDefault();
      const [response, err] = await deleteBudgetItem(budgetItem.id);
      if (err) return isAuthError(err) ? redirectToLogin() : alert('Something went wrong');
      row.remove();
      
    });

    edit.append(deleteButton);
    row.append(date,name, amount, type, edit);
    budgetTable.append(row);
  });
};


// Each Budget entry  then needs to be appended to the table and each row is it's own entry
//each column matches the schema of the budget table
//10 rows displayed at a time with a next and previous button
//next and previous button will need to be created and appended to the DOM
//next and previous button will need to be event listeners that will change the table


const main = async () => {
   const user = await fetchLoggedInUser();
   const budget = await getBudget();
  if (!user) return redirectToLogin();

  const logoutForm = document.querySelector('#logout-form');
  const budgetForm = document.querySelector('#budget-form');
  const updateUsernameForm = document.querySelector('#username-form');

  logoutForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    logOutHandler();
  });


  updateUsernameForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const [response, err] = await updateUsernameHandler(event.target);

    if (err) return isAuthError(err) ? redirectToLogin() : alert('Something went wrong');
    renderUsername(response.username);

    event.target.reset();
  });

  

  updateUsernameForm.dataset.userId = user.id;

  // setNav(!!user);
  renderUsername(user.username);
  budgetForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const [response, err] = await createBudgetHandler(event.target);

    if (err) return isAuthError(err) ? redirectToLogin() : alert('Something went wrong');
    
    renderBudget(response);
    location.reload();
    event.target.reset();
  });
  renderBudget(budget);
};

main();
