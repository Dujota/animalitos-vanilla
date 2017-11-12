class Album{
  constructor(){
    this.section = document.createElement('section');
    this.section.className = 'album';
    document.body.appendChild(this.section);
  }

  show(animal){
     // classList is an array of all the classes that are in your class
    this.section.classList.add('active');
    // this.section.className += ' active' this would work too
    const client_id = '62393e5727adadcc4720c03e66df6a1057398bd2acc4baff70adbefc6c4b2823'
    // once we fetch this data from the internet, we then want to do somehting -- this called a promise
    fetch(`https://api.unsplash.com/search/photos?client_id=${client_id}&query=${animal.name}`).then((response) => {
      return response.json();
    }).then(data => {
      this.displayImages(data.results)
    });
  }

  displayImages(images){
      const imageTags = images.map((image) => {
        return `<img src="${image.urls.regular}" alt = "${image.description}" />`;
      });
      this.section.innerHTML = imageTags.join('');
  }
  hide () {
    this.section.classList.remove('active');
  }
}
