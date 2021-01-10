const portfolioApp = {};

portfolioApp.projectIndex = 5;

portfolioApp.init = function() {
  portfolioApp.append(portfolioApp.projectIndex);
  portfolioApp.eventListeners();
}


portfolioApp.data = [
  {
    title: 'Animal Refuge',
    tools: 'HTML & CSS',
    image: './assets/animal-refuge.jpg',
    imageAlt: 'Screenshot of Animal Refuge, a PSD conversion project made in my first week of bootcamp.',
    link: './animal-refuge/index.html',
    ghLink: '',
    collab: 'Solo',
    description: 'First project in Bootcamp. This was a simple PSD conversion using floats instead of flexbox and grid. Floats were the butt of a lot of the jokes in class this week, but this was a fun project nevertheless!'
  },
  {
    title: 'The Restaurant Mall',
    tools: 'HTML & SASS',
    image: './assets/restaurant-mall.jpg',
    imageAlt: 'Screenshot of The Restauraunt Mall, a multi-page PSD conversion project using the SASS preprocessor',
    link: './the-restaurant-mall/index.html',
    ghLink: '',
    collab: 'Solo',
    description: 'This was my first project using a preprocessor. There were a lot of positioning required for this design, and some rather... creative solutions. All and all happy with how this project turned out!'
  },
  {
    title: 'Choose Your Own Adventure',
    tools: 'HTML, SASS & jQuery',
    image: './assets/choose-your-own-adventure.jpg',
    imageAlt: 'Screenshot of Choose Your Own Adventure: a web experience',
    link: 'https://ulanob.github.io/boris-ulanowicz-project-three/',
    collab: 'Solo',
    ghLink: '',
    description: 'A solo jQuery project. I wanted to make something that a younger me might have been amused by. This is a throwback to the old choose your own adventure novels I used to read as a kid, as well as an exercise on jQuery and DOM manipulation! I enjoyed creating template that I could use for different slides and sections of the story. I kept it fairly simple in terms of complexity and style (this is just a binary tree!) but this is a project I feel like I will come back to in the future!'
  },
  {
    title: 'Juno Art Meme Gallery',
    tools: 'HTML, SASS, jQuery, 2 API\'s',
    image: './assets/juno-meme-gallery.jpg',
    imageAlt: 'Screenshot of the Juno Meme Gallery, a collaborative project with Aleksandra Petryga',
    link: 'https://aleksandra-petryga-boris-ulanowicz.github.io/Aleksandra-Petryga-Boris-Ulanowicz-Project-Four/',
    ghLink: '',
    collab: 'Made with <a href="https://petryga.com/">Aleksandra Petryga</a>',
    description: 'Let them eat Memes! Superstar cohort-mate Aleksandra and I both have a soft spot for memes that use old paintings as a canvas, and we are mildly tolerant of dad jokes - just tolerant enough to start running with this project. This project uses two API\'s - the Cleveland Museum of Art API for our lovely images, and the Dad Joke API. Using the select form (top right), you can select the category, and this makes an API call to the museum, and returns images and a dad joke as the caption. We also created a faux infinite scroll - a stretch goal we were very satisfied with!'
  },
  {
    title: 'Endangerment!',
    tools: 'React, CSS, Firebase, jService API',
    image: './assets/endangerment.jpg',
    imageAlt: 'Endangerment: my take on the legendary game Jeopardy',
    link: 'https://ulanob.github.io/boris-ulanowicz-project-five/',
    ghLink: '',
    collab: 'Solo',
    description: 'This was made soon after the passing of the late great Alex Trebek. I never would have thought that I could create a knock-off of Jeopardy in a week, but was really happy with the results! Enter your name, answer as many questions as you can, and when you are done, submit your answer to the leaderboard, which sends your name and score over to firebase. The app pulls the data from Firebase and creates a leaderboard at the bottom of the page! Error handling includes not being able to answer questions over and over, background color changes to show if a question has been answered correct or not, and, just like in the on-stage game, wrong answers are penalized! Good Luck!'
  },
  {
    title: 'Hue are you?',
    tools: 'React, CSS, APIs',
    image: './assets/hue-are-you.jpg',
    imageAlt: '\'hue are you?\' a collaborative project with Calvin Barrett and Christine Shiels',
    link: 'https://hue-are-you.github.io/hue-are-you/',
    ghLink: '',
    collab: 'Made with <a class="collab" href="https://calvinbarrett.ca/">Calvin Barrett</a> and <a href="http://www.thisgrrlcodes.ca/">Christine Shiels</a>',
    description: 'Sure, you love your soul mate. But have you ever wondered if there was a painting out there that would make you feel the same way and show you who you are? Well, have no fear. Creative Calvin, brilliant Christine and I created this react app that takes your favourite makeup brand, presents colours from the brand\'s products, and renders the painting that you\'ve been waiting for for all this time! We hope that you enjoy the SVG, background splashes, and ultimately discover hue you really are <3'
  }
]

portfolioApp.append = (i) => {
  const { title, tools, image, imageAlt, link, collab, description } = portfolioApp.data[i];
  $('.project-content')
    .empty()
    .append(
      `<div class="project-image-container">
          <a href="${link}">
            <img src="${image}" alt="${imageAlt}">
          </a>
        </div>
        <div class="project-label">
          <h3><a href="${link}">${title}</a></h3>
          <p>${tools}</p>
          <p>${collab !== 'Solo'? collab : ''}</p>
          <p>${description}</p>
        </div>`
    )
}

portfolioApp.eventListeners = () => {
  $('.chevron-left').on('click', () => {
    portfolioApp.projectIndex = portfolioApp.projectIndex - 1;
    if (portfolioApp.projectIndex < 0) {
      portfolioApp.projectIndex = 5;
    }
    portfolioApp.append(portfolioApp.projectIndex);
  })

  $('.chevron-right').on('click', () => {
    portfolioApp.projectIndex = portfolioApp.projectIndex + 1;
    if (portfolioApp.projectIndex > 5) {
      portfolioApp.projectIndex = 0;
    }
    portfolioApp.append(portfolioApp.projectIndex);
    console.log('right');
  })
}

$(function() {
  portfolioApp.init();
})