var fChangeNum=function(a){var e;switch(a){case 10:e="AAA";break;case 8:e="AA";break;case 6:e="A";break;case 4:e="B";break;case 2:e="C";break}return e},aIindicator=["区县1","区县2","区县3","区县4","区县5","区县6"],aData=[10,6,8,4,2,4];option={backgroundColor:"#000",tooltip:{show:!1},grid:{top:"40px",right:"40px",left:"20px",bottom:"20px",containLabel:!0},xAxis:{data:aIindicator,axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!0,lineStyle:{color:"#4F6C98",type:"dashed"}},axisLabel:{color:"rgba(255,255,255,0.64)",fontSize:10,interval:0,rotate:45}},yAxis:{axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{color:"#4F6C98",type:"dashed"}},axisLabel:{color:"rgba(255,255,255,0.64)",fontSize:12,formatter:function(a,e){return fChangeNum(a)}}},series:[{type:"bar",barWidth:"12",label:{normal:{show:!0,formatter:function(a){return fChangeNum(a.data)},position:"top",textStyle:{color:"#ffffff",fontSize:14}}},itemStyle:{color:function(a){var e=["rgba(13,255,214,1)","rgba(22,164,255,1)","rgba(13,104,255,1)","rgba(22,164,255,1)"];return a.dataIndex%2==0?new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:e[0]},{offset:1,color:e[1]}]):new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:e[2]},{offset:1,color:e[3]}])}},data:aData}]};
