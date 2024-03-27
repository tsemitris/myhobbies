export default function printHeader() {

    const body = document.body;

    const mainHeader = document.createElement('header');
    mainHeader.classList.add('main-header');
    
    // Logo
    const logoButton = document.createElement('logo');
    logoButton.classList.add('logo');

    // Categories
    const categories = document.createElement('div');
    categories.classList.add('categories');

    const hobbiesButton = document.createElement('button');
    hobbiesButton.classList.add('categories-button');
    hobbiesButton.innerText = 'Hobbies';

    const aboutButton = document.createElement('button');
    aboutButton.classList.add('categories-button');
    aboutButton.innerText = 'About';



    
    body.appendChild(mainHeader);

    mainHeader.append(logoButton, categories);

    categories.append(hobbiesButton, aboutButton);

}