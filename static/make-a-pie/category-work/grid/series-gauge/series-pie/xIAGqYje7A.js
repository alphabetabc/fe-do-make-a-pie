var dataArr=3.5,max=5.5,colorSet={color:"#468EFD"},option={xAxis:{splitLine:{show:!1},axisLabel:{show:!1},axisLine:{show:!1}},yAxis:{splitLine:{show:!1},axisLabel:{show:!1},axisLine:{show:!1}},series:[{type:"pie",radius:["0","25%"],center:["50%","50%"],z:4,hoverAnimation:!1,data:[{name:"积分",value:dataArr,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(23,161,255,.2)"},{offset:1,color:"rgba(17,90,233,0.05) "}])}},label:{normal:{color:"#45C5FF",align:"center",fontSize:16,formatter:function(e){return dataArr+"%"},position:"center",show:!0}},labelLine:{show:!1}}]},{name:"内部进度条",type:"gauge",center:["50%","50%"],radius:"70%",splitNumber:10,axisLine:{lineStyle:{color:[[dataArr/max,colorSet.color],[1,"#111F42"]],width:8}},axisLabel:{show:!1},axisTick:{show:!1},splitLine:{show:!1},itemStyle:{show:!1},detail:{show:!1},label:{show:!1},title:{show:!1},data:[{name:"title",value:dataArr}],pointer:{show:!1}},{type:"gauge",radius:"76%",startAngle:220,endAngle:-40,max,z:2,axisTick:{show:!0,lineStyle:{color:"#6B9DD7",width:1},length:-4},splitLine:{show:!0,lineStyle:{color:"#6B9DD7",width:1},length:-4},pointer:{show:!1},axisLine:{show:!1},label:{show:!1},axisLabel:{show:!0,distance:-35,fontSize:16,formatter:function(e){if(e==max)return e}},detail:{show:!0,offsetCenter:["8%","100%"],color:"#A2C7F3",formatter:function(e){return"科技投入占比"},textStyle:{fontSize:16}}},{type:"pie",radius:"35%",startAngle:220,endAngle:-40,hoverAnimation:!1,center:["50%","50%"],avoidLabelOverlap:!1,label:{show:!1},labelLine:{show:!1},data:[{value:5.5}],itemStyle:{normal:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(23,161,255,.5)"},{offset:1,color:"rgba(17,90,233,.1)"}]}}}}]};