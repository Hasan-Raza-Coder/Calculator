let string = "";
let button = document.querySelectorAll('.button');
Array.from(button).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
    })
)}