var barWidth=18,normalColor="#00d6fd",fontSize=12,datas={xdata:["2016","2017","2018","2019"],yData1:[4200,2220,3910,5340],yData2:[-10,20,-36,51],legendData:["整改数量","整改率"]};option={animation:!1,legend:{show:!0,right:"30px",y:"12px",textStyle:{color:"#00d6fd",fontSize:12},itemHeight:12,selectedMode:!0,data:datas.legendData},grid:[{left:"6%",bottom:"8%",top:"25%",right:"6%",containLabel:!0}],tooltip:{trigger:"axis"},xAxis:{type:"category",axisLabel:{show:!0,textStyle:{color:normalColor,fontSize}},axisLine:{lineStyle:{color:normalColor}},data:datas.xdata},yAxis:[{type:"value",name:"",nameTextStyle:{color:normalColor},position:"left",axisLine:{lineStyle:{color:normalColor,width:1}},splitLine:{show:!0,lineStyle:{color:["#0b244c"],width:1,type:"solid"}}},{type:"value",name:"",nameTextStyle:{fontSize},color:normalColor,axisTick:{show:!1},splitLine:{show:!1},axisLabel:{formatter:"{value}%",textStyle:{color:normalColor,fontSize}},axisLine:{lineStyle:{color:normalColor}}}],series:[{name:"整改数量",type:"bar",label:{show:!1,position:"top"},data:datas.yData1,barWidth,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#00d88b"},{offset:1,color:"#147065"}])}}},{name:datas.legendData[1],type:"line",yAxisIndex:1,z:22,smooth:!0,symbol:"none",symbolSize:8,itemStyle:{normal:{color:"#EDEE18"}},label:{normal:{show:!1,position:"top",formatter:"C",textStyle:{color:"#fff",fontSize}}},lineStyle:{width:2,color:"#FFCE59"},data:datas.yData2}]};
