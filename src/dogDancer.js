var dogDancer = function(top, left, timeBetweenSteps){
  var style = 'dogDancer';
  makeDancer.call(this, top, left, timeBetweenSteps, style);
  // this.step();
};

dogDancer.prototype = Object.create(makeDancer.prototype);
dogDancer.prototype.constructor = dogDancer;

dogDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};
