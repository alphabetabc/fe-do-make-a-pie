app.title="柱状图框选";for(var xAxisData=[],data1=[],data2=[],data3=[],i=0;i<5;i++)xAxisData.push("201"+(i+4)+"年"),data1.push(-(Math.random()*2).toFixed(2)),data2.push(-(Math.random()*2).toFixed(2)),data3.push((Math.random()*5).toFixed(2));option={color:["#889bf8","#7fcdf1","#8ab9ff"],legend:{data:["经营净现金流","投资净现金流","筹资净现金流"],align:"left",left:10},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{data:xAxisData,name:"",silent:!1,axisTick:{show:!1},axisLine:{onZero:!0,lineStyle:{color:"#999"}},splitLine:{show:!1},splitArea:{show:!1}},yAxis:{name:"金额（亿）",splitArea:{show:!1},axisTick:{show:!1},axisLine:{lineStyle:{color:"#999"}}},grid:{left:100},series:[{name:"经营净现金流",type:"bar",data:data1},{name:"投资净现金流",type:"bar",data:data2},{name:"筹资净现金流",type:"bar",data:data3}]};
