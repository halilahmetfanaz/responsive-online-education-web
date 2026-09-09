
  // The registration form has no backend yet, so we're giving the user a clean feedback.
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const course = document.getElementById('courses').value;

    if (!name || !email) {
      showFormMessage('Please fill in your name and email.', false);
      return;
    }

    showFormMessage(`Thanks, ${name}! You're registered for "${course}". We'll be in touch at ${email}.`, true);
    form.reset();
  });
});

function showFormMessage(text, success) {
  const form = document.querySelector('.contact-form');
  let messageBox = form.querySelector('.form-message');

  if (!messageBox) {
    messageBox = document.createElement('p');
    messageBox.className = 'form-message';
    form.appendChild(messageBox);
  }

  messageBox.textContent = text;
  messageBox.classList.toggle('form-message--success', success);
  messageBox.classList.toggle('form-message--error', !success);
}
