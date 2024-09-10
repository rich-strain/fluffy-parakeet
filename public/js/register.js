const regFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#regName').value.trim();
  const email = document.querySelector('#regEmail').value.trim();
  const password = document.querySelector('#regPassword').value.trim();

  if (email && password) {
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
