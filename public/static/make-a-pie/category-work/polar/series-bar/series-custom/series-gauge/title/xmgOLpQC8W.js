let angle=0,value=80,maxvalue=100,percent=value/maxvalue*100;percent=percent.toFixed(0),option={backgroundColor:"#000E1A",title:{text:"{a|"+percent+"}{c|%}",x:"center",y:"center",textStyle:{rich:{a:{fontSize:70,color:"#ffffff",fontFamily:"Din"},c:{fontSize:45,color:"#ffffff",fontFamily:"SanFrancisco "}}}},polar:[{radius:["33.5%","45%"],center:["50%","50%"]}],angleAxis:{max:maxvalue,show:!1,inverse:!1},radiusAxis:{type:"category",show:!0,axisLabel:{show:!1},axisLine:{show:!1},axisTick:{show:!1}},series:[{name:"ring5",type:"custom",coordinateSystem:"none",renderItem:function(n,e){return{type:"arc",shape:{cx:e.getWidth()/2,cy:e.getHeight()/2,r:Math.min(e.getWidth(),e.getHeight())/2.3*.6,startAngle:0*Math.PI/180,endAngle:360*Math.PI/180},style:{stroke:"rgb(53,53,53)",fill:" transparent",lineWidth:5},silent:!0}},data:[0]},{name:"ring5",type:"custom",z:1,coordinateSystem:"none",renderItem:function(n,e){return{type:"arc",shape:{cx:e.getWidth()/2,cy:e.getHeight()/2,r:Math.min(e.getWidth(),e.getHeight())/3.3*.6,startAngle:0*Math.PI/180,endAngle:360*Math.PI/180},style:{stroke:"rgb(53,53,53)",fill:" transparent",lineWidth:5},silent:!0}},data:[0]},{name:"ring5",type:"custom",coordinateSystem:"none",renderItem:function(n,e){let r=e.getWidth()/2,a=e.getHeight()/2,o=Math.min(e.getWidth(),e.getHeight())/2.3*.6,t=getCirlPoint(r,a,o,90+angle);return{type:"circle",shape:{cx:t.x,cy:t.y,r:5},style:{stroke:"rgb(211,145,28)",fill:"rgb(211,145,28)"},silent:!0}},data:[0]},{name:"ring5",type:"custom",coordinateSystem:"none",renderItem:function(n,e){let r=e.getWidth()/2,a=e.getHeight()/2,o=Math.min(e.getWidth(),e.getHeight())/2.3*.6,t=getCirlPoint(r,a,o,270+angle);return{type:"circle",shape:{cx:t.x,cy:t.y,r:5},style:{stroke:"rgb(211,145,28)",fill:"rgb(211,145,28)"},silent:!0}},data:[0]},{name:"",type:"bar",roundCap:!0,barWidth:10,showBackground:!0,stack:"a",backgroundStyle:{color:"rgba(66, 66, 66, 0)"},data:[value,0],coordinateSystem:"polar",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:0,color:"rgb(211,145,28)"},{offset:1,color:"rgba(211,145,28,1)"}]),shadowBlur:15,shadowColor:"rgba(211,145,28,1)"}}},{type:"gauge",radius:"48%",clockwise:!1,startAngle:"90",endAngle:"-269.9999",splitNumber:36,detail:{offsetCenter:[0,-20],formatter:" "},pointer:{show:!1},axisLine:{show:!0,lineStyle:{color:[[0,"rgba(211,145,28,1)"],[(100-value)/100,"rgba(211,145,28,1)"],[1,"rgba(53,53,53,.3)"]],width:20}},axisTick:{show:!1},splitLine:{show:!0,length:35,lineStyle:{color:"rgba(0,14,26,1)",width:6}},axisLabel:{show:!1}},{name:"统计",type:"gauge",splitNumber:12,min:0,max:100,radius:"31%",center:["50%","50%"],startAngle:90,endAngle:-269.9999,axisLine:{show:!1,lineStyle:{width:0,shadowBlur:0,color:[[0,"rgb(99,99,99)"],[1,"rgb(99,99,99)"]]}},axisTick:{show:!0,lineStyle:{color:"rgb(99,99,99)",width:5},length:2,splitNumber:5},splitLine:{show:!0,length:0,lineStyle:{color:"rgb(99,99,99)"}},axisLabel:{show:!1},detail:{borderColor:"#fff",shadowColor:"#fff",shadowBlur:2,offsetCenter:[0,"0%"],textStyle:{color:"0",fontSize:50},formatter:"{value}"}}]};function getCirlPoint(n,e,r,a){let o=n+r*Math.cos(a*Math.PI/180),t=e+r*Math.sin(a*Math.PI/180);return{x:o,y:t}}function draw(){angle=angle+3,myChart.setOption(option,!0)}setInterval(function(){draw()},100);