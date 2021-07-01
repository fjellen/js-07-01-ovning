const myInput = document.getElementById('input');
const myButton = document.getElementById('button');
const myUl = document.getElementById('ul');
const error = document.getElementById('error');

myButton.addEventListener("click", function() {

    const stringValue = myInput.value;
    const stringLength = stringValue.length;


    if (stringLength === 0) {
        alert("Field must not be empty");
    
    }
    else if (stringLength) {
        const myLi = document.createElement('li');
        myLi.style.cursor = "pointer";

        myUl.appendChild(myLi);

        myLi.innerText = stringValue;

        myLi.addEventListener("click", function() {
            myLi.remove();
        });
    }
});