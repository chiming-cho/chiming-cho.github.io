function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

function goHome() {
  showSection('home');
}

function toggleTheme() {
  const body = document.body;
  const button = document.querySelector('.theme-toggle');

  if (body.classList.contains('light')) {
    body.classList.remove('light');
    body.classList.add('dark');
    button.textContent = '🌞 라이트 모드';
  } else {
    body.classList.remove('dark');
    body.classList.add('light');
    button.textContent = '🌙 다크 모드';
  }
}