var colorMap={"0.25":{offset:.25,color:"RGBA(37, 172, 195, 1)"},"0.5":{offset:.5,color:"RGBA(126, 197, 66, 1)"},"0.75":{offset:.75,color:"RGBA(249, 142, 0, 1)"},1:{offset:1,color:"RGBA(246, 49, 43, 1)"}},colors=[{offset:.25,color:"RGBA(37, 172, 195, .50)"},{offset:.5,color:"RGBA(126, 197, 66, .50)"},{offset:.75,color:"RGBA(249, 142, 0, .50)"},{offset:1,color:"RGBA(246, 49, 43, .50)"}];function percentFn(o){o=o/100,console.log(o),o>.25&&colors.unshift(colorMap["0.25"])}var axislineColor=new echarts.graphic.LinearGradient(0,0,1,0,colors);option={tooltip:{formatter:"{a} <br/>{b} : {c}%"},toolbox:{feature:{restore:{},saveAsImage:{}}},series:[{name:"业务指标",type:"gauge",title:{fontWeight:"bold",offsetCenter:[0,"70%"]},radius:"40%",axisLine:{show:!1,lineStyle:{width:10,color:[[1,axislineColor]],shadowColor:"RGBA(0, 0, 0, .50)",shadowBlur:15}},min:0,max:100,pointer:{show:!1,length:"0",width:"0"},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{formatter:function(o){switch(o+""){case"0":return"70";case"1":return"";case"100":return"100"}},distance:-50},detail:{formatter:"{value}%",offsetCenter:[0,"5%"]},data:[{value:50,name:"CPU"}]}]},setInterval(function(){var o=(Math.random()*100).toFixed(2)-0;option.series[0].data[0].value=o,percentFn(o),myChart.setOption(option,!0)},2e3);