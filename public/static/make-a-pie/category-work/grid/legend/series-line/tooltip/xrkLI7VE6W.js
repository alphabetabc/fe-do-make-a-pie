var weatherIcons={Sunny:"./data/asset/img/weather/sunny_128.png",Cloudy:"./data/asset/img/weather/cloudy_128.png",Showers:"./data/asset/img/weather/showers_128.png"};option={backgroundColor:"#1E3350",legend:{itemWidth:20,itemHeiht:20,data:[{name:"TPS",textStyle:{color:"#fff",fontSize:20},icon:"image://"+weatherIcons.Sunny}],left:40,selectedMode:!1},tooltip:{trigger:"axis",formatter:function(e){return"TPS："+e[0].value+"<br/>时间："+e[0].axisValue}},textStyle:{fontSize:"14",fontWeight:"normal",color:"#BCBEBD"},xAxis:{axisTick:{show:!1},axisLine:{lineStyle:{color:"rgb(56,77,104)"}},type:"category",boundaryGap:!1,splitLine:{show:!0,lineStyle:{color:"rgb(56,77,104)",type:"value"}},data:["09:00","09:10","09:20","09:30","09:40","09:50","10:00","10:10","10:20","10:30"]},yAxis:{axisLine:{lineStyle:{color:"rgb(56,77,104)",type:"dotted"}},axisTick:{show:!1},type:"value",max:30,min:0,minInterval:10,splitLine:{show:!0,lineStyle:{color:"rgb(56,77,104)",type:"solid"}}},series:[{name:"TPS",type:"line",smooth:!0,showSymbol:!0,symbol:"circle",symbolSize:1,itemStyle:{normal:{color:"#fff",lineStyle:{color:"#0480FA"},borderColor:"#0480FA"}},data:[8,10,9,14,12,20,24,20,10,7]}]};
