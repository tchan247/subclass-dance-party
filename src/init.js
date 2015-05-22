$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      ($("body").height() * 0.90 * Math.random()) + 50,
      ($("body").width() * 0.90 * Math.random()) + 50,
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

    window.dancers.push(dancer);
  });

  $(".createBunch").on("click", function(event){

  });

  $(".lineUp").on("click", function(event){
    var spacing = 0;
    window.dancers.forEach(function(obj){
      $(obj.$node).css('left', 100);
      $(obj.$node).css('top', 100 + spacing);
      spacing += 50;
    });
  });

  $(".scatter").on("click", function(event){
    window.dancers.forEach(function(obj) {
      var $obj = $(obj.$node);
      $obj.removeClass('spin');
      $obj.css('left', $('body').width() * 0.90 * Math.random());
      $obj.css('top', $('body').height() * 0.90 * Math.random());
    });
  });

  $(".move").on("click", function(event) {
    window.dancers.forEach(function(obj) {
      var $obj = $(obj.$node);
      var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
      var randomized = Math.random();
      var randomizedAgain = Math.random();
      $obj.animate({'left': (obj.left * randomized), 'top': (obj.top * randomizedAgain)}, 4000);
    });
    setTimeout(function() {
      window.dancers.forEach(function(obj, index){
        for (var i=0; i < window.dancers.length; i++) {
          var h = window.dancers[i].left - obj.left;
          var v = window.dancers[i].top - obj.top;
          var distance = Math.sqrt(h * h + v * v);
          if (distance < 50 && i !== index) {
            $(obj.$node).addClass('quickspin');
            setTimeout(function() {
              $(obj.$node).removeClass('quickspin')
            }, 2000);
          }
        }
      });
    }, 4050);
  });

  $('.move2').on('click', function(){
    window.dancers.forEach(function(obj){
      // var $obj = $(obj.$node);
      obj.xDir = (Math.random() * 2) * (Math.random() < 0.5 ?  -1 : 1);
      obj.yDir = (Math.random() * 2) * (Math.random() < 0.5 ?  -1 : 1);

    });


    setInterval(function(){
      window.dancers.forEach(function(obj){
        var $obj = $(obj.$node);
        var x = obj.left;
        var y = obj.top;

        $obj.css('top', (y + obj.yDir));
        $obj.css('left', (x + obj.xDir));

        // $obj.css('top', ($('body').height() * Math.random()));
        // $obj.css('left', ($('body').width() * Math.random()));

        if(obj.left > $('body').width()) {
          obj.xDir *= -1;
        }

        if(obj.left < 0) {
          obj.xDir *= -1;
        }

        if(obj.top > $('body').height) {
          obj.yDir *= -1;
        }

        if(obj.top < 0) {
          obj.yDir *= -1;
        }

      });
    }, 50);


  });



  $(".dance").on("click", function(){

    window.dancers.forEach(function(obj){

      // setInterval(function(){$(obj.$node).addClass('spin')}, 2000);

      var $obj = $(obj.$node);
      $obj.removeClass('spin');
      $obj.addClass('spin');

      setTimeout(function(){

        $obj.removeClass('spin')
        console.log('dance');
      }, 10000);

      // $(obj.$node).css({
      //   transform: 'translateY(300px) rotateZ(120deg)',
      //   WebkitTransform: 'translate(300px) rotateZ(120deg)',
      //   WebkitTransform: 'rotate(300deg) rotateZ(120deg)',
      //   msTransform: 'translateY(300px) rotate(120deg)'
      // }, function(){
      //   $(obj.$node).css('transform', '');
      // });
    })
  });

  // $(".shake").on("click", function(){
  //   window.dancers.forEach(function(obj){
  //     $(obj.$node).effect('shake');
  //   });
  // });




});

