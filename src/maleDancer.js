var maleDancer = function(top, left, timeBetweenSteps){
  var style = 'maleDancer';
  makeDancer.call(this, top, left, timeBetweenSteps, style);
  this.step();
};

maleDancer.prototype = Object.create(makeDancer.prototype);
maleDancer.prototype.constructor = maleDancer;

maleDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};
