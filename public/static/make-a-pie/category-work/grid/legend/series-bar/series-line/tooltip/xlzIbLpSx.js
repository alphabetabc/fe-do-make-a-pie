for(var category=["2019/10/01","2019/10/01","2019/10/02","2019/10/03","2019/10/04","2019/10/05","2019/10/06"],dottedBase=[],lineData=[24,30,18,19,29,23,29],barData=[10,15,13,15,29,28,27],lineData2=[29,38,39,33,39,37,49],rateData=[],rateData2=[],i=0;i<33;i++){var rate=barData[i]/lineData[i],rate2=barData[i]/lineData2[i];rateData[i]=rate.toFixed(2),rateData2[i]=rate2.toFixed(2)}option={backgroundColor:"#fff",tooltip:{trigger:"axis",backgroundColor:"rgba(67,140,226,0.5)",axisPointer:{type:"shadow",label:{show:!0,backgroundColor:"#7B7DDC"}}},legend:{data:["温度","湿度","含水率"],textStyle:{color:"#666",fontSize:10},top:"7%"},grid:{x:"12%",width:"82%",y:"12%"},xAxis:{data:category,axisLine:{lineStyle:{color:"#666"}},axisLabel:{fontSize:20},axisTick:{show:!1}},yAxis:[{splitLine:{show:!1},axisLine:{lineStyle:{color:"#666"}},axisLabel:{formatter:"{value} ",fontSize:20}},{splitLine:{show:!1},axisLine:{lineStyle:{color:"#666"}},axisLabel:{formatter:"{value} ",fontSize:20}}],series:[{name:"湿度",type:"line",smooth:!0,showAllSymbol:!0,boundaryGap:!1,symbol:"emptyCircle",symbolSize:10,yAxisIndex:1,lineStyle:{width:3},itemStyle:{normal:{color:"#8F82FB"}},areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(143,130,251,0.3)"},{offset:1,color:"rgba(143,130,251,0.3)"}],!1),shadowColor:"rgba(53,142,215, 0.9)",shadowBlur:20}},data:rateData},{name:"含水率",type:"line",smooth:!0,showAllSymbol:!0,lineStyle:{width:3},boundaryGap:!1,symbol:"emptyCircle",symbolSize:10,yAxisIndex:1,itemStyle:{normal:{color:"#438ce2"}},areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(67,140,226,0.3)"},{offset:1,color:"rgba(67,140,226,0)"}],!1),shadowColor:"rgba(53,142,215, 0.9)",shadowBlur:20}},data:rateData2},{name:"温度",type:"bar",barWidth:15,itemStyle:{normal:{barBorderRadius:8,color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#FEB23E"},{offset:1,color:"#FF9852"}])}},data:barData}]};
