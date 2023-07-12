function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img") //.querySelector busca um elemento pelo seletor
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a img light
    img.setAttribute("src", "./assets/assets/avatar-light-mode.png") //.setAttribuite adicionar, ajustar, modificar um atributo
  } else {
    //se tiver sem light mode, manter a img normal
    img.setAttribute("src", "./assets/assets/Avatar.png")
    p.setAttribute("@caiotherealnigga")
  }

  // if(html.classList.contains('light')){
  // html.classList.remove('light')
  // } else{
  // html.classList.add('light')
  //}
}
