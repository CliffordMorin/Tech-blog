const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const contents = document.querySelector('#post-content').value.trim();

  if (title && contents) {
    const response = await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({ title, contents }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create new post');
    }
  }
};

//delete button
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/post/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  }
};

//edit post
const editButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-edit')) {
    const id = event.target.getAttribute('data-edit');

    const response = await fetch(`/api/post/${id}`, {
      method: 'PUT',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to edit post');
    }
  }
};

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.post-list')
  .addEventListener('click', delButtonHandler);

document
  .querySelector('.post-list')
  .addEventListener('click', editButtonHandler);

