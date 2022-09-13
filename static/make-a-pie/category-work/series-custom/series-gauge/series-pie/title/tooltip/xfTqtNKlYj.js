let angle=0,num=60;option={tooltip:{formatter:"{a} <br/>{b} : {c}%"},title:[{text:num+"%",x:"center",y:"center",textStyle:{fontSize:"55",color:"#fff",fontFamily:"Lato",foontWeight:"600"}}],series:[{type:"pie",radius:"43%",center:["50%","50%"],animation:!1,z:3,itemStyle:{normal:{color:"#032336",label:{show:!1},labelLine:{show:!1},borderColor:"#3bcbf6",borderWidth:3}},hoverAnimation:!1,label:{show:!1},tooltip:{show:!1},data:[100]},{type:"pie",radius:"80%",center:["50%","50%"],animation:!1,z:0,itemStyle:{normal:{color:"#001929",label:{show:!1},labelLine:{show:!1},borderColor:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#3bcbf6"},{offset:.5,color:"#3bcbf6"},{offset:1,color:"#001929"}]),borderWidth:3}},hoverAnimation:!1,label:{show:!1},tooltip:{show:!1},data:[100]},{name:"外部刻度",type:"gauge",z:2,center:["50%","50%"],radius:"60%",min:0,max:100,splitNumber:10,startAngle:225,endAngle:-45,animation:!0,axisLine:{show:!0,lineStyle:{width:15,shadowColor:"#83f3f9",shadowBlur:6,color:[[num/100,"#83f3f9"]]}},axisLabel:{show:!1},axisTick:{show:!1},splitLine:{show:!1},detail:{show:!1},pointer:{show:!1}},{name:"外部刻度",type:"gauge",z:1,center:["50%","50%"],radius:"61%",min:0,max:100,splitNumber:10,startAngle:225,endAngle:-45,animation:!0,axisLine:{show:!0,lineStyle:{width:25,shadowColor:"#386e73",shadowBlur:10,color:[[1,"#032336"]]}},axisLabel:{show:!1},axisTick:{show:!1},splitLine:{show:!1},detail:{show:!1},pointer:{show:!1}},{name:"ring5",type:"custom",coordinateSystem:"none",renderItem:function(t,e){return{type:"arc",shape:{cx:e.getWidth()/2,cy:e.getHeight()/2,r:Math.min(e.getWidth(),e.getHeight())/2*.6,startAngle:(0+angle)*Math.PI/180,endAngle:(90+angle)*Math.PI/180},style:{stroke:"#0CD3DB",fill:"transparent",lineWidth:1.5},silent:!0}},data:[0]},{name:"ring5",type:"custom",coordinateSystem:"none",renderItem:function(t,e){return{type:"arc",shape:{cx:e.getWidth()/2,cy:e.getHeight()/2,r:Math.min(e.getWidth(),e.getHeight())/2*.6,startAngle:(180+angle)*Math.PI/180,endAngle:(270+angle)*Math.PI/180},style:{stroke:"#0CD3DB",fill:"transparent",lineWidth:1.5},silent:!0}},data:[0]},{name:"ring5",type:"custom",coordinateSystem:"none",renderItem:function(t,e){return{type:"arc",shape:{cx:e.getWidth()/2,cy:e.getHeight()/2,r:Math.min(e.getWidth(),e.getHeight())/2*.65,startAngle:(270+-angle)*Math.PI/180,endAngle:(40+-angle)*Math.PI/180},style:{stroke:"#0CD3DB",fill:"transparent",lineWidth:1.5},silent:!0}},data:[0]},{name:"ring5",type:"custom",coordinateSystem:"none",renderItem:function(t,e){return{type:"arc",shape:{cx:e.getWidth()/2,cy:e.getHeight()/2,r:Math.min(e.getWidth(),e.getHeight())/2*.65,startAngle:(90+-angle)*Math.PI/180,endAngle:(220+-angle)*Math.PI/180},style:{stroke:"#0CD3DB",fill:"transparent",lineWidth:1.5},silent:!0}},data:[0]},{name:"ring5",type:"custom",coordinateSystem:"none",renderItem:function(t,e){let r=e.getWidth()/2,a=e.getHeight()/2,o=Math.min(e.getWidth(),e.getHeight())/2*.65,n=getCirlPoint(r,a,o,90+-angle);return{type:"circle",shape:{cx:n.x,cy:n.y,r:4},style:{stroke:"#0CD3DB",fill:"#0CD3DB"},silent:!0}},data:[0]},{name:"ring5",type:"custom",coordinateSystem:"none",renderItem:function(t,e){let r=e.getWidth()/2,a=e.getHeight()/2,o=Math.min(e.getWidth(),e.getHeight())/2*.65,n=getCirlPoint(r,a,o,270+-angle);return{type:"circle",shape:{cx:n.x,cy:n.y,r:4},style:{stroke:"#0CD3DB",fill:"#0CD3DB"},silent:!0}},data:[0]}]};function getCirlPoint(t,e,r,a){let o=t+r*Math.cos(a*Math.PI/180),n=e+r*Math.sin(a*Math.PI/180);return{x:o,y:n}}function draw(){angle=angle+3,myChart.setOption(option,!0)}setInterval(function(){draw()},100);
