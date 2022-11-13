class Card{

    constructor(id, name, image, height,weight,gender,eyes,hair,universe,otheraliases,education,placeoforigin,identity,knowrelatives,powers,groupafilation){
        this.id = id;
        this.name = name;
        this.image = image;
        this.height = height;
        this.weight = weight;
        this.gender = gender;
        this.eyes = eyes;
        this.hair = hair;
        this.universe = universe;
        this.otheraliases = otheraliases;
        this.education = education;
        this.placeoforigin = placeoforigin;
        this.identity = identity;
        this.knowrelatives = knowrelatives;
        this.powers = powers;
        this.groupafilation = groupafilation;
        this.liked = false;
    }

    render(container){
        let card = document.createElement('div');
        card.classList.add('card');
        
        let html=`<div class="superheroe">
                    <a href="javascript:abrir(${this.id})">
                     <div  class="contenedor">
                      <img src="${this.image}">
                   </div>
                   </a>
                    <h2>${this.name}</h2>
                 </div>
                 <button id="like${this.id}" class="unliked">FAVORITE</product>
                 
                <div class="ventana" id="vent${this.id}">
                  <img src="${this.image}">
                  <div class="texto">
                  <h1>${this.name}</h1>
                  <a href="javascript:cerrar()">
                    <img src="images/cerrar.png" alt="">
                  </a>
                  <div class="datos">
                  <h3>HEIGHT</h3>
                  <p>${this.height}</p>
                  <h3>WEIGHT</h3>
                  <p>${this.weight}</p>
                  <h3>GENDER</h3>
                  <p>${this.gender}</p>
                  <h3>EYES</h3>
                  <p>${this.eyes}</p>
                  <h3>HAIR</h3>
                  <p>${this.hair}</p>
                  <h3>UNIVERSE</h3>
                  <p>${this.universe}/p>
                  <h3>OTHER ALIASES</h3>
                  <p>${this.otheraliases}</p>
                  <h3>EDUCATION</h3>
                  <p>${this.education}</p>
                  <h3>PLACE OF ORIGIN</h3>
                  <p>${this.placeoforigin}</p>
                  <h3>IDENTITY</h3>
                  <p>${this.identity}</p>
                  <h3>KNOWN RELATIVES</h3>
                  <p>${this.knowrelatives}</p>
                  <h3>POWERS</h3>
                  <p>${this.powers}</p>
                  <h3>GROUP AFFILIATION</h3>
                  <p>${this.groupafilation}/p>
                </div>
                </div>
               </div>`;
    
        
        card.innerHTML += html;
        container.appendChild(card);

        let likeBtn = document.getElementById(`like${this.id}`);
        likeBtn.addEventListener('click', this.addLike.bind(this) );
    }

    addLike(){
        let likeBtn = document.getElementById(`like${this.id}`);
        this.liked = !this.liked;
        if(this.liked){
            likeBtn.classList.remove("unliked");
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