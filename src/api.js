const getHogs = () =>
  fetch('http://localhost:3000/hogs')
    .then(resp => resp.json())

const createHog = hog =>
  fetch('http://localhost:3000/hogs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(hog)
  }).then(resp => resp.json())

const updateHog = hog =>
  fetch(`http://localhost:3000/hogs/${hog.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(hog)
  }).then(resp => resp.json())

const deleteHog = hog =>
  fetch(`http://localhost:3000/hogs/${hog.id}`, {
    method: 'DELETE'
  })
