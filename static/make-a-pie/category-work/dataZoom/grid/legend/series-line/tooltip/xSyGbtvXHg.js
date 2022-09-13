var data=[820,932,901,934,1290,1330,1320,790,960,899,1100,1080],random_color="hsla("+Math.floor(Math.random()*360)+", 60%, 50%, 1)",start_color=tinycolor(random_color).toHexString(),end_color=tinycolor(random_color).lighten(30).desaturate().toHexString();option={backgroundColor:"#fff",tooltip:{trigger:"axis",triggerOn:"click",axisPointer:{type:"shadow",shadowStyle:{color:"rgba(0,0,0,.05)"}}},legend:{data:[]},grid:{left:"0%",right:"3%",bottom:"0%",containLabel:!0},dataZoom:[{type:"inside",zoomLock:!0,start:70,end:100}],xAxis:[{position:"top",type:"category",boundaryGap:!1,data:[`1
月`,`2
月`,`3
月`,`4
月`,`5
月`,`6
月`,`7
月`,`8
月`,`9
月`,`10
月`,`11
月`,`12
月`],axisLabel:{margin:20},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1},triggerEvent:!0}],yAxis:[{type:"value",axisLabel:{show:!1},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1}}],series:[{name:"工资成本",type:"line",stack:"总量",label:{normal:{show:!0,position:"top"}},itemStyle:{normal:{color:start_color}},areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:start_color},{offset:1,color:end_color}],!1)}},data}]};
