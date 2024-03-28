const hobbies = [
    {
        image: '/code.svg',
        text: `As a fervent coder, I find solace in the intricate dance of algorithms and the logic behind programming languages. From crafting elegant solutions to tackling complex problems, programming is not just a skill but a journey of perpetual learning and innovation for me.`
        
    },
    {
        image: '/joystick.svg',
        text: `Gaming isn't just a pastime; it's a realm where imagination meets interactivity. From the pixelated landscapes of retro classics to the immersive worlds of modern masterpieces, I've always found joy in exploring virtual realms and unraveling the stories woven within them.`
        
    },
    {
        image: '/video-file.svg',
        text: `The art of video editing and production is my canvas for storytelling. Whether it's piecing together footage to convey a narrative or adding visual effects to elevate the viewing experience, I thrive on the creative process of bringing ideas to life through the lens of a camera and the magic of editing software.`
        
    }
]

async function printHobbies(aboutContainer) {

    for (let i = 0; i < hobbies.length; i++) {

        const hobbyContainer = document.createElement('div');
        hobbyContainer.classList.add('hobby-container');
        hobbyContainer.style.backgroundImage = `url(${hobbies[i].image})`;
        
        const hobbyInfo = document.createElement('div');
        hobbyInfo.classList.add('hobby-info');
    
        const textSpan = document.createElement('span');
        textSpan.innerText = hobbies[i].text;

        aboutContainer.append(hobbyContainer);

        hobbyContainer.append(hobbyInfo);
        
        hobbyInfo.append(textSpan);


        hobbyContainer.addEventListener('mouseover', () => {
            hobbyInfo.classList.add('hover');
        });
        hobbyContainer.addEventListener('mouseout', () => {
            hobbyInfo.classList.remove('hover');
        });
    }


}

export default async function printFooter() {

    const body = document.body;

    const mainFooter = document.createElement('footer');
    mainFooter.classList.add('main-footer');

    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');


    const copyrightText = document.createElement('span');
    copyrightText.classList.add('copyright-text');
    copyrightText.innerHTML = '&copy; All copyright reserved';


    body.appendChild(mainFooter);

    mainFooter.append(aboutContainer, copyrightText);


    printHobbies(aboutContainer);
}