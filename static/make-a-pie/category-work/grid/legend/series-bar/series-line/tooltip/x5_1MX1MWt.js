option={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["风电电量","光伏电量","占比","同比"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",axisLine:{show:!0,lineStyle:{color:"#3F93A3",width:3}},axisLabel:{show:!0,interval:"auto",textStyle:{color:"#01747B"}},axisTick:{show:!1},data:["2017","2018","2019","2020"]}],yAxis:[{type:"value",name:"新能源发电量/MW",nameTextStyle:{color:"#01747B"},axisLine:{show:!0,lineStyle:{color:"#01747B"}},axisTick:{show:!1},axisLabel:{show:!0,interval:"auto",textStyle:{color:"#01747B"}},splitLine:{show:!0,lineStyle:{color:"#01747B"}}},{type:"value",name:"比例/%",nameTextStyle:{color:"#01747B"},axisLine:{show:!0,lineStyle:{color:"#01747B"}},axisTick:{show:!1},axisLabel:{show:!0,interval:"auto",textStyle:{color:"#01747B"}},splitLine:{show:!0,lineStyle:{color:"#01747B"}}}],series:[{name:"风电电量",type:"bar",barWidth:30,stack:"ele",itemStyle:{color:"#28CF9A"},data:[120,132,101,134]},{name:"光伏电量",type:"bar",barWidth:30,stack:"ele",itemStyle:{color:"#11A9E9"},data:[220,182,191,234]},{name:"占比",type:"line",yAxisIndex:"1",stack:"percent",itemStyle:{color:"#FAE51C"},data:[60,72,71,74]},{name:"同比",type:"line",yAxisIndex:"1",stack:"percent",itemStyle:{color:"#1ACBD3"},data:[62,82,91,84]}]};
