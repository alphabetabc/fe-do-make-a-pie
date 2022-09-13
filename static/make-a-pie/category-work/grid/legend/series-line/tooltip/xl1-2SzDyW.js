option={backgroundColor:"#222222",grid:{top:"15%",bottom:"10%",left:"18%",right:"20%"},legend:{type:"scroll",itemGap:30,selectedMode:!1,icon:"pin",data:["发动机转速(rpm)","发动机荷载率(%)"],textStyle:{color:"#FFFFFF",rich:{uname:{width:50},unum:{show:!1,color:"#4ed139"}}}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{type:"category",data:["2/18","2/19","2/20","2/21","2/22","2/23","2/24","2/25","2/26","2/27","2/28","2/29"],axisLabel:{textStyle:{color:"#fff",fontStyle:"normal",fontSize:10}},axisTick:{show:!1},axisLine:{lineStyle:{color:"#1ED2FF",opacity:1}},splitLine:{lineStyle:{type:"dashed",color:"rgba(30, 210, 255,0.4)",width:1},show:!0}},yAxis:[{type:"value",name:`发
动
机
转
速
(rpm)`,axisTick:{show:!1},axisLine:{lineStyle:{color:"#1ED2FF"}},axisLabel:{textStyle:{color:"#fff",fontSize:10}},splitLine:{show:!0,lineStyle:{type:"dashed",color:"rgba(30, 210, 255,0.4)"}},nameLocation:"left",nameTextStyle:{color:"#FFFFFF",fontSize:12,padding:[200,70,-30,0]}},{type:"value",name:`发
动
机
荷
载
率
(%)`,nameLocation:"right",nameTextStyle:{color:"#FFFFFF",fontSize:12,padding:[20,70,-30,150]},position:"right",axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#1ED2FF",width:1}},axisLabel:{show:!0,formatter:"{value} %",textStyle:{color:"#fff",fontSize:10}},splitLine:{show:!1,lineStyle:{type:"dashed",color:"#1ED2FF"}}}],color:["#EAE018"," #13E2E1"],series:[{name:"发动机转速(rpm)",type:"line",data:[1e3,2e3,3e3,4e3,5e3,5e3,3e3,2e3,1e3,2e3,3e3,4e3],smooth:!0,symbol:"circle",symbolSize:5,showSymbol:!1,lineStyle:{normal:{width:2,color:"#EAE018",shadowColor:" rgba(234, 224, 24, 0.7) ",shadowBlur:10,shadowOffsetY:0}},yAxisIndex:0,itemStyle:{normal:{color:"#EAE018",borderWidth:0,borderColor:"#A9F387"}}},{name:"发动机荷载率(%)",type:"line",data:[10,20,30,40,50,40,40,30,40,50,50,20],smooth:!0,symbol:"circle",symbolSize:5,showSymbol:!1,yAxisIndex:1,lineStyle:{normal:{width:3,color:"#13E2E1",shadowColor:" rgba(19, 226, 225, 0.6) ",shadowBlur:10,shadowOffsetY:0}},itemStyle:{normal:{color:"#13E2E1",borderWidth:0,borderColor:"#A9F387"}}}]};
