let angle=0,value=65;option={backgroundColor:"#061740",title:{text:"{a|"+value+"}{c|%}",x:"center",y:"center",textStyle:{rich:{a:{fontSize:45,color:"#29EEF3",fontWeight:"bold"},c:{fontSize:45,color:"#29EEF3",fontWeight:"bold"}}}},series:[{name:"",type:"custom",coordinateSystem:"none",renderItem:function(t,e){return{type:"arc",shape:{cx:e.getWidth()/2,cy:e.getHeight()/2,r:Math.min(e.getWidth(),e.getHeight())/1.5*.65,startAngle:(0+-angle)*Math.PI/180,endAngle:(360+-angle)*Math.PI/180},style:{stroke:"#0CD3DB",fill:"transparent",lineWidth:2.5},silent:!0}},data:[0]},{name:"",type:"pie",radius:["75%","60%"],silent:!0,clockwise:!0,startAngle:90,z:0,zlevel:0,label:{normal:{position:"center"}},data:[{value,name:"",itemStyle:{normal:{color:{colorStops:[{offset:0,color:"#4FADFD"},{offset:1,color:"#28E8FA"}]}}}},{value:100-value,name:"",label:{normal:{show:!1}},itemStyle:{normal:{color:"#173164"}}}]},{name:"",type:"gauge",radius:"83%",center:["50%","50%"],startAngle:0,endAngle:359.9,splitNumber:8,hoverAnimation:!0,axisTick:{show:!1},splitLine:{length:"110%",lineStyle:{width:2,color:"rgba(0,0,0,0.6)"}},axisLabel:{show:!1},pointer:{show:!1},axisLine:{lineStyle:{opacity:0}},detail:{show:!1},data:[{value:0,name:""}]}]};