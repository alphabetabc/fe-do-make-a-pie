function getpie(t,l){let a=t.toFixed(2).split(".")[0],i=t.toFixed(2).split(".")[1];option={backgroundColor:"#020f18",title:{text:"{a|"+a+"}{b|."+i+`%}
{c|`+l+"}",x:"center",y:"28%",textStyle:{lineHeight:250,rich:{a:{fontSize:45,color:"#fff",fontWeight:"500",fontStyle:"oblique"},b:{fontSize:20,color:"#fff",fontStyle:"oblique",padding:[0,0,14,0]},c:{fontSize:25,fontWeight:"600",color:"#fff",padding:[5,0]}}}},series:[{type:"gauge",radius:"50%",startAngle:"90",endAngle:"-269.9999",splitNumber:18,pointer:{show:!1},detail:{formatter:" "},axisLine:{show:!0,lineStyle:{color:[[0,"#2CFAFC"],[t/100,"#0ff9"],[1,"#0f232e"]],width:20}},axisTick:{show:!1},splitLine:{show:!0,length:50,lineStyle:{shadowBlur:25,shadowColor:"rgba(0, 255, 255, 2)",shadowOffsetY:"0",color:"#020f18",width:1.5}},axisLabel:{show:!1}},{type:"pie",radius:["30%","30.3%"],hoverAnimation:!1,clockWise:!1,itemStyle:{normal:{color:"#0C355E"}},label:{show:!1},data:r()},{type:"pie",radius:[0,"00%"],hoverAnimation:!1,clockWise:!1,itemStyle:{normal:{shadowBlur:0,shadowColor:"#fff",color:new echarts.graphic.RadialGradient(.4,.3,1,[{offset:0,color:"#0FF"},{offset:1,color:"#060f20"}])}},label:{show:!1},data:[0]},{type:"pie",radius:["54%","55.5%"],hoverAnimation:!1,clockWise:!1,itemStyle:{normal:{shadowBlur:20,shadowColor:"rgba(0, 255, 255,.3)",color:"#0f232e"}},label:{show:!1},data:[100]},{type:"pie",radius:["58%","59.5%"],hoverAnimation:!1,clockWise:!1,itemStyle:{normal:{shadowBlur:20,shadowColor:"rgba(0, 255, 255,0.5)",color:"rgba(15, 35, 46,.6)"}},label:{show:!1},data:[100]}]};function r(){let e=[];for(var o=0;o<50;o++)o%2===0?e.push({value:5,itemStyle:{normal:{color:"#96ebfa66"}}}):e.push({value:20,itemStyle:{normal:{color:"rgb(0,0,0,0)",borderWidth:1,borderColor:"#51d3e6"}}});return e}function s(){let e=myChart.getOption();e.series[1].startAngle=e.series[1].startAngle-.5,myChart.setOption(e)}function f(){timer=setInterval(s,100)}setTimeout(f,0)}let values=88.23,titles="块矿比";getpie(values,titles);
