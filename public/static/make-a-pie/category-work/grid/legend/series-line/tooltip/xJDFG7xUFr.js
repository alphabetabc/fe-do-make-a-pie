var XData=["周一","周二","周三","周四","周五","周六","周日"],YData=[10,23,65,36,85,43,60];option={backgroundColor:"#011c3a",color:["#69f1ff"],grid:{left:30,top:30,right:20,bottom:30},legend:{orient:"horizontal",right:60,top:0,textStyle:{color:"#6ab2ec"},data:["车流量"]},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{type:"category",data:XData,axisLine:{lineStyle:{color:"#3d5269"}},axisLabel:{textStyle:{fontSize:10,color:"#ffffff"}}},yAxis:{name:"单位:次",type:"value",splitLine:{show:!0,lineStyle:{color:["#2d3d53"]}},axisLine:{lineStyle:{color:"#3d5269"}},axisLabel:{textStyle:{fontSize:10,color:"#ffffff"}}},series:[{name:"车流量",data:YData,type:"line",symbol:"emptycircle",symbolSize:12,smooth:!1,areaStyle:{normal:{type:"default",color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#1b374b"},{offset:1,color:"#20465a"}],!1)}}}]};
