// Hamburger nav javascript
var el = document.querySelectorAll('.hamburger');
for(i=0; i<=el.length-1; i++) {
  el[i].addEventListener('click', function() {
    this.classList.toggle('active');
  }, false);
}

/* Logic to display time we've been dating
...I love you babe but this logic sucks ass*/
var autoRefresh = setInterval(function(){
  var now = moment().zone("-08:00");
  var date = moment([2018, 4, 9]).zone("-08:00");
  var yearsR = now.diff(date, "years");
  var monthsR = now.diff(date, "months");
  var daysR = now.diff(date, "days");
  var hoursR = now.diff(date, "hours");
  var minutesR = now.diff(date, "minutes");
  var secondsR = now.diff(date, "seconds");
  var years = yearsR;
  var months;
  var days;
  var hours = now.hour();
  var minutes = now.minute();
  var seconds = now.second();
  var times = new Object();
  var timesStr = new Object();
  times = {"year" : years, "month" : months, "day" : days, "hour" : hours, "minute" : minutes, "second" : seconds};
  var timesKeys = Object.keys(times);
  timesStr = {"year" : "year", "month" : "month", "day" : "day", "hour" : "hour", "minute" : "minute" , "second" : "second"};

  months = monthsR - (11 * yearsR);
  days =  (daysR - 9) - (30*monthsR);

  for(i=0; i < timesKeys.length;  i++){
    if(times[timesKeys[i]] == 1){
      timesStr[timesKeys[i]] = timesKeys[i];
    }
    else{
      timesStr[timesKeys[i]] = timesKeys[i] + "s";
    }
  }

 //It works.. just don't touch it...
  
  document.getElementById("years").innerHTML = years + ` ${timesStr["year"]},`;
  document.getElementById("months").innerHTML = months + ` ${timesStr["month"]},`;
  document.getElementById("days").innerHTML = days + ` ${timesStr["day"]},`;
  document.getElementById("hours").innerHTML = hours + ` ${timesStr["hour"]},`;
  document.getElementById("minutes").innerHTML = minutes + ` ${timesStr["minute"]},`;
  document.getElementById("seconds").innerHTML = "and " + ` ${timesStr["second"]},`;
}, 1000);
