function loadEvent() {


   
    fetch("./lala/data.json").then(function (response) {
        return response.json();
    })
    .then(function (data) {
      console.log(data)
      
    let imgArray  = new Array();

    
    imgArray[0] = "./lala/MangoBay.jpg"
    imgArray[1] = "./lala/TavoliGalaxis.jpg"
    imgArray[2] = "./lala/monyo-flying-rabbit.jpg"
    imgArray[3] = "./lala/LiquidCocaine.jpg"
    imgArray[4] = "./lala/organic-chocolate.jpg"
    imgArray[5] = "./lala/Bracia.jpg"
    imgArray[6] = "./lala/OatmealStout.jpg"
    imgArray[7] = "./lala/BlackTokyo.jpg"
    imgArray[8] = "./lala/VintageAle.jpg"
    imgArray[9] = "./lala/TempestLeaves.jpg"


      let i = 0

      while (data.cards[i]) {
          
          document.getElementById("root").insertAdjacentHTML("beforeend", `
          <div class="a-box">
            <div class="img-container">
              <div class="img-inner">
                <div class="inner-skew">
                  <img src=${imgArray[i]}></img>
                </div>
              </div>
            </div>
            <div class="text-container">
                    <h2>${data.cards[i].title}</h2>
                    <p>${data.cards[i].sub}</p>
                    <p2>${data.cards[i].text}</p2>
            </div>
          </div>
          `);
          i++;
      }    
               
        
    }).catch(function(err) {
      console.log('Fetch problem show: ' + err.message);
    });
 
}

window.addEventListener("load", loadEvent);