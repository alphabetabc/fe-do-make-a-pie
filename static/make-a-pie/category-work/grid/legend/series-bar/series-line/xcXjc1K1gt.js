option={legend:{right:30,top:0},grid:{left:"3%",right:"3%",top:"7%",bottom:"5%",containLabel:!0},xAxis:{data:["Sun","Mon","Tue","Wed","Thu"],axisTick:{show:!1}},yAxis:[{type:"value",axisLine:{show:!0}},{type:"value",max:100,min:0,splitLine:{show:!1},axisLine:{show:!0},axisLabel:{formatter:e=>(console.log(e),`${e}%`)}}],series:[{name:"实际录取数",type:"bar",data:[5200,4500,3200,4800,5100]},{name:"报到率",type:"line",data:[20,40,60,80,100],yAxisIndex:1,symbolSize:10}]};
