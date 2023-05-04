// Fetch Helpers
const handleFetch = async (url, options) => {
  try {

    const response = await fetch(url, options);


    const { status, statusText, ok } = response;
    if (!ok) return [null, { status, statusText }];

    const content = (status === 204) || await response.json();
    return [content, null];
  } catch (error) {
    return [null, error];
  }
};

const getFetchOptions = (body, method = 'POST') => ({

  method,
  credentials: 'include', // IMPORTANT, this tells fetch to include cookies
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

// CREATE USER
const signupAndLoginHandler = async (url, form) => {

  const formData = new FormData(form);

  const formValues = Object.fromEntries(formData.entries());

  const options = getFetchOptions(formValues);


  const [_response, err] = await handleFetch(url, options);
  if (err) {
    return alert('Something went wrong');
  }

  window.location.assign('/user.html');
};

// READ USER
const fetchLoggedInUser = async () => {
  const [response, _err] = await handleFetch('/api/me', { credentials: 'include' });
  return response;
};

// UPDATE USER
const updateUsernameHandler = async (form) => {
  const formData = new FormData(form);
  const username = formData.get('username');
  if (!username) return alert('Username is required');

  const url = `/api/users/${form.dataset.userId}`;
  const options = getFetchOptions({ username }, 'PATCH');

  const [response, err] = await handleFetch(url, options);
  return [response, err];
};

// DELETE USER
const logOutHandler = async () => {
  const [_response, err] = await handleFetch('/api/users/logout', { method: 'DELETE' });
  if (err) return alert('Something went wrong');
  window.location.assign('/');
};

//BUDGET CRUD
//BUDGET CREATE
const createBudgetHandler = async (form) => {

  const formData = new FormData(form);
  const budget = Object.fromEntries(formData.entries());

  const url = '/api/me/budget';
  const options = getFetchOptions(budget);

  const [response, err] = await handleFetch(url, options);
  if (err) return alert('Something went wrong');
  return response;
};
//BUDGET READ
//reads last budget that the user created for display on the user page
const getBudget = async () => {
  const [response, err] = await handleFetch('/api/me/budget', { credentials: 'include' });
  if(err) return alert('Something went wrong');
  return response;
};



// This is wonky. Once you learn about bundlers we won't have to
// explicitly create globals. We just lack the tools right now.
Object.assign(window, {
  handleFetch,
  getFetchOptions,
  fetchLoggedInUser,
  signupAndLoginHandler,
  // setNav,
  logOutHandler,
  updateUsernameHandler,
  createBudgetHandler,
  getBudget
});

export {
  handleFetch,
  getFetchOptions,
  fetchLoggedInUser,
  signupAndLoginHandler,
  // setNav,
  logOutHandler,
  updateUsernameHandler,
  createBudgetHandler,
  getBudget
};
