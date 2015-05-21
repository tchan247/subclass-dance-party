var makeBlinkingSquare = function(top, left, timeBetweenSteps){
  var style = 'blinkingSquare';
  
  makeDancer.call(this, top, left, timeBetweenSteps, style);
  this.step();
};

makeBlinkingSquare.prototype = Object.create(makeDancer.prototype);
makeBlinkingSquare.prototype.constructor = makeBlinkingSquare;

makeBlinkingSquare.prototype.step = function(){

  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};
