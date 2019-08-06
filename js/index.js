const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let mainImg = document.querySelector("#cta-img");
mainImg.setAttribute('src', siteContent["cta"] ["img-src"])

//new nav
const newnav1 = document.createElement('a');
newnav1.textContent = "New nav 1";
newnav1.href="#";
newnav1.style.color="green";


const newnav2 = document.createElement('a');
newnav2.textContent = "New nav 2"
newnav2.href="#";
newnav2.style.color="green";


//nav cta

const navbar = document.querySelectorAll("nav a");
console.log (navbar);

navbar [0].innerText =siteContent ["nav"] ["nav-item-1"]
navbar [1].innerText =siteContent ["nav"] ["nav-item-2"]
navbar [2].innerText =siteContent ["nav"] ["nav-item-3"]
navbar [3].innerText =siteContent ["nav"] ["nav-item-4"]
navbar [4].innerText =siteContent ["nav"] ["nav-item-5"]
navbar [5].innerText =siteContent ["nav"] ["nav-item-6"]




navbar.forEach(element => {
  element.style.color = 'green';
})






let header1 = document.querySelector("h1");
// console.log (header1);
header1.innerText = siteContent ["cta"]["h1"];



let navbarselect2 = document.querySelector('nav');
navbarselect2.prepend (newnav1);

let navbarselect = document.querySelector('nav'); 
navbarselect.appendChild (newnav2);





let butn = document.querySelector("button");
butn.innerText = siteContent ["cta"]["button"];
// console.log (butn);

//main content

let main = document.querySelectorAll(".main-content h4");
main[0].innerText=siteContent ["main-content"] ["features-h4"];
main[1].innerText=siteContent ["main-content"] ["about-h4"];
main[2].innerText=siteContent ["main-content"] ["services-h4"];
main[3].innerText=siteContent ["main-content"] ["product-h4"];
main[3].innerText=siteContent ["main-content"] ["vision-h4"];




let main2 = document.querySelectorAll(".main-content p");
main2[0].innerText=siteContent ["main-content"] ["features-content"];
main2[1].innerText=siteContent ["main-content"] ["about-content"];
main2[2].innerText=siteContent ["main-content"] ["services-content"];
main2[3].innerText=siteContent ["main-content"] ["product-content"];
main2[3].innerText=siteContent ["main-content"] ["vision-content"];



//////////////// Single querySelector

// let fh4 = document.querySelector(".main-content .text-content:nth-child(1) h4");
// console.log (fh4);
// fh4.innerText = siteContent ["main-content"] ["features-h4"];



// let fp = document.querySelector(".main-content .text-content:nth-child(1) p");
// // console.log (fp);
// fp.innerText = siteContent ["main-content"] ["features-content"];



// let ah4 = document.querySelector(".main-content .text-content:nth-child(2) h4");
// // console.log (fh4);
// ah4.innerText = siteContent ["main-content"] ["about-h4"];



// let ap = document.querySelector(".main-content .text-content:nth-child(2) p");
// // console.log (fh4);
// ap.innerText = siteContent ["main-content"] ["about-content"];






////////////// Single getElementBy



// let fh4 = document.getElementsByTagName ("h4") [0];
// console.log (fh4);
// fh4.innerText = siteContent ["main-content"] ["features-h4"];

// let fp = document.getElementsByTagName ("p") [0];
// console.log (fp);
// fp.innerText = siteContent ["main-content"] ["features-content"];




// let ah4 = document.getElementsByTagName ("h4") [1];
// console.log (ah4);
// ah4.innerText = siteContent ["main-content"] ["about-h4"];

// let ap = document.getElementsByTagName ("p") [1];
// console.log (ap);
// ap.innerText = siteContent ["main-content"] ["about-content"];



//center image

let mainlogo = document.getElementById("middle-img");
mainlogo.setAttribute('src', siteContent["main-content"] ["middle-img-src"])




// let servh4 = document.getElementsByTagName ("h4") [2];
// console.log (servh4);
// servh4.innerText = siteContent ["main-content"] ["services-h4"];

// let servp = document.getElementsByTagName ("p") [2];
// console.log (servp);
// servp.innerText = siteContent ["main-content"] ["services-content"];



// let prodh4 = document.getElementsByTagName ("h4") [3];
// console.log (prodh4);
// prodh4.innerText = siteContent ["main-content"] ["product-h4"];

// let prodp = document.getElementsByTagName ("p") [3];
// console.log (prodp);
// prodp.innerText = siteContent ["main-content"] ["product-content"];




// let vis4 = document.getElementsByTagName ("h4") [3];
// console.log (vis4);
// vis4.innerText = siteContent ["main-content"] ["vision-h4"];

// let visp = document.getElementsByTagName ("p") [3];
// console.log (visp);
// visp.innerText = siteContent ["main-content"] ["vision-content"];


// //contact

let conth4 = document.getElementsByTagName ("h4") [5];
console.log (conth4);
conth4.innerText = siteContent ["contact"] ["contact-h4"];



let contp1= document.getElementsByTagName ("p") [5];
console.log (contp1);
contp1.innerText = siteContent ["contact"] ["address"];

let contp2= document.getElementsByTagName ("p") [6];
console.log (contp2);
contp2.innerText = siteContent ["contact"] ["phone"];



let contp3= document.getElementsByTagName ("p") [7];
console.log (contp3);
contp3.innerText = siteContent ["contact"] ["email"];


let foot= document.getElementsByTagName ("p") [8];
console.log (foot);
foot.innerText = siteContent ["footer"] ["copyright"];


