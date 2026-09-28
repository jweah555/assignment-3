const saveBtn = document.querySelectorAll('.save');
const cards = document.querySelectorAll('.cards');
const addedEvents = document.querySelector('#added-events');
const savedList = document.querySelector('#saved-list')




for(let i = 0; i < cards.length; i++) {
    document.querySelectorAll(".save")[i].addEventListener('click', function() {
        
        if(saveBtn[i].textContent == "Save") {
        saveBtn[i].textContent = "Remove"
        console.log(cards[i])
        console.log(this.innerHTML)
        console.log(cards[i].children[2])
        const newVal = cards[i].children[2].cloneNode(true);
        

        const firstVal = newVal.children[0]
        const secondVal = newVal.children[1]
        const thirdVal = newVal.children[2]


        console.log("Here new val", firstVal);
        console.log("Here new val", secondVal);
        console.log("Here new val", thirdVal);
         console.log("Here is the val of i", i);


        let addVal = document.createElement('div')
        addVal.appendChild(firstVal)
        addVal.appendChild(secondVal)
        addVal.appendChild(thirdVal)
        addVal.classList.add("new-val")
        savedList.append(addVal)

       console.log("How list node looks like add: ", savedList.children)
       

        console.log(addVal)

        } else {
        saveBtn[i].textContent = "Save"

            const val = cards[i].children[2].children[0].textContent;
            console.log(cards[i].children[2].children[0].textContent)
            
           

           const va2 = savedList.children

            for(let j = 0; j < va2.length; j++) {
                if(savedList.children[j].children[0].textContent === val) {
                    savedList.removeChild(savedList.children[j]);
                }
            }

        }

    })
}