errMsgs = []
function hasNumber (myString) {
  return /\d/.test(myString)
}
function dispaly () {
  divMsg = document.getElementById('msgs')
  errMsgs.forEach(element => {
    console.log(element)
    document.getElementById('msgs').innerHTML += `<div>${element}</div>`
  })
  while (errMsgs.length != 0) {
    errMsgs.pop()
  }
}

function validate () {
  document.getElementById('msgs').innerHTML = `<div></div>`
  document.getElementById('msgs').style = 'all: initial;'
  document.getElementById('name').style.border = '1px solid black'
  document.getElementById('mobileNumber').style.border = '1px solid black'
  console.log('i am in validate')
  let name = document.getElementById('name').value
  let mobNo = document.getElementById('mobileNumber').value
  console.log(name, mobNo)

  if (name === '') {
    document.getElementById('name').style.border = '2px solid red'
    document.getElementById('msgs').style.border = '2px solid red'
    document.getElementById('msgs').innerHTML += `<div>Name cant be empty</div>`
  }
  if (mobNo === '') {
    document.getElementById('mobileNumber').style.border = '2px solid red'
    document.getElementById('msgs').style.border = '2px solid red'
    document.getElementById(
      'msgs'
    ).innerHTML += `<div>Mobile number cant be empty</div>`
  }

  if (name == parseInt(name)) {
    // ?yes String
    errMsgs.push('Name is Not a string')
    document.getElementById('name').style.border = '2px solid red'
    document.getElementById('msgs').style.border = '2px solid red'
    document.getElementById(
      'msgs'
    ).innerHTML += `<div>Name is Not a string</div>`
  }
  isNumber = /^\d+$/.test(mobNo)
  if (!isNumber) {
    errMsgs.push('Mobile is not a number')
    document.getElementById('mobileNumber').style.border = '2px solid red'
    document.getElementById('msgs').style.border = '2px solid red'
    document.getElementById(
      'msgs'
    ).innerHTML += `<div>Mobile is not a number</div>`
  }

  // dispaly()
}
