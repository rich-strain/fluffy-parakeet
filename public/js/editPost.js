// Function to edit post
const editPost = async (event) => {
  event.preventDefault();

  // Get the post id from the URL
  const id = document.querySelector('#updateBtn').getAttribute('data-id');

  // Get the post title and content from the form
  const postTitle = document.querySelector('#postTitle').value;
  const postContent = document.querySelector('#postContent').value;

  // Send a PUT request to the API endpoint
  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      postTitle,
      postContent,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  // If the request is successful, redirect to the dashboard
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
};

// Delete Post Function
const deletePost = async (event) => {
  event.preventDefault();

  // Get the post id from the button data-id attribute
  const id = document.querySelector('#deleteBtn').getAttribute('data-id');

  // Send a DELETE request to the API endpoint
  const response = await fetch(`/api/posts/${id}`, {
    method: 'DELETE',
  });
  // If the request is successful, redirect to the dashboard
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
};

// Get Element By Ids
const updateBtn = document.querySelector('#updateBtn');
const deleteBtn = document.querySelector('#deleteBtn');

// Add Event Listeners
updateBtn.addEventListener('click', editPost);
deleteBtn.addEventListener('click', deletePost);
