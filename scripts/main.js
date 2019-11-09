// Hamburger nav javascript
var el = document.querySelectorAll('.hamburger');
for(i=0; i<=el.length-1; i++) {
  el[i].addEventListener('click', function() {
    this.classList.toggle('active');
  }, false);
}

// Date js
/*
Count up from any date script-
By JavaScript Kit (www.javascriptkit.com)
Over 200+ free scripts here!
*/

var montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")

function countup(yr,m,d){
    var today=new Date()
    var todayy=today.getYear()
    if (todayy < 1000)
    todayy+=1900
    var todaym=today.getMonth()
    var todayd=today.getDate()
    var todaystring=montharray[todaym]+" "+todayd+", "+todayy
    var paststring=montharray[m-1]+" "+d+", "+yr
    var difference=(Math.round((Date.parse(todaystring)-Date.parse(paststring))/(24*60*60*1000))*1)
    difference+=" days"
    console.log(difference);
}
//enter the count up date using the format year/month/day
countup(2018,04,09);