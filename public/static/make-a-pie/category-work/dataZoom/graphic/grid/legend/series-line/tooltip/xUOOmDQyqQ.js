var data={title:["2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014"],project1:[11,32,43,44,75,36,67,73,79,100,141],project2:[14,20,29,31,55,76,45,88,43,88,81],project3:[33,12,34,22,56,21,53,78,66,90,79]};function getTableLine(a){for(var e=[],o=149,i=25,t=0;t<a;t++)e.push({type:"line",bottom:o-t*i,right:80,style:{fill:"#ccc"},shape:{x1:2e3}});return e}var lineList=getTableLine(5);option={tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#283b56"}}},legend:{data:["项目一","项目二","项目三"]},grid:{bottom:"150",left:"10%",right:"80"},dataZoom:[{type:"inside",filterMode:"filter",show:!0,start:0,end:50,height:17,xAxisIndex:[0,1,2,3]},{type:"slider",filterMode:"filter",show:!0,start:0,end:50,height:17,xAxisIndex:[0,1,2,3]}],xAxis:[{name:"年份",type:"category",position:"bottom",boundaryGap:!0,data:data.title,splitLine:{show:!0},axisTick:{length:100}},{name:"项目一",type:"category",position:"bottom",offset:25,axisTick:{show:!1},axisLine:{show:!1},nameTextStyle:{color:"#585858",padding:[0,0,-25]},nameLocation:"start",data:data.project1},{name:"项目二",type:"category",position:"bottom",offset:50,axisTick:{show:!1},axisLine:{show:!1},nameTextStyle:{color:"#585858",padding:[0,0,-25]},nameLocation:"start",data:data.project2},{name:"项目三",type:"category",position:"bottom",offset:75,axisTick:{show:!1},axisLine:{show:!1},nameTextStyle:{color:"#585858",padding:[0,0,-25]},nameLocation:"start",data:data.project3}],yAxis:[{type:"value",name:"万元"}],series:[{name:"项目一",type:"line",label:{show:!0,position:"top"},data:data.project1},{name:"项目二",type:"line",data:data.project2},{name:"项目三",type:"line",data:data.project3}],graphic:lineList};