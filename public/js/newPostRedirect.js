const redirect = () => {
  window.location.replace('/dashboard/new-post');
};

// Get Button Element
const createPostBtn = document.querySelector('#createPostBtn');

// Add Event Listener
createPostBtn.addEventListener('click', redirect);
