const gift = document.querySelector(".gift")
const body = document.querySelector("body")

gift.addEventListener("click", () => {
    const img = gift.querySelector("img")
    img.src = "https://i.pinimg.com/originals/a7/57/d2/a757d203a381c5628bddfa55af3094b1.gif"
    const meme = document.querySelector(".meme")
    setTimeout(() => {
        meme.scrollIntoView({
            behavior: 'smooth'
        })
    }, 3000)
    const txt = document.querySelector(".txt")
    setTimeout(() => {
        txt.scrollIntoView({
            behavior: 'smooth'
        })
    }, 6000)
})


$(function() {
    // Get random number between 2 ranges
    function randomNum(m, n) {
      m = parseInt(m);
      n = parseInt(n);
      return Math.floor(Math.random() * (n - m + 1)) + m;
    }
    
    function heartAnimation() {
      $this = $('.effect-text');
      var heartCount = ($this.width()/50)*5;
      for (var i = 0; i< heartCount; i++) {
        var heartSize = (randomNum(60, 120) / 10);
        $this.append('<span class="tiny-heart" style="top: '+ randomNum(40, 80) +'%; left: '+ randomNum(0, 100) +'%; width: '+ heartSize +'px; height: '+ heartSize +'px ; animation-delay: -'+ randomNum(0, 3) +'s; animation-duration: '+ randomNum(2, 5) +'s"></span>')
      }
    }
    
    heartAnimation();
  })