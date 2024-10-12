const firstWord = document.head.lastElementChild.textContent
console.log('first', firstWord)

const secondWord = document.body.childNodes[0].textContent
console.log('second', secondWord)

const thirdWord = document.body.childNodes[3].children.length
console.log(thirdWord)

const lastWord = document.querySelector('ul').children[1].textContent
console.log(lastWord)

const finalPieceOfTheMessage = document.querySelector('ul').nextSibling.textContent
console.log(finalPieceOfTheMessage)
