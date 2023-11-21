function isMobile() {
    return window.matchMedia("only screen and (max-width: 767px)").matches;
}

function hideParagraphsOnMobile() {
    var paragraphs = document.querySelectorAll('.description p, #bio p');

    if (isMobile()) {
    paragraphs.forEach(function(paragraph) {
        paragraph.classList.add('hidden');
    });
    } else {
    paragraphs.forEach(function(paragraph) {
        paragraph.classList.remove('hidden');
    });
    }
}

hideParagraphsOnMobile();

window.addEventListener('resize', hideParagraphsOnMobile);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: .025 });

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


const elementToShow = document.getElementById('scroll-down');

function showElementDelayed() {
    setTimeout(function() {
        elementToShow.style.display = 'inline';
    }, 10000); 
}

showElementDelayed();