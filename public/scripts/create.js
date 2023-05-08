import { 
  fetchLoggedInUser, 
  signupAndLoginHandler, 
  // setNav, 
} from './global.js';

const createForm = document.querySelector('#create-form');

const handleCreateFormSubmit = async (event) => {
  event.preventDefault();

  await signupAndLoginHandler('/api/users', event.target);

  const user = await fetchLoggedInUser();
  if (user) {
    window.location.assign('/budget.html');
  }
};

const main = async () => {
  // setNav();
  createForm.addEventListener('submit', handleCreateFormSubmit);

  const user = await fetchLoggedInUser();
  if (user) {
    window.location.assign('/budget.html');
  }
};

main();

