var data=[{areaName:"测试1",rate:"30"},{areaName:"测试2",rate:"80"},{areaName:"测试3",rate:"100"},{areaName:"测试4",rate:"90"},{areaName:"测试5",rate:"60"},{areaName:"测试6",rate:"70"}],nameList=[],dataList=[];data.forEach(e=>{nameList.push(e.areaName),dataList.push(parseInt(e.rate).toFixed(0))});var option={tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(e){let a='<span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background-color:#02C4DD"></span>';return e[0].name+"<br>办结率 ："+e[0].value+"%"}},grid:{left:"0%",right:"4%",bottom:"9%",top:"5%",containLabel:!0},xAxis:{data:nameList,triggerEvent:!0,axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#70F5FE"}},axisLabel:{show:!0,rotate:0,interval:0,textStyle:{padding:[8,0,0,0],fontSize:14,color:"rgba(21, 222, 255, 0.8)"}}},yAxis:{name:"",triggerEvent:!0,nameTextStyle:{color:"rgba(255,255,255,1)",fontSize:16,padding:[0,0,10,-20]},splitLine:{show:!0,lineStyle:{color:"#A6D9F6",type:"dashed"}},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!0,textStyle:{color:"rgba(24, 255, 255, 0.8)",fontSize:14}}},series:[{name:"",barMinHeight:10,type:"pictorialBar",barCategoryGap:"60%",symbolOffset:[0,-5],symbol:"path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#0081FA"},{offset:1,color:"#00EBFE"}])}},label:{normal:{show:!1}},data:dataList,z:10}]};myChart.setOption(option),window.addEventListener("resize",function(){myChart.resize()});