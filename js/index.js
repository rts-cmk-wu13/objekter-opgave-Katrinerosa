// slå dig løs her...

//eksempel på at udskrive alle overskrifter i services i konsollen:
// services.forEach((service) => console.log(service.headline));
let heroElm = document.querySelector(".hero");
let heroDiv = document.createElement("div");
heroDiv.innerHTML = `
<img src="${hero.image}" alt="">
<H1>${hero.headline}</H1>
<p>${hero.copy}</p>
<a href="#"><button class="explore">explore</button></a>`;

heroElm.append(heroDiv);
//----

let servicesElm = document.querySelector(".services");
services.forEach((service) => {
  let article = document.createElement("article");
  article.innerHTML = `
    <img src="${service.illustration}" alt="">
    <h3>${service.headline}</h3>
    <p>${service.text}</p>
    <a href="#"><p>${service.linktext}</p></a>

    `;
  servicesElm.append(article);
});

//===>virker ikke mangler headline og options

    let facilitiesElm = document.querySelector(".facilities");
    let facilitiesHeader = document.createElement("h2");
    facilitiesHeader.textContent = facility.headline;
    facilitiesElm.append(facilitiesHeader);

    let facilitiesList = document.createElement("div");
    facilitiesList.classListadd("facilities-list");
    facilities.forEach(facility => {
        let facilityItem = document.createElement("div");
        facilityItem.classList.add("facility-item");


    facilityItem.innerHTML = `
    <img src="${facility.icon}" alt="${facility.title}">
    <h3>${facility.title}</h3>
    <p>${facility.description}</p>
    `;
    facilitiesList.append(facilityItem);
    facilitiesElm.append(facilitiesList);
});

