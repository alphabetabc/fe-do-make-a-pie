var colorList={type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"#d45930"},{offset:1,color:"#d5a343"}],globalCoord:!1},option={tooltip:{trigger:"item",axisPointer:{type:"shadow"},extraCssText:"width:auto;height:auto;"},grid:{x:0,y:40,x2:30,y2:0,containLabel:!0},xAxis:{type:"value",max:2e3,interval:250,name:"人",nameLocation:"end",nameTextStyle:{color:"#8597c1",fontStyle:9,padding:[0,0,-26,-8]},boundaryGap:[0,.01],axisLine:{show:!0,lineStyle:{color:"#8597c1"}},axisLabel:{show:!0,interval:"0",textStyle:{fontSize:16,color:"#8597c1"},rotate:40},axisTick:{show:!1},splitLine:{show:!1}},yAxis:{type:"category",axisLine:{show:!0,lineStyle:{color:"#8597c1"},symbol:["none","arrow"],symbolSize:[4,4]},axisLabel:{show:!0,textStyle:{fontSize:16,color:"#8597c1"}},splitLine:{show:!1},axisTick:{show:!1},data:["化学","物理","外语","数学","语文"]},series:[{type:"bar",data:[121,368,700,1200,1490],itemStyle:{color:function(e){return colorList}},barWidth:"40%"}]};myChart.setOption(option);