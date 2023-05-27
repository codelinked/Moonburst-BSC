document.addEventListener('DOMContentLoaded', () => {
       //     let timer_ = 0  //unix timestamp
        //    let flipdown = new FlipDown(timer_)
         //       .start()
           //     .ifEnded(() => {
                    var pflip = 
                    document.getElementById("p-flipdown");
                    pflip.style.display = "none";
    
                    var text = document.querySelector(".flipdown");
                    text.innerHTML = `COMING SOON`;
                    text.style.color = "#96FE12";
                    text.style.fontSize = "75px";
                    text.style.fontWeight = "700";
                    text.style.margin = "auto";
                    text.style.letterSpacing = "5px";
                    
function phone(x) {
  if (x.matches) { // If media query matches
    text.style.fontSize = "75px";
  } else {
    text.style.fontSize = "50px";
  }
}

var x = window.matchMedia("(min-width: 576px)")
phone(x) // Call listener function at run time
x.addListener(phone) // Attach listener function on state changes
                    
            //    })
        })