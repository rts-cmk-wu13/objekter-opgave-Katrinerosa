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

//===>

    let facilitiesElm = document.querySelector(".facilities");
    facilities.forEach((facility) => {
        
    })
