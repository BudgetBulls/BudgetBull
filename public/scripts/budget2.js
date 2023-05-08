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


var openFormButton = document.getElementById("input");
var myFormDiv = document.getElementById("my-form");
var submitButton = document.getElementById("submit-button");

openFormButton.addEventListener("click", function() {
  myFormDiv.style.display = "block";
});



const budgetForm = document.querySelector('#budget-form');
const budgetTableBody = document.querySelector('#budget-table-body');

budgetForm.addEventListener('submit', async function(event) {
  event.preventDefault();

  // extract form field values
  const date = document.querySelector('#date').value;
  const description = document.querySelector('#description').value;
  const amount = document.querySelector('#amount').value;
  const type = document.querySelector('#type').value;

  // create new table row
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${date}</td>
    <td>${description}</td>
    <td>${amount}</td>
    <td>${type}</td>
    <td><button class="delete-row">Delete</button></td>
  `;
  newRow.setAttribute('id', 'row-' + Date.now()); // set id attribute

  // append new row to table body
  budgetTableBody.appendChild(newRow);

  // hide form
  document.querySelector('#my-form').style.display = 'none';

  // reset form
  budgetForm.reset();

  // add event listener to delete button
  const deleteButton = newRow.querySelector('.delete-row');
  deleteButton.addEventListener('click', async () => {
    const row = deleteButton.closest('tr');
    const budgetItem = {
      id: row.getAttribute('id').substring(4), // remove 'row-' prefix from id
      date: row.cells[0].innerText,
      description: row.cells[1].innerText,
      amount: row.cells[2].innerText,
      type: row.cells[3].innerText
    };
    
    const [response, err] = await deleteBudgetItem(budgetItem.id);
    
    if (err) {
      if (isAuthError(err)) {
        redirectToLogin();
      } else {
        alert('Something went wrong');
      }
    } else {
      row.remove();
    }
  });
});



//Logout 
const logoutButton = document.querySelector('#logout-button');

logoutButton.addEventListener('click', (event) => {
  event.preventDefault();
  logOutHandler();
});

