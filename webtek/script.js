$(document).ready(function(){
  $(document.getElementById("adjust_div_button")).click(function(){
    $ (document.getElementById("adjustable")).css("height", function(i){
      var x = document.getElementById("div_height").value;
      return i + x;
    });
    $ (document.getElementById("adjustable")).css("width", function(o){
      var y = document.getElementById("div_width").value;
      return o + y;
    });
  });
});

$(document).ready(function(){
  $(document.getElementById("move_div_button1")).click(function(){
    $ (document.getElementById("movable")).css("top", function(a){
      var x = document.getElementById("div_top").value;
      return a + x;
    });
  });
});
$(document).ready(function(){
  $(document.getElementById("move_div_button2")).click(function(){
    $ (document.getElementById("movable")).css("bottom", function(b){
      var x = document.getElementById("div_bottom").value;
      return b + x;
    });
  });
});
$(document).ready(function(){
  $(document.getElementById("move_div_button3")).click(function(){
    $ (document.getElementById("movable")).css("right", function(c){
      var x = document.getElementById("div_right").value;
      return c + x;
    });
  });
});
$(document).ready(function(){
  $(document.getElementById("move_div_button4")).click(function(){
    $ (document.getElementById("movable")).css("left", function(d){
      var x = document.getElementById("div_left").value;
      return d + x;
    });
  });
});
