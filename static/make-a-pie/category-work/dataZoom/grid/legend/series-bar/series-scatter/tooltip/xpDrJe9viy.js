xData=["2019-1","2019-2","2019-1","2019-2","2019-3","2019-6","2019-7","2019-8","2019-9","2019-10","2019-11","2019-12"],option={tooltip:{trigger:"none",axisPointer:{type:"cross"}},legend:{show:!1},grid:[{top:120,bottom:80,borderWidth:1,show:!0},{height:60,top:60,borderWidth:2,show:!0,tooltip:{show:!1}},{height:60,top:0,borderWidth:3,show:!0,tooltip:{show:!1}}],xAxis:[{type:"category",zlevel:3,gridIndex:0,data:xData,splitLine:{show:!0,interval:function(e,a){return[1,2,4,6,9,11].indexOf(e)!=-1?(console.log(e,a),!1):!0},lineStyle:{type:"dashed"}}},{type:"category",gridIndex:1,zlevel:2,axisTick:{show:!0},data:xData},{type:"category",gridIndex:2,zlevel:1,data:["xData","xData","xData"]}],yAxis:[{type:"value",gridIndex:0,splitLine:{show:!1}},{type:"value",gridIndex:1,axisLabel:{show:!1},axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1}},{type:"value",gridIndex:2,axisLabel:{show:!1},axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1}}],series:[{name:"Tier3",type:"scatter",xAxisIndex:0,yAxisIndex:0,barGap:0,showBackground:!0,data:[3.9,5.9,11.1,18.7,48.3,69.2,231.6,46.6,55.4,18.4,10.3,.7]},{name:"Tier3",type:"scatter",xAxisIndex:0,yAxisIndex:0,barGap:0,showBackground:!0,itemStyle:{normal:{color:"green"}},data:[5.9,10.9,6.1,6.7,8.3,40.2,251.6,66.6,49.4,90.4,109.3,6.7]},{name:"Tier2",type:"bar",xAxisIndex:1,yAxisIndex:1,data:[{name:"Tier2",value:1},{name:"Tier2",value:1},{name:"Tier2",value:1},{name:"Tier21",value:1},{name:"Tier21",value:1},{name:"Tier22",value:1},{name:"Tier22",value:1},{name:"Tier23",value:1},{name:"Tier24",value:1},{name:"Tier24",value:1},{name:"Tier24",value:1},{name:"Tier24",value:1}],label:{show:!0,position:"inside",formatter:"{b}"},barGap:0,barCategoryGap:0},{name:"Tier1",type:"bar",xAxisIndex:2,yAxisIndex:2,data:[{name:"Tier1",value:1}],barWidth:5/xData.length*100+"%",label:{show:!0,position:"inside",formatter:"{b}"},barGap:0}],dataZoom:{type:"slider",xAxisIndex:[0,1,2]}};
