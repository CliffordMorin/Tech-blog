


//edit post
const editButtonHandler = async (event) => {
  event.preventDefault();
    
      const id = document.getElementById('id').getAttribute('data-id');
      const title = document.getElementById('post-title').value.trim();
      const content = document.getElementById('post-content').value.trim();
  
      const response = await fetch(`/api/post/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title: title,
          contents: content
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      console.log(response);
      if (response.ok) {
        document.location.replace(`/post/${id}`);
      } else {
        alert('Failed to edit post');
      }
    };

document
  .querySelector('.edit-post')
  .addEventListener('submit', editButtonHandler);