var value=700,color=new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#58D9F9"},{offset:1,color:"#4992FF"}]);option={backgroundColor:"#fff",series:[{type:"gauge",startAngle:180,endAngle:0,min:0,max:1e3,radius:"60%",axisLine:{show:!0,lineStyle:{color:[[1,"#999"]],width:1,opacity:1}},title:{show:!1},detail:{backgroundColor:"#fff",borderColor:"#999",borderWidth:2,width:"80%",borderRadius:4,offsetCenter:[0,"50%"],formatter:function(e){return"{value|"+e.toFixed(0)+"}{unit|km/h}"},rich:{value:{fontSize:50,fontWeight:"bolder",color:"#777"},unit:{fontSize:20,color:"#999",padding:[0,0,15,6]}}},axisLine:{show:!1},axisTick:{length:10,lineStyle:{color:"#999"}},splitLine:{length:15,lineStyle:{color:"#999",width:3}},axisLabel:{color:"#999"},pointer:{width:10,length:"70%"},itemStyle:{color,shadowColor:"rgba(0,138,255,0.45)",shadowBlur:10,shadowOffsetX:2,shadowOffsetY:2},markPoint:{data:[{x:"50%",y:"50%",symbol:"circle",symbolSize:8,itemStyle:{color:"#fff"}}]},data:[{value}]},{type:"gauge",radius:"70%",startAngle:180,endAngle:0,min:0,max:1e3,title:{show:!1},detail:{show:!1},axisLine:{show:!0,lineStyle:{width:16,color:[[value/1e3,color],[1,"rgba(225,225,225,0.4)"]]}},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},pointer:{show:!1},itemStyle:{normal:{color:"#54F200"}}}]};