option={title:{text:"子弹图示例"},yAxis:[{type:"category",data:["利润"],axisLine:{show:!1},axisTick:{show:!1}},{type:"category",data:[""],axisLine:{show:!1},axisTick:{show:!1}}],xAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1}},tooltip:{formatter:"{a}: {c}"},legend:{data:["差","良","优","利润"],selectedMode:!1},grid:{containLabel:!0,top:50,left:0,rigth:0,bottom:0},series:[{name:"差",data:[60],type:"bar",yAxisIndex:0,stack:"range",silent:!0,barWidth:"90%",color:"#F5B4AE"},{name:"良",data:[30],type:"bar",yAxisIndex:0,stack:"range",silent:!0,barWidth:"90%",color:"#FADCA9"},{name:"优",data:[10],type:"bar",yAxisIndex:0,stack:"range",silent:!0,barWidth:"90%",color:"#BFE9C3"},{name:"利润",data:[75],type:"bar",yAxisIndex:1,barWidth:"50%",color:"#434778",z:3,markLine:{animation:!1,symbol:"",label:{show:!1},lineStyle:{normal:{width:8,type:"solid",color:"#000000"},emphasis:{width:8,type:"solid",color:"#000000"}},data:[{xAxis:85,tooltip:{formatter:"目标值: {c}"}}]}}]},setInterval(function(){option.series[3].data[0]=Math.random()*100,myChart.setOption(option,!0)},2e3);