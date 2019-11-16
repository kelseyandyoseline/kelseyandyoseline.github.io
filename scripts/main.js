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
  var nowR = moment().zone("-08:00");
  var now = nowR.subtract(9, "days");
  var monthsR = now.subtract(4, "months");
  var date = moment([2018, 4, 9]).zone("-08:00");
  var years = now.diff(date, "years");
  var months = monthsR.month();
  var days = now.date();
  var hours = now.hour();
  var minutes = now.minute();
  var seconds = now.second();
  var times = new Object();
  var timesStr = new Object();
  times = {"year" : years, "month" : months, "day" : days, "hour" : hours, "minute" : minutes, "second" : seconds};
  var timesKeys = Object.keys(times);
  timesStr = {"year" : "year", "month" : "month", "day" : "day", "hour" : "hour", "minute" : "minute" , "second" : "second"};

  //months = monthsR - (12 * years);
  //days =  (daysR - 9) - (30*monthsR);

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
  document.getElementById("seconds").innerHTML = "and " + seconds + ` ${timesStr["second"]},`;
}, 1000);
