option={backgroundColor:new echarts.graphic.RadialGradient(.5,.5,.7,[{offset:0,color:"#2a2f35"},{offset:1,color:"#292e34"}]),tooltip:{trigger:"axis",axisPointer:{type:"line",lineStyle:{opacity:0}}},grid:{left:"5%",right:"5%",bottom:"5%",top:"7%",height:"85%",containLabel:!0,z:22},xAxis:[{show:!1,type:"category",gridIndex:0,data:["A","B","C","D","E","F","G"],axisTick:{alignWithLabel:!0},axisLine:{lineStyle:{color:"#0c3b71"}},axisLabel:{show:!0,color:"black"}}],yAxis:[{show:!1,type:"value",name:"",nameTextStyle:{color:"rgb(170,170,170)"},max:100,min:0,gridIndex:0,splitLine:{show:!1},axisTick:{show:!1},axisLine:{lineStyle:{color:"#0c3b71"}},axisLabel:{color:"black",formatter:"{value}%"}},{type:"value",gridIndex:0,min:0,max:100,splitNumber:12,splitLine:{show:!1},axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitArea:{show:!1}}],series:[{name:"使用率",type:"bar",barWidth:"50px",xAxisIndex:0,yAxisIndex:0,itemStyle:{normal:{shadowColor:"rgba(0, 0, 0, .3)",shadowBlur:5,shadowOffsetY:10,shadowOffsetX:0,color:function(e){var o=[new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"#7c930f"},{offset:.5,color:"#7c930f"},{offset:.5,color:"#60730a"},{offset:1,color:"#60730a"}]),new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"#f9b234"},{offset:.5,color:"#f9b234"},{offset:.5,color:"#c08c27"},{offset:1,color:"#c08c27"}]),new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"#154364"},{offset:.5,color:"#154364"},{offset:.5,color:"#11354f"},{offset:1,color:"#11354f"}]),new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"#e54646"},{offset:.5,color:"#e54646"},{offset:.5,color:"#b03935"},{offset:1,color:"#b03935"}]),new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"#97579d"},{offset:.5,color:"#97579d"},{offset:.5,color:"#874d88"},{offset:1,color:"#874d88"}]),new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"#00b1c3"},{offset:.5,color:"#00b1c3"},{offset:.5,color:"#0098a5"},{offset:1,color:"#0098a5"}]),new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"#e83c88"},{offset:.5,color:"#e83c88"},{offset:.5,color:"#96154e"},{offset:1,color:"#96154e"}])];return o[e.dataIndex]}},emphasis:{opacity:1}},data:["10","30","40","50","35","39","20"],zlevel:11},{name:"总",type:"bar",barWidth:"50px",xAxisIndex:0,yAxisIndex:1,barGap:"-100%",data:["100","100","100","100","100","100","100"],itemStyle:{normal:{color:"#111216"}},zlevel:9}]};