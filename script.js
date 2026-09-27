const saveBtn = document.querySelectorAll('.save');
const h1 = document.querySelector('h1');
const cards = document.querySelectorAll('.cards');


// console.log(saveBtn)

for(let i = 0; i < saveBtn.length; i++) {
    const a =  saveBtn[i];
    console.log(a)
    const cards = document.querySelectorAll('.cards');
    console.log(cards);
    const b = cards[i];
    a.addEventListener('click', (event) => {
        
        console.log(b);
        console.log(event.currentTarget)
        b.classList.remove("cards")
        b.classList.add("select-card")
    }) 
}

