var date=[];for(let e=1;e<=12;e++)date.push(e+"月");option={backgroundColor:"#fff",tooltip:{trigger:"axis",axisPointer:{type:"none"},formatter:e=>{let o=e[0],t="<span style='display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:rgba(4, 130, 252, 1);'></span>";return`${o.name}<br/>${t} ${o.value}`}},grid:{top:"15%",left:"5%",right:"3%",bottom:"8%"},legend:{show:!0,right:"10%"},xAxis:[{type:"category",axisLine:{show:!0,lineStyle:{color:"rgba(151, 151, 151, 1)"}},axisLabel:{show:!0,textStyle:{color:"#000"}},axisTick:{show:!1},data:date}],yAxis:[{type:"value",min:0,splitNumber:4,axisLine:{show:!0,lineStyle:{color:"rgba(151, 151, 151, 1)"}},axisLabel:{show:!0,textStyle:{color:"#000"}},axisTick:{show:!0,lineStyle:{color:"rgba(151, 151, 151, 1)"}},splitLine:{show:!1,lineStyle:{color:"rgba(226, 232, 236, 1)",type:"dashed"}},splitArea:{show:!0,areaStyle:{color:["#fff","rgba(245, 246, 250, 1)"]}}}],series:[{name:"邮费金额",type:"line",showAllSymbol:!0,symbol:"circle",symbolSize:10,lineStyle:{normal:{width:2,color:"#06C25B",shadowColor:"rgba(6, 194, 91, .73)",shadowBlur:2,shadowOffsetY:1}},label:{show:!1,position:"top",textStyle:{color:"#48B3FF"}},itemStyle:{color:"#FFF",borderColor:"#06C25B",borderWidth:2},tooltip:{show:!0},data:[55,35,62,55,97,55,35,62,55,97,67,88]}]};
