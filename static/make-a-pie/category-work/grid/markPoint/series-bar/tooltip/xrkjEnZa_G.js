option={color:["#eee"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["13:00","13:05","13:10","13:15","13:20","13:25","13:30"],axisTick:{alignWithLabel:!0}}],yAxis:[{min:0,max:10,interval:2,axisTick:{alignWithLabel:!0}}],series:[{name:"直接访问",type:"bar",barWidth:"40%",data:[1,3,2,3,4,2,1],markPoint:{data:[{name:"占比率",value:4,xAxis:4,yAxis:4,symbolSize:80,itemStyle:{normal:{color:"#6080d3"}}}],itemStyle:{normal:{label:{show:!0,formatter:function(t){for(var t=(t.value||0).toString(),a="";t.length>3;)a=","+t.slice(-3)+a,t=t.slice(0,t.length-3);return t&&(a=t+a),`最高

`+a}}}}},itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(17, 168,171, 1)"},{offset:1,color:"rgba(17, 168,171, 0.1)"}]),shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10}}}],label:{normal:{show:!0,position:"top",formatter:"{c}"}}};