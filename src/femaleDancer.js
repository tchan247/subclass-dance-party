var femaleDancer = function(top, left, timeBetweenSteps){
  var style = 'femaleDancer';
  makeDancer.call(this, top, left, timeBetweenSteps, style);
  // this.step();
};

femaleDancer.prototype = Object.create(makeDancer.prototype);
femaleDancer.prototype.constructor = femaleDancer;

femaleDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};
