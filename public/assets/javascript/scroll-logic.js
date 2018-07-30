// scroll reveal
window.sr = ScrollReveal();

// scroll reveal effect for portfolio page
sr.reveal('.project-card', { duration: 1800, origin: 'bottom', distance: '80px', rotate: { x: 180, y: 180, z: 180 }, easing: 'ease-in-out', delay: 300 });

// scroll reveal effect for elements on the left side of the page.
sr.reveal('.page-left', {duration: 2000, origin: 'left', distance: '50%', useDelay: 'always', easing: 'ease-in-out', delay: 300, });

// scroll reveal effect for elements on the right side of the page.
sr.reveal('.page-right', {duration: 2000, origin: 'right', distance: '50%', useDelay: 'always', easing: 'ease-in-out', delay: 300, });

// scroll reveal effect for writing projects 
sr.reveal('.writing-type', { duration: 1800, origin: 'bottom', distance: '80px', rotate: { x: 180, y: 180, z: 180 }, easing: 'ease-in-out', delay: 300 });