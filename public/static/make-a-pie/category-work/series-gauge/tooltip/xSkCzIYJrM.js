function detectionData(o){var e=new echarts.graphic.LinearGradient(0,0,1,1,[{offset:0,color:"green"},{offset:.3,color:"skyblue"},{offset:.6,color:"blue"},{offset:1,color:"gray"}]);return e}var option={backgroundColor:"#333333",tooltip:{formatter:"{a} <br/>{b} : {c}%"},series:[{name:"仪盘表",type:"gauge",splitNumber:35,radius:"100%",startAngle:180,endAngle:0,axisLine:{lineStyle:{color:[[0,"#333"],[1,"#333"]],shadowColor:"transparent",shadowBlur:10,shadowOffsetX:"-10",shadowOffsetY:"-10",width:20,opacity:1},show:!0},axisTick:{lineStyle:{color:"#333",width:15,borderColor:"none",borderColor:"#333",type:"solid",opacity:"1"},length:30,splitNumber:1},pointer:{shadowColor:"#fff",shadowBlur:10,show:!1},axisLabel:{show:!1},splitLine:{show:!1},detail:{formatter:"{value}%",offsetCenter:[0,"30%"],textStyle:{fontSize:60,color:"#F37B1D"}},title:{offsetCenter:[0,"60%"]},data:[{name:"CPU",value:31}]}]},value=0;app.timeTicket=setInterval(function(){value<100?value+=2:value=0,option.series[0].data[0].value=value,option.series[0].axisLine.lineStyle.color[0][0]=value/100,option.series[0].axisLine.lineStyle.color[0][1]=detectionData(value),myChart.setOption(option,!0)},60);