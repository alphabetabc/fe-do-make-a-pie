let list=[{name:"第一产业增加值",value:6},{name:"第二产业增加值",value:1},{name:"第三产业增加值",value:3}],data=["第一产业增加值","第二产业增加值","第三产业增加值"],values=[6,1,3];option={backgroundColor:"balck",xAxis:{splitLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},axisLine:{show:!1}},grid:{containLabel:!0,left:10,top:0,right:50,bottom:0},yAxis:[{data,inverse:!0,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{fontSize:14,color:"#fff"}}}],series:[{type:"bar",barWidth:10,legendHoverLink:!1,symbolRepeat:!0,silent:!0,itemStyle:{color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"#12272A"},{offset:1,color:"#62E6F6"}]}},data:list,z:1,animationEasing:"elasticOut"},{type:"pictorialBar",symbolRepeat:"fixed",symbolMargin:"20%",symbol:"roundRect",symbolSize:[7,10],itemStyle:{normal:{color:"#12272A"}},label:{show:!0,position:"right",offset:[0,2],textStyle:{color:"#fff",fontSize:14},formatter:e=>`${e.value}亿元`},data:values,z:0,animationEasing:"elasticOut"},{type:"pictorialBar",itemStyle:{color:"#000"},symbolRepeat:"fixed",symbolMargin:4,symbol:"roundRect",symbolClip:!0,symbolSize:[2,10],symbolPosition:"start",data:list,z:2,animationEasing:"elasticOut"}]};