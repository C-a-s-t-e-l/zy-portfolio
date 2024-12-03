function viewPDF(pdfPath) {

    window.open(pdfPath, '_blank');
}

const typedSpan = document.getElementById("typed")
const totype = ["Researchers", "Programmers", "Students", "Mwahngo"]

const delayTyping_char = 200;
const delayErasing_text = 100;
const delayTyping_text = 3000;

let totypeIndex = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < totype[totypeIndex].length) {
        typedSpan.textContent += totype[totypeIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, delayTyping_char);
    }
    else {
        setTimeout(eraseText, delayTyping_text);
    }
}

function eraseText() {
    if (charIndex > 0) {
        typedSpan.textContent = totype[totypeIndex].substring(0, charIndex - 1);
        charIndex = charIndex - 1;
        setTimeout(eraseText, delayErasing_text);
    }
    else {
        totypeIndex++;

        if (totypeIndex >= totype.length)
            totypeIndex = 0;
        setTimeout(typeText, delayTyping_text);
    }
}

window.onload = function () {
    if (totype[totypeIndex].length) setTimeout(typeText, delayTyping_text);
}


function sendEmail(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const subject = encodeURIComponent("Contact Form Message from " + name);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    const mailtoLink = `mailto:issabelletuson1104@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
}

function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('hidden');
}





let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slideButtonsContainer = document.querySelector('.slide_buttons');


function showSlide(index) {
    if (index >= totalSlides) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = totalSlides - 1;
    } else {
        currentSlideIndex = index;
    }


    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
        slide.style.transition = 'transform 0.4s ease-in-out';
    });


    updateSlideButtons();
}


function createSlideButtons() {
    slideButtonsContainer.innerHTML = '';

    for (let i = 0; i < totalSlides; i++) {
        const button = document.createElement('div');
        button.classList.add('slide_btn');
        if (i === currentSlideIndex) button.classList.add('active');
        button.addEventListener('click', () => showSlide(i));
        slideButtonsContainer.appendChild(button);
    }
}


function updateSlideButtons() {
    const buttons = slideButtonsContainer.querySelectorAll('.slide_btn');
    buttons.forEach((button, index) => {
        button.classList.toggle('active', index === currentSlideIndex);
    });
}


function nextSlide() {
    showSlide(currentSlideIndex + 1);
}

function prevSlide() {
    showSlide(currentSlideIndex - 1);
}


document.querySelector('.next_btn').addEventListener('click', nextSlide);
document.querySelector('.previous_btn').addEventListener('click', prevSlide);


window.addEventListener('load', () => {
    showSlide(currentSlideIndex);
    createSlideButtons();
    setInterval(nextSlide, 40000);
});



document.querySelectorAll(".loadAbout").forEach((button) => {
    button.addEventListener("click", (event) => {
        const studentId = parseInt(event.target.dataset.id);
        const studentData = dataContents.find((data) => data.id === studentId);

        if (studentData) {
            localStorage.setItem("studentData", JSON.stringify(studentData));
            window.location.href = "about-pages.html";
        }
    });
});


const dataContents = [
    {
        id: 1,
        name: "Bulbasaur",
        info: "A Grass/Poison type Pokémon known for its plant bulb that stores energy.",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pokémon_logo.svg",
        language: "Grass, Poison",
        education: "Kanto Region",
        credential: "Seed Pokémon",
        aspiration: "To bloom into Venusaur",
    },
    {
        id: 2,
        name: "Charmander",
        info: "A Fire type Pokémon with a flame at the tip of its tail that burns brighter with its emotions.",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pokémon_logo.svg",
        language: "Fire",
        education: "Kanto Region",
        credential: "Lizard Pokémon",
        aspiration: "To evolve into Charizard",
    },
    {
        id: 3,
        name: "Squirtle",
        info: "A Water type Pokémon known for withdrawing into its shell to protect itself.",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pokémon_logo.svg",
        language: "Water",
        education: "Kanto Region",
        credential: "Tiny Turtle Pokémon",
        aspiration: "To become a powerful Blastoise",
    },
    {
        id: 4,
        name: "Pikachu",
        info: "An Electric type Pokémon that stores electricity in its cheeks and releases it in battle.",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pokémon_logo.svg",
        language: "Electric",
        education: "Pallet Town, Kanto",
        credential: "Mouse Pokémon",
        aspiration: "To electrify opponents and become a champion’s ace Pokémon",
    },
    {
        id: 5,
        name: "Jigglypuff",
        info: "A Normal/Fairy type Pokémon known for its melodious singing that lulls foes to sleep.",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pokémon_logo.svg",
        language: "Normal, Fairy",
        education: "Cerulean Cave",
        credential: "Balloon Pokémon",
        aspiration: "To compose a lullaby that mesmerizes the world",
    },
    {
        id: 6,
        name: "Meowth",
        info: "A Normal type Pokémon that can walk on two legs and loves shiny objects.",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pokémon_logo.svg",
        language: "Normal",
        education: "Team Rocket Academy",
        credential: "Scratch Cat Pokémon",
        aspiration: "To amass treasures and live a luxurious life",
    },
    {
        id: 7,
        name: "Eevee",
        info: "A Normal type Pokémon with an unstable genetic makeup that allows it to evolve into various forms.",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pokémon_logo.svg",
        language: "Normal",
        education: "Celadon City",
        credential: "Evolution Pokémon",
        aspiration: "To evolve and adapt to any challenge in its path",
    },
];


