option={backgroundColor:"www",grid:{top:"18%",left:"15%",right:"5%",bottom:"25%"},title:{text:`{c|利用率}
 {a|`+33+"}{b|%}",x:"center",y:"center",textStyle:{rich:{a:{fontSize:22,color:"#EBEBEB",fontWeight:700},b:{fontSize:18,color:"#EBEBEB"},c:{fontSize:14,color:"#ffffff",padding:[15,0]}}}},tooltip:{formatter:function(e){return'<span style="color: #000;">利用率：'+e.value+"%</span>"}},angleAxis:{max:100,clockwise:!1,show:!1},radiusAxis:{type:"category",show:!0,axisLabel:{show:!1},axisLine:{show:!1},axisTick:{show:!1}},polar:[{center:["50%","50%"],radius:"120%"}],series:[{type:"gauge",name:"仪表刻度",radius:"58%",startAngle:"0",endAngle:"-359.99",splitNumber:"50",center:["50%","50%"],pointer:{show:!1},title:{show:!1},detail:{show:!1},axisLine:{show:!1,lineStyle:{opacity:0}},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!0,length:8,lineStyle:{color:new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"#16CEB9"},{offset:1,color:"#6648FF"}]),width:1,type:"solid"}}},{type:"bar",z:10,data:[33],showBackground:!1,coordinateSystem:"polar",roundCap:!0,barWidth:15,itemStyle:{borderRadius:"50%",normal:{opacity:1,color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:0,color:"#00DDFF"},{offset:1,color:"#4346D3"}])}}}]};
