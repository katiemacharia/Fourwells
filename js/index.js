$(document).ready(function () {
  // create a function that appends a paragraph to 
  // the div with coming-soon id
  function addText() {
    $("#coming-soon").append(
      "<p>Welcome to Fourwells!Currently, our site is under maintenance. We'll see you soon :)</p>"
    )
  }
  // when the window(page) loads, delay 4s then add the paragraph
  // the styling and animations of the added div can be seen on style.css
  window.onload = () => {
    setTimeout(() => {
      addText();
    }, 4000); // 4000 ms => 4 seconds!
    setTimeout(() => {
      addSecondText();
    }, 5000); // 4000 ms => 4 seconds!
  }

  function addSecondText() {
    $("#coming-soon").append(
      "<p>But if you'd like to leave us a message, drop it at <a no-ref=''>fourwells@info.org</a></p>"
    )
  }

})
