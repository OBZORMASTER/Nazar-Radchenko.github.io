async function getComments() {
    try {
        const comments = await fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json());

        comments.forEach(({ name, body }) => {
            const commentElement = document.createElement('div');
            commentElement.classList.add('comment');
            commentElement.innerHTML = `<h1>${name}</h1><h2>“${body}”</h2>`;
            viewContainer.appendChild(commentElement);
        });
    } catch (error) {
        console.error('Error fetching comments:', error);
    }
}

async function addComment(event) {
    event.preventDefault();

    const name = document.querySelector('[name="name"]').value;
    const feedback = document.querySelector('[name="feedback"]').value;

    try {
        const addedComment = await fetch('https://jsonplaceholder.typicode.com/comments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, body: feedback, postId: 1 })
        }).then(res => res.json());

        document.getElementById('feedback_form').reset();
        const newCommentElement = document.createElement('div');
        newCommentElement.classList.add('comment');
        newCommentElement.innerHTML = `<h1>${addedComment.name}</h1><h2>“${addedComment.body}”</h2>`;
        document.getElementById('new_comments').appendChild(newCommentElement);
    } catch (error) {
        console.error('Error adding comment:', error);
    }
}

window.onload = function() {
    getComments();
    document.getElementById('feedback_form').addEventListener('submit', addComment);
};
