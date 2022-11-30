

for (let i = 0; i < 100; i++) {
  const newSquare = document.createElement("div")
  newSquare.classList.add('square')
  const divBoxElement = document.querySelector(".box")
  divBoxElement.appendChild(newSquare)
  newSquare.append(i + 1)
}