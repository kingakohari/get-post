function loadEvent() {


   
    fetch("./lala/data.json").then(function (response) {
        return response.json();
    })
    .then(function (data) {
      console.log(data)
      
      let i = 0

      while (data.cards[i]) {
          
          document.getElementById("root").insertAdjacentHTML("beforeend", `
          <div class="card">
                  <h2>${data.cards[i].title}</h2>
                  <p>${data.cards[i].sub}</p>
                  <p>${data.cards[i].text}</p>
          </div>
          `);
          i++;
      }    
               
        
    }).catch(function(err) {
      console.log('Fetch problem show: ' + err.message);
    });
 
}

window.addEventListener("load", loadEvent);