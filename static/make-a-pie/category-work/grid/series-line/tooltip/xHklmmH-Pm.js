var min=60,max=100,date=function(){for(var t=new Date,e=[],a=100;a--;)e.unshift(t.toLocaleTimeString()),t=new Date(t-1e3);return e}(),randomData=function(){for(var t=[],e=100;e--;)t.push(Math.floor(min+Math.random()*(max-min)));return t}();option={color:["#2DDB89"],backgroundColor:"#031845",tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:date,axisTick:{alignWithLabel:!0},axisLabel:{color:"#2DDB89"},splitLine:{show:!0,lineStyle:{color:"#2DDB89",width:.5}},axisLine:{lineStyle:{color:"#2DDB89"}}}],yAxis:[{type:"value",min:60,max:100,axisLabel:{color:"#fff"},splitLine:{show:!0,lineStyle:{color:"#2DDB89",width:.5}},axisLine:{lineStyle:{color:"#2DDB89"}},axisTick:{show:!1}}],series:[{name:"直接访问",data:randomData,type:"line"}]};var len=date.length;myChart.setOption(option),setInterval(function(){randomData.push(Math.floor(min+Math.random()*(max-min))),randomData.shift(),date.push(new Date().toLocaleTimeString()),date.shift(),myChart.setOption({xAxis:{data:date},series:[{data:randomData}]})},1e3);
