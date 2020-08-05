const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const button = document.getElementById('btn');
const color = document.querySelector('.color');

button.addEventListener('click',function(){
    // console.log(document.body);
    // get random number between 0  - 3
    const randomNumber = randomColor();
    console.log("The random number is "+randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function randomColor(){
    // math.random range is 0 - 1 only
    return Math.floor((Math.random() * colors.length));
}