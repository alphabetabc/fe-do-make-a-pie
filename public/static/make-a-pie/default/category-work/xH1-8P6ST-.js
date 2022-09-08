var zr=myChart.getZr();function scaleAndAdd(t,i,e,n){return t[0]=i[0]+e[0]*n,t[1]=i[1]+e[1]*n,t}function sub(t,i,e){return t[0]=i[0]-e[0],t[1]=i[1]-e[1],t}function len(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])}var Constant=function(t){var i=t instanceof Array;this.get=function(e){if(i){e=e||[];for(var n=0;n<t.length;n++)e[n]=t[n];return e}return t}},Random1D=function(t,i){var e=i-t;this.get=function(){return Math.random()*e+t}},Random2D=function(t,i){var e=i[0]-t[0],n=i[1]-t[1];this.get=function(r){return r||(r=[]),r[0]=e*Math.random()+t[0],r[1]=n*Math.random()+t[1],r}};function ForceField(t){this.force=t||[]}ForceField.prototype.applyTo=function(t,i,e,n){scaleAndAdd(t,t,this.force,n)};function BoxCollision(t){this.rect=t||[[0,0],[100,100]]}BoxCollision.prototype.applyTo=function(t,i,e,n){var r=this.rect,o=r[0],s=r[1];i=i,t=t,(i[0]<o[0]||i[0]>s[0])&&(t[0]=-t[0]*.6),(i[1]<o[1]||i[1]>s[1])&&(t[1]=-t[1]*.6)};function RepulsiveField(t,i){this.center=t,this.k=i}var v=[];RepulsiveField.prototype.applyTo=function(t,i,e,n){sub(v,i,this.center);var r=len(v),o=this.k,s=o/r;scaleAndAdd(t,t,v,s/r)};function Particle(){this.position=[],this.oldPosition=[],this.velocity=[],this.life=1,this.age=0,this.path=null}Particle.prototype.update=function(t){this.oldPosition[0]=this.position[0],this.oldPosition[1]=this.position[1],this.velocity&&scaleAndAdd(this.position,this.position,this.velocity,t)};function Emitter(t){this.max=4e3,this.amount=15,this.life=null,this.position=null,this.velocity=null,this._particlePool=[];for(var i=0;i<this.max;i++){var e=new Particle;e.emitter=this,e.path=t(e),this._particlePool.push(e)}}Emitter.prototype.emit=function(t){for(var i=Math.min(this._particlePool.length,this.amount),e=0;e<i;e++){var n=this._particlePool.pop();this.position&&(this.position.get(n.position),n.oldPosition[0]=n.position[0],n.oldPosition[1]=n.position[1]),this.velocity&&this.velocity.get(n.velocity),this.life&&(n.life=this.life.get()),n.age=0,t.push(n)}},Emitter.prototype.kill=function(t){this._particlePool.push(t)};function ParticleEffect(t){this.zr=t,this._particles=[],this._effectors=[],this._emitters=[],this._elapsedTime=0,this._emitting=!0,this._shapeBundle=new echarts.graphic.CompoundPath({shape:{paths:[]},style:{fill:"none",stroke:"#fff",lineWidth:3}}),t.add(this._shapeBundle)}ParticleEffect.prototype={addEmitter:function(t){t.zr=this.zr,this._emitters.push(t)},addEffector:function(t){this._effectors.push(t)},update:function(t){t/=1e3,this._elapsedTime+=t;var i=this._particles;if(this._emitting){for(var e=0;e<this._emitters.length;e++)this._emitters[e].emit(i);this.oneshot&&(this._emitting=!1)}for(var n=[],r=i.length,e=0;e<r;){var o=i[e];o.age+=t,o.age>=o.life?(o.emitter.kill(o),i[e]=i[r-1],i.pop(),r--):(n.push(o.path),e++)}this._shapeBundle.shape.paths=n;for(var e=0;e<r;e++){var o=i[e];if(this._effectors.length>0)for(var s=0;s<this._effectors.length;s++)this._effectors[s].applyTo(o.velocity,o.position,o.weight,t);o.update(t);var h=o.path;h&&(h.shape.x1=o.oldPosition[0],h.shape.y1=o.oldPosition[1],h.shape.x2=o.position[0],h.shape.y2=o.position[1])}this._shapeBundle.dirty()}};var particleEffect;function createForceField(t,i,e){var n=[t,i];particleEffect.addEffector(new RepulsiveField(n,e));var r=new echarts.graphic.Circle({style:{fill:e>0?"#800":"#080"},shape:{r:10},position:[n[0],n[1]],ondrag:function(){n[0]=this.position[0],n[1]=this.position[1]},draggable:!0});zr.add(r)}function init(t){t=t||{},particleEffect=new ParticleEffect(zr);var i=new Emitter(function(){return new echarts.graphic.Line({shape:{x1:0,x2:0,y1:0,y2:0},silent:!0})});i.position=t.random?new Random2D([10,10],[20,20]):new Constant[10],i.life=t.random?new Random1D(4,6):new Constant(1),particleEffect.addEmitter(i),t.collision&&particleEffect.addEffector(new BoxCollision([[0,0],[zr.getWidth(),zr.getHeight()]])),t.forceField?(createForceField(300,300,150),createForceField(150,150,-100),i.velocity=new Random2D([120,80],[80,120])):(i.velocity=t.random?new Random2D([400,50],[100,10]):new Constant([500,100]),particleEffect.addEffector(new ForceField([0,300]))),zr.animation.on("frame",function(e){particleEffect.update(e)}),t.motionBlur&&zr.configLayer(0,{motionBlur:!0,lastFrameAlpha:.9})}init({random:!0,collision:!0,motionBlur:!0,forceField:!0});var option={};