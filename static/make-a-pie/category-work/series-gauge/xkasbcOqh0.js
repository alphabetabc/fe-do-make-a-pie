var axislineColor=new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#87F3ED"},{offset:.62,color:"#A5B8FF"},{offset:1,color:"#FF0000"}]),option={series:[{name:"车辆总数",type:"gauge",z:3,min:0,max:100,splitNumber:10,radius:"80%",axisLine:{lineStyle:{width:21,color:[[1,axislineColor]]}},axisTick:{show:!1},axisLabel:{show:!0,distance:-55,textStyle:{color:"#333333",fontSize:12,fontWeight:500}},splitLine:{show:!1},title:{offsetCenter:[0,18],textStyle:{color:"white",fontSize:20}},detail:{offsetCenter:[0,100],textStyle:{color:"#007FFF",fontSize:20,fontWeight:500},formatter:function(e){return`${e}%`}},itemStyle:{normal:{color:"#8492AA"}},data:[{value:90,name:""}]},{name:"",type:"gauge",z:2,min:0,max:100,splitNumber:10,radius:"70%",axisLine:{show:!1,lineStyle:{width:0,color:[[1,axislineColor]]}},title:{show:!1},detail:{show:!1},axisTick:{show:!0,length:15,lineStyle:{width:3,color:"#979797"}},axisLabel:{show:!1},splitLine:{show:!1}}]};
