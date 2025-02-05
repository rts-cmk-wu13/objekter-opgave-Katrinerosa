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
    
        <img src="${option.icon}" alt="${option.title}">
    <h3>${option.headline}</h3>
    <p>${option.text}</p>

    `;
  facilitiesList.append(facilityItem);
  facilitiesElm.append(facilitiesList);
});

let sitesElm = document.querySelector(".sites");
let sitesTextbox = document.createElement("div");
sitesTextbox.classList.add("sites__textbox");

let sitesHeader = document.createElement("h2");
sitesHeader.textContent = sites.headline;
let sitesParagraph = document.createElement("p");
sitesParagraph.textContent = sites.text;

sitesTextbox.append(sitesHeader, sitesParagraph);
sitesElm.append(sitesTextbox);

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

let advantagesElm = document.querySelector(".advantages");

// Opretter en container til de fire bokse
let advantagesContainer = document.createElement("div");
advantagesContainer.classList.add("advantages__container");

advantages.forEach((advantage) => {
  let article = document.createElement("article");
  article.classList.add("artikel-kasse"); // Tilføjer class

  article.innerHTML = `
    <img src="${advantage.icon}" alt="${advantage.headline}">
    <h3>${advantage.headline}</h3>
    <p>${advantage.text}</p>
  `;

  advantagesContainer.append(article); 
});


advantagesElm.append(advantagesContainer);

// ===  FOOTER SEKTION === //
// Hent footer-elementet
let footerElm = document.querySelector(".footer");

// Opretter en container til footer-indholdet
let footerContainer = document.createElement("div");
footerContainer.classList.add("footer__container");

// Gennemløb sektionerne i `footer.sections`
footer.sections.forEach((section) => {
    let sectionDiv = document.createElement("div");
    sectionDiv.classList.add("footer__section");

    // Tilføj overskrift
    let sectionTitle = document.createElement("h3");
    sectionTitle.textContent = section.title;
    sectionDiv.appendChild(sectionTitle);

    // Opret liste over links
    let ul = document.createElement("ul");
    section.links.forEach((link) => {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = link.url;
        a.textContent = link.name;
        li.appendChild(a);
        ul.appendChild(li);
    });

    sectionDiv.appendChild(ul);
    footerContainer.appendChild(sectionDiv);
});

// Tilføj containeren til footeren
footerElm.appendChild(footerContainer);
