let angle=0,angle_step=-1,interval=100;option={backgroundColor:"#000033",title:{text:"叠加旋转效果",textStyle:{color:"#fff",align:"center",fontSize:24}},series:[{name:"arc1",type:"custom",coordinateSystem:"none",renderItem:function(e,t){return{type:"arc",shape:{cx:t.getWidth()/2,cy:t.getHeight()/2,r:Math.min(t.getWidth(),t.getHeight())/2*.6,startAngle:angle*Math.PI/180,endAngle:(90+angle)*Math.PI/180},style:{stroke:"#0cd3d8",fill:"transparent",lineWidth:1.5},silent:!0}},data:[0]},{name:"arc2",type:"custom",coordinateSystem:"none",renderItem:function(e,t){return{type:"arc",shape:{cx:t.getWidth()/2,cy:t.getHeight()/2,r:Math.min(t.getWidth(),t.getHeight())/2*.605,startAngle:(0+angle)*Math.PI/180,endAngle:(45+angle)*Math.PI/180},style:{stroke:"#0CD3DB",fill:"transparent",lineWidth:5},silent:!0}},data:[0]},{name:"arc3",type:"custom",coordinateSystem:"none",renderItem:function(e,t){return{type:"arc",shape:{cx:t.getWidth()/2,cy:t.getHeight()/2,r:Math.min(t.getWidth(),t.getHeight())/2*.61,startAngle:(0+angle)*Math.PI/180,endAngle:(20+angle)*Math.PI/180},style:{stroke:"#0CD3DB",fill:"transparent",lineWidth:10},silent:!0}},data:[0]},{name:"arc4",type:"custom",coordinateSystem:"none",renderItem:function(e,t){return{type:"arc",shape:{cx:t.getWidth()/2,cy:t.getHeight()/2,r:Math.min(t.getWidth(),t.getHeight())/2*.61,startAngle:(180+angle)*Math.PI/180,endAngle:(270+angle)*Math.PI/180},style:{stroke:"#0CD3DB",fill:"transparent",lineWidth:1.5},silent:!0}},data:[0]},{name:"arc5",type:"custom",coordinateSystem:"none",renderItem:function(e,t){return{type:"arc",shape:{cx:t.getWidth()/2,cy:t.getHeight()/2,r:Math.min(t.getWidth(),t.getHeight())/2*.605,startAngle:(180+angle)*Math.PI/180,endAngle:(225+angle)*Math.PI/180},style:{stroke:"#0CD3DB",fill:"transparent",lineWidth:5},silent:!0}},data:[0]},{name:"arc6",type:"custom",coordinateSystem:"none",renderItem:function(e,t){return{type:"arc",shape:{cx:t.getWidth()/2,cy:t.getHeight()/2,r:Math.min(t.getWidth(),t.getHeight())/2*.61,startAngle:(180+angle)*Math.PI/180,endAngle:(200+angle)*Math.PI/180},style:{stroke:"#0CD3DB",fill:"transparent",lineWidth:10},silent:!0}},data:[0]}]};function draw(){angle+=angle_step,myChart.setOption(option,!0)}setInterval(function(){draw()},interval);
