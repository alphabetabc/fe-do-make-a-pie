const list=[{value:10,name:"针叶林"},{value:5,name:"阔叶林"},{value:8,name:"针阔混交林"}],yName=list.map(e=>e.name),xData=list.map(e=>e.value),barWidth=18;option={backgroundColor:"#fff",xAxis:{splitLine:{show:!1},axisLabel:{margin:10,show:!1},axisTick:{show:!1},axisLine:{show:!1}},grid:{containLabel:!0,left:16,top:13,right:16,bottom:0},yAxis:[{inverse:!0,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{margin:0,inside:!0,verticalAlign:"bottom",padding:[0,0,20,0],textStyle:{fontSize:14,fontWeight:"bold",color:"#606266"}},data:yName}],series:[{type:"bar",barWidth,legendHoverLink:!1,symbolRepeat:!0,silent:!0,itemStyle:{color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"#31CDC3"},{offset:1,color:"#31B4CD"}]}},data:list,z:2,animationEasing:"elasticOut"},{type:"pictorialBar",symbolRepeat:!0,symbol:"rect",symbolSize:[8,18],silent:!0,itemStyle:{color:"#EAF0FF"},data:[100,100,100],z:2,animationEasing:"elasticOut",label:{normal:{show:!0,position:"insideTopRight",offset:[0,-16],textStyle:{color:"#31B4CD",fontSize:14},formatter:function(e){for(let t=0;t<xData.length;t++)if(e.name===yName[t])return xData[t]+"%"}}}},{type:"pictorialBar",itemStyle:{color:"#fff"},symbolRepeat:"fixed",symbolMargin:4,symbol:"roundRect",symbolClip:!0,symbolSize:[2,barWidth],symbolPosition:"start",symbolOffset:[0,0],data:list,z:3,animationEasing:"elasticOut"}]};
