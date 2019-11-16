// Hamburger nav javascript
var el = document.querySelectorAll('.hamburger');
var panel = document.querySelectorAll('.panel');
for(i=0; i<=el.length-1; i++) {
  el[i].addEventListener('click', function() {
    this.classList.toggle('active');
    panel[i].classList.toggle('active');
    }
  }, false);
}


/* Count up from day I asked out Yoseline.
It works... I think*/
var autoRefresh = setInterval(function(){
  var nowRaw = moment().zone("-08:00");
  var now = nowRaw.subtract(9, "days");
  var monthsRaw = now.subtract(3, "months");
  var date = moment([2018, 4, 9]).zone("-08:00");
  var years = now.diff(date, "years");
  var months = monthsRaw.month();
  var days = now.date();
  var hours = now.hour();
  var minutes = now.minute();
  var seconds = now.second();
  var times = new Object();
  var timesStr = new Object();
  times = {"year" : years, "month" : months, "day" : days, "hour" : hours, "minute" : minutes, "second" : seconds};
  var timesKeys = Object.keys(times);
  timesStr = {"year" : "year", "month" : "month", "day" : "day", "hour" : "hour", "minute" : "minute" , "second" : "second"};

  for(i=0; i < timesKeys.length;  i++){
    if(times[timesKeys[i]] == 1){
      timesStr[timesKeys[i]] = timesKeys[i];
    }
    else{
      timesStr[timesKeys[i]] = timesKeys[i] + "s";
    }
  }
  
  document.getElementById("years").innerHTML = years + ` ${timesStr["year"]},`;
  document.getElementById("months").innerHTML = months + ` ${timesStr["month"]},`;
  document.getElementById("days").innerHTML = days + ` ${timesStr["day"]},`;
  document.getElementById("hours").innerHTML = hours + ` ${timesStr["hour"]},`;
  document.getElementById("minutes").innerHTML = minutes + ` ${timesStr["minute"]},`;
  document.getElementById("seconds").innerHTML = "and " + seconds + ` ${timesStr["second"]},`;
}, 1000);
