document.addEventListener("DOMContentLoaded", function () {
  const generateButton = document.getElementById("generate-button")
  const qrCodeImg = document.getElementById("qr-code-img")

  generateButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const pageURL = tabs[0].url
      const encodedURL = encodeURIComponent(pageURL)
      const qrCodeURL =
        "https://api.qrserver.com/v1/create-qr-code/?data=" +
        encodedURL +
        "&size=150x150"

      qrCodeImg.src = qrCodeURL
      qrCodeImg.style.display = "block"
      generateButton.style.display = "none"
    })
  })
})
