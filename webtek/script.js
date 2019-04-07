<script>
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
  </script>
