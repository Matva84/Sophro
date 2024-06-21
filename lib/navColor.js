const navbar = document.querySelector('.banner');
const menu = document.getElementById("topnav_responsive_menu")//document.querySelector('.menus');
const menuLink = document.getElementById('linkColor');
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  let currentSection = null;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const pageOffset = window.scrollY;

    if (pageOffset >= sectionTop && pageOffset < sectionTop + sectionHeight) {
      currentSection = section;
    }
  });

  if (currentSection) {
    const bgColor = window.getComputedStyle(currentSection).backgroundColor;
      navbar.style.backgroundColor = bgColor;
      if (menuLink) {
        if (bgColor === 'rgb(26, 57, 46)') {
            menuLink.style.color = 'rgb(255, 255, 255)';}
          else {
            menuLink.style.color = 'rgb(0, 0, 0)';}
        }
      }
});
      //menu.style.backgroundColor = bgColor;
