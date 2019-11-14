// Hamburger nav javascript
var el = document.querySelectorAll('.hamburger');
for(i=0; i<=el.length-1; i++) {
  el[i].addEventListener('click', function() {
    this.classList.toggle('active');
  }, false);
}
var autoRefresh = setInterval(function(){
  var now = moment();
  var date = moment([2018, 4, 9]);
  var years = now.diff(date, "years");
  var months = now.diff(date, "months");
  var days = now.diff(date, "days");
  var hours = now.diff(date, "hours");
  var minutes = now.diff(date, "minutes");
  var seconds = now.diff(date, "seconds");
  
  document.getElementById("years").innerHTML = years + " years,";
  document.getElementById("months").innerHTML = months + " months,";
  document.getElementById("days").innerHTML = days + " days,";
  document.getElementById("hours").innerHTML = hours + " hours,";
  document.getElementById("minutes").innerHTML = minutes + " minutes,";
  document.getElementById("seconds").innerHTML = "and " + seconds + " seconds.";
}, 1000);
