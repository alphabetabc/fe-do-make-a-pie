const colorList=["#C6504F","#4D4CDB","#7D5DCC","#44AE2E","#35C87A","#D39255","#D6C76E","#2268D4","#2498E3","#41CCD3"];option={color:colorList,xAxis:{show:!1},yAxis:{type:"category",show:!0,gridIndex:0,offset:10,axisTick:{show:!1},axisLine:{show:!1},axisLabel:{color:"#949AC7",fontSize:18},data:["数据1","数据2","数据3","数据4","数据5","数据6","数据7"]},grid:{left:"75%",height:350,top:"middle",right:"4%",containLabel:!0},tooltip:{trigger:"item",textStyle:{fontSize:14},formatter:"{b} : {c} ({d}%)"},series:[{name:"Sale",type:"bar",data:[5,15,25,28,30,35,45],xAxisIndex:0,yAxisIndex:0,zlevel:1,itemStyle:{normal:{color:function(e){return colorList[e.dataIndex]},barBorderRadius:[0,15,15,0]}},barWidth:15},{stack:"a",type:"pie",selectedMode:!1,radius:["10%","60%"],center:["40%","55%"],roseType:"area",clockwise:!1,startAngle:220,silent:!0,label:{formatter:`{a|{b}}
{rate|{d}%}`,position:"outside",align:"center",show:!0,verticalAlign:"top",rich:{a:{fontSize:16,color:"#fff",padding:[10,-60,-60,-60]},rate:{fontSize:14,color:"#2ABEFF",padding:[10,-66,-20,-60]}}},labelLine:{show:!0,length:15,length2:65,lineStyle:{color:"#2ABEFF"}},data:[{value:5,name:"数据1"},{value:15,name:"数据2"},{value:25,name:"数据3"},{value:28,name:"数据4"},{value:30,name:"数据5"},{value:35,name:"数据6"},{value:45,name:"数据7"}]}]};
