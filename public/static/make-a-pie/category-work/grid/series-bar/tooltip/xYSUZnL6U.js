var dataAxis=["南昌转运中心","广州转运中心","杭州转运中心","宁夏转运中心","兰州转运中心","南宁转运中心","长沙转运中心","武汉转运中心","合肥转运中心","贵州转运中心"],data=[220,182,191,234,290,330,310,330,480,490],yMax=500,dataShadow=Array(data.length).fill(yMax),showNum=8,extraData=[["其他透析中心",260]];option={tooltip:{},grid:{width:"60%",height:"50%",left:"30%"},xAxis:{type:"value",show:!1,axisTick:{show:!1},axisLine:{show:!1}},yAxis:{type:"category",axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{interval:0,width:500,margin:20,textStyle:{fontSize:25,color:"#999"}},data:dataAxis.slice(0,showNum)},series:[{type:"bar",barMaxWidth:50,itemStyle:{normal:{color:"rgba(0,0,0,0.05)",barBorderRadius:15}},barGap:"-100%",barCategoryGap:"40%",data:dataShadow.slice(0,showNum),animation:!1},{type:"bar",barMaxWidth:50,label:{normal:{color:"#53d9ff",fontSize:25,fontWeight:"bold",offset:[0,2],position:"right",show:!0}},itemStyle:{normal:{barBorderRadius:15,color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#4364ea"},{offset:1,color:"#53d9ff"}])},emphasis:{color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#2378f7"},{offset:.7,color:"#2378f7"},{offset:1,color:"#83bff6"}])}},data:data.slice(0,showNum)}]},setInterval(function(){var a=data.shift();data.push(a);var e=dataAxis.shift();dataAxis.push(e),option.series[1].data=data.slice(0,showNum),option.yAxis.data=dataAxis.slice(0,showNum),myChart.setOption(option)},2100);
