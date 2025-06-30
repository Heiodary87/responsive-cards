
  const toggleBtn = document.getElementById('modeToggle');

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    // Optional: change button text too
    if (document.body.classList.contains('dark')) {
      toggleBtn.textContent = 'Switch to Light Mode';
    } else {
      toggleBtn.textContent = 'Switch to Dark Mode';
    }
  });

