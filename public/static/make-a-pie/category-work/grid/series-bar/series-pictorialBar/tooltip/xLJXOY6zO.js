var data=[{month:"1",value:100},{month:"2",value:90},{month:"3",value:200},{month:"4",value:150},{month:"5",value:230},{month:"6",value:135},{month:"7",value:60},{month:"8",value:163},{month:"9",value:53},{month:"10",value:53},{month:"11",value:50},{month:"12",value:60},{month:"13",value:60},{month:"14",value:55},{month:"15",value:44}],bkData=[100,100,100,100,100,100,100,100,100,100,100,100,100,100,100],xData=[],yData=[],min=50;const rich={white:{color:"#2ad1d2",fontSize:16}};data.map(function(e,a){xData.push(e.month),e.value===0?yData.push(e.value+min):yData.push(e.value)}),option={backgroundColor:"#111c4e",color:["#3398DB"],tooltip:{show:!0,trigger:"axis",axisPointer:{type:"line",lineStyle:{opacity:0}}},grid:{left:"5%",right:"5%",bottom:"5%",top:"7%",height:"85%",containLabel:!0,z:22},xAxis:[{type:"category",boundaryGap:!0,gridIndex:0,data:xData,axisLabel:{textStyle:{fontSize:14,color:"#fff"}},axisLine:{lineStyle:{}},axisTick:{show:!1}}],yAxis:[{type:"value",nameTextStyle:{color:"rgb(170,170,170)"},gridIndex:0,axisTick:{show:!1},axisLine:{show:!1},axisLabel:{color:"#60DEF7",fontSize:16,formatter:"{value}"},splitLine:{lineStyle:{color:"rgba(255,255,255,.1)"}}},{type:"value",gridIndex:0,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"#95a2aa",fontSize:14,formatter:"{value}"},splitLine:{lineStyle:{color:"rgba(255,255,255,.1)"}}}],series:[{type:"bar",barWidth:"50%",xAxisIndex:0,yAxisIndex:0,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgb(81,174,204)"},{offset:1,color:"rgba(32,73,122,.65)"}]),barBorderRadius:[15,15,0,0],borderColor:"#148DE8",borderWidth:.02,shadowBlur:5,shadowColor:"#148DE8"}},data:yData,zlevel:11},{type:"pictorialBar",symbol:"rect",symbolRepeat:"fixed",symbolSize:[32,4],symbolMargin:2,barWidth:"50%",itemStyle:{normal:{color:"#122E68"}},label:{normal:{show:!1,textStyle:{color:"#fff",fontSize:20},position:"right",formatter:function(e){}}},data:bkData,animation:!1,z:9}]};