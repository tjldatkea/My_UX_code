
// copyright footer content
let year = new Date().getUTCFullYear()
document.getElementById("copyrightParagragraph").innerText = "© " + year // &copy i HTML


let idCounter = 0

const table = document.getElementById('table')

document.getElementById('addCDForm').addEventListener('submit', function (event) {
  event.preventDefault()

  let author = document.getElementById('authorInput').value
  let title = document.getElementById('titleInput').value
  let year = document.getElementById('yearInput').value

  const tr = document.createElement("tr")

  // TD for id
  const tdZero = document.createElement("td")
  tdZero.classList.add('ids')
  tdZero.innerText = idCounter
  tr.appendChild(tdZero)

  // TDs for cd data
  const tdOne = document.createElement("td")
  tdOne.innerText = author
  const tdTwo = document.createElement("td")
  tdTwo.innerText = title
  const tdThree = document.createElement("td")
  tdThree.innerText = year

  tr.appendChild(tdOne)
  tr.appendChild(tdTwo)
  tr.appendChild(tdThree)

  // TD for delete button/icon
  const tdFour = document.createElement("td")
  const button = document.createElement("button")
  button.textContent = 'Delete'
  button.id = idCounter
  button.addEventListener('click', function (event) {
    const tableRowToBeDeleted = document.getElementById(button.id).parentNode.parentNode
    tableRowToBeDeleted.remove()
  })

  tdFour.appendChild(button)

  tr.appendChild(tdFour)
  table.appendChild(tr)

  // Making the table visible after user clicks to add an album, should only run once if optimized
  table.style.visibility = 'visible'

  idCounter++
})


