document.body.style.background = "#aa45cc"
document.body.style.fontFamily = 'Arial'
document.body.style.color = '#fff'
document.body.style.padding = '10px'

// const title = document.querySelector("h1")
// let color = document.body.style.fontFamily = 'Arial'

// title.textContent = "AT UNIVELCITY"
// const txtColour = document.querySelector('ol li')
// txtColour.style.color = '#baf'

//Using elementById, select the id element and insert a text to it
let fruit = document.getElementById('carrot')
fruit.textContent = 'I love Carrot'


//Using query selector, target the first element with respect its parent and give it a content
let pet = document.querySelector('ol>li')
pet.textContent = 'The name of my pet is Bruno'


//Using query selector, target the ninth element with respect to the last element with a class and give it a content
let books = document.querySelector('li.banana:nth-child(8)') //The variable for the 8th list element is books

let story = books.nextElementSibling //variable for the 9th list element is story
story.textContent = 'I love reading books'


//Using query selector all, target all list and give the 10th list element a gradient color
let phone = document.querySelectorAll("ol li")
phone[9].textContent = 'I use a Samsung Phone'
phone[9].style.background = 'linear-gradient(to right, black, orange)'
phone[9].style.height = '100px'


//Using getelement by class name, apply style to the content in 5 and 7
let cars = document.getElementsByClassName('banana')
cars[2].textContent = 'This is the 5th List Item'
cars[2].style.fontSize = '2.5em'
cars[2].style.border = '2px solid'
cars[2].style.padding = '30px'


//The code for the 7th list
cars[3].style.backgroundColor = 'blue' 
cars[3].style.width = '100%'
cars[3].style.height = '200px'
cars[3].style.transform = 'translate(50% 50%)'
cars[3].textContent = 'This is the 7th List Item'


//Using get element by tagnmae, give a content to the fourth li
let tree = document.getElementsByTagName('li')
tree[3].textContent = 'There is a tree in my compound'


