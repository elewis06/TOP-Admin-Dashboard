// Get references to the hamburger and menu elements
const hamburgerMenuButton = document.querySelector('.sidebar-menu-button');
const menuCloseButton = document.querySelector('.sidebar-menu-close-button');
const sidebarMenuBackground = document.querySelector('.sidebar-menu-background');
const sidebarMenu = document.querySelector('.sidebar');

console.log(hamburgerMenuButton);

// Toggle the active class on the menu when the hamburger is clicked
hamburgerMenuButton.addEventListener('click', () => {
    sidebarMenu.classList.toggle('active');
    sidebarMenuBackground.classList.toggle('active');
});

sidebarMenuBackground.addEventListener('click', () => {
    sidebarMenu.classList.toggle('active');
    sidebarMenuBackground.classList.toggle('active');
});

// Toggle the active class on the menu when the menu close button is clicked
menuCloseButton.addEventListener('click', () => {
    sidebarMenu.classList.toggle('active');
    sidebarMenuBackground.classList.toggle('active');
});