var axislineColor=new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#87F3ED"},{offset:.62,color:"#A5B8FF"},{offset:1,color:"#FF0000"}]),option={backgroundColor:"#05163B",title:{x:"center",y:"38%",text:"共享表",textStyle:{fontWeight:"normal",fontSize:25,color:"#A0C2FC"}},series:[{name:"车辆总数",type:"gauge",z:3,min:0,max:100,radius:"80%",axisLine:{lineStyle:{width:21,color:[[1,axislineColor]]}},axisTick:{show:!1},axisLabel:{show:!1,distance:10,textStyle:{color:"#ccc",fontSize:16,fontWeight:500}},splitLine:{show:!1},detail:{show:!1},data:[96],detail:{show:!0,offsetCenter:[0,"70%"],textStyle:{fontSize:20,color:"#00eff2"}}},{name:"",type:"gauge",z:2,min:0,max:100,radius:"75%",axisLine:{show:!1,lineStyle:{width:0,color:[[1,axislineColor]]}},title:{show:!1},detail:{show:!1},axisTick:{show:!0,splitNumber:19,length:16,lineStyle:{width:3,color:"#5DB2F5"}},axisLabel:{show:!1},splitLine:{show:!1}},{name:"最内层线",type:"gauge",radius:"65%",min:0,max:100,center:["50%","50%"],axisLine:{show:!1,lineStyle:{opacity:0}},splitLine:{show:!1,lineStyle:{opacity:0}},axisLabel:{show:!1},axisTick:{length:5,lineStyle:{color:"#A8CF3C",width:3,type:"solid"}},detail:{show:!1},pointer:{show:!1}}]};
