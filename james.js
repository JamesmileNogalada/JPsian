function toggleForm() {
    const form = document.getElementById('loginForm');
    const isVisible = form.style.display === 'block';
    form.style.display = isVisible ? 'none' : 'block';
}

    if (loginForm.style.display === "block") {
      loginForm.style.display = "none";
      overlay.style.display = "none";
    } else {
      loginForm.style.display = "block";
      overlay.style.display = "block";
    }