const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

// Optional: Add hover effects on links or other elements
const links = document.querySelectorAll('a');

links.forEach(link => {
  link.addEventListener('mouseover', () => {
    cursor.classList.add('hover');  // Add a hover class for styling
  });

  link.addEventListener('mouseout', () => {
    cursor.classList.remove('hover');
  });
});
