function loadEvent() {


   
    fetch("./lala/data.json").then(function (response) {
        return response.json();
    })
    .then(function (data) {
      console.log(data)
      
      let i = 0

      while (data.cards[i]) {
          
          document.getElementById("root").insertAdjacentHTML("beforeend", `
          <div class="a-box">
            <div class="img-container">
              <div class="img-inner">
                <div class="inner-skew">
                  <img src="https://images.unsplash.com/photo-1584791097929-aa825fe8e1e1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ">
                </div>
              </div>
            </div>
            <div class="text-container">
                    <h2>${data.cards[i].title}</h2>
                    <p>${data.cards[i].sub}</p>
                    <p>${data.cards[i].text}</p>
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