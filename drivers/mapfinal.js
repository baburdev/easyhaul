const infobox = document.querySelector('.infobox')
const infoclose = document.querySelector('.infoclose')
const infobtn = document.querySelector('.infobtn')

infobtn.addEventListener('click', () => {
    infobox.classList.toggle('showinfobox')
})
infoclose.addEventListener('click', () => {
    infobox.classList.remove('showinfobox')
})