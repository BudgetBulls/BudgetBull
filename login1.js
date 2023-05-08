/* eslint-disable import/extensions */
import {
    fetchLoggedInUser,
    signupAndLoginHandler,
    // setNav,
  } from './global.js';
  
  const main = async () => {
    const user = await fetchLoggedInUser();
    
    if (user) return window.location.assign('/budget.html');
  
    // setNav();
    document.querySelector('#create-form').addEventListener('submit', async (event) => {
      
        event.preventDefault();
        signupAndLoginHandler('/api/users/login', event.target);
      });
  };
  
  main();
  