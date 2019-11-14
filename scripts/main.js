// Hamburger nav javascript
var el = document.querySelectorAll('.hamburger');
for(i=0; i<=el.length-1; i++) {
  el[i].addEventListener('click', function() {
    this.classList.toggle('active');
  }, false);
}
var autoRefresh = setInterval(function(){
  var now = moment().zone("+08:00");
  var date = moment([2018, 4, 9]).zone("+08:00");
  var yearsR = now.diff(date, "years");
  var monthsR = now.diff(date, "months");
  var daysR = now.diff(date, "days");
  var hoursR = now.diff(date, "hours");
  var minutesR = now.diff(date, "minutes");
  var secondsR = now.diff(date, "seconds");
  var years = yearsR;
  var months;
  var days;
  var hours;
  var minutes;
  var seconds;

  months = monthsR - (12 * yearsR);
  days =  daysR - ((30*monthsR) - 9);

 if(hoursR > 60){
   hours = hoursR - (24*daysR);
 }
 if(minutesR > 60){
   minutes = minutesR - (60*hoursR);
 }
 if(secondsR > 60){
   seconds = secondsR - (60*minutesR);
 }
  
  document.getElementById("years").innerHTML = years + " years,";
  document.getElementById("months").innerHTML = months + " months,";
  document.getElementById("days").innerHTML = days + " days,";
  document.getElementById("hours").innerHTML = hours + " hours,";
  document.getElementById("minutes").innerHTML = minutes + " minutes,";
  document.getElementById("seconds").innerHTML = "and " + seconds + " seconds.";
}, 1000);
