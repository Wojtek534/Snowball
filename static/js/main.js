const lightTheme = "light"
const darkTheme = "dark"

function initializeTheme () {
    /* Skip IE */
    if (isInternetExplorer() === true) {
        return;
    }
    const ls = localStorage.getItem('theme');
    switch(ls) {
        case lightTheme: {
            setTheme(lightTheme);
            break;
        }
        case darkTheme: {
            setTheme(darkTheme);
            break;
        }
        default: {
            setTheme(lightTheme);
            localStorage.setItem('theme', lightTheme);
        };
      }
}

function switchTheme () {
    const ls = localStorage.getItem('theme');
    switch(ls) {
        case lightTheme: {
            setTheme(darkTheme);
            localStorage.setItem('theme', darkTheme);
            break;
        }
        case darkTheme: {
            setTheme(lightTheme);
            localStorage.setItem('theme', lightTheme);
            break;
        }
        default: break;
      }
}

function setTheme (theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.getElementById('theme-switch').innerHTML = theme;
}

function isInternetExplorer () {
    var agent = navigator.userAgent;
    return (agent.indexOf("MSIE") > -1 || agent.indexOf("Trident") > -1);
}

function setFooter () {
    document.getElementById('footer-text').innerHTML = "Copyright (c) "+ new Date().getFullYear().toString();
}

function setAccessibility () {
    elements = document.getElementsByTagName("a");
    for (const key of Object.keys(elements)) {
        elements[key].setAttribute("tabindex", 0)
    }

}

window.addEventListener('keydown', keyNavigation);

function keyNavigation (event) {
    if (event.key=="ArrowLeft") {
        focusNextElement(event.target, -1);
    }
    if (event.key=="ArrowRight") {
        focusNextElement(event.target, 1);
    }

}

function focusNextElement (target, index) {
    var elements = document.getElementsByTagName("a");
    var arr = Array.from(elements);
    var currentIndex = arr.findIndex(el => el == target);
    if (currentIndex === -1) {
        elements[0].focus();
        return;
    }
    if (currentIndex+index < 0) {
        return
    }
    elements[currentIndex+index].focus();
}