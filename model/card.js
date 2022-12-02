class Card{

    constructor(id, name, image,description,comics,stories,events,series){
        this.id = id;
        this.name = name;
        this.image = image;
        this.description = description;
        this.comics = comics;
        this.stories = stories;
        this.events = events;
        this.series = series;
        this.liked = false;
    }

    render(container){
        const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=35fa1f489d59da9312e3a83a9e181708&hash=5a96be8b3259a3c7bf4029205178a06e';
        //const container= document.querySelector('#container');
        //let contentHTML = '';
        let card = document.createElement('div');
        card.classList.add('card');
        
        fetch(urlAPI)
        .then(res => res.json())
        .then((json) => {
        for (const hero of json.data.results) {
          let urlHero = hero.urls[0].url;
          let html=`<div class="superheroe">
                    <a href="javascript:abrir(${urlHero})">
                     <div  class="contenedor">
                      <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}">
                   </div>
                   </a>
                    <h2>"${hero.name}"</h2>
                 </div>
                 <button id="like${this.id}" class="unliked">FAVORITE</product>
                 
                <div class="ventana" id="vent${urlHero}">
                  <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}">
                  <div class="texto">
                  <h1>${hero.name}</h1>
                  <a href="javascript:cerrar()">
                    <img src="images/cerrar.png" alt="">
                  </a>
                  <div class="datos">
                  <h3>DESCRIPCION</h3>
                  <p>${hero.description}</p>
                  <h3>COMICS</h3>
                  <p>${hero.comics}</p>
                  <h3>HISTORIAS</h3>
                  <p>${hero.stories}</p>
                  <h3>EVENTOS</h3>
                  <p>${hero.events}</p>
                  <h3>SERIES</h3>
                  <p>${hero.series}</p>
                </div>
                </div>
               </div>`;
            }
            container.innerHTML = contentHTML;
            })
        
        card.innerHTML += html;
        container.appendChild(card);

        let likeBtn = document.getElementById(`like${this.id}`);
        likeBtn.addEventListener('click', this.addLike.bind(this) );
    }

    addLike(){
        let userList = [];
        let loadedUsers = localStorage.getItem("user");
        if (loadedUsers !== null) {
            userList = JSON.parse(loadedUsers);
        }
        let characterList = [];
        let loadedCharacters = localStorage.getItem("character");
        if (loadedCharacters !== null) {
            characterList = JSON.parse(loadedCharacters);
        }

        let likeBtn = document.getElementById(`like${this.id}`);
        this.liked = !this.liked;
        if(this.liked){
            likeBtn.classList.remove("unliked");
            console.log(userList)
            for (let i = 0; i < userList.length; i++) {
                console.log(userList[i])
                if (userList[i].isLogged == true) {
                    userList[i].favList.push(characterList[this.id-1])
                    console.log("logged",userList[i])
                }                
            }
            likeBtn.classList.add("liked");
        }else{
            likeBtn.classList.remove("liked");
            likeBtn.classList.add("unliked");
        }
    }



}
function abrir(vent){
    document.getElementById(`vent${vent}`).style.display="flex";
}
function cerrar(vent){
    document.getElementById(`vent${vent}`).style.display="none";
}



//const marvel = {
    //render: () => {
        
        //const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=35fa1f489d59da9312e3a83a9e181708&hash=5a96be8b3259a3c7bf4029205178a06e';
        //const container= document.querySelector('#container');
        //let contentHTML = '';

        //fetch(urlAPI)
        //.then(res => res.json())
        //.then((json) => {
        //for (const hero of json.data.results) {
          //let urlHero = hero.urls[0].url;
          //contentHTML += `
            //<div class="col-md-4">
                //<a href="${urlHero}" target="_blank">
                  //<img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                //</a>
                //<h3 class="title">${hero.name}</h3>
            //</div>`;
        //}
        //container.innerHTML = contentHTML;
        //})
    //}
  //}
  //marvel.render();
