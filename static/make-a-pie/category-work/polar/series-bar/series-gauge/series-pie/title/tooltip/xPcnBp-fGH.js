var color=["#00FDFA","#00B1BF","#00F7F8"];option={backgroundColor:"#061321",title:{text:"95%",textStyle:{color:color[2],fontSize:35},itemGap:20,left:"center",top:"center"},tooltip:{},angleAxis:{max:100,clockwise:!1,show:!1,boundaryGap:["40%","40%"],startAngle:90},radiusAxis:{type:"category",show:!0,axisLabel:{show:!1},axisLine:{show:!1},axisTick:{show:!1}},polar:[{center:["50%","50%"],radius:"80%"}],series:[{name:"小环",type:"gauge",splitNumber:15,radius:"32%",center:["50%","50%"],startAngle:0,endAngle:359.9999,axisLine:{show:!1},axisTick:{show:!0,lineStyle:{color:"#0BF4E4",width:2,shadowBlur:1,shadowColor:color[1]},length:20,splitNumber:2},splitLine:{show:!1},axisLabel:{show:!1},detail:{show:!1}},{type:"bar",z:10,data:[50],showBackground:!1,backgroundStyle:{color:"blue",borderWidth:10,width:10},coordinateSystem:"polar",roundCap:!0,barWidth:35,itemStyle:{normal:{opacity:1,color:new echarts.graphic.LinearGradient(0,0,1,1,[{offset:0,color:"#13d67d"},{offset:1,color:"#8ddcac"}])}}},{type:"pie",name:"内层细圆环",radius:["46%","34%"],startAngle:110,hoverAnimation:!1,clockWise:!0,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,1,1,[{offset:0,color:"rgba(151,179,166,0.74)"},{offset:1,color:"rgba(151,179,166,0.74)"}]),shadowBlur:20,shadowColor:"#66666a"}},tooltip:{show:!1},label:{show:!1},data:[100]}]};
