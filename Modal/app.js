// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalButton = document.querySelector('.modal-btn');
const closeButton = document.querySelector('.close-btn');
const modalOverlay = document.querySelector('.modal-overlay');

modalButton.addEventListener('click',function(){
    console.log(modalOverlay.classList);
    modalOverlay.classList.add('open-modal');
    // if(modalOverlay.classList.contains('modal-overlay')){
    //     modalOverlay.classList.remove('.open-modal');
    // }
    // else{
    //     modalOverlay.classList.add('.open-modal');
    // }
});

closeButton.addEventListener('click',function(){
    modalOverlay.classList.remove('open-modal');
});

