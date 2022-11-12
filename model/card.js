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
        
        let html=`<a href="product.html?id=${this.id}">
                   <img src="${this.image}" width="128px">
                        <div class="content">
                            <div>${this.name}</div>
                        </div>
                 </a>
                 <button id="like${this.id}" class="unliked">FAVORITE</product>`;
        
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