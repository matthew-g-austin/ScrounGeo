/*
var φ2 = Math.asin( Math.sin(φ1)*Math.cos(d/R) +
                    Math.cos(φ1)*Math.sin(d/R)*Math.cos(brng) );
var λ2 = λ1 + Math.atan2(Math.sin(brng)*Math.sin(d/R)*Math.cos(φ1),
                         Math.cos(d/R)-Math.sin(φ1)*Math.sin(φ2));
*/
var R = 2.0925*Math.pow(10, 7);``
function makeList(GPS, d){
  var points = [[0, 0, 0, 0,0],
                [0, 0, 0, 0,0],
                [0, 0, 0, 0,0],
                [0, 0, 0, 0,0]];
  points[3][0] = (GPS.lat, GPS.lon);
  for(var i = 2; i >=0; i += 1){
    var g;
    g.lat = points[i+1][0][0];
    g.lon = points[i+1][0][1];
    points[i][0] = newPoint(g, d, 0);

  }
  for(var i = 0; i < 4; i+=1){
    for(var j = 1; j < 5; j += 1){
      var g;
      g.lat = points[i][j-1][0];
      g.lon = points[i][j-1][1];
      points[i][j] = newPoint(g, d, 90);
    }
  }
}
function newPoint(GPS, d, comp){
  var lat = Math.asin( Math.sin(GPS.lat)*Math.cos(d/R) +
  Math.cos(GPS.lat)*Math.sin(d/R)*Math.cos(comp) );
  var lon= GPS.lon + Math.atan2(Math.sin(comp)*Math.sin(d/R)*Math.cos(GPS.lat),
       Math.cos(d/R)-Math.sin(GPS.lat)*Math.sin(lat));
  return (lat, lon);
}
