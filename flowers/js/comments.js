document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#feedback_form');
    const newCommentsContainer = document.getElementById('new_comments');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = form.name.value.trim();
        const feedback = form.feedback.value.trim();

        newCommentsContainer.insertAdjacentHTML('beforeend', `
            <div class="comment">
                <h1>${name}</h1>
                <h2>${feedback}</h2>
            </div>
        `);

        form.reset();
        alert('Ваш відгук успішно додано!');
    });
});
