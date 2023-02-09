function paleta(selector) {
  let parse = `#som_${selector}`
  const element = document.querySelector(parse)
  if(element && element.localName === 'audio'){
    element.play()
  }else {
     alert('Please insert a select valid ')
  }
}
const listEveryTeclas = document.querySelectorAll('.tecla')

for (let tecla of listEveryTeclas) {
  tecla.addEventListener('click', (e) => {
    let target = e.target.className
    let selector = target.split(' ')[1]
    paleta(selector)
  })

  tecla.onkeydown = (e) => {
    if (e.keyCode === 32 || e.keyCode === 13){
      tecla.classList.add('ativa')
    }

  }

  tecla.onkeyup = (e) => {
    tecla.classList.remove('ativa')
  }

}