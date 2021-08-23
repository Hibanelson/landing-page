// define node List Sections
const sections = document.querySelectorAll("section");
// populate the nav
for(let i = 0;i < sections.length;i++) {
  let navbarList = document.querySelector("#navbar__list"); // store the nav in a variable
  let navbarMenuLi = document.createElement("li"); // create list item element
  let navbarMenuLink = document.createElement("a"); // create anchor element
  navbarMenuLink.innerHTML = sections[i].getAttribute("data-nav"); // add section name to the anchor element
  navbarMenuLink.classList.add("menu__link"); // add css styling to the anchor element
  navbarMenuLink.setAttribute("href",`#section${i + 1}`); // add href to the anchor element
  navbarMenuLi.appendChild(navbarMenuLink); // add the anchor element to the list item element
  navbarList.appendChild(navbarMenuLi); // add the list item element to the nav
}
// clear which section is being viewed while scrolling through the page.
// define callback function 
//define Intersection Observer API options 
let options = {
    root : null ,
    rootMargin : "0px",
    threshold : 0.3       
};
// define Intersection Observer object for each section
sections.forEach((section) => {
    let observer = new IntersectionObserver((entries,observer) => {
     entries.forEach(entry => {
         if(entry.target.className.search("your-active-class") !== -1){
             entry.target.classList.remove("your-active-class");
         }
     });
     entries.forEach(entry => {
       if(entry.isIntersecting) {
           entry.target.classList.add("your-active-class");
       }
     });
    },options);
    observer.observe(section);
})

