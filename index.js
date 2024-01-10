const panels = document.querySelectorAll('.panel');

panels.forEach(element => element.addEventListener('click', toggleOpen))

panels.forEach(element => element.addEventListener('transitionend', toggleActive))

function toggleOpen (e) {
  this.classList.toggle('open')
}

function toggleActive (e) {
  if(e.propertyName.includes('flex')) {
    this.classList.toggle('open-active')
  }
}