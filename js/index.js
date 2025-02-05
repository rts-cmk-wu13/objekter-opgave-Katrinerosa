// slå dig løs her...

//eksempel på at udskrive alle overskrifter i services i konsollen:
// services.forEach((service) => console.log(service.headline));
let heroElm = document.querySelector(".hero");
let heroDiv = document.createElement("div");
heroDiv.innerHTML = `

<img src="${hero.image}" alt="">
<div class= "boks">
<H1>${hero.headline}</H1>
<p>${hero.copy}</p>
<a href="#"><button class="explore">explore</button></a>
</div>
`;

heroElm.append(heroDiv);
//----

let servicesElm = document.querySelector(".services");
services.forEach((service) => {
  let article = document.createElement("article");
  article.innerHTML = `
    <img src="${service.illustration}" alt="">
    <article class= "artikelkasse">
    <h3>${service.headline}</h3>
    <p>${service.text}</p>
    <a href="#"><p>${service.linktext}</p></a></article>

    `;
  servicesElm.append(article);
});

//===>virker

let facilitiesElm = document.querySelector(".facilities");
let facilitiesHeader = document.createElement("h2");
facilitiesHeader.textContent = facilities.headline;
facilitiesElm.append(facilitiesHeader);

let facilitiesList = document.createElement("div");
facilitiesList.classList.add("facilities-list");
facilities.options.forEach((option) => {
  let facilityItem = document.createElement("div");
  facilityItem.classList.add("facility-item");

  facilityItem.innerHTML = `
    <div class= "facility-kasser">
        <img src="${option.icon}" alt="${option.title}">
    <h3>${option.headline}</h3>
    <p>${option.text}</p></div>
    `;
  facilitiesList.append(facilityItem);
  facilitiesElm.append(facilitiesList);
});

let sitesElm = document.querySelector(".sites");
let sitesHeader = document.createElement("h2");
sitesHeader.textContent = sites.headline;

sitesElm.append(sitesHeader);

sites.places.forEach((place) => {
  let article = document.createElement("article");
  article.innerHTML = `
     <div class= "sites_kasser">
    <article class= "kasse_site">
        <img src="${place.img}" alt="">
     <h3>${place.name}</h3>
     <p>${place.city}</p>
     <a href=""><button></button></a>
    </article class= "kasse2">


     <article>

     </article>
    
    
    </div> 

 
        
    `;
  sitesElm.append(article);
});
