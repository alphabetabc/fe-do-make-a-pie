let backgroundColor="rgba(0,0,0,1)",chartdata=[[111,222,333,444],["石油","煤矿","汽油","电力"]],color=["#02a9f4","#86c200","#ffc933","#e31404","#ff6f00","#ebae81","#ca8622","#bda29a","#6e7074","#546570","#c4ccd3"];option={backgroundColor,barWidth:15,grid:{top:"5%",bottom:"6%",left:"5%",right:"15%",containLabel:!0},xAxis:{type:"value",splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1,lineStyle:{color:"#26D9FF"}},axisLabel:{textStyle:{color:"#fff",fontSize:16}}},yAxis:{type:"category",data:chartdata[1],splitLine:{show:!1},axisTick:{show:!1},axisLine:{lineStyle:{color:"#26D9FF"}},axisLabel:{textStyle:{color:"#fff",fontSize:16}}},dataZoom:[{show:!1,xAxisIndex:[0],left:0,bottom:30,start:1,end:100,handleSize:"100%",handleStyle:{color:"#5B3AAE"},textStyle:{color:"rgba(204,187,225,0.5)"},fillerColor:"rgba(67,55,160,0.4)",borderColor:"rgba(204,187,225,0.5)"},{type:"inside",show:!0,start:1,end:100}],series:[{type:"bar",itemStyle:{normal:{label:{show:!0,formatter:e=>e.data,position:"right",textStyle:{color:"#fff",fontSize:16,fontWeight:600}},color:e=>color[e.dataIndex],borderWidth:2}},data:chartdata[0]}]};