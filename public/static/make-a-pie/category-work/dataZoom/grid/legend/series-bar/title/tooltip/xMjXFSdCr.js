var option={title:{text:"不同时间段人员出入人数",textStyle:{fontSize:25,fontWeight:"normal",color:"#fff"},x:"center"},backgroundColor:"#323a5e",tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"2%",right:"4%",bottom:"14%",top:"16%",containLabel:!0},legend:{data:["外出人员","进入人员"],right:10,top:12,textStyle:{color:"#fff"},itemWidth:12,itemHeight:10},xAxis:{type:"category",data:["0点到3点","3点到6点","6点到9点","9点到12点","12点到15","15点到18点","18点到21点","21点到24点"],axisLine:{lineStyle:{color:"white"}},axisLabel:{textStyle:{fontFamily:"Microsoft YaHei"}}},yAxis:{type:"value",max:"150",axisLine:{show:!1,lineStyle:{color:"white"}},splitLine:{show:!0,lineStyle:{color:"rgba(255,255,255,0.3)"}},axisLabel:{}},dataZoom:[{show:!0,height:12,xAxisIndex:[0],bottom:"8%",start:10,end:90,handleIcon:"path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",handleSize:"110%",handleStyle:{color:"#d3dee5"},textStyle:{color:"#fff"},borderColor:"#90979c"},{type:"inside",show:!0,height:15,start:1,end:35}],series:[{name:"外出人员",type:"bar",barWidth:"15%",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#fccb05"},{offset:1,color:"#f5804d"}]),barBorderRadius:12}},data:[10,30,40,120,50,90,60,40,15]},{name:"进入人员",type:"bar",barWidth:"15%",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#8bd46e"},{offset:1,color:"#09bcb7"}]),barBorderRadius:11}},data:[5,40,60,110,40,100,70,50,20]}]},app={currentIndex:-1};setInterval(function(){var e=option.series[0].data.length;myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:app.currentIndex}),app.currentIndex=(app.currentIndex+1)%e,myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:app.currentIndex}),myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:app.currentIndex})},1e3);
