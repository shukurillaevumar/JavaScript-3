function print() {
    let fname = document.getElementById("fName").value;
    let lname = document.getElementById("lName").value;
    let age = document.getElementById("age").value;
    document.getElementById('result').innerHTML = fname + " " + lname + " " + age;
}

var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alert('Nice, you triggered this alert message!', 'warning')
  })
}

const car = {type:"BMW", model:"500", color:"black", number:"0.12973", seria:"4", position:"3"}

document.getElementById('demo').innerHTML = "The car is a " + car.type + " " + car.number + " " + car.color + " " + car.position;