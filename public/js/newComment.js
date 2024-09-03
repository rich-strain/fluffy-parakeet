const submitComment = async (event) => {
  event.preventDefault();

  // Get the post id
  const postId = document.querySelector('#commentBtn').getAttribute('data-id');
  // Get the comment content
  const commentContent = document.querySelector('#commentContent').value.trim();

  if (commentContent) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ commentContent, postId }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to Submit Post');
    }
  }
};

// Get Element By Id
const newCommentForm = document.querySelector('#newCommentForm');

// Add Event Listener
newCommentForm.addEventListener('submit', submitComment);
