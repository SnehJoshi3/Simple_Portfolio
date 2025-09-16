function showSection(sectionId) {
  const sections = document.querySelectorAll('#content_area .section');
  sections.forEach(section => section.style.display = 'none'); // hide all sections
  const selected = document.getElementById(sectionId);
  if (selected) selected.style.display = 'block'; // show only the clicked one
}

// On initial page load, show 'objective'
document.addEventListener('DOMContentLoaded', () => {
  showSection('about');
});