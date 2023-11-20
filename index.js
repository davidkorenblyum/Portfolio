// Function to check if the viewport width corresponds to a mobile device
function isMobile() {
    return window.matchMedia("only screen and (max-width: 767px)").matches;
}

  // Function to add the 'hidden' class to paragraphs in '.description' on mobile devices
function hideParagraphsOnMobile() {
    var paragraphs = document.querySelectorAll('.description p, #bio p');

    // Check if the viewport width is that of a mobile device
    if (isMobile()) {
      // Loop through each paragraph and add the 'hidden' class
    paragraphs.forEach(function(paragraph) {
        paragraph.classList.add('hidden');
    });
    } else {
    // Remove 'hidden' class if not on a mobile device
    paragraphs.forEach(function(paragraph) {
        paragraph.classList.remove('hidden');
    });
    }
}

  // Call the function initially to apply styles based on viewport width
hideParagraphsOnMobile();
  
// Event listener to reapply styles when the window is resized
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