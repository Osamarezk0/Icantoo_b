document.addEventListener('DOMContentLoaded', function() {
    const translateButton = document.getElementById('translateButton');
    const gestureInputLeft = document.getElementById('gestureInputLeft');
    const gestureInputRight = document.getElementById('gestureInputRight');
    const historyTextarea = document.getElementById('historyTextarea');
    const MAX_HISTORY_LENGTH = 10;

    translateButton.addEventListener('click', function() {
        const gestureText = gestureInputLeft.value; // Get the value from the left textarea
        const translatedText = translateGestureToText(gestureText); // Perform translation (replace this with your actual translation logic)

        // Update the value of the right textarea with the translated text
        gestureInputRight.value = translatedText;

        if (translatedText.trim() !== '') {
            storeTranslationInLocalStorage(translatedText);
        }
        
        displayLastTenTranslationsInHistory();
    });

    function translateGestureToText(gesture) {
        // Logic to translate the gesture to text goes here
        // Replace this with your actual translation algorithm or API call
        return gesture;
    }

    function storeTranslationInLocalStorage(translatedText) {
        let history = JSON.parse(localStorage.getItem('translationHistory')) || [];
        history.push(translatedText);
        if (history.length > MAX_HISTORY_LENGTH) {
            history.shift(); 
        }
        localStorage.setItem('translationHistory', JSON.stringify(history));
    }
    
    function displayLastTenTranslationsInHistory() {
        let history = JSON.parse(localStorage.getItem('translationHistory')) || [];
        historyTextarea.value = history.slice(-MAX_HISTORY_LENGTH).reverse().join('\n');
    }

    // Code to handle "Favorite" 
    document.getElementById("favorite").addEventListener("click", function() {
        // Get the value from the left gesture input
        var gestureInputLeftValue = document.getElementById("gestureInputLeft").value;
        
        // Create a new <a> element for the dropdown menu
        var newLink = document.createElement("a");
        newLink.href = "#"; // Set href attribute 
        newLink.textContent = gestureInputLeftValue; // Set the text content
        
        // Append the new link to the dropdown content
        var dropdownContent = document.querySelector(".dropdown-content");
        dropdownContent.appendChild(newLink);
    });

    // Code to handle "History"
    document.getElementById("history").addEventListener("click", function() {
    
        scrollToHistory();
    });

    function scrollToHistory() {
        const historySection = document.getElementById('historySection');
        historySection.scrollIntoView({ behavior: 'smooth' });
    }  

    window.addEventListener('load', function() {
        displayLastTenTranslationsInHistory();
    });
});
// 
var a = document.getElementById("loginBtn");
            var b = document.getElementById("registerBtn");
            var x = document.getElementById("login");
            var y = document.getElementById("register");
            function login() {
                x.style.left = "4px";
                y.style.right = "-520px";
                a.className += " white-btn";
                b.className = "btn";
                x.style.opacity = 1;
                y.style.opacity = 0;
            }
            // 
            function register() {
                x.style.left = "-510px";
                y.style.right = "5px";
                a.className = "btn";
                b.className += " white-btn";
                x.style.opacity = 0;
                y.style.opacity = 1;
            }
            // 
                function myMenuFunction() {
                var i = document.getElementById("navMenu");
                if (i.className === "nav-menu") {
                    i.className += " responsive";
                } else {
                    i.className = "nav-menu";
                }
            }
            // 
              var a = document.getElementById("loginBtn");
    var b = document.getElementById("registerBtn");
    var x = document.getElementById("login");
    var y = document.getElementById("register");
    function login() {
        x.style.left = "4px";
        y.style.right = "-520px";
        a.className += " white-btn";
        b.className = "btn";
        x.style.opacity = 1;
        y.style.opacity = 0;
    }
    function register() {
        x.style.left = "-510px";
        y.style.right = "5px";
        a.className = "btn";
        b.className += " white-btn";
        x.style.opacity = 0;
        y.style.opacity = 1;
    }
    // 
     function myMenuFunction() {
    var i = document.getElementById("navMenu");
    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
   }
   // JavaScript
document.getElementById("history").addEventListener("click", function() {
    toggleHistoryVisibility();
});

function toggleHistoryVisibility() {
    var historySection = document.getElementById('historySection');
    if (historySection.style.display === 'none') {
        historySection.style.display = 'block';
    } else {
        historySection.style.display = 'none';
    }
}
