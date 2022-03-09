//DOM variables
let input = document.querySelector('.letter')
let subBtn = document.querySelector('.sub')
let answer = document.querySelector('.answer')
console.log(input, subBtn, answer)

//Event listeners
subBtn.addEventListener('click', findV)

//Functions
function findV(){
let vowel = input.value.toLowerCase()
if(vowel == 'a' || vowel == 'e' || vowel == 'i' || vowel == 'o' || vowel == 'u'){
  answer.innerHTML = 'I wanna buy a vowel steve!'
}else if(vowel == 'y'){
  answer.innerHTML = 'This is sometimes a vowel steve.'
}else {
  answer.innerHTML = 'This aint it steve'
}
console.log(vowel)
}