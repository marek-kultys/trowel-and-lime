function randombg(){
  var random= Math.floor(Math.random() * 5) + 0;
  var bigSize = ["url('/img/banner-old-street-7a.jpg')",
                 "url('/img/banner-old-street-7b.jpg')",
                 "url('/img/banner-old-street-7c.jpg')",
                 "url('/img/banner-old-street-7d.jpg')",
                 "url('/img/banner-old-street-7e.jpg')"];
  document.getElementById("random").style.backgroundImage=bigSize[random];
}