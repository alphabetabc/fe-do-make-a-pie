xData=["1","2"],yData1=[202,202],yData2=[182,182],legendData=["录控线","校线"],barWidth="20",option={title:{top:"0",left:"center",text:"",textStyle:{align:"center",color:"#043491",fontSize:22}},tooltip:{show:!1,trigger:"axis",axisPointer:{type:"cross"}},legend:{show:!1},xAxis:[{type:"category",data:xData,name:"",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1}}],yAxis:[{type:"value",name:"",axisLine:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1}}],series:[{name:legendData[0],type:"scatter",data:[],itemStyle:{normal:{color:"rgb(247, 181, 67)"}}},{name:legendData[0],type:"bar",barGap:"-85%",barWidth:Number(barWidth)+10,yAxisIndex:0,symbolSize:12,itemStyle:{normal:{color:"transparent",borderColor:"rgb(247, 181, 67)",borderWidth:2,barBorderRadius:[6,6,0,0]}},data:yData1},{name:legendData[1],type:"bar",barWidth,yAxisIndex:0,symbolSize:12,itemStyle:{normal:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#5CC0FF"},{offset:1,color:"#5998FF"}],global:!1},barBorderRadius:[6,6,0,0]}},data:yData2}]};
