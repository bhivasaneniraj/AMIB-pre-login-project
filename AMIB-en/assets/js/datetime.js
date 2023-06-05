//for request a call back Date
$(".date").val(new Date().toJSON().slice(0, 10))

// Get the input field element by its class name
var datetimeField = document.getElementById("datetimeField")

// Function to format the current date and time
function getCurrentDateTime() {
  var now = new Date()
  var year = now.getFullYear()
  var month = String(now.getMonth() + 1).padStart(2, "0")
  var day = String(now.getDate()).padStart(2, "0")
  var hours = String(now.getHours()).padStart(2, "0")
  var minutes = String(now.getMinutes()).padStart(2, "0")

  return `${year}-${month}-${day}T${hours}:${minutes}`
}

// Set the current date and time as the value of the input field
datetimeField.value = getCurrentDateTime()

/*****************************************************/

// Get the input field element by its class name
var datetimeFields = document.getElementById("datetimeFields")

// Function to format the current date and time
function getCurrentDateTime() {
  var now = new Date()
  var year = now.getFullYear()
  var month = String(now.getMonth() + 1).padStart(2, "0")
  var day = String(now.getDate()).padStart(2, "0")
  var hours = String(now.getHours()).padStart(2, "0")
  var minutes = String(now.getMinutes()).padStart(2, "0")

  return `${year}-${month}-${day}T${hours}:${minutes}`
}

// Set the current date and time as the value of the input field
datetimeFields.value = getCurrentDateTime()

/***********************************************************/

// Get the input field element by its class name
var datetimeFieldTime = document.getElementById("datetimeFieldTime")

// Function to format the current date and time
function getCurrentDateTime() {
  var now = new Date()
  var year = now.getFullYear()
  var month = String(now.getMonth() + 1).padStart(2, "0")
  var day = String(now.getDate()).padStart(2, "0")
  var hours = String(now.getHours()).padStart(2, "0")
  var minutes = String(now.getMinutes()).padStart(2, "0")

  return `${year}-${month}-${day}T${hours}:${minutes}`
}

// Set the current date and time as the value of the input field
datetimeFieldTime.value = getCurrentDateTime()

/***********************************************************/

// Post request for request a call back slider 1
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault() // Prevent the default form submission

  const url = "https://appd.almullainsurancebrokerage.com/pub/get/callBackUpdateToAmib" // Replace with the actual endpoint URL

  const datetime = document.getElementById("datetimeField").value
  const phone = document.querySelector("input[name='phone']").value

  const requestBody = {
    customerMobileNumber: phone,
    reqDate: datetime,
  }

  // Convert request body to JSON string
  const jsonBody = JSON.stringify(requestBody)

  // Set the appropriate headers
  const headers = {
    "Content-Type": "application/json",
  }

  // Make the POST request
  fetch(url, {
    method: "POST",
    headers: headers,
    body: jsonBody,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data) // Process the response data

      // Display a success toast notification
      Toastify({
        text: "We Will Call Back You Soon!",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "green",
      }).showToast()
    })
    .catch((error) => {
      console.error("Error:", error)

      // Display an error toast notification
      Toastify({
        text: "An error occurs please try again",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "red",
      }).showToast()
    })
})

// Post request for request a call back slider 2
document.getElementById("myFormSlider2").addEventListener("submit", function (event) {
  event.preventDefault() // Prevent the default form submission

  const url = "https://appd.almullainsurancebrokerage.com/pub/get/callBackUpdateToAmib" // Replace with the actual endpoint URL

  const datetime = document.getElementById("datetimeFields").value
  const phone = document.querySelector("input[name='phone']").value

  const requestBody = {
    customerMobileNumber: phone,
    reqDate: datetime,
  }

  // Convert request body to JSON string
  const jsonBody = JSON.stringify(requestBody)

  // Set the appropriate headers
  const headers = {
    "Content-Type": "application/json",
  }

  // Make the POST request
  fetch(url, {
    method: "POST",
    headers: headers,
    body: jsonBody,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data) // Process the response data

      // Display a success toast notification
      Toastify({
        text: "We Will Call Back You Soon!!",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "green",
      }).showToast()
    })
    .catch((error) => {
      console.error("Error:", error)

      // Display an error toast notification
      Toastify({
        text: "An error occurs please try again.",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "red",
      }).showToast()
    })
})

// Post request for request a call back slider 3
document.getElementById("myFormSlider3").addEventListener("submit", function (event) {
  event.preventDefault() // Prevent the default form submission

  const url = "https://appd.almullainsurancebrokerage.com/pub/get/callBackUpdateToAmib" // Replace with the actual endpoint URL

  const datetime = document.getElementById("datetimeFieldTime").value
  const phone = document.querySelector("input[name='phone']").value

  const requestBody = {
    customerMobileNumber: phone,
    reqDate: datetime,
  }

  // Convert request body to JSON string
  const jsonBody = JSON.stringify(requestBody)

  // Set the appropriate headers
  const headers = {
    "Content-Type": "application/json",
  }

  // Make the POST request
  fetch(url, {
    method: "POST",
    headers: headers,
    body: jsonBody,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data) // Process the response data

      // Display a success toast notification
      Toastify({
        text: "We Will Call Back You Soon!",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "green",
      }).showToast()
    })
    .catch((error) => {
      console.error("Error:", error)

      // Display an error toast notification
      Toastify({
        text: "An error occurs please try again.",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "red",
      }).showToast()
    })
})
