

const button = document.getElementById('button')
const input = document.getElementById('input')
const box = document.getElementById('box')
const text = document.getElementById('text')


button.addEventListener('click', function() {
    console.log(input.value)
    box.style.background = input.value
    text.innerHTML = input.value
})