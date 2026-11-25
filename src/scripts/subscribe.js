const form = document.getElementById('subscribe');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.classList.add('was-submitted');

    if (form.checkValidity()) {
      form.hidden = true;
    }
  });
}