var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navhead").style.top = "0";
  } else {
    document.getElementById("navhead").style.top = "-260px";
  }
  prevScrollpos = currentScrollPos;
}
