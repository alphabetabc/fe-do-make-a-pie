for(var dimensions=[],dataval=[],i=0;i<50;i++)dataval.push((Math.sin(i/10)*(i/1-10)+i-16)/5);var option={backgroundColor:"#fff",tooltip:{show:!0,formatter:"{a}:{c}"},visualMap:{show:!1,dimension:0,inRange:{color:["#e11d8e","#4e44e7","#e11d8e","#4e44e7","#e11d8e","#4e44e7","#e11d8e","#4e44e7","#e11d8e","#4e44e7","#e11d8e","#4e44e7","#e11d8e","#4e44e7","#e11d8e","#4e44e7"]}},xAxis:{data:dimensions},yAxis:{splitLine:{show:!1},axisTick:{show:!1},axisLine:{lineStyle:{color:"#000"}},axisLabel:{textStyle:{color:"#000"}}},series:[{name:"TIT",type:"bar",itemStyle:{normal:{barBorderRadius:5}},data:dataval}]};
