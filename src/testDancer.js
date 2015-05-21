var testDancer = function(top, left, timeBetweenSteps){
  var style = 'testDancer';
  makeDancer.call(this, top, left, timeBetweenSteps, style);
  this.step();
};

testDancer.prototype = Object.create(makeDancer.prototype);
testDancer.prototype.constructor = testDancer;

testDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};