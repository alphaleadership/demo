const fs = require("fs")
const list = fs.readdirSync("./img/public/images")
async function build(liste){

    let temp = []
    for (let index = 0; index < list.length; index++) {
      const element = list[index];
      temp.push(` <img class="mySlides" src="images/${element}" style="width:75%">
        `)
      
    }
    
    let string = `<!DOCTYPE html>
    <html>
    <title><%= title %></title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <style>
    .mySlides {display:none;}
    </style>
    <body>
    
    <h2 class="w3-center">Manual Slideshow</h2>
    
    <div class="w3-content w3-display-container">
      ${temp.join("\n")}
    
      <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
      <button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>
    </div>
    
    <script>
    var slideIndex = 1;
    showDivs(slideIndex);
    
    function plusDivs(n) {
      showDivs(slideIndex += n);
    }
    
    function showDivs(n) {
      var i;
      var x = document.getElementsByClassName("mySlides");
      if (n > x.length) {slideIndex = 1}
      if (n < 1) {slideIndex = x.length}
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      x[slideIndex-1].style.display = "block";  
    }
    </script>
    
    </body>
    </html>
    
    `
    console.log(string)
    fs.writeFileSync("img\\views\\index.ejs",string)
    return string
}



build()