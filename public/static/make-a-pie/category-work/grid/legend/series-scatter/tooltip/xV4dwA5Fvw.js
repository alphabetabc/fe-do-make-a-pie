var a=22,b=15,xAxisTextColor="#FFFFFF",legendColor="#FFFFFF",min=0;option={backgroundColor:"#000000",tooltip:{trigger:"axis",axisPointer:{type:"line"},formatter:function(e){var o="";if(e.length>0){Xindex=e[0].dataIndex;for(var t=0;t<e.length;t++)o+=e[t].seriesName+":"+e[t].data[1]+"<br>"}return o}},legend:{data:["今年合格率","去年合格率"],textStyle:{fontSize:a,color:legendColor}},xAxis:{data:["1","2","3","4"],type:"category",splitNumber:1,splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{textStyle:{fontSize:a,color:xAxisTextColor}}},yAxis:{name:"%",nameTextStyle:{color:xAxisTextColor,fontSize:a},type:"value",splitLine:{show:!1,lineStyle:{type:"dashed"}},min,max:100,axisLabel:{formatter:"{value}",textStyle:{color:xAxisTextColor,fontSize:a}},axisTick:{show:!1},axisLine:{show:!1}},series:[{name:"今年合格率",type:"scatter",data:[["1",87],["2",55],["3",85],["4",87]],symbolSize:function(e){return 35},itemStyle:{normal:{shadowBlur:10,shadowColor:"rgba(25, 100, 150, 0.5)",color:new echarts.graphic.RadialGradient(.5,.5,.5,[{offset:0,color:"rgba(128, 206, 238,0)"},{offset:1,color:"rgba(11, 166, 238,1)"}])}}},{name:"去年合格率",type:"scatter",data:[["1",97],["2",95],["3",95],["4",97]],symbolSize:function(e){return 35},itemStyle:{normal:{shadowBlur:10,shadowColor:"rgba(120, 36, 50, 0.5)",color:new echarts.graphic.RadialGradient(.5,.5,.6,[{offset:0,color:"rgba(230, 168, 255,0)"},{offset:1,color:"rgb(191, 8, 255)"}])}}}]};