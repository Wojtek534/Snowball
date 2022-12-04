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
    let el = document.getElementById('theme-switch')
    if(el) {
        el.innerHTML = theme;
    }
}

function setThemeLabel() {
    const theme = localStorage.getItem('theme');
    document.getElementById('theme-switch').innerHTML = theme;
}

function isInternetExplorer () {
    var agent = navigator.userAgent;
    return (agent.indexOf("MSIE") > -1 || agent.indexOf("Trident") > -1);
}

function setFooterLabel (id) {
    document.getElementById(id).innerHTML = "Copyright (©) "+ new Date().getFullYear().toString();
}

function setAccessibility () {
    elements = document.getElementsByTagName("a");
    for (const key of Object.keys(elements)) {
        elements[key].setAttribute("tabindex", 0)
    }

}

/* Set key navigateion */
window.addEventListener('keydown', keyNavigation);

function keyNavigation (event) {
    if (event.key=="ArrowLeft") {
        focusNextElement(event.target, -1);
    }
    if (event.key=="ArrowRight") {
        focusNextElement(event.target, 1);
    }
    if (event.key=="Backspace") {
        history.back() 
    }

}

function focusNextElement (target, index) {
    var elements = document.getElementsByTagName("a");
    /* Convert html collection to array for index find */
    var arr = Array.from(elements);
    var currentIndex = arr.findIndex(el => el == target);
    /* Focus first element if none has focus or first element after iteration */
    if (currentIndex === -1 || currentIndex + index >= arr.length) {
        elements[0].focus();
        return;
    }
    if (currentIndex + index < 0) {
        elements[arr.length-1].focus();
        return
    }
    elements[currentIndex+index].focus();
}