//using selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach(function(que){
    // console.log(que);
    const btn = que.querySelector('.question-btn');
    // console.log(btn);
    btn.addEventListener('click',function(){
        questions.forEach(function(param){
            console.log(param);
            if(param !== que){
                param.classList.remove('show-text');
            }
        });

        que.classList.toggle('show-text');
    });
});



// traversing the dom

// const buttons = document.querySelectorAll('.question-btn');

// buttons.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         // console.log(e.currentTarget.parentElement.parentElement);
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     });
// });