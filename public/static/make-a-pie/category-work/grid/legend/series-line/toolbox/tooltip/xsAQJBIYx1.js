option={backgroundColor:"rgba(19, 52, 89)",tooltip:{trigger:"axis",backgroundColor:"#202630",borderColor:"#202630",textStyle:{color:"#fff",fontSize:12},axisPointer:{type:"line",lineStyle:{type:"solid"}}},legend:[{data:["办结量(个)"],top:"25",x:"65%",itemStyle:{borderWidth:2},textStyle:{color:"#c1cadf",fontSize:14}},{data:["办结率(%)"],x:"80%",top:"25",itemStyle:{borderWidth:2},textStyle:{color:"#c1cadf",fontSize:14}}],grid:{left:"20px",right:"20px",top:"50px",bottom:"30px",containLabel:!0},toolbox:{show:!0,orient:"vertical",x:"right",y:"center"},xAxis:[{type:"category",boundaryGap:!0,axisTick:{show:!1},data:["西城区","顺义区","朝阳区","大兴区","海淀区","昌平区","西城区","东城区","丰台区"],axisLine:{lineStyle:{color:"rgba(51, 176, 255, 1)"}},axisLabel:{interval:0,color:"rgba(207, 227, 252, 1)",fontSize:20}}],yAxis:[{type:"value",axisTick:{show:!1},axisLine:{show:!1},max:1,axisLabel:{interval:0,color:"rgba(207, 227, 252, 1)"},splitLine:{show:!0,lineStyle:{color:"rgba(33, 57, 93)",width:1,type:"dashed"}}},{type:"value",axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!0,lineStyle:{color:"#666",width:1,type:"dashed"}}}],series:[{name:"办结率(%)",yAxisIndex:1,type:"line",smooth:!0,data:[1,0,.5,0,0,0,0,0,0],symbol:"circle",symbolSize:8,itemStyle:{normal:{color:"#FFFFFF",borderColor:"rgba(0, 255, 240, 1)",lineStyle:{color:"rgba(0, 255, 240, 1)"}}}},{type:"line",yAxisIndex:0,name:"办结量(个)",barWidth:24,data:[0,.3,0,0,0,0,0,0,0]}]};