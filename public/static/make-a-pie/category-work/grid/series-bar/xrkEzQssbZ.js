option={backgroundColor:"#263559",color:["#cff7cd","#6cf0da"],textStyle:{color:"#d7d7d7"},xAxis:[{type:"category",axisTick:{show:!1},axisLine:{lineStyle:{color:"#fff",width:2,shadowBlur:10,shadowColor:"#fff",shadowOffsetX:0,shadowOffsetY:1,opacity:.5}},data:[{value:"投资成本对比",textStyle:{color:"#bcbfff",fontSize:14}},{value:"能耗成本对比",textStyle:{color:"#bcbfff",fontSize:14}}]}],yAxis:[{type:"value",name:"",show:!1,axisTick:{show:!1},axisLine:{show:!1},splitLine:{show:!1}}],series:[{name:"原成本",type:"bar",barWidth:100,itemStyle:{normal:{color:"rgba(0,0,0,0)",borderWidth:2,borderColor:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#00a2ff"},{offset:1,color:"#70ffac"}]),shadowBlur:5,shadowColor:"#fff",shadowOffsetX:0,shadowOffsetY:0,opacity:1,barBorderRadius:3}},data:[120,50]},{name:"现成本",type:"bar",barWidth:100,barGap:"0%",label:{normal:{show:!0,position:"top",formatter:function(o){return"↓"+((o.data.originalcost-o.data.value)*100/o.data.originalcost).toFixed(2)+"%"},textStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#00a2ff"},{offset:1,color:"#70ffac"}]),fontSize:14}}},itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#00a2ff"},{offset:1,color:"#70ffac"}]),barBorderRadius:3}},data:[{name:"",originalcost:120,value:65},{name:"",originalcost:50,value:33}]}]};
