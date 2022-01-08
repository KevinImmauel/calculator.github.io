const textarea = document.getElementById('textarea');
const textarea2 = document.getElementById('textarea2');
const num = document.querySelectorAll('op')
const del = document.getElementById('del')
const clear = document.getElementById('clear')
const result = document.getElementById('result')

for (let i = 0; i < op.length; i++) {
    op[i].addEventListener("click", () => {
        if (op[i].innerHTML == '*' || op[i].innerHTML == '/' || op[i].innerHTML == '+' || op[i].innerHTML == '-') {
            textarea2.value = textarea.value
            textarea.value = ''
            textarea2.value += op[i].innerHTML
        }
        else {
            textarea.value += op[i].innerHTML
        }
    })
}

clear.addEventListener('click', () => {
    textarea.value = ''
    textarea2.value = ''
})

del.addEventListener('click', () => {
    textarea.value = textarea.value.slice(0, textarea.value.length - 1)
})

result.addEventListener('click', () => {
    if (textarea2.value == '' && textarea.value == '') {
        textarea.value == ''
        textarea2.value == ''
    }
    else {
        var neww = textarea2.value + textarea.value
        textarea.value = eval(textarea2.value + textarea.value)
        textarea2.value = neww
    }
}) 