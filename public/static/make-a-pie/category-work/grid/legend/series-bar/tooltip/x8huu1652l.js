var arr=[81,101,50,67,77,80],arrMonth=["小型车","中型车","大型车","货车","特种车","贵宾车"],realValue=[8,15,100,23,56,78],index=0,legendData=["空余车位","已使用车位"],option={backgroundColor:"#0E2A43",grid:{left:"3%",right:"4%",bottom:"10%",containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:legendData,textStyle:{color:"#fff",fontSize:16},x:850,y:20},yAxis:{type:"value",axisLine:{show:!1,lineStyle:{color:"#65F5FD"}},splitLine:{lineStyle:{type:"dashed",color:"#385B71"}},axisTick:{show:!1}},xAxis:[{type:"category",axisLine:{lineStyle:{color:"#00A2FF",width:2}},axisTick:{show:!1},axisLabel:{textStyle:{fontSize:14,color:"#fff"}},data:arrMonth},{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitArea:{show:!1},splitLine:{show:!1},data:arrMonth}],series:[{name:legendData[1],type:"bar",label:{normal:{show:!1,position:"top",padding:10,color:"red",fontSize:10}},xAxisIndex:1,itemStyle:{normal:{show:!0,color:"#2E3C6D",borderWidth:0,borderColor:"#333"}},barWidth:"50%",data:arr},{name:legendData[0],type:"bar",itemStyle:{normal:{show:!1,color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#6657F2"},{offset:1,color:"#4297F4"}]),borderWidth:0,borderColor:"#333"}},label:{normal:{show:!1,position:"inside",color:"white",fontSize:10,formatter:function(o){for(var a=1,e=index;e<arr.length;e++){a=arr[e],index++;break}var r=(o.data*100/a).toFixed(0)+"%";return r}}},barWidth:"50%",data:realValue}]};
