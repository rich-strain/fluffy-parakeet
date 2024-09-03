const regFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#regName').value.trim();
  //alert(name);
  const email = document.querySelector('#regEmail').value.trim();
  //alert(email);
  const password = document.querySelector('#regPassword').value.trim();
  //alert(password);

  if (email && password) {
    alert('Email and Password are not empty');
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ email, password, name }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

// Get Element By Id
const regForm = document.querySelector('#regForm');
// Add Event Listener
regForm.addEventListener('submit', regFormHandler);
