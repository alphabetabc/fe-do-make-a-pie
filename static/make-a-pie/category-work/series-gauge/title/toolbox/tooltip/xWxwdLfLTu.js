option={title:{text:"仪表盘",subtext:"纯属虚构",x:"center"},tooltip:{formatter:"{a} <br/>{b} : {c}%"},toolbox:{feature:{restore:{},saveAsImage:{}}},series:[{name:"速度",type:"gauge",max:280,radius:"70%",startAngle:215,endAngle:-35,detail:{formatter:"{value}Km/h"},data:[{value:100,name:"完成率"}]}]},setInterval(function(){option.series[0].data[0].value=(Math.random()*280).toFixed(2)-0,myChart.setOption(option,!0)},1e3);