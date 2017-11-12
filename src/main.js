const player = new Player();
const album = new Album();

document.body.addEventListener('keyup', (event) => {
  if (event.keyCode === 27) {
    album.hide();
  }
});

const animalsContainer = document.createElement('section');
animalsContainer.className = 'animals';
document.body.appendChild(animalsContainer);

// create the figure tag for an individual animal and return the figure
const createAnimalFigure = (animal) => {
  const figure = document.createElement('figure');
  figure.className = 'animal';

  const background = document.createElement('div')
  background.className = 'background';
  background.style.backgroundImage = `url('${animal.image}')`;
  figure.appendChild(background);

  const caption = document.createElement('figcaption');
  caption.style.backgroundColor = animal.bgColor;
  caption.innerHTML = `
    <h2>${animal.name}</h2>
    <img src="${animal.icon}" alt="${animal.name}" class="animal-icon" />
  `;
  figure.appendChild(caption);

  figure.addEventListener('click', (event) => {
    // alert(event);
    // console.log(event);
    player.play(animal.sound);
    album.show(animal);
  });

  return figure;
}

// this will append the created figure tags and puts them on the page
animals.forEach(animal => {
  animalsContainer.appendChild(
  createAnimalFigure(animal)
  );
});
