var data={legend:["平均到达时间","平均处置时间","施救次数"],list:[{name:"湖州段",yData1:104,yData2:100,yData4:90},{name:"杭绍段",yData1:56,yData2:206,yData4:56}]},xData=[],yData1=[],yData2=[],yData4=[],legend=data.legend,colorArr=["rgba(0, 171, 255, 1)","rgba(255, 136, 31, 1)","rgba(17, 221, 220, 1)"];data.list.forEach(a=>{xData.push(a.name),yData1.push(a.yData1),yData2.push(a.yData2),yData4.push(a.yData4)});var normalColor="rgba(255,255,255,0.5)",backgroundColor="#333";let seriesData=[];xData.forEach(a=>{}),[yData1,yData2,yData4].forEach((a,e)=>{var t={},o={};if(e<2)t={name:legend[e],type:"bar",stack:legend[e],data:a,barWidth:16,itemStyle:{normal:{color:colorArr[e]}}},o={name:"",type:"bar",stack:legend[e],itemStyle:{normal:{color:colorArr[e]}}},seriesData.push(t),seriesData.push(o);else{var r={name:legend[e],type:"line",yAxisIndex:1,smooth:!1,symbol:"circle",symbolSize:8,lineStyle:{normal:{width:4}},itemStyle:{normal:{color:"rgba(17, 221, 220, 1)",borderColor:"rgba(17, 221, 220, 1)",borderWidth:1}},data:a,label:{normal:{show:!1}}};seriesData.push(r)}}),console.log(seriesData),option={backgroundColor,grid:{left:"3%",top:"16%",right:"3%",bottom:"3%",containLabel:!0},legend:{show:!0,itemWidth:24,itemHeight:12,right:"center",top:"3%",textStyle:{color:"rgba(255, 255, 255, 0.6)"},data:legend},tooltip:{trigger:"axis",formatter:function(a){for(var e="",t=0;t<a.length;t++)a[t].seriesName!==""&&(t===0&&(e=a[t].name+":<br>"),e+=a[t].seriesName+a[t].value+"<br/>");return e}},xAxis:[{type:"category",data:xData,axisPointer:{type:"shadow"},axisLabel:{textStyle:{color:"rgba(255, 255, 255, 0.85)",fontSize:16}},axisLine:{lineStyle:{color:"rgba(49, 137, 203, 1)"}},axisTick:{show:!1},splitLine:{show:!1}}],yAxis:[{type:"value",name:"(起)",nameTextStyle:{color:"rgba(255, 255, 255, 0.6)",fontSize:14},axisLabel:{formatter:"{value}",textStyle:{color:"rgba(255, 255, 255, 0.6)",fontSize:14}},axisLine:{lineStyle:{color:"rgba(49, 137, 203, 1)"}},axisTick:{show:!1},splitLine:{show:!1}},{type:"value",name:"(次)",nameTextStyle:{color:"rgba(255, 255, 255, 0.6)",fontSize:14},axisLabel:{formatter:"{value}",textStyle:{color:"rgba(255, 255, 255, 0.6)",fontSize:14}},axisLine:{lineStyle:{color:"rgba(49, 137, 203, 1)"}},axisTick:{show:!1},splitLine:{show:!0,lineStyle:{type:"dashed",color:"rgba(231, 235, 239, 0.2)"}}}],series:seriesData};
