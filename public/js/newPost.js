const submitPost = async (event) => {
  event.preventDefault();

  const postTitle = document.querySelector('#postTitle').value.trim();
  const postContent = document.querySelector('#postContent').value.trim();

  if (postTitle && postContent) {
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ postTitle, postContent }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to Submit Post');
    }
  }
};

// Get Element By Id
const newPostForm = document.querySelector('#newFormPost');

// Add Event Listener
newPostForm.addEventListener('submit', submitPost);
