const dataInfo={status:"正常",value:35.8},color="#3592FE";option={backgroundColor:"transparent",series:[{name:"刻度",type:"gauge",startAngle:220,endAngle:-40,min:-20,max:60,radius:"67%",axisLine:{show:!1},title:{show:!1},detail:{show:!0,offsetCenter:[0,"70%"],formatter:function(){return"{status|"+dataInfo.status+`}
{value|`+dataInfo.value+"℃}"},rich:{status:{fontSize:14,lineHeight:22,color:"#333333"},value:{fontSize:23,lineHeight:32,color}}},axisTick:{show:!1,length:0,lineStyle:{color:"#999"}},splitLine:{length:6,width:2,lineStyle:{color}},axisLabel:{color:"#8098BC"},pointer:{length:"50%",width:6},itemStyle:{color,shadowColor:"rgba(0,138,255,0.45)",shadowBlur:10,shadowOffsetX:2,shadowOffsetY:2},markPoint:{data:[{x:"50%",y:"50%",symbol:"circle",symbolSize:24,itemStyle:{color}},{x:"50%",y:"50%",symbol:"circle",symbolSize:18,itemStyle:{color:"#fff"}}]},data:[dataInfo]},{name:"外圈",type:"gauge",radius:"70%",startAngle:225,endAngle:-45,min:-20,max:60,title:{show:!1},detail:{show:!1},axisLine:{show:!0,lineStyle:{width:16,color:[[(dataInfo.value+20)/80,color],[1,"rgba(53, 146, 254, 0.1)"]]}},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},pointer:{show:!1},itemStyle:{normal:{color:"#54F200"}},data:[dataInfo]}]};