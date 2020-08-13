// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const switchButton = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

switchButton.addEventListener('click',function(){
    if(!switchButton.classList.contains('slide')){
        switchButton.classList.add('slide');
        video.pause();
    }
    else{
        switchButton.classList.remove('slide');
        video.play();
    }
});

// preloader 
const preloader = document.querySelector('.preloader');
window.addEventListener('load',function(){
    preloader.classList.add('hide-preloader');
});