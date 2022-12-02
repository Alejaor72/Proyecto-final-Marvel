const storage = window.localStorage
function validateLoggedUser() {
    const loggedUser = storage.getItem("user")
    const user = JSON.parse(loggedUser)
    if(!user.isLogged) {
        window.location.href = 'login.html'
    } else {
        listButtons()
    }
}

let db = `[
    {
        "id": 1,
        "name": "Thor",
        "image": "https://lumiere-a.akamaihd.net/v1/images/thor_amor_y_trueno_3cc74888.jpeg?region=420,0,1080,1080",
        "height": "6,6",
        "weight": "640 lbs",
        "gender": "male",
        "eyes": "blue",
        "hair": "blond",
        "universe": "Marvel universe",
        "otheraliases":"Donald M. Blake, God of Thunder, Son of Odin, The Thunderer, Lord of Asgard, Jake Olson, Sigurd Jarlson, Donar, Donner, Hloriddi, Unhappy Hrungnir’s Playmate, Veur, Hrodr’s Foe-Man, Longbeard’s Son, Vingthor the Hurler, Siegfried, Siegmund, Woe-King, (impersonated) Hercules, Harokin, Freya, formerly bound to Eric Masterson",
        "education": "(Thor) Tutored by scholars of Asgard, (Blake) MD",
        "placeoforigin": "A cave in Norway",
        "identity": "(as Donald Blake) Secret",
        "knowrelatives": "Gaea (mother), Frigga (adoptive mother), Odin Borson (father, deceased), Sigyn (sister-in-law), Solveig (sister-in-law, deceased), Loki (adoptive brother), Balder, Vidar (half-brothers), Vili, Ve (paternal uncles, deceased), Bor Burison (paternal grandfather, deceased), Bestia (paternal grandmother, presumed deceased), Buri (Tiwaz, great- grandfather), Bolthorn (great-grandfather, presumed deceased), Jormungand (Midgard Serpent), Fenris Wolf (nephew), Hela (niece), large extended family via Gaea and others",
        "powers": "Odinpower Warrior's Madness (Berserker Rage),Superhuman Strength,Superhuman Durability,Superhuman Speed,Superhuman Reflexes,Control of ElementsHand-to-Hand Combat,Sword-Fighting",
        "groupafilation": "Avengers,Heralds of Galactus"
    },
    {
        "id": 2,
        "name": "BLACK PANTHER (T´CHALLA)",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-6jy00dBlOf9Tt9mBSiy195zV12OlxUkew&usqp=CAU",
        "height": "6",
        "weight": "200 lbs",
        "gender": "male",
        "eyes": "Brown",
        "hair": "Black",
        "universe": "Marvel universe",
        "otheraliases":"Luke Charles, Black Leopard, Nubian Prince, The Client, Coal Tiger",
        "education": "PhD in physics",
        "placeoforigin": "Wakanda",
        "identity": "Publicly known",
        "knowrelatives": "N'Yami (mother), Romanda (stepmother), T'Chaka (father), Shuri (sister), Jakarra (half-brother, deceased), Hunter (adopted brother), Ororo Munroe (Storm, spouse), Khanata (cousin), Joshua Itobo (cousin), Ishanta (cousin), M'Koni Wheeler (cousin), T'Shan (cousin), Zuni (cousin)",
        "powers": "Heightened Senses,Night Vision,Hand-to-Hand Combat,Superhuman Strength",
        "groupafilation": "Avengers,Dora Milaje"
    },
    {
        "id": 3,
        "name": "IRON MAN (TONY STARK)",
        "image": "https://depor.com/resizer/yVbI0zl-pVSlk58VjeAiPLCOcV4=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/BNF23MPFVBDNVBFR4VTYETGJ54.jpg",
        "height": "6,1",
        "weight": "225 lbs",
        "gender": "male",
        "eyes": "Blue",
        "hair": "Black",
        "universe": "Marvel universe",
        "otheraliases":"Anthony Edward Tony Stark, Shellhead, Golden Avenger, Tetsujin, Formerly Crimson Dynamo, Formerly Iron Knight, Formerly Hogan Potts, Formerly Randall Pierce, Formerly Spare Parts Man, Impersonated Cobalt Man (Ralph Roberts)",
        "education": "Ph.Ds in physics and electrical engineering",
        "placeoforigin": "Long Island, New York",
        "identity": "Publicly known",
        "knowrelatives": "Maria Collins Carbonell Stark (mother, deceased), Howard Anthony Walter Stark (father, deceased), Morgan Stark (cousin), Edward Stark (uncle, deceased)",
        "powers": "Heightened Senses,Superhuman Strength,Regeneration,Genius Intelligence",
        "groupafilation": "Avengers,Avengers West Coast,Illuminati,S.H.I.E.L.D."
    },
    {
        "id": 4,
        "name": "STAR LORD (PETER QUILL)",
        "image": "https://media.glamour.mx/photos/6190627ca6e030d6480f728c/1:1/w_1575,h_1575,c_limit/245039.jpg",
        "height": "6,2",
        "weight": "175 lbs",
        "gender": "male",
        "eyes": "Blue",
        "hair": "Blond, formerly brown",
        "universe": "Marvel universe",
        "otheraliases":"Peter Jason Quill, Peter Quill, Boyo",
        "education": "College degree, NASA astronaut training",
        "placeoforigin": "Colorado",
        "identity": "Secret",
        "knowrelatives": "Meredith Quill (mother, deceased), J'Son (father), Jake (possible “stepfather”), Victoria (half-sister), Sandy (possible sister-in-law), Kip Hölm (possible adoptive brother), Eson (possible paternal grandfather), Gareth (possible paternal great-uncle), Alain, Rhys (possible adoptive nephews), Robyn (possible adoptive niece)",
        "powers": "Force Field,Healing Factor,Superhuman Strength,Superior Marksmanship,Sword-Fighting,Unarmed Combat,Control of Elements,Flight,Interstellar Travel,Superhuman Speed,Superhuman Intuition",
        "groupafilation": "Guardians of the Galaxy."
    },
    {
        "id": 5,
        "name": "VENOM (EDDIE BROCK)",
        "image": "https://lumiere-a.akamaihd.net/v1/images/venom_scene_001_59a30e03.jpeg?region=360,1,800,800",
        "height": "5,11",
        "weight": "175 lbs",
        "gender": "male",
        "eyes": "Blue",
        "hair": "Blond",
        "universe": "Marvel universe",
        "otheraliases":"Edward Charles Brock, Eddie Brock, Anti-Venom, (formerly) Venom, The Suit, Toxin",
        "education": "College student, extensive bioengineering studies",
        "placeoforigin": "New York City, New York",
        "identity": "Known to authorities",
        "knowrelatives": "Unnamed mother (deceased), Edward Brock (deceased), Unnamed grandparents, Anne Weying (ex-wife)",
        "powers": "Shapeshifting,Regeneration,Organic Webbing ,Projection,Superhuman Strength,Superhuman Durability",
        "groupafilation": "None"
    },
    {
        "id": 6,
        "name": "HAWKEYE (CLINT BARTON)",
        "image": "https://www.nacionflix.com/__export/1627573749751/sites/debate/img/2021/07/29/jaremy-renner-hawkeye.jpg_881623903.jpg",
        "height": "6,3",
        "weight": "230 lbs",
        "gender": "male",
        "eyes": "Blue",
        "hair": "Blond",
        "universe": "Marvel universe",
        "otheraliases":"Clinton Francis Clint Barton, Dr. Rogers, The Marksman, Br'er Hawkeye, Seagate Superhuman Cellblock Prisoner 334556, Longbow, Goliath, Father Time, Ronin, Bruno, Louis, Robin Hood, The Hawkeye Kid, Golden Archer, Purple Man, Impersonated Constrictor & Dreadknight",
        "education": "High school (unfinished)",
        "placeoforigin": "Waverly, Iowa",
        "identity": "Publicly known",
        "knowrelatives": "Edith Barton (mother, deceased), Harold Barton (father, deceased), Charles Bernard Barney Barton (brother, deceased), Barbara Morse Bobbi Barton (Mockingbird, ex-wife)",
        "powers": "Hand-to-HanD Combat,Superior Marksmanship",
        "groupafilation": "Avengers West Coast,The Defenders"
    },
    {
        "id": 7,
        "name": "SCARLET WITCH",
        "image": "https://lumiere-a.akamaihd.net/v1/images/wanda_maximoff_profile_2994bdb4.jpeg?region=302,0,400,401",
        "height": "5,7",
        "weight": "132 lbs",
        "gender": "Female",
        "eyes": "Blue",
        "hair": "Auburn",
        "universe": "Marvel universe",
        "otheraliases":"Gypsy Witch, Wanda Frank, Wanda Magnus, Ana Maximoff",
        "education": "Largely self-taught in various subjects, notably sorcery",
        "placeoforigin": "Wundagore Mountain, Transia",
        "identity": "Publicly known",
        "knowrelatives": "Magda Eisenhardt (mother, deceased), Marya Maximoff (adoptive mother deceased), Max Eisenhardt (Magneto, father), Django Maximoff (adoptive father, deceased), Anya Eisenhardt (sister, deceased), Lorna Dane (Polaris, half-sister), Zala Dane (alleged half-sister, deceased), Crystalia Amaquelin (Crystal, former sister-in-law, marriage to Pietro annulled), Pietro Maximoff (Quicksilver, brother), Vision (Victor Shade, estranged husband), Thomas (son, deceased), William (son, deceased), Billy Kaplan (Wiccan, apparent son), Tommy Shepard (Speed, apparent son), Ruthie Eisenhardt (paternal aunt, deceased), Erich Eisenhardt (paternal great-uncle, deceased), Jakob Eisenhardt (paternal grandfather, deceased), Unidentified paternal grandmother (deceased), Luna Amaquelin (niece), Red Lucy Keough (ancestor), Quentin & Lenore Keough (Lucy’s twin children, ancestors)",
        "powers": "IlluminationMagic (Chaos Magic)Matter TransmutationNexus BeingPowers of Life and DeathProbability AlterationPsychometryPrecognitionMagicMind ControlHealing FactorReality WarpingControl of ElementsPsionicsCommuning with Deceased Spirits",
        "groupafilation": "AvengersAvengers West Coast"
    },
    {
        "id": 8,
        "name": "CAPTAIN AMERICA",
        "image": "https://depor.com/resizer/0O6CR4namQOAg80DG2LA0PbOJYU=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/EXEHQLPFYVESTNUCR7DJCQYF5U.jpg",
        "height": "6,2",
        "weight": "240 lbs",
        "gender": "Male",
        "eyes": "Blue",
        "hair": "Blond",
        "universe": "Marvel universe",
        "otheraliases":"Steven Rogers, Brett Hendrick, Buck Jones, Yeoman America, Nathan Hale, The Captain, Anthony Schwarz, Roger Grant, Steven Grant Rogers, Nomad, The Man Without a Country, Roger Stevens, Lord of the Frozen Ice, Blondie, The Living Legend, Granny, Cap, The Sentinel of LIberty, The Brooklyn Project",
        "education": "High school graduate, one year of art school, military basic training, and private tutoring",
        "placeoforigin": "Manhattan, New York City, New York",
        "identity": "Publicly known",
        "knowrelatives": "Sarah Rogers (mother, deceased), Joseph Rogers (father, deceased)",
        "powers": "Superhuman Agility, Superhuman Stamina, Superhuman Durability, Superhuman Reflexes, Superhuman Strength",
        "groupafilation": "Avengers, Secret Avengers"
    },
    {
        "id": 9,
        "name": "CAPTAIN MARVEL",
        "image": "https://www.nacionflix.com/__export/1644514771991/sites/debate/img/2022/02/10/brie-larson-capitana-marvel-.jpg_375107104.jpg",
        "height": "5,11",
        "weight": "165 lbs",
        "gender": "Female",
        "eyes": "Blue",
        "hair": "Blond",
        "universe": "Marvel universe",
        "otheraliases":"Ace, Binary, Lady Marvel, Warbird",
        "education": "Extensive military training and acquired BA while in military",
        "placeoforigin": "Boston, Massachusetts",
        "identity": "Publicly known",
        "knowrelatives": "Marie Danvers (mother), Joseph Danvers (father, deceased), Joeseph Danvers Jr. (brother), Steven Steve Danvers (brother, deceased), Benny (uncle)",
        "powers": "Flight, Energy Blasts, Superhuman Durability, Superhuman Strength",
        "groupafilation": "Alpha Flight, Avengers, A-Force, Kree"
    },
    {
        "id": 10,
        "name": "DAREDEVIL",
        "image": "https://www.egames.news/__export/1661364092062/sites/debate/img/2022/08/24/daredevil_crop1661364050450.jpg_375107967.jpg",
        "height": "6",
        "weight": "200 lbs",
        "gender": "Male",
        "eyes": "Blue",
        "hair": "Red",
        "universe": "Marvel universe",
        "otheraliases":"Matthew Murdock, DD, The Man without Fear, Ray Mallory, Kingpin of Crime, Jack Batlin, Laurent LeVasseur, Nameless One, Red Man, Michael Mike Murdock",
        "education": "Columbia University (undergraduate) and J.D. in law from Harvard",
        "placeoforigin": "Clinton (Hell's Kitchen), New York City, New York",
        "identity": "Publicly revealed though unconfirmed",
        "knowrelatives": "Margaret Grace Murdock (mother), Jonathon Murdock (father, deceased), Milla Donovan (spouse)",
        "powers": "Heightened Senses",
        "groupafilation": "The Defenders"
    },
    {
        "id": 11,
        "name": "KATE BISHOP",
        "image": "https://www.nacionflix.com/__export/1640540901356/sites/debate/img/2021/12/26/kate-bishop-marvel-_1.jpg_1386005372.jpg",
        "height": "5,5",
        "weight": "120 lbs",
        "gender": "Female",
        "eyes": "Blue",
        "hair": "Black",
        "universe": "Marvel universe",
        "otheraliases":"Hawkingbird, Mockingbird, Taskmistress, Weapon Woman",
        "education": "Enrolled at Hawthorne Academy preparatory school",
        "placeoforigin": "New York City, New York",
        "identity": "Secret",
        "knowrelatives": "Eleanor Bishop (mother, deceased), Derek Bishop (father)",
        "powers": "Superior Marksmanship",
        "groupafilation": "none"
    },
    {
        "id": 12,
        "name": "JESSICA JONES",
        "image": "https://media.glamour.es/photos/616f8fad16c8b9c6f63198e0/master/pass/628539.jpeg",
        "height": "5,7",
        "weight": "124 lbs",
        "gender": "Female",
        "eyes": "Brown",
        "hair": "Brown, formerly dyed pink",
        "universe": "Marvel universe",
        "otheraliases":"Jessica Cambell Jones, Madeleine, Knightress, Jewel, Jess, other aliases in the course of investigative work",
        "education": "High school graduate and private investigator's license",
        "placeoforigin": "Unrevealed, possibly Forest Hills, New York",
        "identity": "Publicly known",
        "knowrelatives": "Unidentified mother (deceased), Dave Campbell (father, deceased), Unidentified adopted sister, Philip Campbell (brother, deceased), Luke Cage (spouse), Danielle Cage (daughter), Jenny (adopted aunt)",
        "powers": "Superhuman Strength, Healing Factor, Flight",
        "groupafilation": "The Defenders"
    }
  ]`;

  let data = JSON.parse(db);
  localStorage.setItem("character", db)


  const container = document.getElementById('container');

  for(let i=0 ; i<data.length ; i++){
    console.log(data[i]);
    let card = new Card(
        data[i].id,
        data[i].name,
        data[i].image,
        data[i].height,
        data[i].weight,
        data[i].gender,
        data[i].eyes,
        data[i].hair,
        data[i].universe,
        data[i].otheraliases,
        data[i].education,
        data[i].placeoforigin,
        data[i].identity,
        data[i].knowrelatives,
        data[i].powers,
        data[i].groupafilation,
        data[i].false
        )
    card.render(container);
    
  }

  console.log(window.location.href);

 


