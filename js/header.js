
export function showingAndHoningSearch() {
    const searchInput = document.querySelector('.form-control');
    const searchButton = document.getElementById('search_button');
    const searchButton2 = document.getElementById('search_button2');
    const searchBox = document.querySelector('.search_box');
    let isSearchBoxVisible = false;

    searchButton.addEventListener('click', () => {
        if (!isSearchBoxVisible) {
            searchBox.classList.add('visible');
            isSearchBoxVisible = true;
        } else {
            searchBox.classList.remove('visible');
            isSearchBoxVisible = false;
        }
    });
    searchButton2.addEventListener('click', () => {
        if (!isSearchBoxVisible) {
            searchBox.classList.add('visible');
            isSearchBoxVisible = true;
        } else {
            searchBox.classList.remove('visible');
            isSearchBoxVisible = false;
            searchInput.value = '';
        }
    });
}
export function showingMobileMenu() {
    const mobileMenuContainer = document.querySelector('.container_nav_mobile');

    mobileMenuContainer.addEventListener('mouseenter', () => {
        mobileMenuContainer.classList.add('container_nav_mobile__expanded');
    });
    mobileMenuContainer.addEventListener('mouseleave', () => {
        mobileMenuContainer.classList.remove('container_nav_mobile__expanded');
    });
}