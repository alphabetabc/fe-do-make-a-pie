var normalColor="#94a1a9",fontSize=20,datas={xData:["1","2","3","4","5"],yData1:[200,800,300,900,500],yData2:[300,600,100,800,300],areaColor1:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(35, 63, 181, 1)"},{offset:.8,color:"rgba(2, 89, 120, 0.5)"}],!1),areaColor2:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(95, 194, 114, 1)"},{offset:.8,color:"rgba(14, 108, 111, 0.5)"}],!1),lineColor1:"rgb(59, 194, 244)",lineColor2:"rgb(107, 239, 150)"};option={backgroundColor:"#000",tooltip:{trigger:"axis",axisPointer:{lineStyle:{color:"#57617B"}}},legend:{itemWidth:25,itemHeight:8,itemGap:13,data:["A","B"],textStyle:{fontSize,color:"#fff"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,axisTick:{show:!1},axisLine:{lineStyle:{color:normalColor}},splitLine:{show:!0,lineStyle:{type:"dashed",color:normalColor}},axisLabel:{margin:10,textStyle:{fontSize}},data:datas.xData}],yAxis:[{type:"value",name:"",axisTick:{show:!1},axisLine:{lineStyle:{color:normalColor}},axisLabel:{margin:10,textStyle:{fontSize}},splitLine:{show:!0,lineStyle:{type:"dashed",color:normalColor}}}],series:[{name:"A",type:"line",smooth:!0,symbol:"circle",symbolSize:5,showSymbol:!1,lineStyle:{normal:{width:2}},areaStyle:{normal:{color:datas.areaColor1,shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10}},itemStyle:{normal:{color:datas.lineColor1,borderColor:"rgba(137,189,2,0.27)",borderWidth:12}},data:datas.yData1},{name:"B",type:"line",smooth:!0,symbol:"circle",symbolSize:5,showSymbol:!1,lineStyle:{normal:{width:2}},areaStyle:{normal:{color:datas.areaColor2,shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10}},itemStyle:{normal:{color:datas.lineColor2,borderColor:"rgba(0,136,212,0.2)",borderWidth:12}},data:datas.yData2}]};
