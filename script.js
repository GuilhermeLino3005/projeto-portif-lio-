function toggleMode() {
  const hmtl = document.documentElement
  hmtl.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (hmtl.classList.contains("light")) {
    //Se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/dev_Guilhermelight .png")
  } else {
    //Se tiver sem light mode, adicionar a imagem dark
    img.setAttribute("src", "./assets/dev_Guilhermedark.png")
  }
}
