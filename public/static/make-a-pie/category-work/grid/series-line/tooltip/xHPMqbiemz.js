const dataInfo=[{name:1,value:2e3},{name:2,value:1800},{name:3,value:2800},{name:4,value:900},{name:5,value:1600},{name:6,value:2e3},{name:7,value:3e3},{name:8,value:2030},{name:9,value:1356},{name:10,value:1900},{name:11,value:4e3},{name:12,value:3e3},{name:13,value:2e3},{name:14,value:3e3},{name:15,value:4200}];option={backgroundColor:"#112E6A",grid:{top:"9%",bottom:"19%",left:"6%",right:"4%"},tooltip:{trigger:"axis",label:{show:!0}},xAxis:{boundaryGap:!0,axisLine:{show:!0,lineStyle:{color:"#fff"}},axisLabel:{color:"yellow"},splitLine:{show:!1},axisTick:{show:!0,alignWithLabel:!0},data:dataInfo.map(e=>e.name)},yAxis:{axisLine:{show:!0,lineStyle:{color:"#fff"}},axisLabel:{color:"yellow",formatter:"{value}人"},splitLine:{show:!0,lineStyle:{type:"solid",color:"#fff"}},axisTick:{show:!1}},series:[{type:"line",symbol:"none",symbolSize:10,itemStyle:{show:!0,color:"blue",borderWidth:1,borderColor:"#FFF"},lineStyle:{color:"#F59A23",shadowBlur:12,shadowColor:"#F59A23",shadowOffsetX:1,shadowOffsetY:1},label:{show:!1,distance:1,emphasis:{show:!0,offset:[25,-2],color:"#FFF",padding:[8,20,8,6],height:36,formatter:function(e){var a=e.name,l=e.data,o=a+`
数据量：`+l;return o}}},data:dataInfo.map(e=>e.value)}]};