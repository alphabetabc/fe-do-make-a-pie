option={backgroundColor:"#323a5e",tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"2%",right:"4%",bottom:"14%",top:"16%",containLabel:!0},legend:{data:["受益人口","工程解决贫困人口","解决饮水困难人口","水质不达标人口"],right:10,top:12,textStyle:{color:"#fff"},itemWidth:12,itemHeight:10},xAxis:{type:"category",data:["2012","2013","2014","2015","2016","2017","2018","2019"],axisLine:{lineStyle:{color:"white"}},axisLabel:{textStyle:{fontFamily:"Microsoft YaHei"}}},yAxis:{type:"value",axisLine:{show:!1,lineStyle:{color:"white"}},splitLine:{show:!0,lineStyle:{color:"rgba(255,255,255,0.3)"}},axisLabel:{}},dataZoom:[{show:!0,height:12,xAxisIndex:[0],bottom:"8%",start:0,end:100,handleIcon:"path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",handleSize:"110%",handleStyle:{color:"#d3dee5"},textStyle:{color:"#fff"},borderColor:"#90979c"},{type:"inside",show:!0,height:15,start:1,end:35}],series:[{name:"受益人口",type:"bar",barWidth:"15%",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#FF715E"},{offset:1,color:"#C12E34"}]),barBorderRadius:11}},data:[400,400,300,300,300,400,400,400,300]},{name:"工程解决贫困人口",type:"bar",barWidth:"15%",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#fccb05"},{offset:1,color:"#f5804d"}]),barBorderRadius:12}},data:[400,400,300,300,300,400,400,400,300]},{name:"解决饮水困难人口",type:"bar",barWidth:"15%",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#8bd46e"},{offset:1,color:"#09bcb7"}]),barBorderRadius:11}},data:[400,400,300,300,300,400,400,400,300]},{name:"水质不达标人口",type:"bar",barWidth:"15%",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#248ff7"},{offset:1,color:"#6851f1"}]),barBorderRadius:11}},data:[400,400,300,300,300,400,400,400,300]}]};var app={currentIndex:-1};setInterval(function(){var e=option.series[0].data.length;myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:app.currentIndex}),app.currentIndex=(app.currentIndex+1)%e,myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:app.currentIndex}),myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:app.currentIndex})},1e3);
