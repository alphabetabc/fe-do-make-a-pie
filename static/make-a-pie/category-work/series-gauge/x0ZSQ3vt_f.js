var value=3248,color=new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#08daaa"},{offset:1,color:"#05a984"}]);option={series:[{type:"gauge",splitNumber:1,startAngle:180,endAngle:0,min:0,max:8e3,radius:"60%",center:["50%","74%"],axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{color:"#999",distance:-60,fontSize:20},pointer:{width:14,length:"55%"},itemStyle:{color:"#0c928a",borderWidth:3,borderColor:"#08daaa",shadowColor:"rgba(12,146,138,0.5)",shadowBlur:6,shadowOffsetX:0,shadowOffsetY:5},title:{show:!0,offsetCenter:[0,140],textStyle:{color:"#212b43",fontSize:14,fontWeight:400,lineHeight:20}},detail:{fontSize:36,offsetCenter:[0,90],valueAnimation:!0,color:"#212b43",fontFamily:"Din"},data:[{value,name:`碳排放总资产
(万吨)`}]},{type:"gauge",radius:"70%",center:["50%","70%"],startAngle:180,endAngle:0,min:0,max:8e3,title:{show:!1},detail:{show:!1},axisLine:{show:!0,roundCap:!0,lineStyle:{width:16,color:[[value/8e3,color],[1,"rgba(225,225,225,0.4)"]]}},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},pointer:{show:!1},itemStyle:{normal:{color:"#54F200"}}},{type:"gauge",splitNumber:10,radius:"40%",center:["50%","70%"],min:0,max:100,startAngle:180,endAngle:0,pointer:{show:!1,width:7,length:"60%"},axisLine:{show:!0,roundCap:!0,lineStyle:{width:8,color:[[1,"#999"]],opacity:.1}},axisLabel:{show:!1},axisTick:{show:!1},splitLine:{show:!1},detail:{show:!1},title:{show:!1}}]};