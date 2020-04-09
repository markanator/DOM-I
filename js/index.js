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

//header navigation links
let navi = document.getElementsByTagName("a");
navi = Array.from(navi);
navi[0].textContent = siteContent["nav"]["nav-item-1"];
navi[1].textContent = siteContent["nav"]["nav-item-2"];
navi[2].textContent = siteContent["nav"]["nav-item-3"];
navi[3].textContent = siteContent["nav"]["nav-item-4"];
navi[4].textContent = siteContent["nav"]["nav-item-5"];
navi[5].textContent = siteContent["nav"]["nav-item-6"];

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//#region CTA
// CTA HEADER
let heroText = document.getElementsByTagName("h1")[0];
heroText.textContent = siteContent["cta"]["h1"];

// CTA BUTTON
let btn = document.getElementsByTagName("button")[0];
btn.textContent = siteContent["cta"]["button"];

// CTA IMG
let codeImg = document.getElementById("cta-img");
codeImg.setAttribute('src', siteContent["cta"]["img-src"])
//#endregion


//#region TOP-CONTENT
let aa = document.getElementsByClassName("text-content");
aa     = Array.from(aa);
aa[0].innerHTML = "<h4>"+
siteContent["main-content"]["features-h4"]
+"</h4>" + "<p>" +
siteContent["main-content"]["features-content"] +
 "</p>";

aa[1].innerHTML = "<h4>"+
siteContent["main-content"]["about-h4"]
+"</h4>" + "<p>" +
siteContent["main-content"]["about-content"] +
 "</p>";

 aa[2].innerHTML = "<h4>"+
 siteContent["main-content"]["services-h4"]
 +"</h4>" + "<p>" +
 siteContent["main-content"]["services-content"] +
  "</p>";

  aa[3].innerHTML = "<h4>"+
siteContent["main-content"]["product-h4"]
+"</h4>" + "<p>" +
siteContent["main-content"]["product-content"] +
 "</p>";

 aa[4].innerHTML = "<h4>"+
 siteContent["main-content"]["vision-h4"]
 +"</h4>" + "<p>" +
 siteContent["main-content"]["vision-content"] +
  "</p>";




//#endregion TOP-CONTENT




console.log(aa[1]);