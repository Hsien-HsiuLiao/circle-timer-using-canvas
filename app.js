function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    for (var i = 0; i < 1; i++) {
      for (var j = 0; j < 1; j++) {
        ctx.beginPath();
        var x = 250 + j * 50; // x coordinate
        var y = 250 + i * 50; // y coordinate
        var radius = 60; // Arc radius
        
        var startAngle = Math.PI  / 2; // Starting point on circle
        var endAngle = Math.PI  / 2; // End point on circle
        var anticlockwise = i % 2 !== 0; // clockwise or anticlockwise
        //alert(endAngle);
        //3.14159,4.7, 6.28
        var interval=0.1;
        var id = setInterval(drawCircle, 1000);
        function drawCircle(){
          ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
          ctx.fillStyle = "#c82124"; //red
          ctx.fillText("Hello World!",10,50);
          ctx.fill();
          startAngle=startAngle-interval;
          endAngle=endAngle+ interval;
          
        }
        
        
      }
    }
  }
}
