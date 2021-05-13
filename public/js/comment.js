const commentHandler = async (event) => {
    event.preventDefault();

    const commentText = document.querySelector('#comment').value.trim();
    const id = document.getElementById('submit').getAttribute('data-id');
    

    if (commentText) {
        const response = await fetch(`/api/comment`, {
          method: 'POST',
          body: JSON.stringify({ contents: commentText, post_id: id }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          document.location.replace(`/post/${id}`);
        } else {
          alert('Failed to create new post');
        }
      }
};

document
    .querySelector('.comment-form')
    .addEventListener('submit', commentHandler);