const textarea = document.getElementById('textarea');
const textarea2 = document.getElementById('textarea2');
const num = document.querySelectorAll('op')
const del = document.getElementById('del')
const clear = document.getElementById('clear')
const result = document.getElementById('result')

for (let i = 0; i < op.length; i++) {
    op[i].addEventListener("click", () => {
        textarea.value += op[i].innerHTML
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
    for (let i = 0; i <= textarea.value.length; i++) {
        if (textarea.value[i] == '.') {
            
        }
    }
    if (textarea2.value == '' && textarea.value == '') {
        textarea.value == ''
        textarea2.value == ''
    }
    else if () {

    }
    else {
        var neww = textarea2.value + textarea.value
        textarea.value = '=' + ' ' + eval(textarea2.value + textarea.value)
        textarea2.value = neww    
    }  
}) 