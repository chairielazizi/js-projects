// seti initial count
let count =0;

//select values and buttons
// querySelector can made into arraylike and use forEach()
const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

console.log(buttons);

buttons.forEach(function (item) {
    console.log(item);
    item.addEventListener('click',function(e){
        const styles = (e.currentTarget.classList);
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }
        if(count>0){
            value.style.color = "green";
        }
        else if(count<0){
            value.style.color = "red";
        }
        else{
            value.style.color = "black";
        }
        value.textContent = count;
    });
});