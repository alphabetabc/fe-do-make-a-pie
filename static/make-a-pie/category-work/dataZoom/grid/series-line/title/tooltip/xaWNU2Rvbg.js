option={title:{text:"标题",subtext:"最佳报告数：1000",textStyle:{fontSize:14,color:"#565656",fontWeight:500},subtextStyle:{fontSize:12,color:"#565656",fontWeight:400},top:0},grid:{left:"5px",right:"40px",bottom:"20px",top:"60px",containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"line",label:{show:!0}},formatter:function(t){let e=t[0];return`${e.axisValue}</br>${e.marker}测量人次：${e.value}`}},dataZoom:{show:!0,start:0,end:100,bottom:40,zoomLock:!0},xAxis:{name:"日期",boundaryGap:!1,data:["2.1","2.2","2.3","2.4","2.5","2.1","2.2","2.3","2.4","2.5","2.1","2.2","2.3","2.4","2.5","2.1","2.2","2.3","2.4","2.5"],splitLine:{show:!1},splitArea:{show:!1},axisTick:{show:!1},axisLine:{onZero:!1,show:!0,lineStyle:{color:"#979797",width:1.2},symbol:["none","arrow"],symbolSize:[6,12],symbolOffset:[0,10]},axisLabel:{interval:1,rotate:0,showMinLabel:!0,textStyle:{color:"#686868"}}},yAxis:{name:"人次",nameTextStyle:{color:"#686868"},nameGap:5,splitLine:{show:!1},splitArea:{show:!1},axisLine:{show:!0,lineStyle:{color:"#979797",width:1.2},symbol:["none","arrow"],symbolSize:[6,12],symbolOffset:[0,10]},axisTick:{show:!1},axisLabel:{textStyle:{color:"#686868"}}},series:[{type:"line",smooth:!1,showSymbol:!1,areaStyle:{color:"#f4f9ff"},name:"测量人次",itemStyle:{normal:{color:"#5883EE"}},data:[30,40,50,16,60,30,40,50,16,60,30,40,50,16,60,30,40,50,16,60]}]},option.dataZoom.start=100-100/(option.xAxis.data.length/(5-1));
