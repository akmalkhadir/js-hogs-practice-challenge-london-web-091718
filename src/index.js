const hogContainer = document.querySelector('#hog-container')
const hogForm = document.querySelector('#hog-form')

let localHogs

const renderHog = hog => {
  let hogEl = document.createElement('div')
  let status = hog.greased ? 'checked' : ''
  hogEl.className = 'hog-card'
  hogEl.dataset.hogId = hog.id
  hogEl.innerHTML = `
  <h2>${hog.name}</h2>
  <img src="${hog.image}">
  <p>${hog.specialty}</p>
  <p>${hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
  <p>${hog['highest medal achieved']}</p>
  <input type="checkbox" ${status}>Greased?</input>
  <br>
  <button>Delete Me</button>
  `

  hogContainer.appendChild(hogEl)

  hogEl.addEventListener('change', event => {
    hog.greased = hogEl.querySelector('input[type=checkbox]').checked
    updateHog(hog)
  })

  hogEl.querySelector('button').addEventListener('click', () => {
    deleteHog(hog)
    hogEl.remove()
  })
}

const renderHogs = hogs => {
  hogs.forEach(hog => renderHog(hog))
}

getHogs()
  .then(hogs => {
    localHogs = [...hogs]
    renderHogs(localHogs)
  })

hogForm.addEventListener('submit', event => {
  event.preventDefault()
  let newHog = {}
  newHog.name = hogForm.querySelectorAll('input')[0].value
  newHog.specialty = hogForm.querySelectorAll('input')[1].value
  newHog.greased = hogForm.querySelectorAll('input')[5].checked
  newHog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] = hogForm.querySelectorAll('input')[3].value
  newHog['highest medal achieved'] = hogForm.querySelectorAll('input')[2].value
  newHog.image = hogForm.querySelectorAll('input')[4].value

  renderHog(newHog)
  createHog(newHog)
  getHogs()
    .then(hogs => {
      localHogs = [...hogs]
    })
})
