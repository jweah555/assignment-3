const saveBtn = document.querySelectorAll('.save');
const cards = document.querySelectorAll('.cards');
const addedEvents = document.querySelector('#added-events');
const savedList = document.querySelector('#saved-list')


const noContent = document.createElement('h2');
noContent.textContent = "No Items in the Summary List"

if (savedList.children[0] == undefined) {
    savedList.append(noContent)

} else {
    noContent.remove()
}


for (let i = 0; i < cards.length; i++) {
    document.querySelectorAll(".save")[i].addEventListener('click', function () {

        if ((savedList.children[0] == undefined)) {
            noContent.remove()

        }

        if (saveBtn[i].textContent == "Save") {
            saveBtn[i].textContent = "Remove"
            if (!(savedList.children[0] == undefined)) {
                noContent.remove()

            } else {
                savedList.append(noContent)
            }
       
       
          
            const newVal = cards[i].children[2].cloneNode(true);
         


            cards[i].classList.add("select-card")
            const num = newVal.children[0]
            const date = newVal.children[1]
            const location = newVal.children[2]
            const eventTitle = cards[i].children[1].textContent;
    
            let addVal = document.createElement('div')


            const h3Tag = document.createElement('h3')
            h3Tag.textContent = eventTitle

            addVal.appendChild(num)
            addVal.appendChild(date)
            addVal.appendChild(location)
            addVal.appendChild(h3Tag)
            // addVal.append(title)
            addVal.classList.add("new-val")
            savedList.append(addVal)



        
          const removeNum = cards[i].children[2].children[0];
      
        } else {
            saveBtn[i].textContent = "Save"
            cards[i].classList.remove("select-card")


            const val = cards[i].children[2].children[0].textContent;




            const va2 = savedList.children

            for (let j = 0; j < va2.length; j++) {
                if (savedList.children[j].children[0].textContent === val) {
                    savedList.removeChild(savedList.children[j]);
                }
            }

        }
        if (savedList.children[0] == undefined) {
            savedList.append(noContent)

        } else {
            noContent.remove()
        }

    })

}

