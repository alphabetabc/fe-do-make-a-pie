const dataX=["00:00","02:00","04:00","06:00","08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00"],y=[40,58,40,44,61,58,77,60,78,53,70,53],y1=[50,48,44,62,41,78,57,70,68,93,60,73],dataNowY=[90,96,84,106,102,136,134,130,146,143,130,126];var option={tooltip:{trigger:"axis",backgroundColor:"rgba(33,56,77,1)",borderColor:"rgba(33,56,77,1)",textStyle:{color:"#fff",fontSize:14},axisPointer:{lineStyle:{color:"rgba(19,255,241,1)",type:"dashed",width:2}}},legend:{right:"6%",itemWidth:16,itemHeight:12,itemGap:25,textStyle:{color:"#000"}},grid:{top:"16%",right:"4%",bottom:"14%",left:"6%",containLabel:!0},xAxis:{type:"category",boundaryGap:["0","10%"],data:dataX,axisLabel:{textStyle:{color:"rgba(0,0,0, .7)",fontSize:14}},axisLine:{show:!1},axisTick:{show:!1}},yAxis:{type:"value",boundaryGap:["0","20%"],axisTick:{show:!1},axisLine:{show:!1},axisLabel:{textStyle:{color:"rgba(0,0,0, .7)",fontSize:14}},splitLine:{lineStyle:{color:"rgba(0,0,0,.1)",type:"dashed"}}},series:[{name:"总流量",smooth:!0,type:"line",areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(19,255,241,.4)"},{offset:.9,color:"rgba(19,255,241,0)"}],!1),shadowColor:"rgba(0, 0, 0, 0.1)"},showSymbol:!1,symbolSize:8,itemStyle:{color:"rgba(19,255,241,1)"},data:y1},{name:"进园",smooth:!0,type:"line",areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(241,162,42,.4)"},{offset:.9,color:"rgba(241,162,42,0)"}],!1),shadowColor:"rgba(0, 0, 0, 0.1)"},showSymbol:!1,symbolSize:4,itemStyle:{color:"rgba(241,162,42,1)"},data:y},{name:"出园",smooth:!0,type:"line",areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(0,133,255,.4)"},{offset:.9,color:"rgba(0,133,255,0)"}],!1),shadowColor:"rgba(0, 0, 0, 0.1)"},showSymbol:!1,symbolSize:4,itemStyle:{color:"rgba(0,133,255,1)"},data:dataNowY}]};let currentIndex=-1;setInterval(()=>{myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:currentIndex}),currentIndex=(currentIndex+1)%12,myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:currentIndex}),myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:currentIndex})},3e3);