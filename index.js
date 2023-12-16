const countval = document.querySelector('#counter');
const increment =() =>{
    // get the value from ui
    let value = parseInt(countval.innerText);
    // inner text string deta h tw use parse kiya
    // update the value
    value = value + 1;
    // set the value onto ui
    countval.innerText = value;
};
const decrement =()=>{
    let value = parseInt(countval.innerText);
    value = value-1;
    countval.innerText = value;

};