let Data={times:["1日","2日","3日","4日","5日","6日","7日"],temData:[25.4,24.3,24,23,22.1,21.8,22.7],humData:[19,17,10,14,17,17,15]},colors=["#FF6863","#6EAB40","#3BB5F5"];option={color:colors,tooltip:{trigger:"axis",axisPointer:{type:"cross"},formatter:function(e,a,o){let t=e[0].dataIndex;return`${Data.times[t]}<br>
                    温度:${Data.temData[t]}℃<br>
                    湿度:${Data.humData[t]}%`}},grid:{top:"10%",bottom:"20%",left:"14%",right:"8%"},dataZoom:{bottom:"16%",height:"30",dataBackground:{lineStyle:{color:"#39977D"},areaStyle:{color:"rgba(57,151,125,1)"}},borderColor:"rgba(57,151,125,0.2)",textStyle:{color:"#39977D"},start:0,end:100},xAxis:[{type:"category",position:"bottom",bottom:"10%",axisTick:{alignWithLabel:!0,textStyle:{color:"#707070"}},data:Data.times}],yAxis:[{type:"value",name:"温度(°C)",scale:!0,position:"left",axisTick:{lineStyle:{color:colors[0]},inside:!0},nameTextStyle:{color:colors[0]},axisLabel:{color:colors[0]},splitLine:{show:!1},min:0,max:40},{type:"value",name:"相对湿度(%)",scale:!0,position:"right",axisTick:{lineStyle:{color:colors[1]},inside:!0},nameTextStyle:{color:colors[1]},axisLabel:{color:colors[1]},splitLine:{show:!1},min:0,max:100}],series:[{name:"温度",type:"line",step:!1,label:{normal:{show:!0,position:"top"}},data:Data.temData,markArea:{itemStyle:{color:"#C5E2C5"},data:[[{name:"正常温度范围",yAxis:"20"},{yAxis:"30"}]]}},{name:"相对湿度",type:"line",step:!1,yAxisIndex:1,color:colors[1],label:{normal:{show:!0,position:"top"}},data:Data.humData,markArea:{itemStyle:{color:"#C1FFC1",colorAlpha:.05},data:[[{name:"正常湿度度范围",yAxis:"0"},{yAxis:"20"}]]}}]};