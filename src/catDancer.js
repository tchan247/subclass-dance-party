var catDancer = function(top, left, timeBetweenSteps){
  var style = 'catDancer';
  makeDancer.call(this, top, left, timeBetweenSteps, style);
  // this.step();
};

catDancer.prototype = Object.create(makeDancer.prototype);
catDancer.prototype.constructor = catDancer;

catDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};
