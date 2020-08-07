function toggleMenu() {
    let navigation = document.querySelector('.navigation');
    let toggle = document.querySelector('.toggle');
    navigation.classList.toggle('active');
    toggle.classList.toggle('active');
}

function toggleDropdown() {
    let dropdown = document.querySelector('.dropdown');
    let content = document.querySelector('.dropdown-content');
    dropdown.classList.toggle('active');
    content.classList.toggle('active');
}