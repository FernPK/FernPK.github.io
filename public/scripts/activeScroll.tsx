console.log('activeScroll.tsx');
const sections = document.querySelectorAll('section');
const navLink = document.querySelectorAll('nav a');
window.onscroll = () => {
  const scrollPosition = document.documentElement.scrollTop;
  let currentId: string | null = '';
  sections.forEach((section, idx) => {
    if (scrollPosition >= section.offsetTop - section.offsetHeight * 0.4 && scrollPosition < section.offsetTop + section.offsetHeight - section.offsetHeight * 0.4) {
      currentId = section.getAttribute('id');
    }
    else if (idx === sections.length - 1 && scrollPosition + screen.height*0.8 >= section.offsetTop) {
      currentId = 'contact';
    }
  });
  navLink.forEach((link) => {
    link.classList.remove('font-bold');
    link.classList.remove('text-primary');
    link.classList.remove('underline');
    if (link.innerHTML.toLowerCase() === currentId) {
      link.classList.add('font-bold');
      link.classList.add('text-primary');
      link.classList.add('underline');
    }
  });
}