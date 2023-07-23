let tabLinks = document.getElementsByClassName('tab-links');
let tabContents = document.getElementsByClassName('tab-contents');
function openTab(tabname) {
    for (let tablink of tabLinks) {
        tablink.classList.remove('active-link');//remove active link bar
    }
    for (let tabContent of tabContents) {
        tabContent.classList.remove('active-tab')//remove active tab content
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}

// .........Menubar......
var sideMenu = document.querySelector('#nav-ul');
function openMenu() {
    sideMenu.style.right = 0;
}
function closeMenu() {
    sideMenu.style.right = "-200px";
}

// .........Google spreedsheet access code......

const scriptURL = 'https://script.google.com/macros/s/AKfycbwTZQkhwP_hBcPYm6x4mPMpi2vw_X3W3WwK4QNM0TGOecI4HZCBRpCUhoLQoLN-eFgq2g/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message received successfully"
            setTimeout(function () {msg.innerHTML = ""},5000)
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})
