$(document).ready(function () {
  enterForGif();
});

const enterForGif = () => {
  $('.project-one-link').mouseenter( () => {
    console.log('hovering');
    $('.project-one-link')
      .empty()
      .append(
        `<img src="./assets/animal-refuge.gif" alt="a gif of my project animal refuge">`
      );
      leaveForJpg();
  }
  );
}

const leaveForJpg = () => {
  $('.project-one-link').mouseleave( () => {
    console.log('left');
    $('.project-one-link')
      .empty()
      .append(
        `<img src="./assets/animal-refuge.jpg" alt="a gif of my project animal refuge">`
      );
  });
}