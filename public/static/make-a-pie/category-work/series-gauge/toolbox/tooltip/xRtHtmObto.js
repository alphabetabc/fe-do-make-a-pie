var axislineColor=new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#25ABAA"},{offset:.2,color:"#25ABB4"},{offset:.3,color:"#FBB8AA"},{offset:.5,color:"#F89700"},{offset:1,color:"#F63332"}]);option={tooltip:{formatter:"{a} <br/>{b} : {c}%"},toolbox:{feature:{restore:{},saveAsImage:{}}},series:[{name:"业务指标",type:"gauge",title:{fontWeight:"bold",offsetCenter:[0,"70%"]},radius:"40%",axisLine:{show:!1,lineStyle:{width:10,color:[[1,axislineColor]]}},min:0,max:100,pointer:{show:!1,length:"0",width:"0"},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{formatter:function(e){switch(e+""){case"0":return"70";case"1":return"";case"100":return"100"}},distance:-50},detail:{formatter:"{value}%",offsetCenter:[0,"5%"]},data:[{value:50,name:"CPU"}]}]},setInterval(function(){option.series[0].data[0].value=(Math.random()*100).toFixed(2)-0,myChart.setOption(option,!0)},2e3);