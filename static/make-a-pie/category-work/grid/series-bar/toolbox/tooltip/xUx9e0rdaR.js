let colorList=[{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(255, 248, 193, 1)"},{offset:1,color:"rgba(255, 200, 103, 1)"}],global:!1},{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(20, 119, 189, 1)"},{offset:1,color:"rgba(0, 255, 255, 1)"}],global:!1}],dataX=["严重告警","主要告警","次要告警","警告告警"],showData=[{value:7,itemStyle:{color:"#f48383"}},{value:8,itemStyle:{color:"#ffb414"}},{value:26,itemStyle:{color:"#efdd48"}},{value:4,itemStyle:{color:"#798bfa"}}];option={backgroundColor:"#fff",tooltip:{formatter:"{b}<br>{a}：{c}"},toolbox:{show:!1},xAxis:[{type:"category",nameLocation:"middle",nameGap:0,data:dataX}],yAxis:[{type:"value",show:!0,splitLine:{show:!0}}],series:[{name:"流入人员数",type:"bar",fontSize:20,barWidth:30,data:showData}]};
