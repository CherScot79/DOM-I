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

// NAV
let nav = document.querySelector('nav')
nav.children[0].textContent  = 'Services'
nav.children[1].textContent  = 'Product'
nav.children[2].textContent  = 'Vision'
nav.children[3].textContent  = 'Features'
nav.children[4].textContent  = 'About'
nav.children[5].textContent  = 'Contact'

const navColor = document.querySelectorAll('a').forEach((element) => {
  element.style.color = 'green';
  element.style.cursor = 'pointer';
});


// CTA
let newHeading = document.querySelector('h1');
newHeading.textContent = "DOM Is Awesome"

let newButton = document.querySelector('button')
newButton.textContent = "Get Started"

let codePic = document.getElementById("cta-img");
codePic.setAttribute('src', siteContent["cta"]["img-src"])

// Main Content

let midPic = document.getElementById("middle-img");
midPic.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const textContent = document.querySelectorAll('.text-content')

const firstText = textContent[0]
console.log(firstText)
firstText.children[0].textContent = "Features"
firstText.children[1].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const secondText = textContent[1]
secondText.children[0].textContent = "About"
secondText.children[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const thirdText = textContent[2]
thirdText.children[0].textContent = "Services"
thirdText.children[1].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const fourthText = textContent[3]
fourthText.children[0].textContent= "Product"
fourthText.children[1].textContent= "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const fifthText = textContent[4]
fifthText.children[0].textContent= "Vision"
fifthText.children[1].textContent= "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

//CONTACT

const contact = document.querySelector('.contact')
contact.children[0].textContent = "Contact"
contact.children[1].textContent = "123 Way 456 Street Somewhere, USA"
contact.children[2].textContent = "1 (888) 888-8888"
contact.children[3].textContent = "sales@greatidea.io"

const footer = document.querySelector('footer')
footer.firstChild.textContent = "Copyright Great Idea! 2018"

const parent = document.querySelector("nav");

const Link1 = document.createElement("a")
const Link2 = document.createElement("a")

Link1.textContent = 'Extra Nav 1';
Link2.textContent = 'Extra Nav 2';

parent.appendChild(Link1);
parent.prepend(Link2);