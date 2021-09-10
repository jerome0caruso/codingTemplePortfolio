// links
const portfolioLink = document.querySelector(".portfolio-link");
const aboutMeLink = document.querySelector(".aboutMe-link");
const resumeLink = document.querySelector(".resume-link");
const contactMeLink = document.querySelector(".contactMe-link");
// mobile links
const portfolioLinkM = document.querySelector(".portfolio-linkM");
const aboutMeLinkM = document.querySelector(".aboutMe-linkM");
const resumeLinkM = document.querySelector(".resume-linkM");
const contactMeLinkM = document.querySelector(".contactMe-linkM");

// page areas
const bio = document.getElementById("pic");
const main = document.getElementById("main");
const email = document.getElementById("f-email").addEventListener("change", (e) => checkForm(e))
const checkBox = document.querySelector(".fa-check-circle");
const checkBoxDiv = document.querySelector(".check-box");
const portfolio = document.getElementById("portfolio");
const aboutMe = document.getElementById("aboutMe");
const resume = document.getElementById("resume");
const contactMe = document.getElementById("contactMe");
const links = document.getElementById("moblieLinks")
// mobile
const moblieBtn = document.querySelector(".fa-bars").addEventListener("click", mobileView);
const mobilePage = document.querySelector(".mobileLinks");
// inner elements 
const mainContainer = document.querySelector(".main-container")
const mainTitle = document.querySelector(".main-title");
// List of links and or sections
const allPages = [portfolio, aboutMe, resume, contactMe];
const allNav = [portfolioLink, aboutMeLink, resumeLink, contactMeLink, bio];
const allNavM = [portfolioLinkM, aboutMeLinkM, resumeLinkM, contactMeLinkM];

//main intro fade-in
window.onload = function() {
    mainTitle.style.opacity = "0";
    mainContainer.classList.add("hide-opacity");
    setTimeout(() => addBack(), 1000)  
}
function addBack() {
    mainTitle.style.opacity = "1";
    mainContainer.classList.remove("hide-opacity");
}

//event listeners
allNav.forEach(link => {
    link.addEventListener("click", (e) => fadeMenu(e))
})
allNavM.forEach(link => {
    link.addEventListener("click", (e) => fadeMenu(e))
})
document.addEventListener("scroll", () => mobilePage.classList.add("hidden"))

//Hides sections and shows selected section
function hideSections(showSection) {
    main.classList.add("hidden")
    allPages.forEach(page => {
        page.classList.add("hidden")
    })
    showSection.classList.remove("hidden");
}

//form/ email validation
function checkForm(e) {
    console.log("form Submitted", e.target.value);
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!e.target.value.match(regexEmail)) {
       setgoodEmail(false);
       checkBoxDiv.style.display = "inline-block";
       checkBox.style.color = "red";
       e.preventDefault();
    } else {
       e.preventDefault();
       setgoodEmail(true);
    }
}
function setgoodEmail(bool) {
    checkBoxDiv.style.display = "inline-block";
    checkBox.style.color = "green";
}

//mobile view
function mobileView() {
     mobilePage.classList.toggle("hidden");
}

//section changer on click
function fadeMenu(e) {
    console.log(e.target.innerText, "here")
    switch(e.target.innerText) {
        case "Portfolio":
            hideSections(portfolio)
            console.log("Port");
            break;
        case "About Me":
            hideSections(aboutMe)
            console.log("abiut");
            break;
        case "Resume":
            hideSections(resume)
            console.log("resumeLink");
            break;
        case "Contact Me":
            hideSections(contactMe)
            console.log("contact");
            break;
        default:
            hideSections(main)
        }
}   
