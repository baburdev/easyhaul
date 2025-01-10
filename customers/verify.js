let countdownElement = document.getElementById('countdown');
let resendLink = document.getElementById('resend-link');
let countdown = 60;

const timer = setInterval(() => {
  countdown--;
  if (countdown <= 0) {
    clearInterval(timer);
    countdownElement.style.display = 'none';
    resendLink.style.display = 'block';
  } else {
    countdownElement.textContent = `Resend code in ${countdown} seconds`;
  }
}, 1000);

const menu = document.querySelector('.menu')
const menuoverlay = document.querySelector('.menuoverlay')
const menubtn = document.querySelector('.menubtn')

menubtn.addEventListener('click', () => {
    menu.classList.add('showmenu')
    menuoverlay.classList.add('showmenuoverlay')
})
menuoverlay.addEventListener('click', () => {
    menu.classList.remove('showmenu')
    menuoverlay.classList.remove('showmenuoverlay')
})

const infobox = document.querySelector('.infobox')
const infoclose = document.querySelector('.infoclose')
const infobtn = document.querySelector('.infobtn')

infobtn.addEventListener('click', () => {
    infobox.classList.toggle('showinfobox')
})
infoclose.addEventListener('click', () => {
    infobox.classList.remove('showinfobox')
})