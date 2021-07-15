window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    document.querySelector('#navbar').style.backgroundColor = 'white'
  } else {
    document.querySelector('#navbar').style.backgroundColor = 'rgba(255, 255, 255, 0.83)'
  }
}

function setActive(element) {
  const active = document.querySelector('.active')
  active.classList.remove('active')

  element.classList.add('active')
}
