// Menu toggle for mobile view
const menuBtn = document.getElementById('menuBtn');
const navbar = document.getElementById('navbar');

menuBtn.onclick = () => {
  if (navbar.style.display === 'flex' || navbar.style.display === '') {
    navbar.style.display = 'none';
  } else {
    navbar.style.display = 'flex';
    navbar.style.flexDirection = 'column';
    navbar.style.position = 'absolute';
    navbar.style.right = '2rem';
    navbar.style.top = '4rem';
    navbar.style.background = '#2952a3';
    navbar.style.padding = '1rem';
    navbar.style.borderRadius = '8px';
    navbar.style.zIndex = '11';
  }
};

// Animate skill bars
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.skill-bar').forEach(bar => {
    const percent = bar.getAttribute('data-skill');
    bar.innerHTML = '<div style="width:0; height:100%; background:linear-gradient(90deg,#3575c3,#4eb996); border-radius:12px; transition:width 1.5s"></div>';
    setTimeout(() => {
      bar.firstChild.style.width = percent + '%';
    }, 300);
  });
});
