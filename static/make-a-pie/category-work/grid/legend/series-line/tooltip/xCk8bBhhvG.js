let fontColor="#787878",Data=[{name:"湿度",unit:"%",color:"#0ae5e4",area:["#09515a","#09515a","transparent"],data:[40,52,11,14,50]},{name:"温度",unit:" ℃",color:"#06b0ff",area:["#096d8e","#0e4f6a","transparent"],data:[20,32,101,34,90]}],_seriesData=[];Data.forEach(e=>{_seriesData.push({name:e.name,type:"line",yAxisIndex:e.name=="温度"?0:1,symbol:"circle",symbolSize:1,areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:e.area[0]},{offset:.5,color:e.area[1]},{offset:1,color:e.area[2]}],!1)},lineStyle:{color:e.color,width:2},itemStyle:{color:e.color},data:e.data})}),option={backgroundColor:"#151515",grid:{left:"5%",right:"10%",top:"20%",bottom:"15%",containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{icon:"Rect",orient:"horizontal",itemWidth:20,itemHeight:2,textStyle:{fontSize:12,color:fontColor},right:"50%"},xAxis:[{type:"category",boundaryGap:!1,axisLabel:{color:fontColor},axisLine:{show:!0,lineStyle:{color:"#2e2e2e"}},axisTick:{show:!1},splitLine:{show:!1},data:["00:00","04:00","08:00","12:00","16:00"]}],yAxis:[{type:"value",name:"单位/℃",nameTextStyle:{color:fontColor},axisLabel:{formatter:"{value}",color:fontColor},axisLine:{show:!0,lineStyle:{color:"#2e2e2e"}},axisTick:{show:!1},splitLine:{show:!1}},{type:"value",name:"单位/%",color:fontColor,nameTextStyle:{color:fontColor},axisLabel:{textStyle:{color:fontColor}},axisLine:{show:!0,lineStyle:{color:"#2e2e2e"}},axisTick:{show:!1},splitLine:{show:!1}}],series:_seriesData};
