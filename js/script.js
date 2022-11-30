const buttonPlay = document.querySelector(".btn")

buttonPlay.addEventListener('click', function () {
  const divBoxElement = document.querySelector(".box")
  let newSquare;
  for (let i = 0; i < 100; i++) {
    newSquare = document.createElement("div")
    newSquare.classList.add('square')
    divBoxElement.appendChild(newSquare)
    newSquare.append(i + 1)
  }


})
